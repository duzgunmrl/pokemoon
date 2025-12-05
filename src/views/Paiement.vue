<template>
  <div class="payment-page">

    <h1>Paiement & Informations</h1>

    <!-- 🟡 FORMULAIRE INFOS CLIENT -->
    <form class="customer-form" @submit.prevent="submitForm">

      <h2>Informations personnelles</h2>

      <label>Nom complet</label>
      <input v-model="customer.name" required />

      <label>Email</label>
      <input v-model="customer.email" type="email" required />

      <label>Adresse</label>
      <input v-model="customer.address" required />

      <label>Code Postal</label>
      <input v-model="customer.zip" required />

      <label>Ville</label>
      <input v-model="customer.city" required />

      <button type="submit" class="next-btn">
        Continuer vers le paiement
      </button>
    </form>

    <!-- 🟢 FORMULAIRE DE PAIEMENT STRIPE -->
    <div v-if="showPayment" class="payment-container">
      <h2>Paiement sécurisé</h2>

      <div id="payment-element"></div>

      <button class="pay-btn" @click="submitPayment">
        Procéder au paiement
      </button>

      <p class="error" v-if="paymentError">{{ paymentError }}</p>
    </div>

    <!-- RÉCAP PANIER -->
    <div class="summary">
      <h2>Votre commande</h2>
      <div v-for="item in cart.items" :key="item.id" class="line">
        <p>{{ item.name }} (x{{ item.qty }})</p>
        <p>{{ item.price * item.qty }} €</p>
      </div>
      <h3>Total : {{ cart.totalPrice }} €</h3>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCartStore } from "@/stores/CartStore";
import { loadStripe } from "@stripe/stripe-js";

const cart = useCartStore();
const showPayment = ref(false);
const paymentError = ref("");

// 🟡 Infos client avant paiement
const customer = ref({
  name: "",
  email: "",
  address: "",
  zip: "",
  city: "",
});

// 🟢 Clé publique Stripe
let stripe;
onMounted(async () => {
stripe = await loadStripe("pk_live_51Sb60MQc1eBzuYmmPdLgXQw2hWuGWVmwJwjVjjDT7Q1ZE0XAwoDBUULa8phbJr9CRbNFYUHysfl8nDwXSHRWCtIr00rZBmR0Tb");
});

let elements;
let clientSecret;

// Étape 1 : envoi des infos client → affichage Stripe
const submitForm = async () => {
  showPayment.value = true;

  // Montant total en centimes
  const amount = Math.round(cart.totalPrice * 100);

  // Appel backend Netlify pour créer le PaymentIntent
  const res = await fetch("/.netlify/functions/create-payment-intent", {
    method: "POST",
    body: JSON.stringify({
      amount,
      customer: customer.value,
    }),
  });

  const data = await res.json();
  clientSecret = data.clientSecret;

  elements = stripe.elements({ clientSecret });

  const paymentElement = elements.create("payment");
  paymentElement.mount("#payment-element");
};

// Étape 2 : paiement final
const submitPayment = async () => {
  const { error } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: window.location.origin + "/success",
    },
  });

  if (error) {
    paymentError.value = error.message;
  }
};
</script>

<style scoped>
.payment-page {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

.customer-form,
.payment-container,
.summary {
  background: #f3f3f3;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-top: 10px;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #aaa;
  margin-top: 4px;
}

.next-btn,
.pay-btn {
  background: gold;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 20px;
  font-weight: bold;
}

.line {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
}
.error {
  color: red;
}
</style>
