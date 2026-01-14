<template>
  <div class="flex">
    <Menu :model="menuItems" class="w-64 h-screen"></Menu>
    <div class="flex-1 p-8">  <!-- Mitt content till höger om menyn -->
    <h1>Båt ID: {{ boatId }}</h1>
    <Button label="Tillbaka" icon="pi pi-arrow-left" @click="$router.push('/')" class="mt-4"></Button>
  </div>
</div>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useRoute } from 'vue-router'



const route = useRoute()
const boatId = computed(() => route.params.id)

const menuItems = [
    {label: "Översikt"},
    {label: "Inventory"},
    {label: "Projekt"}

]


</script>





<style scoped>

</style>