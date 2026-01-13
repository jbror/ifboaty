<template>
  <div class="p-4">
    <Button label="Lägg till båt" icon="pi pi-plus" @click="visible = true" severity="contrast" class="mb-4"></Button>

    <Dialog v-model:visible="visible" modal header="Lägg till en båt" :style="{ width: '30rem' }">
      <span class="text-gray-500 block mb-5">Fyll i detaljerna för den nya båten.</span>

      <div class="flex items-center gap-3 mb-4">
        <label for="boatid" class="font-semibold" style="width: 60px;">ID</label>
        <InputText id="boatid" class="flex-auto" v-model="idInput" autocomplete="off" />
      </div>

      <div class="flex items-center gap-3 mb-4">
        <label for="boatname" class="font-semibold" style="width: 60px;">Namn</label>
        <InputText id="boatname" class="flex-auto" v-model="newBoat.name" autocomplete="off" />
      </div>

      <div class="flex items-center gap-3 mb-6">
        <label for="year" class="font-semibold" style="width: 60px;">År</label>
        <InputText id="year" class="flex-auto" v-model="yearInput" autocomplete="off" />
      </div>

      <div class="flex justify-end gap-2">
        <Button type="button" label="Avbryt" severity="contrast" @click="visible = false"></Button>
        <Button type="button" label="Spara båt" @click="saveBoat"></Button>
      </div>
    </Dialog>

    <DataTable :value="boats" responsiveLayout="scroll">
      <Column field="name" header="Namn"></Column>
      <Column field="id" header="Id"></Column>
      <Column field="year" header="Year"></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Boat } from '../types/types';

const boats = ref<Boat[]>([
  {
    id: 620,  
    name: 'Röja',
    year: 1978,
    areas: []
  }
]);

const visible = ref(false);
const idInput = ref<string>('');
const yearInput = ref<string>('');

const newBoat = ref<Boat>({
  id: 0,
  name: '',
  year: 0,
  areas: []
});

const saveBoat = () => {
  if (newBoat.value.name.trim()) {
    const id = parseInt(idInput.value) || 0;
    const year = parseInt(yearInput.value) || 0;
    
    boats.value.push({ ...newBoat.value, id: id, year: year });

    newBoat.value = { id: 0, name: '', year: 0, areas: [] };
    idInput.value = '';
    yearInput.value = '';
    visible.value = false;
  }
};
</script>

<style scoped>

</style>