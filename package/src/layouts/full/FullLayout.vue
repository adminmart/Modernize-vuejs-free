<script setup lang="ts">
import { RouterView } from 'vue-router';
import MainView from './Main.vue';
import Topbar from './Topbar.vue';

</script>

<template>
   
    <v-locale-provider >
        <Topbar/>
        <v-app>
            <MainView />
            <v-main>
                <v-container fluid class="page-wrapper">
                    <div class="maxWidth">
                        <RouterView />
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
