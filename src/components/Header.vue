<template>
  <header :class="{ shrink: isShrunk }" @mouseover="showSearch = true" @mouseleave="showSearch = false">
    <img 
      src="https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759592106/Design_sans_titre_2_ierfxh.png" 
      alt="Aurum Logo" 
      class="logo" 
      @click="goToHome"
    />
    <!-- Condition pour afficher la barre de recherche uniquement si showSearchBar est vrai et showSearch est vrai -->
    <input 
      v-show="props.showSearchBar && showSearch" 
      type="text" 
      v-model="searchQuery" 
      placeholder="Rechercher..." 
      class="search-bar"
      v-if="showSearchBar"
    />
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

// Définir la prop showSearchBar, qui contrôle l'affichage de la barre de recherche
const props = defineProps({
  showSearchBar: { type: Boolean, default: true }
});

const searchQuery = ref('');
const showSearch = ref(false);  // La barre de recherche est masquée au début
const isShrunk = ref(false);
const router = useRouter();

const goToHome = () => {
  router.push('/');
};

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
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  transition: all 0.3s ease;
  z-index: 1000;
  height: 80px; /* Hauteur initiale */
  will-change: transform, opacity;
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
  width: 400px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 14px;
  outline: none;
  text-align: center;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Apparition lors du survol */
header:hover .search-bar {
  opacity: 1;
  transform: translateY(0);
}
</style>
