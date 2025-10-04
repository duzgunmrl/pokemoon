import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import TCG from './pages/articles/TCG.vue';
import Cartes from './pages/articles/Cartes.vue';
import Accesoires from './pages/articles/Accesoires.vue';
import vuetify from './plugins/vuetify'; 
import BlogArticle from './pages/blog/BlogArticle.vue';
import Conversion from './pages/Conversion.vue';
import MentionsLegales from './pages/MentionsLegales.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/articles/Cartes', component: Cartes },
  { path: '/articles/TCG', component: TCG },
  { path: '/articles/Accesoires', component: Accesoires },
  { path: '/blog/:title', component: BlogArticle },
  { path: '/conversion', component: Conversion},
  { path: '/mentionslegales', component : MentionsLegales},
    // La route qui utilise le composant dynamique
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
const pinia = createPinia()

app.use(pinia);  
app.use(router);
app.use(vuetify);
app.mount('#app');
