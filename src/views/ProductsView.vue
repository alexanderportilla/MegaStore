<template>
  <section class="products-view">
    <h1>Todos los Productos</h1>
    <div v-if="loading">Cargando productos...</div>
    <div v-if="error">{{ error }}</div>
    <ProductList v-if="products && products.length" :products="products" />
    <div v-else>No se encontraron productos</div>
  </section>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import ProductService from '@/services/ProductService';

export default {
  name: 'ProductsView',
  components: {
    ProductList
  },
  data() {
    return {
      products: [],
      loading: true,
      error: null
    };
  },
  methods: {
    fetchProducts() {
      ProductService.getProducts()
        .then(products => {
          this.products = products.length ? products : [];
          this.loading = false;
        })
        .catch(error => {
          this.error = "Hubo un problema al cargar los productos.";
          console.error(error);
          this.loading = false;
        });
    }
  },
  mounted() {
    this.fetchProducts(); // Llamar a la API cuando se monta el componente
  }
};
</script>

<style scoped>
.products-view {
  padding: 20px;
}

.products-view h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  color: #333;
}
</style>
