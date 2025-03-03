import { defineStore } from 'pinia';

export const useMusiqueStore = defineStore('musique', {
  state: () => ({
    musiqueProducts: [
      {
        id: 1,
        name: 'Nas - Illmatic',
        price: '350',
        image: '/src/assets/produit-nas.png', // Utilise un chemin relatif correct
        description: 'Illmatic est le premier album studio du rappeur américain Nas, sorti le 19 avril 1994 sur le label Columbia.',
        edition: 'First Pressing 1994',
        spotifyEmbedUrl: 'https://open.spotify.com/embed/album/3kEtdS2pH6hKcMU9Wioob1?utm_source=generator',
      },
      {
        id: 2,
        name: 'Kanye West - Yeezus',
        price: '70',
        image: '/src/assets/produit-ye.png',
        description: 'Yeezus est le sixième album studio de Kanye West, sorti en 2013. Il est distribué par Def Jam.',
        edition: '2013',
        spotifyEmbedUrl: 'https://open.spotify.com/embed/album/7D2NdGvBHIavgLhmcwhluK?utm_source=generator&theme=0',
      },
      {
        id: 3,
        name: 'Wu-Tang Clan - Once Upon a Time in Shaolin',
        price: '2000000',
        image: '/src/assets/produit-wtc.png',
        description: 'Once Upon a Time in Shaolin est un double album du Wu-Tang Clan enregistré entre 2008 et 2013 et produit à un seul exemplaire.',
        edition: 'unique',
        spotifyEmbedUrl: '', // Pas de lien Spotify pour cet album unique
      },
      {
        id: 4,
        name: 'Michael Jackson – Thriller',
        price: '230',
        image: '/src/assets/produit-mj.png',
        description: 'Thriller est le sixième album studio de l\'artiste américain Michael Jackson, son deuxième chez Epic Records.',
        edition: 'First Pressing 1982',
        spotifyEmbedUrl: 'https://open.spotify.com/embed/album/2ANVost0y2y52ema1E9xAZ?utm_source=generator',
      },
      {
        id: 5,
        name: 'Jimi Hendrix – Are You Experienced',
        price: '110',
        image: '/src/assets/produit-jh.png',
        description: 'Are You Experienced est le premier album du groupe The Jimi Hendrix Experience, sorti en 1967.',
        edition: 'First Pressing 1967',
        spotifyEmbedUrl: 'https://open.spotify.com/embed/album/7rSZXXHHvIhF4yUFdaOCy9?utm_source=generator',
      },
    ],
  }),

  getters: {
    getAllMusiqueProducts(state) {
      return state.musiqueProducts;
    },
  },
});


