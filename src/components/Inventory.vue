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
    <InputText placeholder="Name" v-model="addItemName" />
    <InputText placeholder="Id" v-model="addItemId" />
    <InputText placeholder="Quantity" v-model="addItemQuantity" />
    <InputText placeholder="Category" v-model="addItemCategory" />
    <Button type="submit" label="Lägg till pryl" severity="info" @click="addItem" />

    <DataTable :value="newItemHolder" class="mt-3">
      <Column field="name" header="Name"></Column>
      <Column field="id" header="Id"></Column>
      <Column field="quantity" header="Quantity"></Column>
      <Column field="category" header="Category"></Column>
    </DataTable>
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


const filterActive = ref(false) // This is for later, maybe button to select filter of items to display etc.
const allItems = allItemsInBoat

const displayItems = computed(() => {
  if (!filterActive.value) {
    return allItems
  }

  return allItems.filter((item) => item.category === 'Redskap') // Etc, for later when adding some ability to filter
})

const newItemHolder = ref<Item[]>([]) // Temp container for newly added items. For later also

const addItemName = ref('')
const addItemId = ref('')
const addItemQuantity = ref('')
const addItemCategory = ref('')

// Adds item from input and validating, work in progress
function addItem() {
  if (!isValidItem()) {
    return
  }
  const newItem: Item = {
    name: addItemName.value,
    id: parseInt(addItemId.value),
    quantity: parseInt(addItemQuantity.value),
    category: addItemCategory.value,
  }
  newItemHolder.value.push(newItem)
  console.log(newItem)

  addItemName.value = ''
  addItemId.value = ''
  addItemQuantity.value = ''
  addItemCategory.value = ''
}


// Checks if the input is a valid item
function isValidItem(): boolean {
  if (addItemName.value.trim() === '' || addItemId.value.trim() === '' || addItemQuantity.value.trim() === '') {
    return false
  }
  const id = parseInt(addItemId.value)
  const quantity = parseInt(addItemQuantity.value)

  if (!Number.isInteger(id) || !Number.isInteger(quantity)) {
    return false
  }
  if (id <= 0 || quantity <= 0) {
    return false
  }
  return true
}
</script>

<style scoped></style>
