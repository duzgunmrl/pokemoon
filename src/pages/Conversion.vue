<template>
    <div class="conversion">
      <h1>Convertisseur</h1>
      <p>Enter an amount in euros and get its value in dollars, pounds sterling and yen.</p>
  
      <input v-model="amountEUR" type="number" placeholder="Amount in €" />
      <button @click="convertCurrency">Convertir</button>
  
      <p v-if="amountUSD !== null">
        {{ amountEUR }}€ = <span class="result">{{ amountUSD }}$</span>
      </p>
      <p v-if="amountGBP !== null">
        {{ amountEUR }}€ = <span class="result">{{ amountGBP }}£</span>
      </p>
      <p v-if="amountJPY !== null">
        {{ amountEUR }}€ = <span class="result">{{ amountJPY }}¥</span>
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const amountEUR = ref(""); // Valeur en €
  const amountUSD = ref(null); // Résultat en $
  const amountGBP = ref(null); // Résultat en £
  const amountJPY = ref(null); // Résultat en ¥
  
  async function convertCurrency() {
    if (!amountEUR.value) return;
  
    try {
      const response = await fetch("https://v6.exchangerate-api.com/v6/5510a88b0806809e5fd84f60/latest/EUR");
      const data = await response.json();
      const rateUSD = data.conversion_rates.USD; // Taux EUR ➝ USD
      const rateGBP = data.conversion_rates.GBP; // Taux EUR ➝ GBP
      const rateJPY = data.conversion_rates.JPY; // Taux EUR ➝ JPY
  
      amountUSD.value = (amountEUR.value * rateUSD).toFixed(2);
      amountGBP.value = (amountEUR.value * rateGBP).toFixed(2);
      amountJPY.value = (amountEUR.value * rateJPY).toFixed(2);
    } catch (error) {
      amountUSD.value = "Erreur...";
      amountGBP.value = "Erreur...";
      amountJPY.value = "Erreur...";
    }
  }
  
  </script>
  
  <style scoped>
  .conversion {
    text-align: center;
    padding: 20px;
  }
  
  h1 {
    margin-top: 10px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 60px;
    letter-spacing: 1px;
    font-family: 'Barriecito', cursive;
    color: #010101;  
}
  
  input {
    padding: 10px;
    font-size: 20px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    background: #777;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #a68c53;
}
  
  .result {
    font-weight: bold;
    color: green;
    font-size: 20px;
  }

  p {
    color: #a68c53;
    font-size: 20px;
  }
  </style>

