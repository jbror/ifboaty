<template>
  <div class="flex h-screen">
    <Menu :model="menuItems" class="w-64">
      <template #start>
        <div class="h-38 mt-4 mb-4 mr-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
            <!-- Sailboat -->
            <g
              transform="translate(256,220) scale(1.6)"
              stroke="white"
              stroke-width="5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <!-- Mast -->
              <line x1="0" y1="-120" x2="0" y2="70" />

              <!-- Front Sail -->
              <path d="M 0 -110 L 95 40 L 0 40 Z" />

              <!-- Back Sail -->
              <path d="M 0 -100 L -75 40 L 0 40 Z" />

              <!-- Hull -->
              <path d="M -120 60 Q 0 85 120 60" />
            </g>

            <!-- Text -->
            <text
              x="256"
              y="430"
              text-anchor="middle"
              fill="white"
              font-family="Segoe UI, Arial, sans-serif"
              font-size="70"
              font-weight="500"
              letter-spacing="1"
            >
              ifBoaty
            </text>
          </svg>
        </div>
      </template>

      <template #item="{ item, props }">
        <router-link #="{ href, navigate, isExactActive }" :to="{ name: item.route, params: { id: boatId } }" custom>
          <a
            :href="href"
            v-bind="props.action"
            @click="navigate"
            :class="{ 'active-menu-item': isExactActive }"
            class="grid-cols-[auto_1_fr]"
          >
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
    <ScrollPanel
      class="flex-1 p-5"
      :dt="{
        bar: {
          background: '{primary.color}',
        },
      }"
    >
      <router-view></router-view>
    </ScrollPanel>
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
