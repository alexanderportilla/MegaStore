<template>
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/productos">Productos</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li> <!-- Enlace a la página de contacto -->
      </ul>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    background-color: #3498db;
    padding: 10px 20px;
  }
  
  .navbar ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  
  .navbar li {
    margin: 0 15px;
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
  }
  
  .navbar a:hover {
    text-decoration: underline;
  }
  </style>
  