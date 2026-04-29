import { createRouter, createWebHistory } from 'vue-router'
import Boat from '@/components/Boat.vue'
import BoatStart from '@/components/BoatStart.vue'
import Overview from '@/components/Overview.vue'
import Inventory from '@/components/Inventory.vue'
import Todo from '@/components/Todo.vue'
import MyBoat from '@/components/MyBoat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Boat,
    },
    {
      path: '/boat/:id',
      name: 'boatstart',
      component: BoatStart,
      children: [
        // Översikt
        { path: '', name: 'boat.overview', component: Overview },

        // Inventory
        { path: 'inventory', name: 'boat.inventory', component: Inventory },

        // Todo
        { path: 'todo', name: 'boat.todo', component: Todo },

        // My boat
        { path: 'myboat', name: 'boat.myboat', component: MyBoat },
      ],
    },
  ],
})

export default router
