<template>
  <div class="sneakers">
    <h1>Sneakers</h1>
    <p>Découvrez notre sélection de Sneakers iconiques et limitées</p>

    <!-- Liste des Sneakers -->
    <div class="products">
      <div v-for="product in sneakersProducts" :key="product.id" class="product">
        <div class="card">
          <div class="card-front">
            <img :src="product.image" :alt="product.name" />
            <h3>{{ product.name }}</h3>
            <p class="price">{{ product.price }}€</p>
          </div>
          <div class="card-back">
            <p class="description">{{ product.description }}</p>
            <div class="detail">
              <div class="État">
                <p> État : {{ product.condition }}</p>
              </div>
              <div class="SKU">
                <p> SKU : {{ product.sku }}</p>
              </div>
              <div class="Taille">
                <p>Pointure : {{ product.size }}</p>
              </div>
            </div>
            <a :href="'https://wa.me/+33768162985?text=Je%20veux%20acheter%20le%20' + product.name + '%20à%20' + product.price + '€.'" target="_blank">
              <button class="buy-button">Acheter maintenant !</button>
            </a>
          </div>
        </div>
      </div>
    </div>

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
import { useSneakersStore } from '@/stores/sneakersStore';

// Accéder à la store
const sneakersStore = useSneakersStore();
const sneakersProducts = ref(sneakersStore.sneakersProducts);

// Initialisation du scroll
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.sneakers {
  text-align: center;
  padding: 20px;
}

p {
  color: #a68c53;
  font-size: 15px;
}

</style>
