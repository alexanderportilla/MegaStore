import axios from 'axios';

// URL de la API de DummyJSON para obtener productos
const API_URL = 'https://dummyjson.com/products';

export default {
  // Obtener productos
  getProducts() {
    console.log("Llamando a la API de DummyJSON para obtener productos...");
    return axios.get(API_URL)
      .then(response => {
        console.log("Respuesta de la API:", response.data.products); // Verifica los productos
        return response.data.products; // Devolver los productos de la API
      })
      .catch(error => {
        console.error("Error en la solicitud de la API:", error);
        throw error;
      });
  }
};













