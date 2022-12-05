<template>
  <main class="h-full p-5 relative">
    <RouterView />
    <van-tabbar
      v-show="isTabBarVisible"
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
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import { useUIStore } from '@/store/ui';

const uiStore = useUIStore();
uiStore.$subscribe((mutation, state) => {
  isTabBarVisible.value = state.showTabBar;
});

const isTabBarVisible = ref(uiStore.showTabBar);
const active = ref(0);
</script>
