<template>
  <div class="cartes">
    <h1>Cartes</h1>
    <p>Plongez dans notre sélection exclusive de cartes à l'unité.</p>
    <p>Toutes les cartes sont envoyées sous sleeve et toploader</p>

    <!-- Liste cartes -->
    <div class="products">
      <div v-for="product in filteredProducts" :key="product.id" class="product">
        <div class="card">
          <div class="card-front">
            <img :src="product.images[0]" :alt="product.name" />
            <h3>{{ product.name }}</h3>
            <p class="price">{{ product.price }}</p>
          </div>

          <div class="card-back">
            <p class="description">{{ product.description }}</p>
            <p class="stock">{{ product.stock }}</p>

            <button
              class="buy-button"
              v-if="isPurchasable(product)"
              @click="addToCart(product)"
            >
              Ajouter au panier
            </button>

            <p v-else class="stock-info">
              Rupture de stock
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { usecartesStore } from "@/stores/cartesStore";
import { useCartStore } from "@/stores/CartStore";
import { useSearchStore } from "@/stores/SearchStore";

const search = useSearchStore();

const cartesstore = usecartesStore();
const cartesProducts = cartesstore.cartesProducts;

const cart = useCartStore();

// Filtre recherche
const filteredProducts = computed(() => {
  if (!search.query) return cartesProducts;

  const q = search.query.toLowerCase().trim();

  return cartesProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(q) ||
      product.description?.toLowerCase().includes(q)
  );
});

// Scroll top
onMounted(() => {
  window.scrollTo(0, 0);
});

// Vérifie prix + stock
const isPurchasable = (product) => {
  const numericPrice = parseFloat(
    String(product.price).replace("€", "").replace(",", ".")
  );

  if (isNaN(numericPrice) || numericPrice <= 0) return false;
  if (product.realStock === 0) return false;

  return true;
};

// Ajout panier
const addToCart = (product) => {
  if (!isPurchasable(product)) return;
  cart.addToCart(product);
  alert(`${product.name} a été ajouté au panier.`);
};
</script>

<style scoped>
.cartes {
  text-align: center;
  padding: 20px;
}
p {
  color: #a68c53;
  font-size: 15px;
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

.stock-info {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #888;
}
</style>
