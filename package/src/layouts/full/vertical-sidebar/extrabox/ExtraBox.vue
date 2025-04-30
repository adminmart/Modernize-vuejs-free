<script setup lang="ts">
import { PowerIcon } from 'vue-tabler-icons';
</script>

<template>
    <v-sheet rounded="md" color="lightprimary" class="ExtraBox hide-menu mx-3 px-6 pb-5 pt-4">
        <div class="d-flex align-center">
            <div class="side-profile-text">
                <h6 class="text-h6 mb-2">Check Pro Version</h6>
                <v-btn href="https://adminmart.com/product/modernize-vuetify-vue-admin-dashboard/?ref=56#product-demo-section" target="_blank" size="small" color="primary" flat>check</v-btn>
            </div>
            <div class="mt-n7 ml-2">
                <img src="@/assets/images/background/rocket.png" class="side-profile" />
            </div>
        </div>
    </v-sheet>
</template>
<style lang="scss">
.ExtraBox {
    position: relative;
}
.line-height-none {
    line-height: normal;
}
</style>
