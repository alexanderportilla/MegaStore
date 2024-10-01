<template>
  <section class="contact">
    <h1>Contáctanos</h1>
    <p>Nos encantaría saber de ti. Completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.</p>
    <form class="contact-form" @submit.prevent="sendForm">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="message">Mensaje</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    sendForm() {
      alert(`Gracias por tu mensaje, ${this.name}. Nos pondremos en contacto contigo pronto.`);
      // Aquí puedes agregar lógica para enviar el formulario a través de una API, etc.
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
};
</script>

<style scoped>
.contact {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

.contact h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
}

.form-group label {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

textarea {
  min-height: 150px;
}

.btn-primary {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #2980b9;
}
</style>
