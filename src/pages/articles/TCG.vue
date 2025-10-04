<template>
  <div class="TCG">
    <h1>TCG</h1>
    <p>Découvrez notre sélection de produits du TCG Pokémon.</p>
    <p>Pour les précommandes, une seule commande par personne est autorisée afin de satisfaire le plus grand nombre de collectionneurs.</p>

    <div class="products">
      <div v-for="product in TCGProducts" :key="product.id" class="product">
        <div class="card">
          <div class="card-front">
            <img :src="getImage(product.image)" :alt="product.name" />            
            <h3>{{ product.name }}</h3>
            <p class="price">{{ product.price }}</p>
          </div>
          <div class="card-back">
            <p class="description">{{ product.description }}</p>
            <p class="stock">{{ product.stock }}</p>
            <a :href="'https://wa.me/+33768162985?text=Je%20veux%20acheter%20' + product.name + '%20à%20' + product.price "
              target="_blank">
              <button class="buy-button">Acheter maintenant !</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTCGStore } from '@/stores/TCGStore';
import {onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});

const TCGstore = useTCGStore();
const TCGProducts = TCGstore.TCGProducts;

const getImage = (image) => {
  return new URL(image, import.meta.url).href;
};

</script>

<style scoped>
.TCG {
  text-align: center;
  padding: 20px;
}
p {
  color: #a68c53;
  font-size: 15px;
}


</style>
