<template>
  <div v-if="product" class="product-page">

    <h1>{{ product.name }}</h1>

    <img :src="product.image" :alt="product.name" class="product-img" />

    <p class="price">{{ product.price }}</p>

    <!-- Stock text -->
    <p v-if="product.stock" class="stock-label">
      {{ product.stock }}
    </p>

    <p class="description">{{ product.description }}</p>

    <button 
      v-if="isPurchasable(product)"
      class="buy-button"
      @click="addToCart(product)"
    >
      Ajouter au panier
    </button>

    <p v-else class="out-of-stock">Rupture de stock</p>

    <p v-if="product.sku" class="sku">
      Référence : {{ product.sku }}
    </p>

  </div>

  <div v-else class="not-found">
    <h2>Produit introuvable</h2>
  </div>
</template>


<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useTCGStore } from "@/stores/TCGStore";
import { usecartesStore } from "@/stores/cartesStore";
import { useCartStore } from "@/stores/CartStore";

const route = useRoute();
const slug = route.params.slug;

const tcgStore = useTCGStore();
const cartesStore = usecartesStore();
const cart = useCartStore();

const allProducts = [...tcgStore.TCGProducts, ...cartesStore.cartesProducts];

const product = computed(() =>
  allProducts.find((p) => p.slug === slug)
);

const isPurchasable = (product) => {
  const numericPrice = parseFloat(
    String(product.price).replace("€", "").replace(",", ".")
  );
  if (isNaN(numericPrice) || numericPrice <= 0) return false;
  if (product.realStock === 0) return false;
  return true;
};

const addToCart = (product) => {
  cart.addToCart(product);
  alert(`${product.name} a été ajouté au panier.`);
};
</script>

<style scoped>
.product-page {
  text-align: center;
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

.product-img {
  max-width: 300px;
  border-radius: 10px;
  margin: 20px auto;
  display: block;
}

.price {
  font-size: 22px;
  margin-top: 10px;
  color: #a68c53;
  font-weight: bold;
}

.stock-label {
  margin-top: 5px;
  font-size: 14px;
  color: #a68c53;
}

.sku {
  margin-top: 5px;
  font-size: 13px;
  color: #888;
}

.description {
  color: #a68c53;
  font-size: 15px;
  margin: 15px 0;
}

.buy-button {
  margin-top: 10px;
  padding: 8px 16px;
  border-radius: 999px;
  border: none;
  background: #ffcc00;
  color: #222;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.buy-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.out-of-stock {
  margin-top: 10px;
  font-size: 16px;
  color: red;
}

.not-found {
  text-align: center;
  padding: 40px;
  color: #a68c53;
}
</style>

