import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Parfums from './pages/articles/Parfums.vue';
import Archive from './pages/articles/Archive.vue';
import Luxe from './pages/articles/Luxe.vue';
import Sneakers from './pages/articles/Sneakers.vue';
import Musique from './pages/articles/Musique.vue';
import PersonalShopper from './pages/articles/PersonalShopper.vue';
import vuetify from './plugins/vuetify'; 

// Assurez-vous d'importer le composant BlogArticle ici
import BlogArticle from './pages/blog/BlogArticle.vue';
import Conversion from './pages/Conversion.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/articles/parfums', component: Parfums },
  { path: '/articles/luxe', component: Luxe },
  { path: '/articles/archive', component: Archive },
  { path: '/articles/sneakers', component: Sneakers },
  { path: '/articles/musique', component: Musique },
  { path: '/articles/personal-shopper', component: PersonalShopper },
  { path: '/blog/:title', component: BlogArticle },
  { path: '/conversion', component: Conversion},
    // La route qui utilise le composant dynamique
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount('#app');
