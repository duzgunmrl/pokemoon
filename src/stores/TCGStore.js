import { defineStore } from 'pinia';

export const useTCGStore = defineStore('TCG', {
  state: () => ({
    TCGProducts: [

      {
        id: 13,
        name: ' ETB ME2.5 - Héros Transcendants',
        price: '0€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1763994443/et_b_nzobed.webp',
        description: 'Contient 9 boosters de la série ME2.5, une carte promo et des goodies. Vendu avec une protection souple.',
        stock: 'ALLOCATION À VENIR'
      },     

      {
        id: 12,
        name: ' Bundle ME2.5 - Héros Transcendants',
        price: '0€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1763994443/bundle_bfymjh.webp',
        description: 'Contient 6 boosters de la série ME2.5.',
        stock: 'ALLOCATION À VENIR'
      },

      {
        id: 11,
        name: ' Coffret Premium Lucario ME2.5 - Héros Transcendants',
        price: '0€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1763994443/mega_luc_sosqim.webp',
        description: 'Contient 10 boosters de la série ME2.5, une carte promo Méga Lucario ME2.5, et un poster double face.',
        stock: 'ALLOCATION À VENIR'
      },


      {
        id: 10,
        name: ' UPC Sulfura de la Team Rocket',
        price: '240€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1763718003/UPCSULF_hkksvb.png',
        description: 'Contient 3 cartes promo Sulfura de la Team Rocket, 18 boosters du JCC Pokémon de diverses séries et des accessoires exclusifs.',
        stock: '⚠️ Quantité Faible'
      },

      {
        id: 9,
        name: ' UPC Mega Dracaufeu X Ex',
        price: '190€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1762459164/pokupc25_box3d_20250905_umq5dc.png',
        description: 'Contient 2 cartes promo (Méga-Dracaufeu X et Plumeline ex), 18 boosters du JCC Pokémon de diverses séries et des accessoires exclusifs.',
        stock: '⚠️ Quantité Faible'
      },

      {
        id: 8,
        name: ' Display ME02 - Flammes Fantasmagoriques',
        price: '240€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1762459524/me02-booster-display-fr-2x_iqmag7.png',
        description: 'Contient 36 boosters de la série ME02.',
        stock: '⚠️ Dernier article'
      },


      {
        id: 7,
        name: ' Tripack ME02 - Flammes Fantasmagoriques',
        price: 'RUPTURE',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1762459164/Capture_d_e%CC%81cran_2025-11-06_a%CC%80_20.55.58_vrnkne.png',
        description: 'Contient 3 boosters de la série ME02 et une carte promo',
      },

      {
        id: 6,
        name: ' ETB ME02 - Flammes Fantasmagoriques',
        price: '80€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1762459164/me02-etb-fr-2x_mk0amy.png',
        description: 'Contient 9 boosters de la série ME02, une carte promo et des goodies. Vendu avec une protection souple.',
        stock: '⚠️ Quantité Faible'
      },

      {
        id: 1,
        name: 'Lot ME01 - Méga Évolution',
        price: 'RUPTURE',
        image: 'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759586119/7CB1ABE6-14B4-4688-BBB1-885571741B41_ukrg6s.jpg',
        description: 'Contient 12 boosters de la série ME01, une carte promo et des goodies. Modèle aléatoire. Vendu avec une protection souple.',
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
