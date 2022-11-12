<template>
  <van-row>
    <van-col span="24" class="uppercase font-bold text-[14px] p-[14px]"
      >Transactions</van-col
    >
    <van-col span="24">
      <van-pull-refresh
        v-model="transactionListPr.refreshing"
        @refresh="transactionListPrRefresh"
      >
        <van-list
          v-model:loading="transactionRefObj.loading"
          :finished="transactionRefObj.finished"
          finished-text="No more transactions"
          @load="transactionListLoad"
        >
          <van-cell v-for="item in transactionList" :key="item" :title="item" />
        </van-list>
      </van-pull-refresh>
    </van-col>
  </van-row>
</template>

<script setup lang="ts">
import { List } from 'vant';
import { reactive, ref } from 'vue';

const transactionRefObj = reactive({
  loading: false,
  finished: true,
});

function transactionListLoad() {}

const transactionListPr = reactive({
  refreshing: false,
});

function transactionListPrRefresh() {}

const transactionList = ref([1, 2, 3, 4, 5]);
</script>
