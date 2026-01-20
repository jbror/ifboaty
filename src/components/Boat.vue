<template>
  <div class="startpage">
    <div class="boat-selection-card">
      <h1 style="font-size: 48px; margin-bottom: 10px; text-align: center;">IFBoaty</h1>
      <p style="font-size: 18px; margin-bottom: 30px; text-align: center;">Välj eller skapa din båt för att komma vidare</p>
      
      <Button 
        label="Lägg till båt" 
        icon="pi pi-plus" 
        @click="visible = true" 
        severity="contrast" 
        class="mb-4 w-full">
      </Button>

      <Dialog v-model:visible="visible" modal header="Lägg till en båt" :style="{ width: '450px' }">
        <span class="text-gray-800 block mb-5">Fyll i detaljerna för den nya båten.</span>

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

      <DataTable :value="boats" responsiveLayout="scroll" class="boat-table">
        <Column field="name" header="Namn"></Column>
        <Column field="id" header="Id"></Column>
        <Column field="year" header="År"></Column>
        <Column header="">
          <template #body="slotProps">
            <div class="flex gap-2">
              <Button 
                label="Välj" 
                severity="info" 
                size="small"
                @click="selectBoat(slotProps.data)">
              </Button>
              <Button 
                icon="pi pi-trash" 
                severity="danger" 
                size="small"
                text
                @click="boats.splice(slotProps.index, 1)">
              </Button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Boat } from '../types/types';

const router = useRouter()

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

const selectBoat = (boat: Boat) => {
  router.push(`/boat/${boat.id}`)
};
</script>

<style scoped>
.startpage{
  display: flex;
  justify-content: center;
  align-items:  center;
  min-height: 100vh;
  background: #011122e7;

}

.boat-selection-card {
  background: white;
  border-radius: 8px;
  padding: 30px;
  max-width: 600px;
  width: 100%;
}
</style>