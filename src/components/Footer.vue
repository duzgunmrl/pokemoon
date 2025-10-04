<template>
  <footer>
    <ul class="footer-links">
      <li><a href="mailto:help.aurumstore@gmail.com">Contact</a></li>
      <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      <li><a href="/mentionslegales">Mentions légales</a></li>
    </ul>
    <p>&copy; 2025 Poké'Moon - Tous droits réservés.</p>
  </footer>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');


footer {
  background-color: #fff9f1;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #ddd;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 500px; /* Espace entre les liens */
  padding: 0;
  font-family: 'Oswald', sans-serif;
  list-style: none;
}

.footer-links li {
  display: inline;
}

.footer-links a {
  color: #333; /* Couleur normale */
  text-transform: uppercase;
  text-decoration: none; /* Supprime le soulignement */
  font-size: 15px;
  font-weight: bold;
}

.footer-links a:hover {
  color: #a68c53; /* Couleur dorée au survol */
}
</style>
