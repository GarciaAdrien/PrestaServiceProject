import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ajoutPrestation from '../views/ajoutPrestation.vue'
import exploration from '../views/exploration.vue'
import mesPrestations from '../views/mesPrestations.vue'
import login from '../views/login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ajoutPrestation',
      name: 'ajoutPrestation',
      component: ajoutPrestation
    },

    {
      path: '/exploration',
      name: 'exploration',
      component: exploration
    },
    {
      path: '/mesprestations',
      name: 'mesPrestations',
      component: mesPrestations
    },
    {
      path: '/connexion',
      name: 'login',
      component: login
    },
  ]
})
/*
<li><a href="#/exploration">Explorer</a></li>
<li><a href="#/ajoutPrestation">Ajouter une Prestation</a></li>
<li><a href="#/mesprestations">Mes Prestations</a></li> 
<li><a href="#/compte">Mon Compte</a></li>
<li><a href="#/">Se deconnecter</a></li>
*/
export default router
