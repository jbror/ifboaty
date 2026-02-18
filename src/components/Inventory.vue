<template>
  <div class="flex">
    <h1>Båt ID: {{ id }}</h1>
  </div>
  <DataTable :value="myitems">
    <Column field="id", header="st"></Column>
    <Column field="name", header="pryl"></Column>
    <Column field="quantity", header="pryl"></Column>
    <Column field="category", header="pryl"></Column>

  </DataTable>
</template>

<script setup lang="ts">
import type { Boat, Item } from '../types/types'
import myboatdata  from '../data/myboatdata.ts'
import {allItems}  from '../data/myboatdata.ts'
import { ref } from 'vue';

 const props = defineProps<{
  id: string
}>()



const myitems = ref<Item[]>([allItems])



</script>

<style scoped></style>
