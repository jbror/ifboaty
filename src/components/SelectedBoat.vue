<template>
  <div class="boat-app">
    <h1>Båt ID: {{ boatId }}</h1>

    <Button label="Tillbaka" icon="pi pi-arrow-left" @click="$router.push('/')" class="mt-4"></Button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const boatId = computed(() => route.params.id)
</script>

<style scoped>
.boat-app {
  padding: 20px;
  
}
</style>