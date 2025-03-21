<template>
  <div class="insta-wrapper" @click="goToInsta">
    <div class="insta-button">
      <div class="icon">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Insta" />
      </div>
    </div>
    <div class="text">
      <slot>Découvrez notre page Instagram de parfumerie</slot>
    </div>
  </div>
</template>

<script setup>
const goToInsta = () => {
  window.open('https://www.instagram.com/aurum.parfumerie/', '_blank');
};
</script>

<style scoped>
.insta-wrapper {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
}

.insta-button {
  background-color: #a68c53;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  animation: glow 2s infinite ease-in-out;
  transition: background-color 0.3s ease;
}

.insta-button:hover {
  background-color: #8d7748;
}

.icon img {
  width: 24px;
  height: 24px;
}

.text {
  margin-top: 8px;
  background-color: #fffaf3;
  color: #5a4a2c;
  padding: 8px 14px;
  border-radius: 16px;
  font-size: 13px;
  font-family: 'Poppins', sans-serif;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  opacity: 0;
  pointer-events: none;
  transform: translateY(5px);
  transition: all 0.3s ease;
}

.insta-wrapper:hover .text {
  opacity: 1;
  transform: translateY(0);
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 12px rgba(166, 140, 83, 0.6);
  }
  50% {
    box-shadow: 0 0 20px rgba(166, 140, 83, 1);
  }
}
</style>
