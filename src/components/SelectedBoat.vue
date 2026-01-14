<template>
  <div class="boat-app">
    <h1>Båt ID: {{ boatId }}</h1>

    <Button label="Tillbaka" icon="pi pi-arrow-left" @click="$router.push('/')" class="mt-4"></Button>
  </div>
<div class="card flex justify-center">
<Menu :model="menuItems"  >
  
<template #start>

</template>



</Menu>
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









.boat-app {
  padding: 20px;
  
}
</style>