<template>
  <div class="category-card">
    <img :src="category.image" alt="Imagen de categoría" class="category-image">
    <h3>{{ category.name }}</h3>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    category: Object
  }
};
</script>

<style scoped>
/* Contenedor de la tarjeta de categoría */
.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

/* Animación y sombra cuando el cursor está sobre la tarjeta */
.category-card:hover {
  transform: translateY(-10px); /* Eleva la tarjeta */
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); /* Aumenta la sombra */
}

/* Imagen de la categoría */
.category-image {
  width: 100%;
  max-width: 200px;  /* Limitar el tamaño máximo de la imagen */
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease; /* Transición suave para zoom */
}

/* Zoom en la imagen al pasar el cursor */
.category-card:hover .category-image {
  transform: scale(1.05); /* Aumenta ligeramente el tamaño de la imagen */
}

/* Texto del nombre de la categoría */
h3 {
  margin-top: 15px;
  font-size: 1.2rem;
  color: #333;
  font-weight: 600;
  text-align: center;
}
</style>
