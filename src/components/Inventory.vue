<template>
  <h1 class="mb-5">Båt ID: {{ id }}</h1>

  <p>Här visas allt som finns i båten. Du kan också lägga till nya prylar</p>

  <Divider />

  <DataTable :value="displayItems" show-gridlines>
    <Column field="id" , header="Id"></Column>
    <Column field="name" , header="Name"></Column>
    <Column field="quantity" , header="Quantity"></Column>
    <Column field="category" , header="Category"></Column>
  </DataTable>

  <div class="mt-2">
<InputText placeholder="Name" v-model="addItemName"> </InputText>
<InputText placeholder="Id" v-model="addItemId"> </InputText>
<InputText placeholder="Quantity" v-model="addItemQuantity"> </InputText>
<InputText placeholder="Category" v-model="addItemCategory"> </InputText>
    
    <Button type="submit" label="Lägg till pryl" severity="info" @click="addItem"></Button>
  </div>
</template>

<script setup lang="ts">
import type { Boat, Item, Area, StorageUnit } from '../types/types'
import myboatdata from '../data/myboatdata.ts'
import { allItemsInBoat } from '../data/myboatdata.ts'
import { ref } from 'vue'
import { computed } from 'vue'
import { Form } from '@primevue/forms'

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

  return allItems.filter((item) => item.category === 'Redskap') // Etc, for later when adding some ability to filter
})

const addItemName = ref('')
const addItemId = ref ('')
const addItemQuantity = ref('')
const addItemCategory = ref('')


const items: any = ref([])


function addItem() {
  if (addItemName.value.trim() !== '' && addItemId.value.trim() !== '' && addItemQuantity.value.trim()  !== '' && addItemCategory.value.trim() !== '' ) {
    items.value.push({addItemName, addItemId, addItemQuantity, addItemCategory })
    addItemName.value = ''
  }
  console.log(items.value)
}





</script>

<style scoped></style>
