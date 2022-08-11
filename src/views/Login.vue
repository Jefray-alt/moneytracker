<template>
  <div class="h-screen w-screen flex flex-col items-center justify-center">
    <div class="w-full">
      <van-row class="px-4 mb-5">
        <van-col>
          <h1 class="text-[32px]">Money Tracker</h1>
        </van-col>
      </van-row>

      <van-form @submit="submitForm">
        <van-cell-group inset>
          <van-field v-model="email" name="email" label="Email" placeholder="Enter Email"
            :rules="[{ required: true, message: 'Email is required' }]" />
          <van-field v-model="password" type="password" name="Password" label="Password" placeholder="Enter Password"
            :rules="[{ required: true, message: 'Password is required' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            Submit
          </van-button>
        </div>
      </van-form>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store/auth';
import { Cell, CellGroup, Form, Button, Field, Col, Row, Toast } from 'vant';
import 'vant/lib/toast/style';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const authStore = useAuthStore();
const router = useRouter();

const { login } = authStore;

const submitForm = async () => {
  Toast.loading({
    forbidClick: true,
    message: 'Loading...'
  });

  try {
    await login(email.value, password.value);
    Toast.clear();
    router.push('home');
  } catch (error) {
    Toast.clear();
  }
};

</script>