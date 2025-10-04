<template>
  <div id="app">
    <!-- Section des catégories -->
    <section class="categories">     
      <div class="category" @click="goToCategory('TCG')">
        <img src="https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759586942/606335_wy10vf.png" alt="TCG" />
        <p>TCG</p>
      </div>
      <div class="category" @click="goToCategory('Cartes')">
        <img src="https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759587127/cartes_a_l_unitees_nmakv7.webp" alt="Cartes" />
        <p>Cartes</p>
      </div>
      <div class="category" @click="goToCategory('Accesoires')">
        <img src="https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759587203/shoppingPhotoroompng_6877a9cca82701.50474100_g5zluu.png" alt="Accesoires" />
        <p>Accesoires</p>
      </div>
    </section>

    <h2 class="carousel-title">BLOG</h2>      
    <v-carousel :show-arrows="false"
      cycle 
      interval="5000"
      class="my-carousel"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
        @click="goToCategory(item.category)"
      >
        <!-- Enlever "blog-" du texte affiché -->
        <div class="carousel-text">{{ item.category.replace('blog-', '').replace(/([A-Z])/g, ' $1').trim() }}</div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter(); // Déclaration unique ici

const goToCategory = (category) => {
  // Si le chemin commence par "blog", utilise le préfixe "/blog/"
  if (category.startsWith("blog-")) {
    // Remplacer les espaces par des tirets pour l'URL
    const articleSlug = category.slice(5).replace(/\s+/g, '-').toLowerCase();  // Ex: "blog-Comment Supreme..." devient "/blog/comment-supreme-est-devenu-le-roi-du-streetwear"
    router.push(`/blog/${articleSlug}`); // rediriger vers l'URL correcte
  } else {
    router.push(`/articles/${category}`);
  }
  console.log(`Naviguer vers la catégorie: ${category}`);
};
</script>


<script>
export default {
  data() {
    return {
      items: [
  {
    src: 'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759590117/what-was-your-favorite-team-rocket-intro-v0-yagjw6utrpfb1_dipj0i.webp',
    category: 'blog-La Team Rocket est de retour'
  },
  {
    src: 'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759589890/61fecf9b9454d-42_wkudtg.jpg',
    category: 'blog-Pourquoi les cartes Pokémon fascinent encore 30 ans après'
  },
],
    };
  }
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barriecito&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

/* Style global */

h2 {
  margin-top: 10px;
  font-weight: bold;
  margin-top: 50px;
  text-transform: uppercase; /* Met le texte en majuscule */
  text-align: center;
  font-size: 80px;
  letter-spacing: 1px;
  font-family: 'Barriecito', cursive;
  color: #010101;
}


body {
  font-family: 'Poppins', sans-serif; /* Appliquer la nouvelle police */
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  padding-top: 10px; /* Hauteur du header */
  text-align: center;
}

/* Section des catégories */
.categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #ffffff;
  gap: 20px;
  padding: 30px;
  margin-top: 30px;
}

.category {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.category img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.category p {
  margin-top: 10px;
  font-weight: bold;
  text-transform: uppercase; /* Met le texte en majuscule */
  font-size: 40px;
  letter-spacing: 1px;
  font-family: 'Barriecito', cursive;
  color: #010101;
}

.my-carousel {
  width: 60%;
  max-height: 600px; /* Ajuste selon tes images */
  margin: 0 auto 50px auto;
  overflow: hidden;
}

.v-carousel-item img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out, filter 0.3s ease-in-out;
}


/* Ajout d'un texte sur l'image au survol */
.carousel-text {
  position: absolute;
  bottom: 60px; /* Place le texte en haut */
  left: 50%;
  transform: translateX(-50%);
  color: #000000;
  background: rgba(250, 250, 250, 0.7); /* Couleur avec transparence */
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 40px;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: bold;
  text-transform: uppercase; /* Met le texte en majuscules */
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
}

.v-carousel-item:hover .carousel-text {
  opacity: 1;
}

</style>