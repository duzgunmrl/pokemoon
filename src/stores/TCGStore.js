import { defineStore } from 'pinia';

export const useTCGStore = defineStore('TCG', {
  state: () => ({
    TCGProducts: [
      {
        id: 1,
        name: 'Lot ME01 - Méga Évolution',
        price: '105€',
        image: 'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759586119/7CB1ABE6-14B4-4688-BBB1-885571741B41_ukrg6s.jpg',
        description: 'Contient 12 boosters de la série ME01, une carte promo et des goodies. Modèle aléatoire. Vendu avec une protection souple.',
        stock: '⚠️ Dernier article'
      },
      {
        id: 2,
        name: 'ETB EV10 - Rivalités Destinées',
        price: 'RUPTURE',
        image: 'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759584976/ev10_aoilot.png',
        description: 'Contient 9 boosters de la série EV10, une carte promo et des goodies. Vendu avec une protection souple.',
      },
      {
        id: 3,
        name: 'ETB EV09 - Aventures Ensembles',
        price: 'RUPTURE',
        image: 'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759584976/sv09-etb-fr-2x_fkflqo.png',
        description: 'Contient 9 boosters de la série EV09, une carte promo et des goodies. Vendu avec une protection souple.',
      },
      {
        id: 4,
        name: 'ETB EV08.5 - Évolutions Prismatiques',
        price: 'RUPTURE',
        image: 'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759584977/sv8pt5-etb-fr-2x_ghkys6.png',
        description: 'Contient 9 boosters de la série EV08.5, une carte promo et des goodies. Vendu avec une protection souple.',
      },
      {
        id: 5,
        name: 'Artset EB07 -  Évolution Céleste',
        price: 'RUPTURE',
        image: 'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759584711/artset_rs2ecw.webp',
        description: 'Contient 4 boosters de la série EB07.',
      },
    ]
  }),
  getters: {
    getAllTCG: (state) => state.TCGProducts
  }
  
});
