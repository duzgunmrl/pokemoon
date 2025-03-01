<template>
  <div class="personal-shopper-container">
    <h1 class="title" v-motion-fade-visible>Service Personal Shopper</h1>
    <p class="description" v-motion-slide-visible>
      Besoin d'aide pour trouver un produit rare ? Confiez-nous votre mission et nous ferons tout pour le trouver pour vous.  
      Mentionnez votre budget, la durée de recherche, et toute autre information utile.
    </p>
    <form class="shopper-form" @submit.prevent="submitRequest" v-motion-slide-visible>
      <label for="name">Nom :</label>
      <input type="text" id="name" v-model="form.name" required />

      <label for="email">Email :</label>
      <input type="email" id="email" v-model="form.email" required />

      <label for="product">Produit Recherché :</label>
      <textarea id="product" v-model="form.product" rows="4" required></textarea>

      <label for="budget">Budget (€) :</label>
      <input type="number" id="budget" v-model="form.budget" required />

      <label for="duration">Durée maximale (jours) :</label>
      <input type="number" id="duration" v-model="form.duration" required />

      <label for="notes">Notes supplémentaires :</label>
      <textarea id="notes" v-model="form.notes" rows="4"></textarea>

      <button type="submit" class="pulse-btn">Envoyer la demande</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const form = ref({
  name: '',
  email: '',
  product: '',
  budget: '',
  duration: '',
  notes: ''
});

const submitRequest = () => {
  console.log('Demande envoyée :', form.value);
  alert('Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.');
  form.value = { name: '', email: '', product: '', budget: '', duration: '', notes: '' };
};
</script>

<style scoped>
.personal-shopper-container {
  max-width: 600px;
  margin: 80px auto;
  padding: 25px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  text-align: center;
  animation: zoomIn 0.6s ease-out;
  transition: transform 0.3s ease-in-out;
}

.personal-shopper-container:hover {
  transform: translateY(-5px);
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

h1 {
  margin-top: 10px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 60px;
  letter-spacing: 1px;
  font-family: 'Barriecito', cursive;
  color: #010101;
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.description {
  margin-bottom: 30px;
  font-size: 1.1rem;
  color: #a68c53;
  animation: fadeIn 1.5s ease-in-out;
}

.shopper-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.5s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

label {
  text-align: left;
  font-weight: 500;
  color: #525252;
  font-size: 16px;
  margin-top: 10px;
  font-family: 'Bebas Neue', sans-serif;
}

input, textarea {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease-in-out;
}

input:focus, textarea:focus {
  border-color: #a68c53;
  outline: none;
  box-shadow: 0 0 8px rgba(166, 140, 83, 0.3);
}

button.pulse-btn {
  background-color: #000;
  color: #fff;
  padding: 14px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
  animation: pulse 1.5s infinite;
}

button.pulse-btn:hover {
  background-color: #a68c53;
  transform: scale(1.05);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(166, 140, 83, 0.7);
  }
  70% {
    box-shadow: 0 0 0 12px rgba(166, 140, 83, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(166, 140, 83, 0);
  }
}
</style>
