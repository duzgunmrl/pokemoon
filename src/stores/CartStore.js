import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("cart-items")) || []
  }),

  actions: {
    saveToLocalStorage() {
      localStorage.setItem("cart-items", JSON.stringify(this.items));
    },

    // Fonction robuste pour extraire un prix en nombre
    extractPrice(rawPrice) {
      if (!rawPrice) return null;

      // Exemples : "240€" → "240", "0€" → "0"
      const numeric = parseFloat(
        String(rawPrice)
          .replace("€", "")
          .replace(",", ".")
          .trim()
      );

      // Si prix invalide → retourner null
      if (isNaN(numeric) || numeric <= 0) return null;

      return numeric;
    },

    addToCart(product) {
  const price = this.extractPrice(product.price);
  if (price === null) return;

  // Stock réel, si non défini → 1
  const stock = product.realStock ?? 1;

  // Si pas de stock → arrêter
  if (stock <= 0) {
    alert("Ce produit est en rupture.");
    return;
  }

  const existing = this.items.find((p) => p.id === product.id);

  // ❌ limite : 1 produit par client
  if (existing) {
    alert("Vous ne pouvez ajouter qu'un seul exemplaire de cet article.");
    return;
  }

  // Ajout avec quantité forcée à 1
  this.items.push({
    id: product.id,
    name: product.name,
    price,
    image: product.image,
    qty: 1,
    maxStock: stock
  });

  this.saveToLocalStorage();
    },

    removeFromCart(id) {
      this.items = this.items.filter(item => item.id !== id);
      this.saveToLocalStorage();
    },

    clearCart() {
      this.items = [];
      this.saveToLocalStorage();
    }
  },

  getters: {
    totalPrice(state) {
      return state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
    },
    totalItems(state) {
      return state.items.reduce((sum, item) => sum + item.qty, 0);
    }
  }
});
