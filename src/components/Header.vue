<template>
  <header :class="{ shrink: isShrunk }" @mouseover="showSearch = true" @mouseleave="showSearch = false">
    <img 
      src="@/assets/Aurum.png" 
      alt="Aurum Logo" 
      class="logo" 
      @click="goToHome"
    />
    
    <input 
      v-show="showSearch"
      type="text" 
      v-model="searchQuery" 
      placeholder="Rechercher..." 
      class="search-bar"
    />
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const searchQuery = ref('');
const showSearch = ref(false);
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
  height: 80; /* Hauteur initiale */
  will-change: transform, opacity;
}

/* Effet rétrécissement au scroll */
.shrink {
  transform: translateY(-10px) scale(1); /* Légère réduction visuelle */
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
  max-width: 60px; /* Réduction au scroll */
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

/* Apparition fluide */
header:hover .search-bar {
  opacity: 1;
  transform: translateY(0);
}
</style>