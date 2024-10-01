<template>
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
</template>

<script>
import ProductCard from './ProductCard.vue';
import manzana from '@/assets/manzanas rojas.jpg';
import leche from '@/assets/leche entera.jpg';
import pan from '@/assets/pan.jpg';

export default {
  name: 'FeaturedProducts',
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Manzana Roja', price: '$2.00', image: manzana },
        { id: 2, name: 'Leche Entera', price: '$1.50', image: leche },
        { id: 3, name: 'Pan', price: '$3.00', image: pan },
      ],
    };
  },
};
</script>

<style scoped>
:root {
  --primary-bg: #f9f9f9;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --title-color: #333;
  --spacing: 20px;
  --card-padding: 15px;
  --grid-gap: 30px;
  --grid-column-min-width: 250px;
}

/* Contenedor de Productos Destacados */
.featured-products {
  margin-bottom: var(--spacing);
  padding: var(--spacing);
  background-color: var(--primary-bg);
  border-radius: 10px;
  box-shadow: 0px 4px 10px var(--shadow-color);
}

/* Título de la sección */
.featured-products h2 {
  font-size: 2rem;
  text-align: center;
  color: var(--title-color);
  margin-bottom: calc(var(--spacing) * 1.5);
}

/* Diseño de la cuadrícula de productos */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--grid-column-min-width), 1fr));
  gap: var(--grid-gap);
  padding: var(--card-padding);
}

/* Diseño responsivo */
@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
