<template>
  <Header />
  <van-row>
    <van-col span="24">
      <QuickMenu />
      <TransactionHistory />
    </van-col>
  </van-row>
</template>

<script setup lang="ts">
import QuickMenu from '@/components/Home/QuickMenu.vue';
import Header from '@/components/Home/Header.vue';
import TransactionHistory from '@/components/Home/TransactionHistory.vue';
</script>
