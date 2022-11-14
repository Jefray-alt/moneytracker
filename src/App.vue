<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const active = ref(0);
</script>

<template>
  <main class="h-full p-5 relative">
    <RouterView />
    <van-tabbar active-color="#4ade80" class="!fixed" v-model="active">
      <van-tabbar-item icon="home-o">Home</van-tabbar-item>
      <van-tabbar-item icon="balance-pay">Wallets</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o">Profile</van-tabbar-item>
      <van-tabbar-item icon="setting-o">Settings</van-tabbar-item>
    </van-tabbar>
  </main>
</template>
