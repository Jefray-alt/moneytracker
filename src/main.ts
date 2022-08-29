import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './css/index.css';
import router from './router/index.js';
import { Locale } from 'vant';
import enUS from 'vant/es/locale/lang/en-US';

Locale.use('en-US', enUS);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
