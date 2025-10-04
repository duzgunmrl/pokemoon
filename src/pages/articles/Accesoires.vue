<template>
  <div class="accesoires">
    <h1>Accesoires</h1>
    <p>Découvrez notre sélection d'accessoires pour protéger votre collection.</p>

    <!-- Liste des accesoires -->
    <div class="products">
      <div v-for="product in accesoiresProducts" :key="product.id" class="product">
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
                <p> Dimensions : {{ product.condition }}</p>
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
import { ref, onMounted } from 'vue';
import { useaccesoiresStore } from '@/stores/accesoiresStore';

// Accéder à la store
const accesoiresStore = useaccesoiresStore();
const accesoiresProducts = ref(accesoiresStore.accesoiresProducts);

// Initialisation du scroll
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.accesoires {
  text-align: center;
  padding: 20px;
}

p {
  color: #a68c53;
  font-size: 15px;
}

</style>
