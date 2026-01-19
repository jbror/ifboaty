<template>
  <div class="flex">
    <Menu :model="menuItems" class="bg-[#1d2937] w-64 h-screen">
      <template #item="{ item, props }">
        <router-link
          v-slot="{ href, navigate }"
          :to="{ name: item.route, params: { id: boatId } }" custom>
          <a :href="href" v-bind="props.action" @click="navigate">
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
]
</script>

<style scoped></style>
