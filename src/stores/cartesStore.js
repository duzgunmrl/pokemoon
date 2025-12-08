import { defineStore } from 'pinia';

export const usecartesStore = defineStore('cartes', {
      state: () => ({
    cartesProducts: [
      {
        id: 1,
        name: 'Sulfura Ex de le Team Rocket - EV10',
        price: '190€',
        collection : 'EV10 - Rivalités Destinées',
        images: [
          'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759588014/FRPOKEV10229_bh9igg.webp',
          'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759588014/FRPOKEV10229_bh9igg.webp',
        ],
        realStock: 0
      },
    ],
  }),
  
  getters: {
    getAllcartesProducts: (state) => state.cartesProducts,
  },
});


