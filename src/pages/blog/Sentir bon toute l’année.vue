<template>
    <div class="article-container">
      <!-- Introduction -->
      <section class="intro">
        <p class="intro-text">
          Guide pour sentir bon toute l’année : De l’hiver à l’été, découvrez les parfums qui vous accompagneront
        </p>
      </section>
  
      <!-- Hiver : Nasomatto Pardon – Une chaleur mystérieuse pour les froids hivernaux -->
      <section class="section">
        <h2>Hiver : Nasomatto Pardon – Une chaleur mystérieuse pour les froids hivernaux</h2>
        <p>
          L’hiver appelle des senteurs réconfortantes et enveloppantes, qui viennent réchauffer l'air glacé. Nasomatto Pardon est un parfum complexe et profond, où la note principale du chocolat noir s'exprime de manière mystérieuse et envoûtante. Enveloppé de bois, de musc et de patchouli, ce parfum évoque une chaleur douce et réconfortante, une sensation de confort au cœur de l'hiver. C’est un parfum qui a la douceur et la profondeur d'un chocolat intense, fondant sur la peau comme une caresse chaleureuse. Il réchauffe sans écraser, parfait pour les journées froides où l’on cherche à se sentir bien dans sa peau.
        </p>
        <img src="https://cdn.50-ml.com/media/catalog/product/n/a/nasomatto_pardon_p_4.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=540&width=540" alt="Nasomatto Pardon" class="article-image" />
      </section>
  
      <!-- Printemps : Zoologist Rabbit – La fraîcheur gourmande du printemps -->
      <section class="section">
        <h2>Printemps : Zoologist Rabbit – La fraîcheur gourmande du printemps</h2>
        <p>
          Le printemps, c’est la renaissance, le souffle frais de la nature après l'hiver. Pour cette saison, Zoologist Rabbit est un parfum joyeux, lumineux, presque espiègle. La note de carotte s’associe harmonieusement avec des accents de biscuit, créant une atmosphère gourmande et douce, comme un jardin en pleine floraison. Avec une touche de fleurs et un léger zeste d'agrumes, ce parfum capte toute l’énergie printanière. Il nous rappelle le parfum des premiers rayons de soleil, des herbes fraîches et des gourmandises printanières. C’est un parfum léger et sucré, une touche d’élégance naïve pour réveiller les sens après l’hiver.
        </p>
        <img src="https://cdn.50-ml.com/media/catalog/product/z/o/zoologist_rabbit_extrait_de_parfum_60_ml_3.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=540&width=540" alt="Nasomatto Pardon" class="article-image" />
      </section>
  
      <!-- Été : Nishane Hacivat – Une fraîcheur audacieuse qui bouscule la chaleur estivale -->
      <section class="section">
        <h2>Été : Nishane Hacivat – Une fraîcheur audacieuse qui bouscule la chaleur estivale</h2>
        <p>
          L’été, c’est la chaleur, la lumière intense, la joie des journées longues et des soirées tropicales. Pour capter cette énergie, Nishane Hacivat est un choix évident. Ce parfum se distingue par son ananas acidulé, sa note boisée et sa touche de jasmin. Il est vibrant, frais, et a quelque chose d’irrévérencieux, un peu comme l’été lui-même. En le portant, vous avez l’impression de sentir l’air chaud du matin sur votre peau, d’être dans un jardin de fruits mûrs, où l’intensité du soleil et la fraîcheur de l’agrume se rencontrent dans une danse parfumée. Hacivat est une invitation à un été lumineux et audacieux, à l’image de la saison.
        </p>
        <img src="https://kaneen.com/media/catalog/product//H/a/Hacivat-Perfume-by-Nishane-Extraits-de-Parfum-For-Unisex-100_ml-_2-6301d3a3.webp" alt="Nasomatto Pardon" class="article-image" />
      </section>
  
      <!-- Automne : Angels Share by Kilian – Un parfum riche et envoûtant pour les soirées automnales -->
      <section class="section">
        <h2>Automne : Angels Share by Kilian – Un parfum riche et envoûtant pour les soirées automnales</h2>
        <p>
          L’automne est une saison de transition, une période où les températures chutent, où les feuilles tombent et où les soirées se font plus fraîches. Angels Share de Kilian est la fragrance idéale pour cette période. Avec ses notes de cognac, de cannelle, de bois de santal, et une touche d’amaretto, il crée une ambiance chaleureuse et enveloppante, presque spiritueuse. Ce parfum évoque des soirées au coin du feu, un verre de whisky à la main, un parfum chaleureux et riche qui vous enveloppe sans être étouffant. Il est l’essence même de l’automne : riche, complexe, réconfortant. Un parfum à la fois boisé, épicé et gourmand, qui fait se sentir chez soi, peu importe où l’on est.
        </p>
        <img src="https://m.bykilian.fr/media/images/products/833x968/kl_sku_N36E01_833x968_0.jpg" alt="Angels Share by Kilian" class="article-image" />
      </section>
  
      <!-- Navigation -->
      <div class="navigation-buttons">
        <button @click="goToHome">Voir tous les articles</button>
        <button @click="goToNextArticle">Lire le prochain article</button>
      </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Fonction pour naviguer vers la page d'accueil
const goToHome = () => {
  router.push('/');
};

// Fonction pour naviguer vers l'article suivant
const goToNextArticle = () => {
  router.push('/blog/le-fantome-de-la-mode'); // Remplacer avec le chemin réel du prochain article
};

onMounted(() => {
  window.scrollTo(0, 0); // Scroller directement en haut de la page
});
</script>

<style scoped>
.article-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.section {
  margin-bottom: 40px;
}

.article-image {
  width: 30%;
  height: auto;
  display: block;        /* Pour que l'image se comporte comme un bloc */
  margin: 0 auto;        /* Centrer l'image horizontalement */
  border-radius: 8px;
}

.intro-text {
  margin-top: 10px;
  font-weight: bold;
  margin-top: 50px;
  text-transform: uppercase; /* Met le texte en majuscule */
  text-align: center;
  font-size: 40px;
  letter-spacing: 1px;
  font-family: 'Barriecito', cursive;
  color: #010101;
}

h2 {
  margin-top: 10px;
  font-weight: bold;
  margin-top: 50px;
  text-transform: uppercase; /* Met le texte en majuscule */
  font-size: 30px;
  letter-spacing: 1px;
  font-family: 'Barriecito', cursive;
  color: #010101;
}

p {
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
  margin-top: 10px;
  font-family: 'Roboto Mono', monospace;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

button {
  background-color: #333;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #555;
}
</style>
