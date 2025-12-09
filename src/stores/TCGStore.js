import { defineStore } from 'pinia';

export const useTCGStore = defineStore('TCG', {
  state: () => ({
    TCGProducts: [

        {
        id: 14,
        name: ' Mini Tins Kanto Power',
        price: '20€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1765234024/minitins_i0upwz.jpg',
        description: 'Contient 2 boosters Epee et Bouclier, une carte spéciale et un jeton.',
        slug: "mini-tins-kanto-power",
        realStock: 2
      }, 

      {
        id: 13,
        name: ' ETB ME2.5 - Héros Transcendants',
        price: '0€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1763994443/et_b_nzobed.webp',
        description: 'Contient 9 boosters de la série ME2.5, une carte promo et des goodies. Vendu avec une protection souple.',
        slug: "etb-me2.5-héros-transcendants",
        stock: 'ALLOCATION À VENIR',
        sku : '0196214132481',
        realStock: 0
      },     

      {
        id: 12,
        name: ' Bundle ME2.5 - Héros Transcendants',
        price: '0€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1763994443/bundle_bfymjh.webp',
        description: 'Contient 6 boosters de la série ME2.5.',
        slug: "bundle-me2.5-héros-transcendants",
        stock: 'ALLOCATION À VENIR',
        realStock: 0
      },

    {
        id: 11.2,
        name: ' Coffret Premium Lucario ME2.5 - Héros Transcendants',
        price: '0€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1763994443/mega_luc_sosqim.webp',
        description: 'Contient 10 boosters de la série ME2.5, une carte promo Méga Lucario ME2.5, et un poster double face.',
        slug: "coffret-premium-lucario-me2.5-héros-transcendants",
        stock: 'ALLOCATION À VENIR',
        realStock: 0
      },

      {
        id: 11,
        name: ' Coffret Tripack Journée Pokémon 30 Ans',
        price: '0€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1765234024/tripack30ans_sgpcye.webp',
        description: 'Contient 3 boosters Mega Evolution, une carte promo stamp Pikachu, et un jeton.',
        slug: "coffret-tripack-journée-pokémon-30-ans",
        stock: 'ALLOCATION À VENIR',
        sku: '0196214139718',
        realStock: 0
      },

      {
        id: 10,
        name: ' UPC Sulfura de la Team Rocket',
        price: '240€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1763718003/UPCSULF_hkksvb.png',
        description: 'Contient 3 cartes promo Sulfura de la Team Rocket, 18 boosters du JCC Pokémon de diverses séries et des accessoires exclusifs.',
        slug: "upc-sulfura-de-la-team-rocket",
        sku: '0196214129931',
        realStock: 1
      },

      {
        id: 9,
        name: ' UPC Mega Dracaufeu X Ex',
        price: '180€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1762459164/pokupc25_box3d_20250905_umq5dc.png',
        description: 'Contient 2 cartes promo (Méga-Dracaufeu X et Plumeline ex), 18 boosters du JCC Pokémon de diverses séries et des accessoires exclusifs.',
        slug: "upc-mega-dracaufeu-x-ex",
        realStock: 1
      },

      {
        id: 8,
        name: ' Display ME02 - Flammes Fantasmagoriques',
        price: '240€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1762459524/me02-booster-display-fr-2x_iqmag7.png',
        description: 'Contient 36 boosters de la série ME02.',
        slug: "display-me02-flammes-fantasmagoriques",
        realStock: 1
      },


      {
        id: 7,
        name: ' Tripack ME02 - Flammes Fantasmagoriques',
        price: '17€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1762459164/Capture_d_e%CC%81cran_2025-11-06_a%CC%80_20.55.58_vrnkne.png',
        description: 'Contient 3 boosters de la série ME02 et une carte promo',
        slug: "tripack-me02-flammes-fantasmagoriques",
        realStock: 0
      },

      {
        id: 6,
        name: ' ETB ME02 - Flammes Fantasmagoriques',
        price: '70€',
        image: 'https://res.cloudinary.com/dxa5pwuty/image/upload/v1762459164/me02-etb-fr-2x_mk0amy.png',
        description: 'Contient 9 boosters de la série ME02, une carte promo et des goodies. Vendu avec une protection souple.',
        slug: "etb-me02-flammes-fantasmagoriques",
        realStock: 1
      },

      {
        id: 1,
        name: 'Lot ME01 - Méga Évolution',
        price: '75€',
        image: 'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759586119/7CB1ABE6-14B4-4688-BBB1-885571741B41_ukrg6s.jpg',
        description: 'Contient 12 boosters de la série ME01, une carte promo et des goodies. Modèle aléatoire. Vendu avec une protection souple.',
        slug: "etb-me01-méga-évolution",
        realStock: 0
      },
      {
        id: 2,
        name: 'ETB EV10 - Rivalités Destinées',
        price: '70€',
        image: 'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759584976/ev10_aoilot.png',
        description: 'Contient 9 boosters de la série EV10, une carte promo et des goodies. Vendu avec une protection souple.',
        slug: "etb-ev10-rivalités-destinées",
        realStock: 0
      },
      {
        id: 3,
        name: 'ETB EV09 - Aventures Ensembles',
        price: '60€',
        image: 'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759584976/sv09-etb-fr-2x_fkflqo.png',
        description: 'Contient 9 boosters de la série EV09, une carte promo et des goodies. Vendu avec une protection souple.',
        slug: "etb-ev09-aventures-ensembles",
        realStock: 0
      },
      {
        id: 4,
        name: 'ETB EV08.5 - Évolutions Prismatiques',
        price: '65€',
        image: 'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759584977/sv8pt5-etb-fr-2x_ghkys6.png',
        description: 'Contient 9 boosters de la série EV08.5, une carte promo et des goodies. Vendu avec une protection souple.',
        slug: "etb-ev08.5-évolutions-prismatiques",
        realStock: 0
      },
      {
        id: 5,
        name: 'Artset EB07 -  Évolution Céleste',
        price: '40€',
        image: 'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759584711/artset_rs2ecw.webp',
        description: 'Contient 4 boosters de la série EB07.',
        slug: "artset-eb07-évolution-céleste",
        realStock: 0
      },
    ]
  }),
  getters: {
    getAllTCG: (state) => state.TCGProducts
  }
  
});
