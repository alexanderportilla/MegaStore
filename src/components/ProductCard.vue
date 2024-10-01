<template>
  <div class="product-card" v-if="product">
    <img :src="product.thumbnail || 'ruta/por/defecto.jpg'" alt="Imagen del producto" class="product-image">
    <h3>{{ product.title || 'Producto no disponible' }}</h3>
    <p>{{ product.price || 'Sin precio' }} USD</p>
    <button class="btn btn-secondary">Añadir al Carrito</button>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.product-card {
  border: 1px solid #e0e0e0;
  padding: 20px;
  text-align: center;
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 3px 6px rgba(0,0,0,0.1);
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 10px 20px rgba(0,0,0,0.2);
}

.product-image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 150px;
}

h3 {
  font-size: 1.2rem;
  margin: 10px 0;
}

p {
  font-size: 1rem;
  color: #7f8c8d;
}

.btn-secondary {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-secondary:hover {
  background-color: #27ae60;
}
</style>



