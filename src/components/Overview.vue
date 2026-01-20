<template>
  <div class="flex">
    <h1>Båt ID: {{ boatId }}</h1>
    <p>overview</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const boatId = computed(() => route.params.id)
</script>

<style scoped></style>
