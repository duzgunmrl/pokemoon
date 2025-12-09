import { defineStore } from 'pinia';

export const usecartesStore = defineStore('cartes', {
      state: () => ({
    cartesProducts: [ 

      {
        id: 4,
        name: 'Wattouat JAP (2000)',
        price: '10€',
        collection : 'Gold, Silver, to a New World... (2000)',
        images: [
          'https://res.cloudinary.com/dxa5pwuty/image/upload/v1765306505/watt_swivff.jpg',
          'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759588014/FRPOKEV10229_bh9igg.webp',
        ],
        realStock: 1
      },

      {
        id: 4,
        name: 'Florizarre ex ALT (151) - EV3.5',
        price: '90€',
        collection : 'EV3.5 - 151',
        images: [
          'https://res.cloudinary.com/dxa5pwuty/image/upload/v1765306506/flor_k84qq7.png',
          'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759588014/FRPOKEV10229_bh9igg.webp',
        ],
        realStock: 1
      },


    {
        id: 3,
        name: 'Wailord AR - EV9',
        price: '8€',
        collection : 'EV9 - Aventures Ensembles',
        images: [
          'https://res.cloudinary.com/dxa5pwuty/image/upload/v1765306506/waillord_xeb04w.png',
          'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759588014/FRPOKEV10229_bh9igg.webp',
        ],
        realStock: 1
      },


      {
        id: 2,
        name: 'Démolosse de la Team Rocket - EV10',
        price: '25€',
        collection : 'EV10 - Rivalités Destinées',
        images: [
          'https://res.cloudinary.com/dxa5pwuty/image/upload/v1765306506/de%CC%81mo_rykdu9.png',
          'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759588014/FRPOKEV10229_bh9igg.webp',
        ],
        realStock: 1
      },

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


