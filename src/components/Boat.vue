<template>
  <div class="flex justify-center items-center min-h-screen pb-32 bg-slate-800">
    <div class="bg-white rounded p-8 max-w-2xl w-full">
      <h1 class="text-3xl mb-2 text-center font-medium">ifBoaty</h1>
      <p class="text-lg mb-4 text-center">Välj eller skapa din båt för att komma vidare</p>

      <Button label="Lägg till båt" icon="pi pi-plus" @click="displayDialog = true" severity="primary" class="mb-4 w-full"> </Button>

      <Dialog v-model:visible="displayDialog" @hide="submitted = false" modal header="Skapa båt" class="w-[95vw] sm:w-[75vw] md:w-120">
        <div class="flex flex-col gap-3">
          <InputText placeholder="Namn*" v-model="addBoatName" :invalid="submitted && addBoatName == ''" />
          <InputNumber
            placeholder="Id*"
            v-model="addBoatId"
            :invalid="(submitted && !addBoatId) || (addBoatId !== null && boatIdExists(addBoatId))"
          />
          <Message v-if="addBoatId && boatIdExists(addBoatId)" severity="error" :closable="false">ID {{ addBoatId }} finns redan</Message>
          <InputNumber placeholder="Year*" v-model="addBoatYear" :invalid="submitted && !addBoatYear" />
          <Button label="Lägg till" severity="primary" @click="saveBoat" />
        </div>
      </Dialog>

      <DataTable :value="boats" responsiveLayout="scroll">
        <Column field="name" header="Namn"></Column>
        <Column field="id" header="Id"></Column>
        <Column field="year" header="År"></Column>
        <Column header="">
          <template #body="{ data: boat }">
            <div class="flex gap-2">
              <Button label="Välj" severity="primary" size="small" @click="selectBoat(boat)"> </Button>
              <Button icon="pi pi-trash" severity="danger" size="small" text @click="deleteBoat(boat)"> </Button>
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
import type { Boat } from '../types/types'
import { boats } from '../data/boatStore'

const addBoatName = ref('')
const addBoatId = ref<number | null>(null)
const addBoatYear = ref<number | null>(null)
const submitted = ref(false)
const router = useRouter()
const displayDialog = ref(false)

const deleteBoat = (boat: Boat) => {
  boats.value = boats.value.filter((b) => b.id !== boat.id)
}

const saveBoat = () => {
  submitted.value = true

  if (addBoatName.value.trim() === '' || !addBoatId.value || !addBoatYear.value || boatIdExists(addBoatId.value)) {
    return
  }

  boats.value.push({ id: addBoatId.value!, name: addBoatName.value, year: addBoatYear.value, areas: [] })

  addBoatName.value = ''
  addBoatId.value = null
  addBoatYear.value = null

  displayDialog.value = false
  submitted.value = false
}

const boatIdExists = (id: number): boolean => {
  return boats.value.some((x) => x.id === id)
}

const selectBoat = (boat: Boat) => {
  router.push({ name: 'boat.overview', params: { id: boat.id } })
}
</script>
