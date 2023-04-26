import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CasillasView from '../views/CasillasView.vue'
import EMSView from '../views/EmsView.vue'
import EncomiendasView from '../views/encomiendaView.vue'
import EcaPlagiosView from '../views/eca_plagiosView.vue'
import TradicionalView from '../views/tradicionalView.vue'
import LoginView from '../views/LoginView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/casillas',
    name: 'casillas',
    component: CasillasView,
  },
  {
    path: '/ems',
    name: 'EMS',
    component: EMSView,
  },
  {
    path: '/encomiendas',
    name: 'encomiendas',
    component: EncomiendasView,
  },
  {
    path: '/ecaplagios',
    name: 'ecaplagios',
    component: EcaPlagiosView,
  },
  {
    path: '/tradicional',
    name: 'tradicional',
    component: TradicionalView,
  },
  {
    path: '/Login',
    name: 'login',
    component: LoginView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
