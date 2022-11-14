<template>
  <van-cell class="rounded shadow" :clickable="true">
    <van-row>
      <van-col span="6">
        <div class="flex items-center">
          <van-image
            fit="cover"
            width="60"
            height="60"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>
      </van-col>
      <van-col span="16" class="px-[12px]">
        <span class="block text-base font-bold text-gray-500">Title</span>
        <div>
          <span class="text-sm">$36 ~ Dec 12, 2019</span>
        </div>
      </van-col>
      <van-col span="2">
        <div class="flex items-center h-full justify-end">
          <van-icon name="arrow" />
        </div>
      </van-col>
    </van-row>
  </van-cell>
</template>

<script setup lang="ts"></script>

<style scoped></style>
