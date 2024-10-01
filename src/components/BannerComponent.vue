<template>
  <section class="banner">
    <div class="overlay"></div> <!-- Capa oscura para mejorar el contraste del texto -->
    <img src="@/assets/banner.jpg" alt="Banner Principal" class="banner-img">
    <div class="banner-text">
      <h1>Las Mejores Ofertas</h1>
      <p>Explora nuestros productos frescos y de calidad.</p>
      <button class="btn btn-primary">Explorar Ahora</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerComponent'
};
</script>

<style scoped>
/* Banner */
.banner {
  position: relative;
  margin-bottom: 40px;
  height: 450px;
  overflow: hidden; /* Evita que la imagen o el contenido sobresalgan */
}

/* Imagen del banner con efecto parallax */
.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7); /* Oscurece un poco la imagen para mejor legibilidad */
  transition: transform 0.5s ease;
}

/* Animación parallax al hacer hover */
.banner:hover .banner-img {
  transform: scale(1.1); /* Aumenta ligeramente el tamaño */
}

/* Capa oscura encima del banner */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Oscurece para contrastar el texto */
  z-index: 1;
}

/* Texto dentro del banner */
.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-size: 1.5rem;
  z-index: 2;
  animation: fadeIn 1s ease; /* Animación suave al aparecer */
}

/* Animación de fade in */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

/* Estilo del título */
.banner-text h1 {
  font-size: 3rem;
  margin: 0;
  padding: 0;
  line-height: 1.2;
}

/* Botón de acción */
.btn-primary {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 20px;
}

.btn-primary:hover {
  background-color: #c0392b;
  transform: scale(1.05); /* Aumenta ligeramente el botón al pasar el cursor */
}

/* Responsivo: Ajustar tamaño del texto en pantallas más pequeñas */
@media (max-width: 768px) {
  .banner-text h1 {
    font-size: 2rem;
  }

  .banner-text p {
    font-size: 1.1rem;
  }

  .btn-primary {
    font-size: 1rem;
    padding: 10px 20px;
  }
}
</style>
