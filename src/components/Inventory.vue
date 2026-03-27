<template>
  <div class="mb-4">
    <h1 class="text-base font-bold">Båt ID: {{ id }}</h1>
    <p class="text-base">Här visas allt som finns i båten. Du kan också lägga till nya prylar</p>
  </div>

  <!-- Områdesväljare -->
  <div class="mb-3">
    <p class="text-xs font-semibold text-muted-color uppercase mb-2">Område</p>
    <SelectButton
      size="small"
      :modelValue="selectedArea"
      @update:modelValue="onAreaSelect"
      :options="boatData.areas"
      optionLabel="name"
      :allowEmpty="true"
      class="flex-wrap gap-1"
    >
      <template #option="{ option }">
        <div class="flex items-center gap-1">
          <i :class="option.type === 'interior' ? 'pi pi-home text-xs' : 'pi pi-sun text-xs'"></i>
          <span>{{ option.name }}</span>
          <Badge size="small" :value="getAreaItemCount(option)" severity="secondary" />
        </div>
      </template>
    </SelectButton>
  </div>

  <!-- Stuvfack -->
  <div v-if="selectedArea" class="mb-3">
    <p class="text-xs font-semibold text-muted-color uppercase mb-2">Stuvfack i {{ selectedArea.name }}</p>
    <SelectButton
      size="small"
      :modelValue="selectedStorage"
      @update:modelValue="onStorageSelect"
      :options="selectedArea.storageUnits"
      optionLabel="name"
      :allowEmpty="true"
      class="flex-wrap gap-1"
    >
      <template #option="{ option }">
        <div class="flex items-center gap-1">
          <i class="pi pi-box text-xs"></i>
          <span>{{ option.name }}</span>
          <Badge size="small" :value="option.items.length" severity="secondary" />
        </div>
      </template>
    </SelectButton>
  </div>

  <!-- Tabell -->
  <DataTable class="border border-zinc-100" :value="displayItems" striped-rows show-gridlines size="small">
    <template #header>
      <div class="flex items-center justify-between">
        <span class="font-bold">Innehåll</span>
        <Button label="Lägg till ny pryl" icon="pi pi-plus" size="small" severity="primary" @click="showAddForm = !showAddForm" />
      </div>
    </template>
    <Column field="id" header="Id" style="width: 5%"></Column>
    <Column field="name" header="Namn" style="width: 40%"></Column>
    <Column field="category" header="Kategori" style="width: 40%"></Column>
    <Column field="quantity" header="Antal" style="width: 5%"></Column>
    <template #footer>
      <p class="text-center text-sm">
        <strong>{{ displayItems.length }}</strong> prylar
      </p>
    </template>
  </DataTable>

  <Dialog v-model:visible="showAddForm" modal header="Lägg till ny pryl" class="w-[95vw] max-w-150">
    <div class="flex flex-col gap-2">
      <p v-if="!selectedStorage" class="text-sm text-orange-600">Välj ett stuvfack först för att lägga till en pryl</p>
      <p v-else class="text-sm text-green-600">Läggs till i: {{ selectedStorage.name }}</p>
      <InputText placeholder="Namn" v-model="addItemName" />
      <InputNumber placeholder="Id" v-model="addItemId" />
      <InputNumber placeholder="Antal" v-model="addItemQuantity" />
      <InputText placeholder="Kategori" v-model="addItemCategory" />
      <Button label="Lägg till" severity="primary" @click="addItem" :disabled="!selectedStorage" />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import type { Item, Area, StorageUnit } from '../types/types'
import boatData from '../data/myboatdata'
import { ref, computed } from 'vue'

const { id } = defineProps<{
  id: string
}>()

const showAddForm = ref(false)
const selectedArea = ref<Area | null>(null)
const selectedStorage = ref<StorageUnit | null>(null)

const displayItems = computed(() => {
  if (selectedStorage.value) {
    return selectedStorage.value.items
  }

  if (selectedArea.value) {
    return selectedArea.value.storageUnits.flatMap((unit) => unit.items)
  }

  return boatData.areas.flatMap((area) => area.storageUnits.flatMap((unit) => unit.items))
})

function getAreaItemCount(area: Area) {
  return area.storageUnits.reduce((total, unit) => total + unit.items.length, 0)
}

function onAreaSelect(value: Area | null) {
  selectedArea.value = value
  selectedStorage.value = null
}

function onStorageSelect(value: StorageUnit | null) {
  selectedStorage.value = value
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
