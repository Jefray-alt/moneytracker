import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';
import Register from '@/views/Register.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    meta: { requiresAuth: true, showNavbar: false },
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: { fullPage: true, title: 'Login' },
  },
  {
    path: '/register',
    component: Register,
    name: 'register',
    meta: { fullPage: true, title: 'Register', showNavbar: false },
  },
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

  if (!user.value && accessToken && to.meta.requiresAuth) {
    try {
      await loggedInUser();
    } catch (error) {
      localStorage.removeItem('access_token');
      return { name: 'login' };
    }
  }

  if (!accessToken && to.meta.requiresAuth) {
    return { name: 'login' };
  }

  if (accessToken && to.name === 'login') {
    return { name: 'home' };
  }

  return true;
});

export default router;
