<template>
  <div class="flex flex-col md:flex-row h-screen">
    <!-- Mobile Header -->
    <div class="md:hidden flex items-center gap-3 px-4 py-3 bg-[#1d2937]">
      <Button icon="pi pi-bars" @click="sidebarVisible = true" severity="secondary" />
      <span class="text-white font-medium">{{ currentPage?.label }}</span>
    </div>

    <!-- Mobile Drawer -->
    <Drawer v-model:visible="sidebarVisible" class="md:hidden !w-64">
      <template #header>
        <div class="h-38">
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
      <div>
        <router-link
          v-for="item in menuItems"
          :key="item.route"
          :to="{ name: item.route, params: { id: boatId } }"
          @click="sidebarVisible = false"
          custom
          v-slot="{ href, navigate, isExactActive }"
        >
          <div v-if="item.separator" class="border-t border-white my-2"></div>
          <a
            v-else
            :href="href"
            @click="navigate"
            :class="{ 'active-menu-item': isExactActive }"
            class="flex items-center gap-3 py-2 px-4 mt-2 cursor-pointer"
          >
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
      </div>
      <template #footer>
        <RouterLink to="/" @click="sidebarVisible = false">
          <Button label="Tillbaka hem" severity="secondary" />
        </RouterLink>
      </template>
    </Drawer>

    <!-- Desktop Menu -->
    <Menu :model="menuItems" class="hidden md:block w-64">
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
        <div class="grid grid-cols-2 px-2 py-2">
          <RouterLink to="/">
            <Button size="small" label="Tillbaka hem" severity="secondary" />
          </RouterLink>
        </div>
      </template>
    </Menu>

    <ScrollPanel class="flex-1" :dt="{ bar: { background: '{primary.color}' } }">
      <div class="max-w-6xl p-6">
        <router-view></router-view>
      </div>
    </ScrollPanel>
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
  {
    separator: true,
    class: 'mt-4',
  },
]

const currentPage = computed(() => menuItems.find((item) => item.route === route.name))
</script>

<style scoped>
.active-menu-item {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-weight: 500;
}
</style>
