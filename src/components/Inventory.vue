<template>
    <div class="mb-6">
      <h1 class="text-xl font-bold">Båt ID: {{ id }}</h1>
      <p>Här visas allt som finns i båten. Du kan också lägga till nya prylar</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
      <div class="lg:col-span-2">
        <DataTable :value="displayItems" striped-rows show-gridlines size="small" >
          <template #header>
            <div class="flex items-center justify-between">
              <span class="font-bold">Innehåll</span>
              <Button label="Lägg till ny pryl" icon="pi pi-plus" size="small" severity="info" @click="showAddForm = !showAddForm" />
            </div>
          </template>
          <Column field="id" header="Id" style="width: 25%"></Column>
          <Column field="name" header="Namn" style="width: 25%"></Column>
          <Column field="quantity" header="Antal" style="width: 25%"></Column>
          <Column field="category" header="Kategori" style="width: 25%"></Column>
          <template #footer>
            <p class="text-center text-sm">
              <strong>{{ displayItems.length }}</strong> prylar
            </p>
          </template>
        </DataTable>

        <div v-if="showAddForm" class="p-4 mt-4 border border-zinc-200">
          <h3 class="font-bold mb-3">Lägg till ny pryl</h3>
          <p v-if="!selectedStorage" class="text-sm text-orange-600 mb-2">Välj ett stuvfack först för att lägga till en pryl</p>
          <p v-else class="text-sm text-green-600 mb-2">Läggs till i: {{ selectedStorage.name }}</p>
          <div class="flex flex-col gap-2">
            <InputText placeholder="Namn" v-model="addItemName" />
            <InputNumber placeholder="Id" v-model="addItemId" />
            <InputNumber placeholder="Antal" v-model="addItemQuantity" />
            <InputText placeholder="Kategori" v-model="addItemCategory" />
            <Button label="Lägg till" severity="info" @click="addItem" :disabled="!selectedStorage" />
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
            <Tree
              :value="areaNodes"
              selectionMode="single"
              v-model:selectionKeys="selectedAreaKey"
              @node-select="onAreaSelect"
              @node-unselect="onAreaUnselect"
            />
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
            <Tree
              :value="storageNodes"
              selectionMode="single"
              v-model:selectionKeys="selectedStorageKey"
              @node-select="onStorageSelect"
              @node-unselect="onStorageUnselect"
            />
          </template>
        </Card>
      </div>
    </div>
  
</template>

<script setup lang="ts">
import type { Boat, Item, Area, StorageUnit } from '../types/types'
import boatData from '../data/myboatdata.ts'
import { ref, computed } from 'vue'
import type { TreeNode } from 'primevue/treenode'


const props = defineProps<{
  id: string
}>()

const showAddForm = ref(false)
const selectedAreaKey = ref({})
const selectedStorageKey = ref({})
const selectedArea = ref<Area | null>(null)
const selectedStorage = ref<StorageUnit | null>(null)

const areaNodes = computed<TreeNode[]>(() => {
  return boatData.areas.map((area, index) => ({
    key: `area-${index}`,
    label: area.name,
    icon: area.type === 'interior' ? 'pi pi-home' : 'pi pi-sun',
    data: area,
  }))
})

const storageNodes = computed<TreeNode[]>(() => {
  let units: StorageUnit[] = []

  if (selectedArea.value) {
    units = selectedArea.value.storageUnits
  } else {
    units = boatData.areas.flatMap((area) => area.storageUnits)
  }

  return units.map((unit, index) => ({
    key: `storage-${index}`,
    label: unit.name,
    icon: 'pi pi-box',
    data: unit,
  }))
})

const displayItems = computed(() => {
  if (selectedStorage.value) {
    return selectedStorage.value.items
  }

  if (selectedArea.value) {
    return selectedArea.value.storageUnits.flatMap((unit) => unit.items)
  }

  return boatData.areas.flatMap((area) => area.storageUnits.flatMap((unit) => unit.items))
})

function onAreaSelect(node: TreeNode) {
  selectedArea.value = node.data as Area
  selectedStorage.value = null
  selectedStorageKey.value = {}
}

function onAreaUnselect() {
  selectedArea.value = null
  selectedStorage.value = null
  selectedStorageKey.value = {}
}

function onStorageSelect(node: TreeNode) {
  selectedStorage.value = node.data as StorageUnit
}

function onStorageUnselect() {
  selectedStorage.value = null
}

const addItemName = ref('')
const addItemId = ref<number | null>(null)
const addItemQuantity = ref<number | null>(null)
const addItemCategory = ref('')

function addItem() {
  if (!selectedStorage.value) {
    alert('Välj ett stuvfack först!')
    return
  }

  if (!isValidItem(addItemName.value, addItemId.value, addItemQuantity.value)) {
    return
  }

  const newItem: Item = {
    name: addItemName.value,
    id: addItemId.value || 0,
    quantity: Number(addItemQuantity.value),
    category: addItemCategory.value,
  }

  selectedStorage.value.items.push(newItem)

  addItemName.value = ''
  addItemId.value = null
  addItemQuantity.value = null
  addItemCategory.value = ''
  showAddForm.value = false
}

function isValidItem(name: string, id: number | null, quantity: number | null): boolean {
  if (name.trim() === '' || id === null || quantity === null) {
    return false
  }
  const quantityNum = Number(quantity)

  if (!Number.isInteger(id) || !Number.isInteger(quantityNum)) {
    return false
  }
  if (id <= 0 || quantityNum <= 0) {
    return false
  }

  return true
}
</script>

<style scoped></style>
