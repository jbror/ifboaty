<template>
  <div class="flex">
    <h1>Båt ID: {{ id }}</h1>
  </div>
  <DataTable :value="[]">
    <Column field="id" , header="st"></Column>
    <Column field="name" , header="pryl"></Column>
    <Column field="quantity" , header="pryl"></Column>
    <Column field="category" , header="pryl"></Column>
  </DataTable>
</template>

<script setup lang="ts">
import type { Boat, Item } from '../types/types'
import myboatdata from '../data/myboatdata.ts'
// import {allItems}  from '../data/myboatdata.ts'
import { ref } from 'vue'
import { computed } from 'vue'

const props = defineProps<{
  id: string
}>()

const allItems: Item[] = []

// allItems.push(myboatdata.areas[0]?.storageUnits[0]?.items);

 const fillItems = computed (() => myboatdata.areas.flatMap(area => area.storageUnits).flatMap(saker => saker?.items).flatMap(pryl => allItems.push(pryl ))
);

console.log(fillItems.value)
console.log(allItems)


</script>

<style scoped></style>
