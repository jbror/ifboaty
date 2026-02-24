<template>
  <div class="flex">
    <h1>Båt ID: {{ id }}</h1>
  </div>
  <DataTable :value="displayItems">
    <Column field="id" , header="Id"></Column>
    <Column field="name" , header="Name"></Column>
    <Column field="quantity" , header="Quantity"></Column>
    <Column field="category" , header="Category"></Column>
  </DataTable>
</template>

<script setup lang="ts">
import type { Boat, Item, Area, StorageUnit } from '../types/types'
import myboatdata from '../data/myboatdata.ts'
import { allItemsInBoat } from '../data/myboatdata.ts'
import { ref } from 'vue'
import { computed } from 'vue'

const props = defineProps<{
  id: string
}>()




const newItemHolder: Item[] = [] // Temp container for newly added items. For later also
  

const filterActive = ref(false) // This is for later, maybe button to select filter of items to display etc.
const allItems = allItemsInBoat

const displayItems = computed(() => {
  if (!filterActive.value) {
    return allItems
  }

  return allItems.filter(item => item.category === 'Redskap') // Etc, for later when adding some ability to filter
})



</script>

<style scoped></style>

