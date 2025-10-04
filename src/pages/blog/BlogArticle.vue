<template>
    <div>
      <component :is="currentArticle" />
    </div>
  </template>
  
  <script>
  import LaTeamRocketEstDeRetour from './La Team Rocket est de retour.vue';
  import LeGenieDeRickOwens from './Pourquoi les cartes Pokémon fascinent encore 30 ans après.vue';
 
  export default {
    data() {
      return {
        articleTitle: this.$route.params.title,
      };
    },
    computed: {
      currentArticle() {
        // Comparaison avec les titres d'article transformés en minuscules et avec des tirets
        if (this.articleTitle === 'la-team-rocket-est-de-retour') {
          return LaTeamRocketEstDeRetour;
        } else if (this.articleTitle === 'le-genie-de-rick-owens') {
          return LeGenieDeRickOwens;
        }
        return null; // Aucun article trouvé
      },
    },
  };
  </script>  