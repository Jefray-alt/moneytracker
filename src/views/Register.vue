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
    <van-col span="24" class="pt-[12px] px-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rerum
      harum optio.
    </van-col>
  </van-row>
  <van-row class="mt-[16px]">
    <van-col span="24">
      <van-form>
        <van-row class="px-4">
          <van-col span="24">
            <h2 class="font-bold text-primary text-md mb-[8px]">
              Personal Information
            </h2>
          </van-col>
        </van-row>
        <van-cell-group inset>
          <van-field
            class="w-full"
            v-model="registerForm.email"
            name="email"
            label="Email"
            placeholder="Enter Email"
            :rules="[{ required: true, message: 'Email is required' }]"
          />
          <van-field
            class="w-full"
            v-model="registerForm.username"
            name="username"
            label="Username"
            placeholder="Enter Username"
            :rules="[{ required: true, message: 'Username is required' }]"
          />
          <van-field
            class="w-full"
            v-model="registerForm.firstName"
            name="firstName"
            label="First Name"
            placeholder="Enter First Name"
            :rules="[{ required: true, message: 'First Name is required' }]"
          />
          <van-field
            class="w-full"
            v-model="registerForm.lastName"
            name="lastName"
            label="Last Name"
            placeholder="Enter Last Name"
            :rules="[{ required: true, message: 'Last Name is required' }]"
          />
          <van-field
            is-link
            readonly
            @click="birthDatePickerProps.showBirthDatePicker = true"
            class="w-full"
            v-model="registerForm.birthdate"
            name="birthdate"
            label="Birth Date"
            placeholder="Enter Birth Date"
            :rules="[{ required: true, message: 'Birth Date is required' }]"
          />
          <van-popup
            v-model:show="birthDatePickerProps.showBirthDatePicker"
            position="bottom"
          >
            <van-datetime-picker
              @confirm="onBirthDatePickerConfirm"
              @cancel="birthDatePickerProps.showBirthDatePicker = false"
              type="date"
              v-model="birthDatePickerProps.model"
              :columns-order="['month', 'day', 'year']"
              :max-date="birthDatePickerProps.maxDate"
              :min-date="birthDatePickerProps.minDate"
            />
          </van-popup>
        </van-cell-group>
      </van-form>
    </van-col>
  </van-row>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue';

const router = useRouter();

const registerForm = reactive({
  email: '',
  username: '',
  firstName: '',
  lastName: '',
  birthdate: '',
  password: '',
});

const birthDatePickerProps = reactive({
  model: new Date(),
  maxDate: new Date(),
  minDate: new Date(1900, 0, 1),
  showBirthDatePicker: false,
});

const onBirthDatePickerConfirm = (val: Date) => {
  birthDatePickerProps.showBirthDatePicker = false;
  registerForm.birthdate = val.toLocaleDateString('en-US');
};

const goBack = () => {
  router.go(-1);
};
</script>

<style scoped></style>
