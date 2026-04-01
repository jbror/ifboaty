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
  <DataTable v-model:selection="selectedItems" :value="displayItems" striped-rows show-gridlines size="small" dataKey="id">
    <template #header>
      <div class="flex items-center gap-4">
        <span class="font-bold">Innehåll</span>
        <Button label="Lägg till" icon="pi pi-plus" size="small" severity="primary" @click="showAddForm = !showAddForm" />
        <Button
          label="Ta bort"
          icon="pi pi-trash"
          size="small"
          severity="danger"
          variant="outlined"
          @click="deleteItems"
          :disabled="!selectedItems.length"
        />
      </div>
    </template>
    <Column selectionMode="multiple" style="width: 2%"></Column>
    <Column field="id" header="Id" style="width: 4%"></Column>
    <Column field="name" header="Namn" style="width: 40%"></Column>
    <Column field="category" header="Kategori" style="width: 40%"></Column>
    <Column field="quantity" header="Antal" style="width: 4%"></Column>

    <template #footer>
      <p class="text-center text-sm">
        <strong>{{ displayItems.length }}</strong> prylar
      </p>
    </template>
  </DataTable>

  <Dialog v-model:visible="showAddForm" modal header="Lägg till ny pryl" class="w-[95vw] max-w-150">
    <div class="flex flex-col gap-3">
      <Message class="mt-2" v-if="!selectedStorage" severity="warn" :closable="false">Välj ett stuvfack först</Message>
      <Message class="mt-2" v-else severity="success" :closable="false">Läggs till i: {{ selectedStorage.name }}</Message>

      <InputText placeholder="Namn" v-model="addItemName" :invalid="submitted && addItemName.trim() === ''" />
      <InputNumber
        placeholder="Id"
        v-model="addItemId"
        :invalid="(submitted && !addItemId) || (addItemId !== null && itemIdExists(addItemId))"
      />
      <Message v-if="addItemId && itemIdExists(addItemId)" severity="error" :closable="false">ID {{ addItemId }} finns redan</Message>
      <InputNumber placeholder="Antal" v-model="addItemQuantity" :invalid="submitted && !addItemQuantity" />
      <InputText placeholder="Kategori" v-model="addItemCategory" />
      <Button label="Lägg till" severity="primary" @click="addItem" :disabled="!selectedStorage" />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import type { Item, Area, StorageUnit } from '../types/types'
import rawBoatData from '../data/myboatdata'
import { ref, computed } from 'vue'

const boatData = ref(rawBoatData)

const { id } = defineProps<{
  id: string
}>()

const showAddForm = ref(false)
const selectedArea = ref<Area | null>(null)
const selectedStorage = ref<StorageUnit | null>(null)
const selectedItems = ref<Item[]>([])

const displayItems = computed(() => {
  if (selectedStorage.value) {
    return selectedStorage.value.items
  }

  if (selectedArea.value) {
    return selectedArea.value.storageUnits.flatMap((unit) => unit.items)
  }

  return boatData.value.areas.flatMap((area) => area.storageUnits.flatMap((unit) => unit.items))
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
const submitted = ref(false)

function itemIdExists(id: number): boolean {
  return boatData.value.areas.some((area) => area.storageUnits.some((unit) => unit.items.some((item) => item.id === id)))
}

function addItem() {
  submitted.value = true

  if (
    !selectedStorage.value ||
    addItemName.value.trim() === '' ||
    !addItemId.value ||
    !addItemQuantity.value ||
    itemIdExists(addItemId.value)
  ) {
    return
  }

  selectedStorage.value.items.push({
    name: addItemName.value,
    id: addItemId.value,
    quantity: addItemQuantity.value,
    category: addItemCategory.value,
  })

  addItemName.value = ''
  addItemId.value = null
  addItemQuantity.value = null
  addItemCategory.value = ''
  submitted.value = false
  showAddForm.value = false
}

function deleteItems() {
  const idsToDelete = new Set(selectedItems.value.map((item) => item.id))

  for (const area of boatData.value.areas) {
    for (const unit of area.storageUnits) {
      unit.items = unit.items.filter((x) => !idsToDelete.has(x.id))
    }
  }
  selectedItems.value = []
}
</script>

<style scoped></style>
