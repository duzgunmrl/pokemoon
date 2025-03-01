<template>
  <section class="categories">
    <div class="category-card" @click="navigateToCategory('underground')">
      <img src="@/assets/underground.png" alt="Underground" />
      <h3>Pièces d’archive Underground</h3>
    </div>
    <div class="category-card" @click="navigateToCategory('luxury')">
      <img src="@/assets/luxury.png" alt="Luxe" />
      <h3>Luxe</h3>
    </div>
    <div class="category-card" @click="navigateToCategory('music')">
      <img src="@/assets/music.png" alt="Musique" />
      <h3>Musique</h3>
    </div>
    <div class="category-card" @click="navigateToCategory('perfumes')">
      <img src="@/assets/perfumes.png" alt="Parfums" />
      <h3>Parfums</h3>
    </div>
    <div class="category-card" @click="navigateToCategory('personal-shopper')">
      <img src="@/assets/personal-shopper.png" alt="Personal Shopper" />
      <h3>Personal Shopper</h3>
    </div>
  </section>
</template>

<script setup>
const navigateToCategory = (category) => {
  window.location.href = `/categories/${category}`; // Change selon l’URL que tu veux
}
</script>

<style scoped>
.categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.category-card {
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

.category-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.category-card h3 {
  margin-top: 10px;
}
</style>
