<template>
  <div class="flex">
    <Menu :model="menuItems" class="bg-[#1d2937] w-64 h-screen" />
    <div class="flex-1 p-8">  <!-- Mitt content till höger om menyn -->
    <h1>Båt ID: {{ boatId }}</h1>
    <Button label="Tillbaka" icon="pi pi-arrow-left" @click="$router.push('/')" class="mt-4"></Button>
  </div>
</div>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { MenuItem } from 'primevue/menuitem';



const route = useRoute()
const boatId = computed(() => route.params.id)

const menuItems: MenuItem [] = [
    {label: "Översikt"},
    {label: "Inventory"},
    {label: "Projekt"},
    {label: "Min Båt"}
]


</script>

<style scoped>
  
</style>