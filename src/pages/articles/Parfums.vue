<template>
  <div class="parfums">
    <h1>Parfums</h1>
    <p>Notre collection de parfums exclusifs et de niche, sélectionnée avec soin.</p>

    <!-- Liste des Parfums -->
    <div class="products">
      <div v-for="product in parfumsProducts" :key="product.id" class="product">
        <div class="card">
          <div class="card-front">
            <img :src="product.image" :alt="product.name" />
            <h3>{{ product.name }}</h3>
            <p class="price">{{ product.price }}€</p>
          </div>
          <div class="card-back">
            <p class="description">{{ product.description }}</p>
            <div class="olfactory-pyramid">
              <div class="note top">
                <p>Note de tête : {{ product.olfactoryNotes.top }}</p>
              </div>
              <div class="note middle">
                <p>Note de cœur : {{ product.olfactoryNotes.middle }}</p>
              </div>
              <div class="note bottom">
                <p>Note de fond : {{ product .olfactoryNotes.bottom }}</p>
              </div>
            </div>
            <a :href="'https://wa.me/+33768162985?text=Je%20veux%20acheter%20' + product.name + '%20à%20' + product.price + '€.'"
              target="_blank">
              <button class="buy-button">Acheter maintenant !</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <ParfumInstaButton>
    Un parfum à gagner sur instagram 
    </ParfumInstaButton>

    <!-- Section Convertisseur de devises -->
    <div class="currency-converter-section">
      <p>If you want to know our prices in dollars, pounds and yen, you can use our real-time currency converter.</p>
      <router-link to="/conversion">
        <button class="currency-button">Go to Currency Converter</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useParfumsStore } from '@/stores/parfumsStore';
import ParfumInstaButton from '@/components/ParfumInstaButton.vue';

// Accéder à la store
const parfumsStore = useParfumsStore();
const parfumsProducts = ref(parfumsStore.parfumsProducts);



// Initialisation du scroll
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>


<style scoped>
.parfums {
  text-align: center;
  padding: 20px;
}

p {
  color: #a68c53;
  font-size: 15px;
}

</style>
