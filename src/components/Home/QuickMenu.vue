<template>
  <van-row>
    <van-col span="24" class="bg-white shadow rounded-md">
      <van-row gutter="20" class="p-3">
        <van-col span="6">
          <QuickButton />
        </van-col>
        <van-col span="6">
          <QuickButton />
        </van-col>
        <van-col span="6">
          <QuickButton />
        </van-col>
        <van-col span="6">
          <QuickButton />
        </van-col>
      </van-row>
    </van-col>
  </van-row>
</template>

<script setup lang="ts">
import QuickButton from './QuickButton.vue';
</script>

<style scoped></style>
