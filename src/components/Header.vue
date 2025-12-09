<template>
  <header :class="{ shrink: isShrunk }" @mouseover="showSearch = true" @mouseleave="showSearch = false">
    <img 
      src="https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759592106/Design_sans_titre_2_ierfxh.png" 
      alt=" PokéMoon TCG. Boutique en ligne de TCG Pokémon" 
      class="logo" 
      @click="goToHome"
    />
    <!-- Condition pour afficher la barre de recherche uniquement si showSearchBar est vrai et showSearch est vrai -->
    <input
      v-model="search.query"
      @keyup.enter="goSearch"
      placeholder="Rechercher..."
      class="search-bar"
    />

    <div class="cart-wrapper" v-show="showSearch"> 
    <router-link to="/cart" class="cart-button">
    🛒 <span class="count">{{ cart.totalItems }}</span>
    </router-link>
</div>

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useSearchStore } from '@/stores/SearchStore';
import { useCartStore } from '@/stores/CartStore';

// Stores
const search = useSearchStore();
const cart = useCartStore();

// Router (UNE SEULE FOIS)
const router = useRouter();

// Navigation par recherche
const goSearch = () => {
  if (router.currentRoute.value.path !== "/articles/TCG") {
    router.push("/articles/TCG");
  }
};

// Props
const props = defineProps({
  showSearchBar: { type: Boolean, default: true }
});

// UI state
const showSearch = ref(false);
const isShrunk = ref(false);

// Navigation vers accueil
const goToHome = () => {
  router.push('/');
};

// Effet scroll
const handleScroll = () => {
  isShrunk.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>


<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  /* 🔥 LE BON */
  position: sticky;
  top: 0;

  width: 100%;
  height: 80px;
  overflow: visible;
  transition: all 0.3s ease;
  z-index: 1000;
}



/* Panier à droite ABSOLU */
.cart-wrapper {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

  opacity: 0;
  transition: all 0.3s ease;
}

header:hover .cart-wrapper {
  opacity: 1;
  transform: translateY(-50%);
}


header:hover .cart-wrapper {
  opacity: 1;
  transform: translateY(0);
}

/* Bouton stylé */
.cart-button {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #140126;
  color: black;
  padding: 8px 14px;
  border-radius: 20px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.2s ease;
}

.cart-button:hover {
  background: #f2c400;
  transform: translateY(-2px);
}

/* Compteur */
.count {
  background: black;
  color: white;
  padding: 2px 6px;
  border-radius: 50%;
  font-size: 13px;
}


/* Effet rétrécissement au scroll */
.shrink {
  transform: translateY(-10px) scale(1);
  background-color: rgba(255, 255, 255, 0.85);
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.logo {
  max-width: 80px;
  height: auto;
  cursor: pointer;
  transition: all 0.3s ease;
}

.shrink .logo {
  max-width: 60px;
}

/* Barre de recherche */
.search-bar {
  position: absolute;
  top: 100%; /* 🔥 Ajuste cette valeur si besoin (60–75%) */
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  width: 400px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 14px;
  outline: none;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}


header:hover .search-bar {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}


</style>
