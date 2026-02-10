<template>
  <div class="flex">
    <Menu :model="menuItems" class="w-64 h-screen">
      <template #start>
        <div class="my-logo-container">
          <img src="/ifboatylogo5.png" alt="Logo" class="logo" />
        </div>
      </template>

      <template #item="{ item, props }">
        <router-link
          #="{ href, navigate, isExactActive }"
          :to="{ name: item.route, params: { id: boatId } }"
          custom
>
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
        <div class=" flex px-2 py-2 mt-1">
<Button  label="Back to start" severity="info" />
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
import { icon } from '@primeuix/themes/aura/avatar'
import { IconField } from 'primevue'

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

.my-logo-container {
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
}

.logo {
  max-width: 100%;
  height: auto;
  max-height: 80px;
}
</style>
