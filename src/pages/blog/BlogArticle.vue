<template>
    <div>
      <component :is="currentArticle" />
    </div>
  </template>
  
  <script>
  import CommentSupremeEstDevenuLeRoiDuStreetwear from './Comment Supreme est devenu le roi du Streetwear.vue';
  import LeGenieDeRickOwens from './Le génie de Rick Owens.vue';
  import SentirBonPendantTouteUneAnnee from './Sentir bon toute l’année.vue';  
  import LeFantomeDeMartinMargiela from './Martin Margiela, le fantôme d’une légende.vue';
 
  export default {
    data() {
      return {
        articleTitle: this.$route.params.title,
      };
    },
    computed: {
      currentArticle() {
        // Comparaison avec les titres d'article transformés en minuscules et avec des tirets
        if (this.articleTitle === 'comment-supreme-est-devenu-le-roi-du-streetwear') {
          return CommentSupremeEstDevenuLeRoiDuStreetwear;
        } else if (this.articleTitle === 'le-genie-de-rick-owens') {
          return LeGenieDeRickOwens;
        } else if (this.articleTitle === 'sentir-bon-pendant-toute-une-annee') {
            return SentirBonPendantTouteUneAnnee;
        } else if (this.articleTitle === 'le-fantome-de-la-mode') {
            return LeFantomeDeMartinMargiela;
        }
        return null; // Aucun article trouvé
      },
    },
  };
  </script>  