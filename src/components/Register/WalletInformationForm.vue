<template>
	<van-form>
		<van-row class="px-4">
			<van-col span="24">
				<h2 class="font-bold text-primary text-md mb-[8px]">
					Wallet Information
				</h2>
			</van-col>
		</van-row>
		<van-cell-group inset>
			<van-field
				is-link
				readonly
				@click="currencyPickerProps.showCurrencyPicker = true"
				class="w-full"
				v-model="registerForm.wallet.currency"
				name="currency"
				label="Currency"
				placeholder="Enter Currency"
				:rules="[{ required: true, message: 'Currency is required' }]"
			>
				<template #input>
					{{
						currency.find((item) => item.value === registerForm.wallet.currency)
							?.text
					}}
				</template>
			</van-field>
			<van-popup
				v-model:show="currencyPickerProps.showCurrencyPicker"
				position="bottom"
			>
				<van-picker
					title="Currency"
					:columns="currency"
					@cancel="currencyPickerProps.showCurrencyPicker"
					@confirm="currencyPickerProps.onCurrencyPickerConfirm"
				>
					<template #option="option">
						{{ option.text }} ({{ getCurrencySymbol(undefined, option.value) }})
					</template>
				</van-picker>
			</van-popup>
			<van-field
				:disabled="registerForm.wallet.currency === ''"
				class="w-full"
				v-model="registerForm.wallet.value"
				name="walletValue"
				label="Initial Wallet Value"
				placeholder="Enter Initial Wallet Value"
				type="number"
			/>
		</van-cell-group>
	</van-form>
</template>

<script lang="ts" setup>
import { currency, getCurrencySymbol } from '@/lib/currency';
import { reactive } from 'vue';
const registerForm = reactive({
	email: '',
	username: '',
	firstName: '',
	lastName: '',
	birthdate: '',
	password: '',
	wallet: {
		value: 0.0,
		currency: '',
	},
});

const currencyPickerProps = reactive({
	showCurrencyPicker: false,
	onCurrencyPickerConfirm: (val: { text: string; value: string }) => {
		currencyPickerProps.showCurrencyPicker = false;
		registerForm.wallet.currency = val.value;
	},
});
</script>
