<template>
  <div class="mb-2">
    <h1 class="text-base font-bold">Båt ID: {{ boat.id }}</h1>
    <p class="text-base">Här visas dina todos</p>
  </div>

</template>

<script setup lang="ts">
import type { Boat } from '../types/types';


 const props = defineProps<{
  boat: Boat
}>()

</script>
<style scoped></style>
