<template>
  <div class="flex flex-col h-screen bg-slate-100">
    <Toolbar class="bg-slate-800 text-white md:hidden">
      <template #start>
        <Button icon="pi pi-bars" @click="sidebarVisible = true" severity="secondary" class="mr-3" />
        <span class="font-semibold">{{ currentPage?.label }}</span>
      </template>
    </Toolbar>

    <div class="flex flex-1 overflow-hidden">
      <Drawer v-model:visible="sidebarVisible" class="md:hidden w-64!"> </Drawer>

      <Menu :model="menuItems" class="hidden md:block w-56">
        <template #start>
          <div class="h-38 mt-4 mb-4 mr-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
              <g
                transform="translate(256,220) scale(1.6)"
                stroke="white"
                stroke-width="5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="0" y1="-120" x2="0" y2="70" />
                <path d="M 0 -110 L 95 40 L 0 40 Z" />
                <path d="M 0 -100 L -75 40 L 0 40 Z" />
                <path d="M -120 60 Q 0 85 120 60" />
              </g>
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
            <a :href="href" v-bind="props.action" @click="navigate" :class="{ 'active-menu-item': isExactActive }">
              <span :class="item.icon" />
              <span class="px-2 py-2">{{ item.label }}</span>
            </a>
          </router-link>
        </template>
        <template #end>
          <div class="px-2 py-2">
            <RouterLink to="/">
              <Button size="small" label="Tillbaka hem" severity="secondary" />
            </RouterLink>
          </div>
        </template>
      </Menu>

      <div class="flex flex-col flex-1 overflow-y-auto p-2">
        <div class="bg-white rounded-xl shadow-sm flex-1 p-2 max-w-4xl">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import type { MenuItem } from 'primevue/menuitem'

const route = useRoute()
const boatId = computed(() => route.params.id)
const sidebarVisible = ref(false)

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
]

const currentPage = computed(() => menuItems.find((item) => item.route === route.name))
</script>

<style scoped>
.active-menu-item {
  background-color: var(--p-primary-50);
  color: var(--p-primary-700);
  font-weight: 600;
  border-radius: 6px;
}
</style>
