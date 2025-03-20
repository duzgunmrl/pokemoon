<template>
  <div class="musique">
    <h1>Musique</h1>
    <p>Plongez dans l'univers des vinyles ultra-rares et trouvez les pépites des plus grands artistes</p>

    <!-- Liste des Musiques -->
    <div class="products">
      <div v-for="product in musiqueProducts" :key="product.id" class="product">
        <div class="card">
          <div class="card-front">
            <img :src="product.image" :alt="product.name" />
            <h3>{{ product.name }}</h3>
            <p class="price">{{ product.price }}€</p>
          </div>
          <div class="card-back">
            <p class="description">{{ product.description }}</p>
            <!-- Description -->
            <div class="detail">
              <div class="Édition">
                <p> Édition : {{ product.edition }}</p>
              </div>
              <!-- Si un lien Spotify existe, l'intégrer -->
              <div v-if="product.spotifyEmbedUrl">
                <iframe
                  :src="product.spotifyEmbedUrl"
                  width="100%"
                  height="152"
                  frameborder="0"
                  style="border-radius:12px"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
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

    

    <div class="currency-converter-section">
      <p>If you want to know our prices in dollars, pounds, and yen, you can use our real-time currency converter.</p>
      <router-link to="/conversion">
        <button class="currency-button">Go to Currency Converter</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useMusiqueStore } from '@/stores/musiqueStore';

const musiqueStore = useMusiqueStore();
const musiqueProducts = computed(() => musiqueStore.getAllMusiqueProducts);

onMounted(() => {
  window.scrollTo(0, 0);
});

</script>

<style scoped>

  .musique {
    text-align: center;
    padding: 20px;
  }

  p {
  color: #a68c53;
  font-size: 15px;
  }

  </style>