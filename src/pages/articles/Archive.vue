<template>
    <div class="archive">
      <h1>Archive</h1>
      <p>Voici notre sélection exclusive de pièces d’archive, des trésors rares à (re)découvrir dès maintenant.</p>
  
      <!-- Liste des Archives -->
      <div class="products">
        <!-- Archive 1 - Alexander Digenova - Cigarette Tee -->
        <div class="product">
          <div class="card">
            <div class="card-front">
              <img src="@/assets/produit-cigarettetee.png" alt="Alexander Digenova - Cigarette Tee" />
              <h3>Alexander Digenova - Cigarette Tee</h3>
              <p class="price">350€</p>
            </div>
            <div class="card-back">
              <p class="description">Cette pièce rare, conçue par le designer Alexander Digenova, est un véritable collector dans l’univers du streetwear underground. Inspiré par l’esthétique rebelle et provocante, ce t-shirt arbore un design audacieux qui reflète l’attitude subversive de la mode contemporaine.</p>
  
              <!-- Description -->
              <div class="detail">
                <div class="État">
                  <p> État : Neuf, avec étiquette</p>
                </div>
                <div class="Taille">
                  <p>Taille : L </p>
                </div>
              </div>
  
              <a href="https://wa.me/+33768162985?text=Je%20veux%20acheter%20le%20Alexander%20Digenova%20-%20Cigarette%20Tee%20à%20350€." target="_blank">
                <button class="buy-button">Acheter maintenant !</button>
              </a>
            </div>
          </div>
        </div>
  
        <!-- Archive 2 - Raf Simons - RIOT Bomber -->
        <div class="product">
          <div class="card">
            <div class="card-front">
              <!-- Carrousel d'images pour l'article Raf Simons - RIOT Bomber -->
              <div class="image-slider">
                <img v-if="currentImageIndex === 0" src="@/assets/produit-riot1.png" alt="Raf Simons - RIOT Bomber" />
                <img v-if="currentImageIndex === 1" src="@/assets/produit-riot2.png" alt="Raf Simons - RIOT Bomber alternate" />
              </div>
              <h3>Raf Simons - RIOT Bomber</h3>
              <p class="price">40 000€</p>
            </div>
            <div class="card-back">
              <p class="description">Le Raf Simons RIOT Bomber est une veste iconique de la collection AW01 "Riot, Riot, Riot", inspirée par l’esthétique du streetwear et la rébellion urbaine. Avec ses détails distinctifs et son design avant-gardiste, elle incarne l'esprit de la mode alternative de l'artiste belge.</p>
  
              <!-- Description -->
              <div class="detail">
                <div class="État">
                  <p> État : Très bon état</p>
                </div>
                <div class="Taille">
                  <p>Taille : M </p>
                </div>
              </div>
  
              <a href="https://wa.me/+33768162985?text=Je%20veux%20acheter%20le%20Raf%20Simons%20RIOT%20Bomber%20à%2040%20000€." target="_blank">
                <button class="buy-button">Acheter maintenant !</button>
              </a>
            </div>
          </div>
        </div>
  
        <!-- Archive 3 - Chrome Hearts Rick Owens - Geobasket -->
        <div class="product">
          <div class="card">
            <div class="card-front">
              <img src="@/assets/produit-geobasket.png" alt="Chrome Hearts Rick Owens - Geobasket" />
              <h3>Chrome Hearts Rick Owens - Geobasket</h3>
              <p class="price">12 400€</p>
            </div>
            <div class="card-back">
              <p class="description">Cette collaboration entre Chrome Hearts et Rick Owens a marqué un tournant dans l’univers de la mode, fusionnant le luxe brut de Chrome Hearts avec l’avant-garde de Rick Owens. Le Geobasket est une pièce iconique, un sneaker de haute couture à la silhouette audacieuse, conçue pour les esprits créatifs et les passionnés de mode qui recherchent l’exceptionnel.</p>
  
              <!-- Description -->
              <div class="detail">
                <div class="État">
                  <p> État : Bon état</p>
                </div>
                <div class="Taille">
                  <p>Pointure : 42 </p>
                </div>
              </div>
  
              <a href="https://wa.me/+33768162985?text=Je%20veux%20acheter%20le%20Chrome%20Hearts%20Rick%20Owens%20Geobasket%20à%2012%20400€." target="_blank">
                <button class="buy-button">Acheter maintenant !</button>
              </a>
            </div>
          </div>
        </div>
  
      </div>
    </div>

    <div class="currency-converter-section">
    <p>If you want to know our prices in dollars, pounds and yen, you can use our real-time currency converter.</p>
    <router-link to="/conversion"> <!-- Enlève .vue -->
        <button class="currency-button">Go to Currency Converter</button>
    </router-link>
  </div>
  
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const currentImageIndex = ref(0);
  
  // Fonction de défilement automatique des images toutes les 4 secondes pour l'article Raf Simons - RIOT Bomber
  onMounted(() => {
    setInterval(() => {
      currentImageIndex.value = (currentImageIndex.value + 1) % 2; // Bascule entre 0 et 1 pour l'alterner entre les images
    }, 5000); // Change l'image toutes les 5 secondes
  });
  </script>
  
  <style scoped>
  .archive {
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
  