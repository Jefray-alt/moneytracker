import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/login', component: Login, name: 'login' }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
