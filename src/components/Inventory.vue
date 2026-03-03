<template>
  <div class="w-full">
    <div class="mb-6">
      <h1 class="text-2xl font-bold">Båt ID: {{ id }}</h1>
      <p class="text-gray-600">Här visas allt som finns i båten. Du kan också lägga till nya prylar</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

      <div class="lg:col-span-2">
        <DataTable :value="displayItems" show-gridlines size="small" class="mb-4">
          <template #header>
            <div class="flex items-center justify-between">
              <span class="font-bold">Innehåll</span>
              <Button label="Lägg till ny pryl" icon="pi pi-plus" size="small" severity="info" @click="showAddForm = !showAddForm" />
            </div>
          </template>
          <Column field="id" header="Id"></Column>
          <Column field="name" header="Namn"></Column>
          <Column field="quantity" header="Antal"></Column>
          <Column field="category" header="Kategori"></Column>
        </DataTable>

        <div v-if="showAddForm" class="p-4 border rounded">
          <h3 class="font-bold mb-3">Lägg till ny pryl</h3>
          <div class="flex flex-col gap-2">
            <InputText placeholder="Namn" v-model="addItemName" />
            <InputText placeholder="Id" v-model="addItemId" />
            <InputText placeholder="Antal" v-model="addItemQuantity" />
            <InputText placeholder="Kategori" v-model="addItemCategory" />
            <Button label="Lägg till" severity="info" @click="addItem" />
          </div>
        </div>
      </div>


      <div class="flex flex-col gap-4">
        <Card>
          <template #title>
            <div class="flex items-center gap-2">
              <i class="pi pi-map-marker"></i>
              <span>Områden</span>
            </div>
          </template>
          <template #content>
            <Tree :value="areaNodes" selectionMode="single" v-model:selectionKeys="selectedAreaKey" @node-select="onAreaSelect" />
          </template>
        </Card>

        <Card>
          <template #title>
            <div class="flex items-center gap-2">
              <i class="pi pi-box"></i>
              <span>Stuvfack</span>
            </div>
          </template>

          <template #content>
            <Tree :value="storageNodes" selectionMode="single" v-model:selectionKeys="selectedStorageKey" @node-select="onStorageSelect" />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import type { Boat, Item, Area, StorageUnit } from '../types/types'
import boatData from '../data/myboatdata.ts'
import { allItemsInBoat } from '../data/myboatdata.ts'
import { ref, computed } from 'vue'
import type { TreeNode} from 'primevue/treenode'

const props = defineProps<{
  id: string
}>()



const showAddForm = ref(false)
const selectedAreaKey = ref<any>({ '0': true }) 
const selectedStorageKey = ref<any>({})
const selectedArea = ref<Area | null>(null)
const selectedStorage = ref<StorageUnit | null>(null)
const allItems = ref(allItemsInBoat)

const areaNodes = computed<TreeNode[]>(() => {
  return [
    {
      key:  '0',
      label: 'Alla områden',
      icon: 'pi pi-globe',
      children: boatData.areas.map((area, index) => ({
        key: `area-${index}`,
        label: area.name,
        icon: area.type === 'interior' ? 'pi pi-home' : 'pi pi-sun',
        data: area,
      })),
    },
  ]
})

const storageNodes = computed<TreeNode[]>(() => {
  let units: StorageUnit[] = []

  if (selectedArea.value) {
    units = selectedArea.value.storageUnits
  } else {
    units = boatData.areas.flatMap((area) => area.storageUnits)
  }

  return [
    {
      key: '0',
      label: 'Alla stuvfack',
      icon: 'pi pi-th-large',
      children: units.map((unit, index) => ({
        key: `storage-${index}`,
        label: unit.name,
        icon: 'pi pi-box',
        data: unit,
      })),
    },
  ]
})


const displayItems = computed(() => {
  let items: Item[] = allItems.value


  if (selectedStorage.value) {
    return selectedStorage.value.items
  }


  if (selectedArea.value) {
    return selectedArea.value.storageUnits.flatMap((unit) => unit.items)
  }


  return items
})


function onAreaSelect(node: any) {
  if (node.data) {
    selectedArea.value = node.data
    selectedStorage.value = null 
    selectedStorageKey.value = {}
  } else {
   
    selectedArea.value = null
  }
}

function onStorageSelect(node: any) {
  if (node.data) {
    selectedStorage.value = node.data
  } else {
    selectedStorage.value = null
  }
}


const addItemName = ref('')
const addItemId = ref('')
const addItemQuantity = ref('')
const addItemCategory = ref('')

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

  
  
  addItemName.value = ''
  addItemId.value = ''
  addItemQuantity.value = ''
  addItemCategory.value = ''
  showAddForm.value = false
}

function isValidItem(name: string, id: string, quantity: string): boolean {
  if (name.trim() === '' || id.trim() === '' || quantity.trim() === '') {
    return false
  }
  const idNum = Number(id)
  const quantityNum = Number(quantity)

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
