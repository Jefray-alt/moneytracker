<template>
  <van-row>
    <van-col span="24" class="font-bold py-[12px]">Latest Transactions</van-col>
    <van-col span="24">
      <van-pull-refresh
        v-model="transactionListPr.refreshing"
        @refresh="transactionListPrRefresh"
      >
        <van-list
          v-model:loading="transactionRefObj.loading"
          :finished="transactionRefObj.finished"
          @load="transactionListLoad"
          class="space-y-2"
        >
          <!-- Latest 5 transactions only -->
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </van-list>
      </van-pull-refresh>
    </van-col>
  </van-row>
</template>

<script setup lang="ts">
import { Toast } from 'vant';
import { reactive, ref } from 'vue';

const transactionRefObj = reactive({
  loading: false,
  finished: true,
});

function transactionListLoad() {}

const transactionListPr = reactive({
  refreshing: false,
});

function transactionListPrRefresh() {
  setTimeout(() => {
    Toast('Refresh Success');
    transactionRefObj.loading = false;
    transactionListPr.refreshing = false;
  }, 1000);
}

const transactionList = ref([1, 2, 3, 4, 5]);
</script>

<style scoped></style>
