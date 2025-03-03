import { defineStore } from 'pinia';

export const useSneakersStore = defineStore('sneakers', {
  state: () => ({
    sneakersProducts: [
      {
        id: 1,
        name: 'Nike CPFM - Flea 2',
        price: '350',
        image: '/src/assets/produit-nikecpfm.png',  // Changer en chemin relatif sans '@/'
        description: 'Cette Nike Air Flea 2 CPFM fait partie de la deuxième collaboration de Nike avec Cactus Plant Flea Market.',
        condition: 'Deadstock',
        sku: 'DV7164-001',
        size: '43',
      },
      {
        id: 2,
        name: 'Nike - Jordan 1 Travis Scott Fragment',
        price: '2200',
        image: '/src/assets/produit-niketravis.png',  // Changer en chemin relatif sans '@/'
        description: 'C’est l’une des rares sneakers à respecter la célèbre « règle de trois ». : trois esprits valent mieux qu’un. Cette fois, ce sont Jordan Brand, le rappeur de Houston et le designer japonais qui unissent leur génie pour collaborer sur l’iconique Air Jordan 1, une silhouette incontournable devenue symbole de style.',
        condition: 'Deadstock',
        sku: 'DM7866-140',
        size: '45',
      },
      {
        id: 3,
        name: 'Nike SB - Dunk Grateful Dead',
        price: '1300',
        image: '/src/assets/produit-nikegrateful.png',  // Changer en chemin relatif sans '@/'
        description: 'La Nike SB Grateful Dead rend hommage à l’univers psychédélique du groupe de rock californien,  puisant son inspiration dans l’artwork de l’album « History of the Grateful Dead. Avec ses couleurs vives et sa texture en fourrure, cette sneaker capture parfaitement l’esprit libre et créatif de la scène psychédélique. Une véritable célébration de la musique, de l’art et de la culture skate.',
        condition: 'Deadstock',
        sku: 'CJ5378-700',
        size: '39',
      },
      {
        id: 4,
        name: 'Nike Supreme Comme Des Garçons Shirt - Air Force 1 Eyes',
        price: '1300',
        image: '/src/assets/produit-nikesupremecdgeyes.png',  // Changer en chemin relatif sans '@/'
        description: 'Cette basket collaborative Nike Air Force 1 Low x Supreme x Comme Des Garçons présente un look classique mais avec une touche accrocheuse typique du style de la marque de mode japonaise. Supreme et la ligne de diffusion Comme Des Garçons SHIRT ont imaginé un nouveau motif audacieux pour faire de leur modèle Air Force 1 une pièce unique.',
        condition: 'Deadstock',
        sku: '923044-100',
        size: '42',
      },
      {
        id: 5,
        name: 'Nike - MAG Retour Vers le Futur (2016)',
        price: '50000',
        image: '/src/assets/produit-nikemag.png',  // Changer en chemin relatif sans '@/'
        description: 'Créée en 1989 par le légendaire designer Tinker Hatfield pour Retour vers le futur 2, la Nike Mag est devenue une icône intemporelle. Portée par Marty McFly dans sa virée en 2015, elle fascine avec son laçage automatique et ses LED électroluminescentes. Après des années de fantasmes et de pétitions, Nike lance en 2011 une première édition limitée, récoltant près de 10 millions de dollars pour la Michael J. Fox Foundation. En 2016, la magie devient réalité avec 89 paires dotées du laçage automatique, accessibles via une loterie mondiale.',
        condition: 'Deadstock',
        sku: 'HO15MNOTHR402625849',
        size: '44',
      },
    ],
  }),

  getters: {
    getAllSneakersProducts(state) {
      return state.sneakersProducts;
    },
  },
});


