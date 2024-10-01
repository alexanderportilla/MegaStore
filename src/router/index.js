import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import ContactView from '../views/ContactView.vue';  // Importa la vista de contacto

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'Productos',
    component: ProductsView
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: ContactView  // Ruta de contacto
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;




