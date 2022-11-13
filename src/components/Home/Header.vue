<template>
  <!-- Floating Solid Background -->
  <div class="top-0 left-0 w-full absolute z-[-1]">
    <div class="bg-green-400 w-full h-[120px]"></div>
    <div
      class="bg-green-400 w-full h-[100px] rounded-br-[50%] rounded-bl-[50%]"
    ></div>
  </div>
  <van-row>
    <van-col span="19">
      <div class="text-white text-lg font-bold h-full flex items-center">
        <span class="inline-block">mTracker</span>
      </div>
    </van-col>
    <van-col span="2">
      <div class="flex justify-center h-full items-center">
        <van-icon
          size="25px"
          name="envelop-o"
          class="text-white text-lg font-bold"
        />
      </div>
    </van-col>
    <van-col span="3">
      <div class="flex justify-end h-full items-center">
        <van-image
          round
          fit="cover"
          width="35px"
          height="35px"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </div>
    </van-col>
  </van-row>
  <van-row>
    <van-col span="24" class="py-5">
      <span class="text-white text-sm block mb-1">Available Balance</span>
      <span class="text-white text-xl block font-[700]">$200,000</span>
    </van-col>
  </van-row>
</template>

<script setup lang="ts"></script>

<style scoped></style>
