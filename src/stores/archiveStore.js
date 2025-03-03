import { defineStore } from 'pinia';

export const useArchiveStore = defineStore('archive', {
  state: () => ({
    archivesProducts: [
      {
        id: 1,
        name: 'Alexander Digenova - Cigarette Tee',
        price: '350€',
        image: '/src/assets/produit-cigarettetee.png',
        description: 'Cette pièce rare, conçue par le designer Alexander Digenova, est un véritable collector dans l’univers du streetwear underground. Inspiré par l’esthétique rebelle et provocante, ce t-shirt arbore un design audacieux qui reflète l’attitude subversive de la mode contemporaine.',
        etat: 'Neuf, avec étiquette',
        taille: 'L',
      },
      {
        id: 2,
        name: 'Raf Simons - RIOT Bomber',
        price: '40 000€',
        image: '/src/assets/produit-riot1.png',
        description: 'Le Raf Simons RIOT Bomber est une veste iconique de la collection AW01 "Riot, Riot, Riot", inspirée par l’esthétique du streetwear et la rébellion urbaine. Avec ses détails distinctifs et son design avant-gardiste,  elle incarne un esprit de la mode alternative du célèbre artiste belge. ',
        etat: 'Très bon état',
        taille: 'M',
      },
      {
        id: 3,
        name: 'Chrome Hearts Rick Owens - Geobasket',
        price: '12 400€',
        image: '/src/assets/produit-geobasket.png',
        description: 'Cette collaboration entre Chrome Hearts et Rick Owens a marqué un tournant dans l’univers de la mode, fusionnant le luxe brut de Chrome Hearts avec l’avant-garde de Rick Owens. Le Geobasket est une pièce iconique, un sneaker de haute couture à la silhouette audacieuse, conçue pour les esprits créatifs et les passionnés de mode qui recherchent l’exceptionnel.',
        etat: 'Bon état',
        taille: '42',
      }
    ]
  }),
  getters: {
    getAllArchives: (state) => state.archivesProducts
  }
});
