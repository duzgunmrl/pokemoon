import { defineStore } from 'pinia';

export const useLuxeStore = defineStore('luxe', {
      state: () => ({
    luxeProducts: [
      {
        id: 1,
        name: 'Rick Owens - Basic Rib Tank Mahogany',
        price: 380,
        description: 'Débardeur fin avec la couture unique signature au centre du dos',
        collection: 'HOLLYWOOD SS25',
        size: '40',
        composition: '88% Viscose, 12% Soie',
        images: [
          '/src/assets/produit-rickowenstanktop.png',
          '/src/assets/produit-rickowenstanktop2.png',
        ],
      },
      {
        id: 2,
        name: 'Maison Margiela Supreme - Patchwork Faux Fur Coat',
        price: 2160,
        description: 'Fausse fourrure à motif patchwork et doublure en viscose. Fermeture boutonnée.',
        collection: 'SS24',
        size: 'L',
        composition: 'Fausse fourrure, intérieur en viscose',
        images: [
          '/src/assets/produit-margielafauxfur.png',
          '/src/assets/produit-margielafauxfur2.png',
        ],
      },
      {
        id: 3,
        name: 'Junya Watanabe MAN - Patchwork Jacket Multi',
        price: 3000,
        description: 'Détail patchwork multi-tissus avec revers crantés contrastés.',
        collection: 'SS25',
        size: 'XL',
        composition: '50% coton, 36% laine, 7% polyester, 6% rayonne, 1% nylon',
        images: [
          '/src/assets/produit-junya.png',
          '/src/assets/produit-junya2.png',
        ],
      },
      {
        id: 4,
        name: 'Yves Saint Laurent - Veste Sergé Gainsbourg',
        price: 2800,
        description: 'Veste à simple boutonnage munie de revers en pointe. Fabriquée en Italie.',
        collection: 'FW24',
        size: '52',
        composition: '95% Laine, 5% Polyester',
        images: [
          '/src/assets/produit-saintlaurent.png',
          '/src/assets/produit-saintlaurent2.png',
        ],
      },
      {
        id: 5,
        name: 'Balenciaga - Botte Steroid',
        price: 1200,
        description: 'Botte audacieuse et futuriste, caractérisée par une silhouette massive.',
        collection: 'SS23',
        size: '40',
        composition: 'EVA (éthylène-acétate de vinyle)',
        images: [
          '/src/assets/produit-balenciagasteroid.png',
          '/src/assets/produit-balenciagasteroid2.png',
        ],
      },
      {
        id: 6,
        name: 'Bottega Veneta - Cravate en cuir à imprimé léopard',
        price: 880,
        description: 'Cravate en cuir de veau à imprimé léopard. Fabriquée en Italie.',
        collection: 'FW24',
        size: 'Unique',
        composition: '100% cuir de veau',
        images: [
          '/src/assets/produit-bottegacravate.png',
          '/src/assets/produit-bottegacravate2.png',
        ],
      },
      {
        id: 7,
        name: 'Louis Vuitton - Sac Speedy 50',
        price: 15000,
        description: 'Sac Speedy P9 Bandoulière 50 Monogram, revisité par Pharrell Williams.',
        collection: 'SS24',
        size: 'Unique',
        composition: '100% cuir de veau souple, Doublure en cuir d\'agneau',
        images: [
          '/src/assets/produit-speedy.png',
          '/src/assets/produit-speedy2.png',
        ],
      },
      {
        id: 8,
        name: 'Prada - Double-breasted Kid Mohair Jacket',
        price: 4000,
        description: 'Veste de modernité et classe, fabriquée en Italie.',
        collection: 'FW24',
        size: '40',
        composition: '60% Mohair, 40% Laine Vierge',
        images: [
          '/src/assets/produit-prada.png',
          '/src/assets/produit-prada2.png',
        ],
      },
    ],
  }),
  
  getters: {
    getAllLuxeProducts: (state) => state.luxeProducts,
  },
});


