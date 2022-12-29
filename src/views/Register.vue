<template>
	<van-row>
		<van-col span="24" class="flex items-center">
			<span class="cursor-pointer back-arrow" @click="goBack" />
			<h1
				class="text-primary font-bold text-xl tracking-wider pt-[8px] pl-[8px]"
			>
				Register
			</h1>
		</van-col>
	</van-row>
	<van-row>
		<van-col span="24" class="pt-[12px] px-4">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rerum
			harum optio.
		</van-col>
	</van-row>
	<van-row class="mt-[16px]">
		<van-col span="24">
			<BasicInformationForm
				@submit-basic-information="completeBasicInformation"
			/>
			<!-- Step 2 -->
			<WalletInformationForm />
		</van-col>
	</van-row>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue';
import BasicInformationForm from '@/components/Register/BasicInformationForm.vue';
import WalletInformationForm from '@/components/Register/WalletInformationForm.vue';
import type { BasicInformationRegistrationForm } from '@/components/Register/RegisterComponent.types';

const router = useRouter();
const step = ref(0);

let registrationForm: BasicInformationRegistrationForm | {} = {};

const completeBasicInformation = (value: BasicInformationRegistrationForm) => {
	registrationForm = { ...registrationForm, ...value };
	step.value = 1;
};

const goBack = () => {
	router.go(-1);
};
</script>

<style scoped></style>
