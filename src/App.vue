<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="logo">
          <h1>MegaStore</h1>
        </div>
        <div class="nav-links">
          <router-link to="/">Inicio</router-link>
          <router-link to="/productos">Productos</router-link>
          <router-link to="/contacto">Contacto</router-link>
        </div>
      </nav>
    </header>
    <router-view />
    <footer>
      <p>© 2024 MegaStore. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
:root {
  --primary-color: #3498db;
  --text-color: white;
  --spacing: 1rem;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  padding: var(--spacing) 2rem;
  color: var(--text-color);
}

.nav-links a {
  margin-left: 1rem;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 600;
  transition: text-decoration 0.3s ease;
}

.nav-links a:hover {
  text-decoration: underline;
}

footer {
  text-align: center;
  padding: var(--spacing);
  background-color: var(--primary-color);
  color: var(--text-color);
}
</style>

