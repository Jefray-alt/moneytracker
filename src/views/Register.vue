<template>
  <van-row>
    <van-col span="24" class="flex items-center">
      <span class="cursor-pointer back-arrow" @click="goBack" />
      <h1
        class="text-primary font-bold text-xl tracking-wider pt-[8px] pl-[8px]"
      >
        Register
      </h1></van-col
    >
  </van-row>
  <van-row>
    <van-col span="24" class="pt-[12px]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rerum
      harum optio.
    </van-col>
  </van-row>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<style scoped></style>
