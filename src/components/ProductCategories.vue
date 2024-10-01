<template>
  <section class="categories">
    <h2>Categorías</h2>
    <div class="category-grid">
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </div>
  </section>
</template>

<script>
import CategoryCard from './CategoryCard.vue';

export default {
  name: 'ProductCategories',
  components: {
    CategoryCard
  },
  data() {
    return {
      categories: [
        { id: 1, name: "Frutas y Verduras", image: require('@/assets/frutas y verduras.jpg') },
        { id: 2, name: "Bebidas", image: require('@/assets/bebidas.jpg') },
        { id: 3, name: "Carnes y Pescados", image: require('@/assets/carnes y pescados.jpg') }
      ]
    };
  }
};
</script>

<style scoped>
/* Contenedor de la sección de categorías */
.categories {
  padding: 20px;
  background-color: #f4f4f4; /* Fondo claro para destacar la sección */
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

/* Título de la sección */
.categories h2 {
  font-size: 2rem;
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

/* Diseño de la cuadrícula de categorías */
.category-grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

/* Responsivo: Ajuste para pantallas más pequeñas */
@media (max-width: 768px) {
  .category-grid {
    flex-direction: column;
    align-items: center;
  }
}
</style>


