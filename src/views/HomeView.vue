<template>
  <section class="home">
    <!-- Banner Principal -->
    <div class="banner">
      <img src="@/assets/banner.jpg" alt="MegaStore Banner" class="banner-image" />
      <div class="banner-text">
        <h1>MegaStore</h1>
        <p>Todo lo que necesitas, al alcance de un clic.</p>
        <button class="btn btn-primary">Explorar Productos</button>
      </div>
    </div>

    <!-- Categorías principales -->
    <section class="categories">
      <h2>Categorías Destacadas</h2>
      <div class="category-grid">
        <div class="category-card">
          <img src="@/assets/electronics.jpg" alt="Electrónicos" class="category-image" />
          <h3>Electrónicos</h3>
        </div>
        <div class="category-card">
          <img src="@/assets/furniture.jpg" alt="Muebles" class="category-image" />
          <h3>Muebles</h3>
        </div>
        <div class="category-card">
          <img src="@/assets/fashion.jpg" alt="Moda" class="category-image" />
          <h3>Moda</h3>
        </div>
      </div>
    </section>

    <!-- Productos destacados de la API -->
    <section class="featured-products">
      <h2>Productos Destacados</h2>
      <div class="product-grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import ProductService from '@/services/ProductService';

export default {
  name: 'HomeView',
  components: {
    ProductCard
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
          this.products = products.slice(0, 6); // Mostrar 6 productos
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
    this.fetchProducts();
  }
};
</script>

<style scoped>
/* Estilos del banner */
.banner {
  position: relative;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)); /* Efecto de gradiente oscuro en la imagen */
}

.banner-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: transform 0.5s ease;
}

.banner:hover .banner-image {
  transform: scale(1.05); /* Zoom suave al hacer hover */
}

.banner-text {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  animation: fadeIn 1.5s ease;
}

.banner-text h1 {
  font-size: 4.5rem;
  margin: 0;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
}

.banner-text p {
  font-size: 1.5rem;
  margin-top: 10px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
}

.btn-primary {
  margin-top: 30px;
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.4rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #ff4500;
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

/* Estilos de las categorías */
.categories {
  margin-bottom: 60px;
  text-align: center;
}

.categories h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.category-grid {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.category-card {
  max-width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.category-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 3px solid #ff6347;
}

.category-card h3 {
  font-size: 1.5rem;
  margin: 10px 0;
}

/* Estilos de los productos destacados */
.featured-products {
  margin-bottom: 40px;
  text-align: center;
}

.featured-products h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 0 20px;
}

.product-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.product-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
  max-height: 200px;
}

.product-card h3 {
  font-size: 1.2rem;
  margin: 10px 0;
  padding: 0 10px;
}

.product-card p {
  color: #7f8c8d;
  font-size: 1rem;
  padding: 0 10px;
}

.product-card button {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.product-card button:hover {
  background-color: #27ae60;
}

/* Animación de aparición */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
