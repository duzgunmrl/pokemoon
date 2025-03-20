<template>
  <v-app> 
    <Header :showSearchBar="showSearchBar" /> 
    <RouterView></RouterView>
    <Footer></Footer>
  </v-app>
</template>


<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

// Utiliser la route active pour déterminer l'affichage de la barre de recherche
const route = useRoute();

const showSearchBar = computed(() => {
  console.log(route.path)
  // Liste des pages où tu veux masquer la barre de recherche
  return !['/mentionslegales'].includes(route.path); 
});
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barriecito&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');




/* Style global */
body {
  font-family: 'Poppins', sans-serif; /* Appliquer la nouvelle police */
  background-color: #fff9f1;
  margin: 0;
  padding: 0;
  text-align: center;
}

/* Bandeau principal */
header {
  background-color: #ffffff; /* Blanc cassé */
  padding: 20px 0;
  display: flex;  /* Utilisation de flexbox pour centrer */
  justify-content: center;  /* Centre horizontalement */
  align-items: center;  /* Centre verticalement */
}

.main-content {
  padding-top: 80px; /* L'espace sous le header */
}

header .logo {
  width: 50px;
  height: auto;
}

h1 {
  color: #333;
  margin-top: 10px;
}

p {
  color: #555;
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
  height: 300px;
  width: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.category p {
  margin-top: 10px;
  font-weight: bold;
  text-transform: uppercase; /* Met le texte en majuscule */
  font-size: 30px; /* Taille de la police ajustée */
  letter-spacing: 1px; /* Espacement des lettres pour un effet plus élégant */
  font-family: 'Barriecito', cursive;
  color: #010101; /* Couleur du texte */
}

/* Bloc produits en vedette */
.featured-products {
  background-color: #fff9f1;
  padding: 50px 20px;
}

.featured-products h2 {
  font-size: 50px; /* Taille du texte */
  margin-bottom: 20px;
  text-align: center; /* Centrer le texte */
  font-family: 'Orbitron', sans-serif; /* Police futuriste */
  font-weight: 600; /* Poids de la police pour un effet plus bold */
  color: #333; /* Couleur sombre pour le texte */
  font-family: 'Bebas Neue', sans-serif;
}

.products {
  display: flex;
  justify-content: space-around;
}

.product {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  width: 200px;
  text-align: center;
}

.product img {
  width: 100%;
  height: 200px;
  width: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.product p {
  margin-top: 10px;
  font-weight: bold;
  text-transform: uppercase; /* Met le texte en majuscule */
  font-size: 10px; /* Taille de la police ajustée */
  color: #333; /* Couleur du texte */
}

/* Pied de page */
footer {
  background-color: #ffffff; /* Blanc cassé */
  padding: 20px;
  text-align: center; /* Centre tous les éléments dans le footer */
}

footer ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: inline-block; /* Permet de centrer la liste */
}

footer ul li {
  display: inline-block;
  margin-right: 20px;
}

footer ul li a {
  color: #333;
  text-decoration: none;
}

footer p {
  margin-top: 10px;
  color: #555;
  text-align: center; /* Centre le texte du paragraphe */
}

</style>
