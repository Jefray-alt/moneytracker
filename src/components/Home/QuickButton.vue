<template>
  <div
    class="flex justify-center items-center text-center flex-col cursor-pointer active:bg-gray-50 p-2"
    role="button"
    tabindex="0"
  >
    <div
      class="bg-gray-100 flex justify-center items-center w-[50px] h-[50px] rounded-md mb-[6px]"
    >
      <van-icon color="#4ade80" :name="icon" size="25" />
    </div>
    <span class="text-sm text-gray-400">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
