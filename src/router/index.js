import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import vin from '../views/vin.vue'
import carreport from '../views/carreport.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vin',
    name: 'Vin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:vin
  },
  {
    path: '/carreport',
    name: 'carreport',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:carreport
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
