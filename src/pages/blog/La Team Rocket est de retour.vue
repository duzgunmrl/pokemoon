<template>
  <div class="article-container">
    <!-- Ici, la prop showSearchBar est passée à false -->
    
    <!-- Introduction -->
    <section class="intro">
      <p class="intro-text">
        La Team Rocket est de retour !
      </p>
    </section>

    <!-- Les débuts de Supreme -->
    <section class="section">
      <h2>Rivalités Destinées (EV10) : tout ce qu’il faut savoir sur la nouvelle extension</h2>
      <p>
        Depuis ses débuts, le JCC Pokémon a toujours célébré les liens uniques entre dresseurs et Pokémon — parfois amicaux, parfois compétitifs. Avec Rivalités Destinées, la nouvelle extension du TCG, cette dualité est mise à l’honneur : la passion, la détermination, et les affrontements qui forgent les plus grands dresseurs. Cette série explore l’idée que la rivalité n’est pas seulement un combat, mais aussi une source de progrès et de dépassement, à l’image des grandes histoires de la licence.
      </p>
      <p>
        Visuellement, Rivalités Destinées rend hommage à plusieurs générations de Pokémon. Les cartes regorgent de clins d’œil aux premières séries, tout en affichant un style artistique plus mature et détaillé. On y retrouve des Pokémon emblématiques mis en scène dans des duels intenses, aux côtés de nouvelles formes exclusives qui marquent l’évolution continue du TCG. Chaque carte raconte un fragment d’histoire, un moment de tension ou d’amitié qui rappelle pourquoi tant de fans continuent de collectionner depuis plus de vingt ans.
      </p>
      <p>
        Mais Rivalités Destinées, c’est aussi une célébration de la communauté. Les collectionneurs et joueurs s’y retrouvent autour d’une même émotion : la découverte. Booster après booster, c’est un peu la magie de l’enfance qui renaît à chaque ouverture de paquet. Et dans un monde où les séries s’enchaînent, cette extension rappelle que Pokémon reste avant tout une aventure humaine — faite de passion, de rivalité et de souvenirs partagés.
      </p>
    </section>

    <!-- La culture de l'exclusivité -->
    <section class="section">
      <h2>Le saviez-vous ? — La première extension dédiée à la Team Rocket (Base, 24 avril 2000)</h2>
      <p>
        Sortie en 2000, l’extension Team Rocket a marqué un tournant dans l’histoire du JCC Pokémon. Après les séries de base centrées sur les dresseurs héroïques, celle-ci a osé mettre en avant les méchants les plus emblématiques de la saga. Pour la première fois, les joueurs découvraient un univers plus sombre, plus provocateur, inspiré directement des aventures de Jessie, James et du mystérieux Giovanni. L’identité visuelle, plus ténébreuse et urbaine, rompait avec la douceur pastel des premiers boosters : un pari audacieux pour l’époque.
      </p>
      <p>
        Mais le vrai coup de génie de cette extension, c’était l’apparition des Pokémon “Obscurs” — appelés “Dark Pokémon” en version originale. Ces cartes représentaient des Pokémon ayant été capturés et corrompus par la Team Rocket, reconnaissables à leur nom : Dark Charizard, Dark Blastoise, Dark Gyarados… Avec leur regard menaçant et leurs attaques plus brutales, ces versions reflétaient un côté inédit du monde Pokémon : celui où la puissance prenait parfois le pas sur la bienveillance. Ces cartes sont aujourd’hui parmi les plus recherchées des collectionneurs nostalgiques.
      </p>
      <p>
        Au-delà de leurs illustrations iconiques, les cartes Team Rocket ont aussi contribué à faire grandir la communauté. Elles ont montré que l’univers Pokémon pouvait se décliner dans des tons plus matures, tout en gardant sa magie d’origine. Pour beaucoup de fans, cette série symbolise le passage de l’enfance à l’adolescence dans la culture Pokémon : un moment où les héros découvrent que le monde n’est pas toujours tout blanc ou tout noir… et que même un “Pokémon Obscur” peut cacher une histoire fascinante.
      </p>
    </section>

    <!-- Boutons de navigation -->
    <div class="navigation-buttons">
      <button @click="goToHome">Voir tous les articles</button>
      <button @click="goToNextArticle">Lire le prochain article</button>
    </div>
  </div>
</template>

<script setup>

import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0); // Scroller directement en haut de la page
});


import { useRouter } from 'vue-router';

const router = useRouter();

// Fonction pour naviguer vers la page d'accueil
const goToHome = () => {
  router.push('/');
};

// Fonction pour naviguer vers l'article suivant
const goToNextArticle = () => {
  router.push('/blog/le-genie-de-rick-owens'); // Remplacer avec le chemin réel du prochain article
};
</script>

<style scoped>

.section {
  margin-bottom: 40px;
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
