<template>
  <van-cell class="rounded-sm shadow" :clickable="true">
    <van-row>
      <van-col span="6">
        <div class="flex items-center">
          <van-image
            width="60"
            height="60"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>
      </van-col>
      <van-col span="17">
        <span class="block text-base font-bold text-gray-500">Title</span>
        <div>
          <span class="text-sm">$36 ~ Dec 12, 2019</span>
        </div>
      </van-col>
      <van-col span="1">
        <div class="flex items-center h-full"><van-icon name="arrow" /></div>
      </van-col>
    </van-row>
  </van-cell>
</template>

<script setup lang="ts"></script>

<style scoped></style>
