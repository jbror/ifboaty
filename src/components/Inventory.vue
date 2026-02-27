<template>
  <div class="w-full">
    <div class="mb-8">
      <h1>Båt ID: {{ id }}</h1>
      <p>Här visas allt som finns i båten. Du kan också lägga till nya prylar</p>
    </div>

 <div class="flex flex-col md:flex-row gap-2 mb-2">
    <Button label="Alla utrymmen"  variant="outlined" severity="info" size="small" />
    <Button label="Ruffen" disabled variant="outlined" severity="info" size="small" />
    </div>
    <DataTable class="mb-2" :value="displayItems" show-gridlines>
      <Column field="id" , header="Id"></Column>
      <Column field="name" , header="Name"></Column>
      <Column field="quantity" , header="Quantity"></Column>
      <Column field="category" , header="Category"></Column>
    </DataTable>

    <InputText placeholder="Name" v-model="addItemName" />
    <InputText placeholder="Id" v-model="addItemId" />
    <InputText placeholder="Quantity" v-model="addItemQuantity" />
    <InputText placeholder="Category" v-model="addItemCategory" />
    <Button type="submit" label="Lägg till pryl" severity="info" @click="addItem" />
  </div>
</template>

<script setup lang="ts">
import type { Boat, Item, Area, StorageUnit } from '../types/types'
import { allItemsInBoat } from '../data/myboatdata.ts'
import { ref } from 'vue'
import { computed } from 'vue'

const props = defineProps<{
  id: string
}>()

const filterActive = ref(false) // This is for later, maybe button to select filter of items to display etc.
const allItems = ref(allItemsInBoat)

const displayItems = computed(() => {
  if (!filterActive.value) {
    return allItems.value
  }

  return allItems.value.filter((item) => item.category === 'Redskap') // Etc, for later when adding some ability to filter
})

const addItemName = ref('')
const addItemId = ref('')
const addItemQuantity = ref('')
const addItemCategory = ref('')

// Adds item from input and validating
function addItem() {
  if (!isValidItem(addItemName.value, addItemId.value, addItemQuantity.value)) {
    return
  }
  const newItem: Item = {
    name: addItemName.value,
    id: Number(addItemId.value),
    quantity: Number(addItemQuantity.value),
    category: addItemCategory.value,
  }
  allItems.value.push(newItem)
  console.log(newItem)

  addItemName.value = ''
  addItemId.value = ''
  addItemQuantity.value = ''
  addItemCategory.value = ''
}

// Checks if the input is a valid item
function isValidItem(name: string, id: string, quatity: string): boolean {
  if (name.trim() === '' || id.trim() === '' || quatity.trim() === '') {
    return false
  }
  const idNum = Number(id)
  const quantityNum = Number(quatity)

  if (!Number.isInteger(idNum) || !Number.isInteger(quantityNum)) {
    return false
  }
  if (idNum <= 0 || quantityNum <= 0) {
    return false
  }

  return true
}
</script>

<style scoped></style>
