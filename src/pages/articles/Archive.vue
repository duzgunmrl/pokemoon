<template>
  <div class="archive">
    <h1>Archive</h1>
    <p>Voici notre sélection exclusive de pièces d’archive, des trésors rares à (re)découvrir dès maintenant.</p>

    <div class="products">
      <div v-for="product in archivesProducts" :key="product.id" class="product">
        <div class="card">
          <div class="card-front">
            <img :src="getImage(product.image)" :alt="product.name" />
            <h3>{{ product.name }}</h3>
            <p class="price">{{ product.price }}</p>
          </div>
          <div class="card-back">
            <p class="description">{{ product.description }}</p>
            <div class="detail">
              <p>État : {{ product.etat }}</p>
              <p>Taille : {{ product.taille }}</p>
            </div>
            <a :href="'https://wa.me/+33768162985?text=Je%20veux%20acheter%20' + product.name + '%20à%20' + product.price "
              target="_blank">
              <button class="buy-button">Acheter maintenant !</button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="currency-converter-section">
      <p>If you want to know our prices in dollars, pounds, and yen, you can use our real-time currency converter.</p>
      <router-link to="/conversion">
        <button class="currency-button">Go to Currency Converter</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useArchiveStore } from '@/stores/archiveStore';
import {onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});

const archivestore = useArchiveStore();
const archivesProducts = archivestore.archivesProducts;

const getImage = (image) => {
  return new URL(image, import.meta.url).href;
};

</script>

<style scoped>
.archive {
  text-align: center;
  padding: 20px;
}
p {
  color: #a68c53;
  font-size: 15px;
}

</style>
