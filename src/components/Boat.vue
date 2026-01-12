<template>
  <div>
    <Button label="Lägg till båt" icon="pi pi-plus" @click="visible = true" severity="contrast"></Button>
    <Dialog v-model:visible="visible" header="Läg till en båt" :style="{ width: '450px' }"></Dialog>

    <DataTable :value="boats">
      <Column field="name" header="Namn"></Column>
      <Column field="id" header="Id"></Column>
      <Column field="year" header="Year"></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type {Boat} from '../types/types';

const boats = ref<Boat[]>([
  {
    id: 620,
    name: 'Röja',
    year: 1978,
    areas: []
  }

])

 const visible = ref(false);
</script>
