import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.use(router);
app.use(store);  // Solo si usas Vuex para manejar el estado

app.mount('#app');

