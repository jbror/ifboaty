<template>
  <div class="flex">
    <Menu :model="menuItems" class="w-64 h-screen">
      <template #start>
        <div class="h-50 m mr-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%" preserveAspectRatio="xMidYMid">
            <rect x="250" y="90" width="12" height="260" fill="white" stroke="112" />

            <path d="M 264.091 93.596 L 264.091 333.596 L 398.091 333.596 L 264.091 93.596 Z" fill="white" />

            <path d="M 248.358 122.697 L 132.358 332.697 L 248.358 332.697 L 248.358 122.697 Z" fill="white" />

            <path d="M 110 350 C 207.333 386.404 304.667 386.404 402 350" fill="white" style="" />

            <text
              style="
                fill: rgb(255, 255, 255);
                font-family: Arial, sans-serif;
                font-size: 75px;
                letter-spacing: 1px;
                text-anchor: middle;
                white-space: pre;
              "
              x="254.395"
              y="448.068"
            >
              ifBoaty
            </text>
          </svg>
        </div>
      </template>

      <template #item="{ item, props }">
        <router-link #="{ href, navigate, isExactActive }" :to="{ name: item.route, params: { id: boatId } }" custom>
          <a :href="href" :="props.action" @click="navigate" :class="{ 'active-menu-item': isExactActive }" class="grid-cols-[auto_1_fr]">
            <span :class="item.icon" />
            <span class="px-2 py-2">{{ item.label }}</span>
          </a>
        </router-link>
      </template>

      <template #end>
        <div class="grid grid-cols-2 px-2 py-2">
          <RouterLink to="/">
            <Button size="small" label="Tillbaka hem" severity="secondary" />
          </RouterLink>
        </div>
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
    icon: 'pi pi-home',
    route: 'boat.overview',
  },
  {
    label: 'Inventory',
    icon: 'pi pi-database',
    route: 'boat.inventory',
  },
  {
    label: 'Todo',
    icon: 'pi pi-check-square',
    route: 'boat.todo',
  },
  {
    label: 'Min båt',
    icon: 'pi pi-cog',
    route: 'boat.myboat',
  },
  {
    separator: true,
    class: 'mt-4',
  },
]
</script>

<style scoped>
.active-menu-item {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-weight: 600;
}
</style>
