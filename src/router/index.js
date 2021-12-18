import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from "../components/Products.vue";
import Maps from "../components/map.vue";
Vue.use(VueRouter)

const routes = [
  { 
    path: '/map',
    name:"map",
    component: Maps 
  },
  { 
    path:'/Home',
    name:"name",
    component: Home 
  },
  { 
    name:"products",
    path:"/products",
    component:Products
  }
]

const router = new VueRouter({
  routes
})

export default router
