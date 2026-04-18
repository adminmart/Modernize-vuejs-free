<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import UiParentCard from '@/components/shared/UiParentCard.vue';

const router = useRouter();

// 表单状态
const formState = reactive({
  submitting: false,
  success: false,
  error: false,
  errorMessage: '',
  successMessage: '',
});

// 表单数据
const formData = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
  bio: '',
  agreeTerms: false,
});

// 备份数据（用于取消时恢复）
const initialFormData = { ...formData };

// 表单引用
const formRef = ref();

// 表单验证规则
const rules = {
  username: [
    (v: string) => !!v || '用户名不能为空',
    (v: string) => v.length >= 3 || '用户名至少3个字符',
    (v: string) => v.length <= 20 || '用户名不能超过20个字符',
    (v: string) => /^[a-zA-Z0-9_]+$/.test(v) || '用户名只能包含字母、数字和下划线',
  ],
  email: [
    (v: string) => !!v || '邮箱不能为空',
    (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || '请输入有效的邮箱地址',
  ],
  password: [
    (v: string) => !!v || '密码不能为空',
    (v: string) => v.length >= 8 || '密码至少8个字符',
    (v: string) => v.length <= 32 || '密码不能超过32个字符',
    (v: string) => /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(v) || '密码必须包含大小写字母和数字',
  ],
  confirmPassword: [
    (v: string) => !!v || '请确认密码',
    (v: string) => v === formData.password || '两次输入的密码不一致',
  ],
  phone: [
    (v: string) => !v || /^1[3-9]\d{9}$/.test(v) || '请输入有效的手机号码',
  ],
  bio: [
    (v: string) => !v || v.length <= 200 || '个人简介不能超过200个字符',
  ],
  agreeTerms: [
    (v: boolean) => v || '请同意服务条款',
  ],
};

// 密码可见性
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// 计算剩余字符数
const bioRemaining = computed(() => {
  return 200 - formData.bio.length;
});

// 模拟API调用
const simulateApiCall = () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      // 模拟80%成功率
      if (Math.random() > 0.2) {
        resolve();
      } else {
        reject(new Error('服务器暂时不可用，请稍后重试'));
      }
    }, 2000);
  });
};

// 提交表单
const handleSubmit = async () => {
  // 清除之前的状态
  formState.success = false;
  formState.error = false;
  
  // 先验证表单
  const isValid = await formRef.value?.validate();
  if (!isValid) {
    formState.error = true;
    formState.errorMessage = '请检查表单中的错误信息';
    return;
  }

  // 开始提交
  formState.submitting = true;

  try {
    await simulateApiCall();
    formState.success = true;
    formState.successMessage = '表单提交成功！您的信息已保存。';
    formState.error = false;
  } catch (error: any) {
    formState.error = true;
    formState.errorMessage = error.message || '提交失败，请稍后重试';
    formState.success = false;
  } finally {
    formState.submitting = false;
  }
};

// 重置表单
const handleReset = () => {
  formRef.value?.reset();
  Object.assign(formData, initialFormData);
  formState.success = false;
  formState.error = false;
};

// 取消操作
const handleCancel = () => {
  // 检查表单是否有改动
  const hasChanges = Object.keys(initialFormData).some(
    (key) => formData[key as keyof typeof formData] !== initialFormData[key as keyof typeof initialFormData]
  );

  if (hasChanges) {
    // 有改动，询问用户
    const confirmed = window.confirm('您有未保存的更改，确定要离开吗？');
    if (confirmed) {
      handleReset();
      router.push('/');
    }
  } else {
    // 没有改动，直接返回
    router.push('/');
  }
};

// 返回上一页
const handleBack = () => {
  router.back();
};

// 关闭提示
const closeAlert = () => {
  formState.success = false;
  formState.error = false;
};
</script>

<template>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="表单录入演示">
        <div class="pa-7 pt-1">
          <!-- 成功提示 -->
          <v-alert
            v-if="formState.success"
            color="success"
            variant="tonal"
            class="mb-4"
            dismissible
            @dismiss="closeAlert"
          >
            <template v-slot:prepend>
              <v-icon>mdi-check-circle</v-icon>
            </template>
            {{ formState.successMessage }}
          </v-alert>

          <!-- 错误提示 -->
          <v-alert
            v-if="formState.error"
            color="error"
            variant="tonal"
            class="mb-4"
            dismissible
            @dismiss="closeAlert"
          >
            <template v-slot:prepend>
              <v-icon>mdi-alert-circle</v-icon>
            </template>
            {{ formState.errorMessage }}
          </v-alert>

          <!-- 表单区域 -->
          <v-form
            ref="formRef"
            v-model="formData"
            :rules="rules"
            @submit.prevent="handleSubmit"
            class="form-container"
          >
            <!-- 用户名 -->
            <v-text-field
              v-model="formData.username"
              label="用户名"
              placeholder="请输入用户名"
              variant="outlined"
              :rules="rules.username"
              required
              :disabled="formState.submitting"
              prepend-inner-icon="mdi-account"
              class="mb-4"
            />

            <!-- 邮箱 -->
            <v-text-field
              v-model="formData.email"
              label="邮箱地址"
              placeholder="请输入邮箱地址"
              variant="outlined"
              type="email"
              :rules="rules.email"
              required
              :disabled="formState.submitting"
              prepend-inner-icon="mdi-email"
              class="mb-4"
            />

            <!-- 密码 -->
            <v-text-field
              v-model="formData.password"
              label="密码"
              placeholder="请输入密码"
              variant="outlined"
              :type="showPassword ? 'text' : 'password'"
              :rules="rules.password"
              required
              :disabled="formState.submitting"
              prepend-inner-icon="mdi-lock"
              :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append-inner="showPassword = !showPassword"
              class="mb-4"
            >
              <template v-slot:details>
                <div class="text-caption text-muted">
                  密码需包含大小写字母和数字，长度8-32位
                </div>
              </template>
            </v-text-field>

            <!-- 确认密码 -->
            <v-text-field
              v-model="formData.confirmPassword"
              label="确认密码"
              placeholder="请再次输入密码"
              variant="outlined"
              :type="showConfirmPassword ? 'text' : 'password'"
              :rules="rules.confirmPassword"
              required
              :disabled="formState.submitting"
              prepend-inner-icon="mdi-lock-check"
              :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append-inner="showConfirmPassword = !showConfirmPassword"
              class="mb-4"
            />

            <!-- 手机号（选填） -->
            <v-text-field
              v-model="formData.phone"
              label="手机号"
              placeholder="请输入手机号（选填）"
              variant="outlined"
              :rules="rules.phone"
              :disabled="formState.submitting"
              prepend-inner-icon="mdi-phone"
              class="mb-4"
            />

            <!-- 个人简介 -->
            <v-textarea
              v-model="formData.bio"
              label="个人简介"
              placeholder="请输入个人简介（选填，最多200字）"
              variant="outlined"
              :rules="rules.bio"
              :disabled="formState.submitting"
              rows="3"
              class="mb-4"
            >
              <template v-slot:append>
                <span class="text-caption" :class="bioRemaining < 20 ? 'text-error' : 'text-muted'">
                  {{ bioRemaining }} / 200
                </span>
              </template>
            </v-textarea>

            <!-- 服务条款 -->
            <v-checkbox
              v-model="formData.agreeTerms"
              label="我已阅读并同意服务条款和隐私政策"
              :rules="rules.agreeTerms"
              :disabled="formState.submitting"
              class="mb-6"
            />

            <!-- 按钮区域 -->
            <v-card-actions class="pa-0 justify-space-between">
              <!-- 左侧：返回/取消 -->
              <div>
                <v-btn
                  variant="text"
                  color="secondary"
                  @click="handleBack"
                  :disabled="formState.submitting"
                  prepend-icon="mdi-arrow-left"
                >
                  返回
                </v-btn>
                <v-btn
                  variant="text"
                  color="secondary"
                  @click="handleCancel"
                  :disabled="formState.submitting"
                  prepend-icon="mdi-close"
                  class="ml-2"
                >
                  取消
                </v-btn>
              </div>

              <!-- 右侧：重置/提交 -->
              <div>
                <v-btn
                  variant="outlined"
                  color="secondary"
                  @click="handleReset"
                  :disabled="formState.submitting"
                  prepend-icon="mdi-refresh"
                >
                  重置
                </v-btn>
                <v-btn
                  type="submit"
                  color="primary"
                  :loading="formState.submitting"
                  :disabled="formState.submitting"
                  prepend-icon="mdi-check"
                  class="ml-2"
                >
                  {{ formState.submitting ? '提交中...' : '提交' }}
                </v-btn>
              </div>
            </v-card-actions>
          </v-form>
        </div>
      </UiParentCard>
    </v-col>
  </v-row>
</template>

<style scoped>
.form-container {
  max-width: 600px;
}
</style>