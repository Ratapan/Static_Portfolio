import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Apis from '../views/ConsumeApis.vue'
import Demos from '../views/Demos.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Apis',
    name: 'Apis',
    component: Apis
  },
  {
    path: '/Demos',
    name: 'Demos',
    component: Demos
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
