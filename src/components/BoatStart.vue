<template>
  <div class="flex">
    <Menu :model="menuItems" class="w-64 h-screen">
      <template v-slot:item="{ item, props }">
        <router-link v-slot="{ href, navigate, isExactActive }" :to="{ name: item.route, params: { id: boatId } }" custom>
          <a :href="href" v-bind="props.action" @click="navigate" :class="{ 'active-menu-item': isExactActive }">
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </Menu>
    <div class="flex-1 p-8">
      <!-- Mitt content till höger om menyn -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { MenuItem } from 'primevue/menuitem'

const route = useRoute()
const boatId = computed(() => route.params.id)

const menuItems: MenuItem[] = [
  {
    label: 'Översikt',
    route: 'boat.overview',
  },
  {
    label: 'Inventory',
    route: 'boat.inventory',
  },
   {
    label: 'Todo',
    route: 'boat.todo',
  }
]
</script>

<style scoped>
.active-menu-item {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-weight: 600;
}
</style>
