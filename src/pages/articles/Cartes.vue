<template>
  <div class="cartes">
    <h1>Cartes</h1>
    <p>Plongez dans notre sélection exclusive de cartes à l'unité.</p>
    <p>Toutes les cartes sont envoyées sous sleeve ou sleeve+toploader</p>

    <!-- Liste cartes -->
    <div class="products">
      <div v-for="product in cartesProducts" :key="product.id" class="product">
        <div class="card">
          <div class="card-front">
            <div class="image-slider">
              <img v-if="currentImageIndex[product.id] === 0" :src="product.images[0]" :alt="product.name" />
              <img v-if="currentImageIndex[product.id] === 1" :src="product.images[1]" :alt="product.name + ' alternate'" />
            </div>
            <h3>{{ product.name }}</h3>
            <p class="price">{{ product.price }}</p>
          </div>
          <div class="card-back">
            <p class="description">{{ product.description }}</p>
            <div class="detail">
              <div class="Collection">
                <p> Collection : {{ product.collection }}</p>
              </div>
            </div>
            <a :href="'https://wa.me/+33768162985?text=Je%20veux%20acheter%20le%20' + product.name + '%20à%20' + product.price + '€.'" target="_blank">
              <button class="buy-button">Acheter maintenant !</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { usecartesStore } from '@/stores/cartesStore'; // Import correct du store

onMounted(() => {
  window.scrollTo(0, 0);
});

// Accéder à la store de cartes
const cartesStore = usecartesStore(); // Utilisation correcte de Pinia store
const cartesProducts = cartesStore.cartesProducts; // Accéder à l'état cartesProducts

// Gérer le carrousel d'images pour chaque produit
const currentImageIndex = ref({});
onMounted(() => {
  cartesProducts.forEach((product) => {
    currentImageIndex.value[product.id] = 0;
    setInterval(() => {
      currentImageIndex.value[product.id] = (currentImageIndex.value[product.id] + 1) % 2;
    }, 5000); // Change l'image toutes les 5 secondes
  });
});
</script>

<style scoped>
.cartes {
  text-align: center;
  padding: 20px;
}
p {
  color: #a68c53;
  font-size: 15px;
}

</style>
