<template>
  <van-config-provider class="h-full" :theme-vars="themeVars">
    <main class="h-full p-5 relative">
      <RouterView />
      <van-tabbar
        v-show="!route.meta.fullPage"
        active-color="#4ade80"
        class="!fixed translate-x-[-50%] left-[50%] max-w-[390px]"
        v-model="active"
      >
        <van-tabbar-item icon="home-o">Home</van-tabbar-item>
        <van-tabbar-item icon="balance-pay">Wallets</van-tabbar-item>
        <van-tabbar-item icon="user-circle-o">Profile</van-tabbar-item>
        <van-tabbar-item icon="setting-o">Settings</van-tabbar-item>
      </van-tabbar>
    </main>
  </van-config-provider>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';

const route = useRoute();
const active = ref(0);

const themeVars = {
  buttonPrimaryBackgroundColor: '#4ade80',
  buttonPrimaryBorderColor: '#4ade80',
  buttonDefaultBorderColor: '#4ade80',
  buttonDefaultColor: '#4ade80',
};
</script>
