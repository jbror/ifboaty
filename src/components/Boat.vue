<template>
  <div>
    <DataTable :value="boats">
      <Column field="name" header="Namn"></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type {Boat} from '../types/types';

const boats = ref<Boat[]>([
  { name: 'Röja' }])
</script>
