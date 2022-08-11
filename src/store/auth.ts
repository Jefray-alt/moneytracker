import { loginUser } from './../lib/MoneyTrackerAPI/user';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref({});

  async function login(email: string, password: string) {
    const userData = await loginUser(email, password);
    user.value = { name: userData.email };
    localStorage.setItem('access_token', userData.accessToken);
  }

  return { user, login };
});
