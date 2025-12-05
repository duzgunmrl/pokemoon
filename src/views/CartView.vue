<template>
  <div class="cart-page">
    <h1>Votre Panier</h1>

    <!-- Si le panier est vide -->
    <div v-if="cart.items.length === 0" class="empty">
      <p>Votre panier est vide.</p>
      <router-link to="/articles/TCG" class="return-btn">Retourner aux produits</router-link>
    </div>

    <!-- Si des produits sont dans le panier -->
    <div v-else class="cart-list">
      <div 
        v-for="item in cart.items" 
        :key="item.id" 
        class="cart-item"
      >
        <img :src="item.image" :alt="item.name" />

        <div class="info">
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }} € / unité</p>
        </div>

        <!-- Quantité -->
        <div class="qty-box">
          <button @click="decrease(item)">-</button>
          <span>{{ item.qty }}</span>
          <button @click="increase(item)">+</button>
        </div>

        <!-- Supprimer -->
        <button @click="remove(item.id)" class="remove-btn">X</button>
      </div>

      <div class="cart-summary">
        <h2>Total : {{ cart.totalPrice }} €</h2>

        <button class="checkout-btn" @click="goToCheckout">
          Passer au paiement
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/CartStore';
import { useRouter } from 'vue-router';
const router = useRouter();

const goToCheckout = () => {
  router.push("/paiement");
};

const cart = useCartStore();

// augmenter quantité
const increase = (item) => {
  cart.addToCart(item);
};

// diminuer quantité
const decrease = (item) => {
  if (item.qty > 1) {
    item.qty--;
  } else {
    cart.removeFromCart(item.id);
  }
};

// supprimer
const remove = (id) => {
  cart.removeFromCart(id);
};
</script>

<style scoped>
.cart-page {
  padding: 20px;
  max-width: 900px;
  margin: auto;
  text-align: center;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #cacac8;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 10px;
}

.cart-item img {
  width: 80px;
  border-radius: 8px;
}

.info {
  flex: 1;
  margin-left: 12px;
  text-align: left;
}

.qty-box {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-box button {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: #333;
  color: white;
  border: none;
  cursor: pointer;
}

.remove-btn {
  background: none;
  color: red;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.cart-summary {
  margin-top: 20px;
  text-align: right;
}

.checkout-btn {
  margin-top: 10px;
  padding: 12px 22px;
  background: #ffc800;
  color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.return-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 15px;
  background: #ffc800;
  color: black;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}
</style>
