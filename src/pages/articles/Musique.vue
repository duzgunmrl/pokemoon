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
import { computed } from 'vue';
import { useMusiqueStore } from '@/stores/musiqueStore';

const musiqueStore = useMusiqueStore();
const musiqueProducts = computed(() => musiqueStore.getAllMusiqueProducts);

</script>


<style scoped>
  .musique {
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
  
  p {
    color: #a68c53;
    font-size: 15px;
  }
  
  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-evenly;
    margin-top: 30px;
  }
  
  .product {
    perspective: 1000px;
    width: calc(33.33% - 20px);
    max-width: 350px;
    margin-bottom: 30px;
  }
  
  .card {
    width: 100%;
    height: 400px;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }
  
  .product:hover .card {
    transform: rotateY(180deg);
  }
  
  .card-front,
  .card-back {
    position: absolute;
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .card-front {
    background-color: #fff;
    text-align: center;
  }
  
  .card-back {
    background-color: #f8f8f8;
    transform: rotateY(180deg);
    padding: 15px;
    text-align: center;
  }
  
  .card-front img {
    width: 100%;
    height: 250px;
    object-fit: contain;
    border-radius: 10px;
  }
  
  .card-front h3 {
    font-size: 22px;
    margin-top: 10px;
    color: #333;
  }
  
  .card-front .price {
    font-size: 18px;
    font-weight: bold;
    color: #a68c53;
    margin-top: 10px;
  }
  
  .card-back .description {
    color: #525252;
    font-size: 16px;
    margin-top: 10px;
    font-family: 'Bebas Neue', sans-serif;
  }
  
  .detail {
    margin-top: 20px;
    padding-top: 10px;
  }
  
  .buy-button {
    background-color: #777;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    margin-top: 20px;
  }
  
  .buy-button:hover {
    background-color: #a68c53;
  }

  .currency-converter-section {
    margin-top: 40px;
    text-align: center;
}

.currency-button {
    background-color: #a68c53;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 20px; /* Ajoute une marge en bas */
}

.currency-button:hover {
    background-color: #777;
}

  </style>