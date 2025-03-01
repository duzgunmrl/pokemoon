<template>
  <div>
    <h2>Bienvenue chez Auru</h2>
    <p>Explorez nos articles rares et exclusifs !</p>
    
    <!-- Section pour les catégories -->
    <h2>Découvrez nos services</h2>
    <div class="categories">
      <div class="category">
        <img src="@/assets/archives.png" alt="Archives Underground" />
        <p>Archives Underground</p>
      </div>
      <div class="category">
        <img src="@/assets/luxe.png" alt="Luxe" />
        <p>Luxe</p>
      </div>
      <div class="category">
        <img src="@/assets/musique.png" alt="Musique" />
        <p>Musique</p>
      </div>
      <div class="category">
        <img src="@/assets/parfum.png" alt="Parfums" />
        <p>Parfums</p>
      </div>
      <div class="category">
        <img src="@/assets/aurum.png" alt="Logo Aurum" />
        <p>Logo Aurum</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Pas de script pour l'instant
</script>

<style scoped>
/* Style pour Home */
h2 {
  color: #333;
  margin-top: 20px;
}

.categories {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.category {
  text-align: center;
}

.category img {
  width: 150px;
  height: auto;
  border-radius: 8px;
}

.category p {
  margin-top: 10px;
  font-weight: bold;
}
</style>
