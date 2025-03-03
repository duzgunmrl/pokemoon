<template>
    <div class="article-container">
      <!-- Introduction -->
      <section class="intro">
        <p class="intro-text">Mentions légales, CGV et Protection des données de AURUM</p>
      </section>
  
      <!-- Mentions légales -->
      <section class="section">
        <h2>Mentions légales</h2>
        <p><strong>Propriétaire du site :</strong> AURUM, entreprise individuelle</p>
        <p><strong>Siège social :</strong> 56 rue du Lac, 69003 Lyon, France</p>
        <p><strong>Contact :</strong> <a href="mailto:help.aurumstore@gmail.com">help.aurumstore@gmail.com</a></p>
        <p><strong>Hébergement :</strong> MERAL Duzguncan</p>
        <p><strong>Directeur de la publication :</strong> MERAL Duzguncan</p>
      </section>
  
      <!-- Conditions Générales de Vente -->
      <section class="section">
        <h2>Conditions Générales de Vente (CGV)</h2>
        <p><strong>1. Introduction</strong></p>
        <p>Les présentes CGV régissent la vente des produits proposés sur le site AURUM. En passant commande, le client accepte ces conditions sans réserve.</p>
        <p><strong>2. Produits</strong></p>
        <p>Les produits sont des articles exclusifs, rares et uniques dans les catégories archive, luxe, parfums, sneakers, vinyles et personnal shopper.</p>
        <p><strong>3. Commande</strong></p>
        <p>La commande se fait via la vitrine du site et un contact via WhatsApp. Un devis est envoyé et la commande devient ferme après paiement.</p>
        <p><strong>4. Prix</strong></p>
        <p>Les prix sont indiqués en euros et incluent toutes les taxes. Les frais de livraison sont précisés avant finalisation de la commande.</p>
        <p><strong>5. Paiement</strong></p>
        <p>Le paiement peut être effectué par virement bancaire ou PayPal.</p>
        <p><strong>6. Livraison</strong></p>
        <p>Les produits sont expédiés après réception du paiement. AURUM ne pourra être responsable des retards de livraison.</p>
        <p><strong>7. Retour et Remboursement</strong></p>
        <p>Les retours sont acceptés en cas de produits défectueux ou non conformes. Les frais de retour sont à la charge du client, sauf en cas de défaut de produit.</p>
        <p><strong>8. Responsabilité</strong></p>
        <p>AURUM ne pourra être tenue responsable des dommages résultant de l’utilisation des produits.</p>
      </section>
  
      <!-- Protection des données -->
      <section class="section">
        <h2>Protection des données personnelles</h2>
        <p><strong>1. Collecte des données</strong></p>
        <p>Les données personnelles sont collectées pour traiter les commandes, offrir un service client, et envoyer des informations commerciales.</p>
        <p><strong>2. Utilisation des données</strong></p>
        <p>Les données sont utilisées pour le traitement des commandes et l'amélioration du service client. Elles peuvent aussi être utilisées à des fins marketing.</p>
        <p><strong>3. Consentement</strong></p>
        <p>En passant commande, vous acceptez le traitement de vos données personnelles.</p>
        <p><strong>4. Sécurité des données</strong></p>
        <p>AURUM prend des mesures pour garantir la sécurité des données personnelles collectées.</p>
        <p><strong>5. Droit d’accès, de rectification et de suppression</strong></p>
        <p>Conformément à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.</p>
      </section>
  
      <!-- Modifications des mentions légales et des CGV -->
      <section class="section">
        <h2>Modifications des mentions légales et des CGV</h2>
        <p>AURUM se réserve le droit de modifier ces mentions légales, CGV et la politique de protection des données à tout moment.</p>
      </section>
  
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  // Scroll to top when component is mounted
  onMounted(() => {
    window.scrollTo(0, 0);
  });
  
  // Functions to navigate to different routes
  const goToHome = () => {
    router.push('/');
  };
  
  const goToNextArticle = () => {
    router.push('/blog/prochain-article'); // Remplacer avec le chemin réel du prochain article
  };
  </script>
  
  <style scoped>
  .article-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .section {
    margin-bottom: 40px;
  }
  
  .intro-text {
    margin-top: 10px;
    font-weight: bold;
    margin-top: 50px;
    text-transform: uppercase;
    text-align: center;
    font-size: 40px;
    letter-spacing: 1px;
    font-family: 'Barriecito', cursive;
    color: #010101;
  }
  
  h2 {
    margin-top: 10px;
    font-weight: bold;
    margin-top: 50px;
    text-transform: uppercase;
    font-size: 30px;
    letter-spacing: 1px;
    font-family: 'Barriecito', cursive;
    color: #010101;
  }
  
  p {
    font-size: 18px;
    line-height: 1.6;
    text-align: justify;
    margin-top: 10px;
    font-family: 'Roboto Mono', monospace;
  }
  
  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }
  
  </style>
  