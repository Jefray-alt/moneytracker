import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/login', component: Login, name: 'login' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  const { loggedInUser } = authStore;
  const { user } = storeToRefs(authStore);
  const accessToken = localStorage.getItem('access_token');

  if (!user.value && accessToken && to.path !== '/login') {
    try {
      await loggedInUser();
    } catch (error) {
      return { name: 'login' };
    }
  }

  if (!accessToken && to.path !== '/login') {
    return { name: 'login' };
  }

  if (accessToken && to.path === '/login') {
    return { name: 'home' };
  }

  return true;
});

export default router;
