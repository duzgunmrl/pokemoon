import { defineStore } from 'pinia';

export const useParfumsStore = defineStore('parfums', {
  state: () => ({
    parfumsProducts: [
      {
        id: 1,
        name: "Nasomatto - Blamage",
        price: 130,
        image: "https://res.cloudinary.com/dhn8p2jp1/image/upload/v1741764870/produit-blamage_xgvqym.png",
        description: "Blamage est une erreur devenue chef-d'œuvre, une fragrance insolente née de l'imprévu, où chaque note révèle que l'échec peut être le début de la perfection.",
        olfactoryNotes: {
          top: "Aldehyde, Cerise, Notes vertes, Orange, Romarin",
          middle: "Pomme verte",
          bottom: "Cedre, Labdanum, Musc, Vanille"
        },
      },
      {
        id: 2,
        name: "Lamyland - Perfume",
        price: 1700,
        image: "https://res.cloudinary.com/dhn8p2jp1/image/upload/v1741764871/produit-lamyland_l4xb0x.png",
        description: "Lamyland Perfume est un voyage olfactif vers un monde imaginaire, où des accords floraux et boisés s’entrelacent pour créer une aura à la fois douce et envoûtante, comme un rêve éveillé.",
        olfactoryNotes: {
          top: "Bergamote de Calabre, Cardamome noire du Népal et Safran Espagnol.",
          middle: "Styrax, Encens doré, Myrrhe et Palo santo.",
          bottom: "Ambre, Mousse de chêne, Vétiver de java et Vanille"
        },
      },
      {
        id: 3,
        name: "Nishane - Karakoz",
        price: 250,
        image: "https://res.cloudinary.com/dhn8p2jp1/image/upload/v1741764871/produit-karagoz_nreldg.png",
        description: "Karaköz est un parfum vibrant et mystérieux, où les notes de fruits exotiques, de fleurs et de bois créent une harmonie envoûtante, comme un secret bien gardé dans une nuit étoilée.",
        olfactoryNotes: {
          top: "Ananas, Raisin muscat et Aromates",
          middle: "Néroli, Jasmin et Patchouli",
          bottom: "Oud, Ambre et Vétiver"
        },
      },
      {
        id: 4,
        name: "Toskovat - Inexcusable Evil",
        price: 235,
        image: "https://res.cloudinary.com/dhn8p2jp1/image/upload/v1741764870/produit-inexcusableevil_dhqhqi.png",
        description: "Inexcusable Evil est une fragrance saisissante, où la puissance du sang se mêle à des accords métalliques et épicés, évoquant une intensité brutale et une audace sans compromis.",
        olfactoryNotes: {
          top: "Poude à canon et Notes d'ozone",
          middle: "Sang, Iodine, Fleurs, Baume de copaïba, Huile essentielle de cypriol et Gaïac",
          bottom: "Béton, Encens, Notes de pluie et Bois de santal"
        },
      },
      {
        id: 5,
        name: "Lorenzo Pazzaglia - Van Py Rhum",
        price: 145,
        image: "https://res.cloudinary.com/dhn8p2jp1/image/upload/v1741764894/produit-vanpyrhum_yrazon.png",
        description: "Van Py Rum est un élixir envoûtant, où l’odeur profonde du rhum se mêle à des notes de vanilles et d'épices, créant une fragrance aussi riche et mystérieuse qu'un vampire se nourrissant dans l’ombre de la nuit.",
        olfactoryNotes: {
          top: "Vanille Bourbon, Vanille de Madagascar, Fève Tonka, Vanille de Tahiti, Vanille Molea, Rhum",
          middle: "Vanille Island, Fleurs blanches, Caramel, Patchouli",
          bottom: "Bois d’agar, patchouli d’Indonésie, rhum en baril, gousse de vanille noire"
        },
      },
      {
        id: 6,
        name: "Orto Parisi - Boccanera",
        price: 155,
        image: "https://res.cloudinary.com/dhn8p2jp1/image/upload/v1741764869/produit-boccanera_vgh8yt.png",
        description: "Boccanera est une fragrance intense et sensuelle, où des notes de fruits noirs et de cuir se mêlent à des accords poudrés, évoquant la tentation et le mystère d’un baiser volé dans l’obscurité.",
        olfactoryNotes: {
          top: "Piment, Poivre noir, Gingembre et Cosse de cacao",
          middle: "Jasmin",
          bottom: "Chocolat, Musc, Cuir, Notes animales, Cèdre, Patchouli, Vanille et Sucre"
        },
      },
      {
        id: 7,
        name: "Filippo Sorcinelli - OPUS 1144",
        price: 220,
        image: "https://res.cloudinary.com/dhn8p2jp1/image/upload/v1741764872/produit-opus1144_qoc2iz.png",
        description: "OPUS 1144 est une symphonie olfactive captivante, où des notes d’encens, de cuir et de bois précieux se mêlent pour créer une aura mystique et intemporelle, comme une prière silencieuse dans un lieu sacré.",
        olfactoryNotes: {
          top: "Élémi, Bergamote, Mandarine et Jasmin",
          middle: "Iris, Bois de cachemire et Orchidée",
          bottom: "Vanille, Benjoin, Ambre gris, Musc blanc, Bois de santal et Cuir"
        },
      },
    ]

    
  }),
  getters: {
    getAllParfumsProducts(state) {
      return state.parfumsProducts;
    },
  }, 
});
