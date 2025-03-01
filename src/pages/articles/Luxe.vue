<template>
  <div class="luxe">
    <h1>Luxe</h1>
    <p>Plongez dans notre sélection exclusive de prêt-à-porter de luxe, où chaque pièce rare et iconique incarne l’excellence et la distinction.</p>

    <!-- Liste Luxe -->
    <div class="products">

      <!-- Luxe 1 - Rick Owens - Basic Rib Tank Mahogany -->
      <div class="product">
        <div class="card">
          <div class="card-front">
            <!-- Carrousel d'images pour l'article Rick Owens - Basic Rib Tank Mahogany -->
            <div class="image-slider">
              <img v-if="currentImageIndex === 0" src="@/assets/produit-rickowenstanktop.png" alt="Rick Owens - Basic Rib Tank Mahogany" />
              <img v-if="currentImageIndex === 1" src="@/assets/produit-rickowenstanktop2.png" alt="Rick Owens - Basic Rib Tank Mahogany alternate" />
            </div>
            <h3>Rick Owens - Basic Rib Tank Mahogany</h3>
            <p class="price">380€</p>
          </div>
          <div class="card-back">
            <p class="description">Débardeur fin avec la couture unique signature au centre du dos</p>

            <!-- Description -->
            <div class="detail">
              <div class="Collection">
                <p> Collection : HOLLYWOOD SS25</p>
              </div>
              <div class="Taille">
                <p>Taille : 40 </p>
              </div>
              <div class="Composition">
                <p>Composition : 88% Viscose, 12% Soie </p>
              </div>
            </div>

            <a href="https://wa.me/+33768162985?text=Je%20veux%20acheter%20le%20Rick%20Owens%20Basic%20Rib%20Tank%20Mahogany%20à%20380€." target="_blank">
              <button class="buy-button">Acheter maintenant !</button>
            </a>
          </div>
        </div>
      </div>

       <!-- Luxe 2 - Maison Margiela Supreme - Patchwork Faux Fur Coat -->
       <div class="product">
        <div class="card">
          <div class="card-front">
            <!-- Carrousel d'images pour l'article Maison Margiela Supreme - Patchwork Faux Fur Coat -->
            <div class="image-slider">
              <img v-if="currentImageIndex === 0" src="@/assets/produit-margielafauxfur.png" alt="Maison Margiela Supreme - Patchwork Faux Fur Coat" />
              <img v-if="currentImageIndex === 1" src="@/assets/produit-margielafauxfur2.png" alt="Maison Margiela Supreme - Patchwork Faux Fur Coat alternate" />
            </div>
            <h3>Maison Margiela Supreme - Patchwork Faux Fur Coat</h3>
            <p class="price">2160€</p>
          </div>
          <div class="card-back">
            <p class="description">Fausse fourrure à motif patchwork et doublure en viscose. Fermeture boutonnée sur le devant avec poches passepoilées sur le devant et poches intérieures sur la poitrine. Logo brodé et signature numérique MM6 sur la poche intérieure. Ligne de couture blanche MM6 au dos.</p>

            <!-- Description -->
            <div class="detail">
              <div class="Collection">
                <p> Collection : SS24</p>
              </div>
              <div class="Taille">
                <p>Taille : L </p>
              </div>
              <div class="Composition">
                <p>Composition : Fausse fourrure, intérieur en viscose </p>
              </div>
            </div>

            <a href="https://wa.me/+33768162985?text=Je%20veux%20acheter%20le%20Maison%20Margiela%20Supreme%20Patchwork%20Faux%20Fur%20Coat%20à%202160€." target="_blank">
              <button class="buy-button">Acheter maintenant !</button>
            </a>
          </div>
        </div>
      </div>

      <!-- Luxe 3 - Junya Watanabe MAN - Patchwork Jacket Multi -->
      <div class="product">
        <div class="card">
          <div class="card-front">
            <!-- Carrousel d'images pour l'article Junya Watanabe MAN - Patchwork Jacket Multi -->
            <div class="image-slider">
              <img v-if="currentImageIndex === 0" src="@/assets/produit-junya.png" alt="Junya Watanabe MAN - Patchwork Jacket Multi" />
              <img v-if="currentImageIndex === 1" src="@/assets/produit-junya2.png" alt="MJunya Watanabe MAN - Patchwork Jacket Multi alternate" />
            </div>
            <h3>Junya Watanabe MAN - Patchwork Jacket Multi</h3>
            <p class="price">3000€</p>
          </div>
          <div class="card-back">
            <p class="description">Détail patchwork multi-tissus avec revers crantés contrastés. MADE IN JAPAN</p>

            <!-- Description -->
            <div class="detail">
              <div class="Collection">
                <p> Collection : SS25</p>
              </div>
              <div class="Taille">
                <p>Taille : XL </p>
              </div>
              <div class="Composition">
                <p>Composition : 50 % coton, 36 % laine, 7 % polyester, 6 % rayonne, 1 % nylon </p>
              </div>
            </div>

            <a href="https://wa.me/+33768162985?text=Je%20veux%20acheter%20le%20Junya%20Watanabe%20MAN%20Patchwork%20Jacket%20Multi%20à%203000€." target="_blank">
              <button class="buy-button">Acheter maintenant !</button>
            </a>
          </div>
        </div>
      </div>

      <!-- Luxe 4 - Yves Saint Laurent Veste Sergé Gainsbourg -->
      <div class="product">
        <div class="card">
          <div class="card-front">
            <!-- Carrousel d'images pour l'article Yves Saint Laurent Veste Sergé Gainsbourg -->
            <div class="image-slider">
              <img v-if="currentImageIndex === 0" src="@/assets/produit-saintlaurent.png" alt="Yves Saint Laurent Vest Sergé Gainsbourg" />
              <img v-if="currentImageIndex === 1" src="@/assets/produit-saintlaurent2.png" alt="Yves Saint Laurent Vest Sergé Gainsbourg alternate" />
            </div>
            <h3>Yves Saint Laurent - Veste Sergé Gainsbourg</h3>
            <p class="price">2800€</p>
          </div>
          <div class="card-back">
            <p class="description">Veste à simple boutonnage munie de revers en pointe. Sous la direction artistique d’Anthony Vaccarello, Saint Laurent a reproduit l’iconique veste à rayures tennis de Serge Gainsbourg pour accompagner l’ouverture de la Maison Gainsbourg. Reproduction en édition limitée. Fabriquée en Italie</p>

            <!-- Description -->
            <div class="detail">
              <div class="Collection">
                <p> Collection : FW24</p>
              </div>
              <div class="Taille">
                <p>Taille : 52 </p>
              </div>
              <div class="Composition">
                <p>Composition : 95% Laine, 5% Polyester </p>
              </div>
            </div>

            <a href="https://wa.me/+33768162985?text=Je%20veux%20acheter%20le%20Yves%20Saint%20Laurent%20Veste%20Sergé%20Gainsbourg%20à%201200€." target="_blank">
              <button class="buy-button">Acheter maintenant !</button>
            </a>
          </div>
        </div>
      </div>

       <!-- Luxe 5 - Balenciaga - Botte Steroid -->
       <div class="product">
        <div class="card">
          <div class="card-front">
            <!-- Carrousel d'images pour l'article Balenciaga - Botte Steroid -->
            <div class="image-slider">
              <img v-if="currentImageIndex === 0" src="@/assets/produit-balenciagasteroid.png" alt="Balenciaga - Botte Steroid" />
              <img v-if="currentImageIndex === 1" src="@/assets/produit-balenciagasteroid2.png" alt="Balenciaga - Botte Steroid alternate" />
            </div>
            <h3>Balenciaga - Botte Steroid</h3>
            <p class="price">1200€</p>
          </div>
          <div class="card-back">
            <p class="description">La botte Steroid de Balenciaga est un modèle audacieux et futuriste, caractérisé par une silhouette massive et sculpturale. Avec son design exagéré et sa semelle surdimensionnée, elle s’inscrit dans l’esthétique avant-gardiste de la marque. Mélangeant inspirations utilitaires et formes organiques, cette botte repousse les limites du footwear moderne.Fabriquée en Italie</p>

            <!-- Description -->
            <div class="detail">
              <div class="Collection">
                <p> Collection : SS23</p>
              </div>
              <div class="Taille">
                <p>Taille : 40 </p>
              </div>
              <div class="Composition">
                <p>Composition : EVA (éthylène-acétate de vinyle) </p>
              </div>
            </div>

            <a href="https://wa.me/+33768162985?text=Je%20veux%20acheter%20le%20Balenciaga%20Botte%20Steroid%20à%201200€." target="_blank">
              <button class="buy-button">Acheter maintenant !</button>
            </a>
          </div>
        </div>
      </div>

      <!-- Luxe 6 - Bottega Veneta - Cravate en cuir à imprimé léopard -->
      <div class="product">
        <div class="card">
          <div class="card-front">
            <!-- Carrousel d'images pour l'article Bottega Veneta - Cravate en cuir à imprimé léopard -->
            <div class="image-slider">
              <img v-if="currentImageIndex === 0" src="@/assets/produit-bottegacravate.png" alt="Bottega Veneta - Cravate en cuir à imprimé léopard" />
              <img v-if="currentImageIndex === 1" src="@/assets/produit-bottegacravate2.png" alt="Bottega Veneta - Cravate en cuir à imprimé léopardalternate" />
            </div>
            <h3>Bottega Veneta - Cravate en cuir à imprimé léopard</h3>
            <p class="price">880€</p>
          </div>
          <div class="card-back">
            <p class="description">Cravate en cuir de veau à imprimé léopard. Longueur : 150 cm. Largeur : 4 cm. Fabriquée en Italie</p>

            <!-- Description -->
            <div class="detail">
              <div class="Collection">
                <p> Collection : FW24</p>
              </div>
              <div class="Taille">
                <p>Taille unique </p>
              </div>
              <div class="Composition">
                <p>Composition : 100 % cuir de veau </p>
              </div>
            </div>

            <a href="https://wa.me/+33768162985?text=Je%20veux%20acheter%20la%20Bottega%20Veneta%20Cravate%20en%20cuir%20à%20imprimé%20léopard%20à%20880€." target="_blank">
              <button class="buy-button">Acheter maintenant !</button>
            </a>
          </div>
        </div>
      </div>

      <!-- Luxe 7 - Louis Vuitton - Sac Speedy 50 -->
      <div class="product">
        <div class="card">
          <div class="card-front">
            <!-- Carrousel d'images pour l'article Louis Vuitton - Sac Speedy 50 -->
            <div class="image-slider">
              <img v-if="currentImageIndex === 0" src="@/assets/produit-speedy.png" alt="Louis Vuitton - Sac Speedy 50" />
              <img v-if="currentImageIndex === 1" src="@/assets/produit-speedy2.png" alt="Louis Vuitton - Sac Speedy 50" />
            </div>
            <h3>Louis Vuitton - Sac Speedy 50 </h3>
            <p class="price">15000€</p>
          </div>
          <div class="card-back">
            <p class="description">Ce sac Speedy P9 Bandoulière 50 Monogram est revisité par le directeur artistique Pharrell Williams en cuir de veau souple et somptueux à la nuance primaire éclatante. Le motif Monogram est imprimé sur le Speedy à l'aide d'une technique de sérigraphie sophistiquée qui reproduit l'aspect sergé du Monogram sur la toile. Il adopte un effet flouté qui donne l'illusion d'avoir été peint à la main.</p>

            <!-- Description -->
            <div class="detail">
              <div class="Collection">
                <p> Collection : SS24</p>
              </div>
              <div class="Taille">
                <p>Taille unique </p>
              </div>
              <div class="Composition">
                <p>Composition : 100 % cuir de veau  souple, Doublure en cuir d'agneau</p>
              </div>
            </div>

            <a href="https://wa.me/+33768162985?text=Je%20veux%20acheter%20le%20Louis%20Vuitton%20Sac%20Speedy%2050%20à%2015000€." target="_blank">
              <button class="buy-button">Acheter maintenant !</button>
            </a>
          </div>
        </div>
      </div>

      <!-- Luxe 8 - Prada - Double-breasted Kid Mohair Jacket -->
      <div class="product">
        <div class="card">
          <div class="card-front">
            <!-- Carrousel d'images pour l'article Prada - Double-breasted Kid Mohair Jacket -->
            <div class="image-slider">
              <img v-if="currentImageIndex === 0" src="@/assets/produit-prada.png" alt="Prada - Double-breasted Kid Mohair Jacket" />
              <img v-if="currentImageIndex === 1" src="@/assets/produit-prada2.png" alt="Prada - Double-breasted Kid Mohair Jacket alternate" />
            </div>
            <h3>Prada - Double-breasted Kid Mohair Jacket </h3>
            <p class="price">4000€</p>
          </div>
          <div class="card-back">
            <p class="description">Cette veste alie modernité et classe. Vous ne passerez pas inaperçu grace à ses manches avec revers et étiquette Sartorial. Fabriquée en Italie.</p>

            <!-- Description -->
            <div class="detail">
              <div class="Collection">
                <p> Collection : FW24</p>
              </div>
              <div class="Taille">
                <p>Taille : 40 </p>
              </div>
              <div class="Composition">
                <p>Composition : 60% Mohair, 40% Laine Vierge</p>
              </div>
            </div>

            <a href="https://wa.me/+33768162985?text=Je%20veux%20acheter%20le%20Prada%20Double%20breasted%20Kid%20Mohair%20Jacket%20à%204000€." target="_blank">
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
.luxe {
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
