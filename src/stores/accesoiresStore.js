import { defineStore } from 'pinia';

export const useaccesoiresStore = defineStore('accesoires', {
  state: () => ({
    accesoiresProducts: [
      {
        id: 1,
        name: 'Protection Acrylique pour ETB - PHOENIX SHIELD',
        price: '35€',
        image: 'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759587203/shoppingPhotoroompng_6877a9cca82701.50474100_g5zluu.png',  
        description: 'Protection aux UV minimale de 98% + / fermeture magnétique',
        condition: '20,6 x 9,8 x 17,7 cm',
        realStock: 20
      },
    {
        id: 2,
        name: 'Protège Cartes KMC - Perfect Size - Format Standard - 100 pcs',
        price: '5€',
        image: 'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759588994/protege-cartes-kmc-perfect-size-100-pcs-_n6kmrq.jpg',  
        description: 'Ces protections "Perfect Size" de la marque Japonaise KMC sadapte parfaitement à vos cartes Pokémon',
        condition: 'Perfect sleeve',
        realStock: 20
      },
    {
        id: 3,
        name: 'Toploader - Regular 3x 4 - Transparents - 25 pcs',
        price: '5€',
        image: 'https://res.cloudinary.com/dhn8p2jp1/image/upload/v1759588994/toploader-regular-3-x-4-transparents-x25_gormh9.jpg',  
        description: '25 Toploader pour protéger vos cartes Pokémon',
        condition: '63.5mm x 88.9mm',
        realStock: 20
      },
    ],
  }),

  getters: {
    getAllaccesoiresProducts(state) {
      return state.accesoiresProducts;
    },
  },
});


