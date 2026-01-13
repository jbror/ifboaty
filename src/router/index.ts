import { createRouter, createWebHistory } from 'vue-router'
import Boat from '../components/Boat.vue'
import SelectedBoat from '../components/SelectedBoat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Boat
    },
    {
      path: '/boat/:id',
      name: 'selectedBoat',
      component: SelectedBoat
    }
  ],
})

export default router
