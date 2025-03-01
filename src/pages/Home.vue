<template>
  <div id="app">
    <!-- Section des catégories -->
    <section class="categories">     
      <div class="category" @click="goToCategory('archive')">
        <img src="@/assets/archives.png" alt="Pièces d'archive" />
        <p>Archive</p>
      </div>
      <div class="category" @click="goToCategory('luxe')">
        <img src="@/assets/luxe.png" alt="Luxe" />
        <p>Luxe</p>
      </div>
      <div class="category" @click="goToCategory('sneakers')">
        <img src="@/assets/sneakers.png" alt="Sneakers" />
        <p>Sneakers</p>
      </div>
      <div class="category" @click="goToCategory('musique')">
        <img src="@/assets/musique.png" alt="Musique" />
        <p>Musique</p>
      </div>
      <div class="category" @click="goToCategory('parfums')">
        <img src="@/assets/parfum.png" alt="Parfums" />
        <p>Parfums</p>
      </div>
      <div class="category" @click="goToCategory('personal-shopper')">
        <img src="@/assets/aurum.png" alt="Personal Shopper" />
        <p>Personal Shopper</p>
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
    src: 'https://images.ctfassets.net/1aemqu6a6t65/e4y4ebPM9oNHoSPyTEgAf/3e0ab27f4b882c1dd391e318c83dcd2c/Supreme_Manhattan_NYC_Photo_Gabby-Jones_137.jpg',
    category: 'blog-Comment Supreme est devenu le roi du Streetwear'
  },
  {
    src: 'https://media-cdn.printemps.com/image/46/5/2522465.jpg',
    category: 'blog-Le genie de Rick Owens'
  },
  {
    src: 'https://cdn-azure.notinoimg.com/cdn-cgi/image/w=1040,q=80/blog/article/blog_nicheparfmyZaMa230270ret169_7da2c4.jpg',
    category: 'blog-Sentir bon pendant toute une annee'
  },
  {
    src: 'https://highxtar.com/wp-content/uploads/2019/11/highxtar-margiela-masks-13-2.jpg',
    category: 'blog-Le fantome de la mode'
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
}

.v-carousel-item:hover .carousel-text {
  opacity: 1;
}

</style>