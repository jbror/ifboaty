<template>
  <div class="flex flex-col h-screen bg-slate-50">
    <Toolbar class="bg-slate-800 text-white md:hidden">
      <template #start>
        <Button icon="pi pi-bars" @click="sidebarVisible = true" severity="secondary" class="mr-3" />
        <span class="font-semibold">{{ currentPage?.label }}</span>
      </template>
    </Toolbar>

    <div class="flex flex-1 overflow-hidden">
      <Drawer v-model:visible="sidebarVisible" class="md:hidden w-64!">
        <template #header>
          <BoatLogo :size="152"> </BoatLogo>
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
            <a
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

      <Menu :model="menuItems" class="hidden md:block w-56">
        <template #start>
          <BoatLogo class="mt-4 ml-2 mb-4" :size="152"> </BoatLogo>
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

      <div class="flex flex-1 flex-col items-center overflow-y-auto p-2">
        <div class="bg-white rounded-xl shadow-sm w-full p-2 md:max-w-11/12 xl:max-w-8/12">
          <router-view :boat="boatData"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import type { MenuItem } from 'primevue/menuitem'
// import boatData from '../data/myboatdata'
import BoatLogo from './logo/BoatLogo.vue'

import { boats } from '../data/boatStore'

const route = useRoute()
const boatId = computed(() => route.params.id)

const boatData = computed(() => boats.value.find((b) => b.id === Number(boatId.value)))
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
