import { createStore } from 'vuex';

export default createStore({
  state: {
    // Datos compartidos en toda la aplicación (como carrito de compras)
    products: [],
    cart: []
  },
  mutations: {
    // Mutaciones para modificar el estado (síncronas)
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      state.cart.push(product);
    }
  },
  actions: {
    // Acciones para llamadas asíncronas o lógicas complejas
    fetchProducts({ commit }) {
      // Aquí se realizarían llamadas a una API para obtener productos
      const products = [
        { id: 1, name: 'Producto 1', price: 10 },
        { id: 2, name: 'Producto 2', price: 20 }
      ];
      commit('setProducts', products);
    },
    addProductToCart({ commit }, product) {
      commit('addToCart', product);
    }
  },
  getters: {
    // Métodos para obtener datos filtrados o calculados desde el estado
    cartItemCount(state) {
      return state.cart.length;
    }
  },
  modules: {
    // Si tienes otros módulos de estado, puedes agregarlos aquí
  }
});
