import { createRouter, createWebHistory } from 'vue-router'
import Boat from '../components/Boat.vue'
import SelectedBoat from '../components/BoatStart.vue'
import BoatStart from '../components/BoatStart.vue'
import Overview from '@/components/Overview.vue'
import Inventory from '@/components/Inventory.vue'

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
      name: 'boatstart',
      component: BoatStart,
      props: true,
      children: [
        // Översikt
        { path: '', name: 'boat.overview', component: Overview, props: true },

        // Inventory
        { path: 'inventory', name: 'boat.inventory', component: Inventory, props: true },
      ],
    },
  ],
})

export default router
