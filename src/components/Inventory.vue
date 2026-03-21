<template>
  <div class="mb-6">
    <h1 class="text-base font-bold">Båt ID: {{ id }}</h1>
    <p class="text-base">Här visas allt som finns i båten. Du kan också lägga till nya prylar</p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
    <div class="lg:col-span-2">
      <!-- // Använd Dynamic Dialog i DataTable för lägga till också. Todo! -->
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

      <div class="flex items-center gap-2 mt-2 flex-wrap">
        <Select
          v-model="selectedArea"
          :options="boatData.areas"
          optionLabel="name"
          placeholder="Alla områden"
          showClear
          size="small"
          @change="onAreaChange"
        >
          <template #value="{ value }">
            <div v-if="value" class="flex items-center gap-2">
              <i :class="value.type === 'interior' ? 'pi pi-home' : 'pi pi-sun'"></i>
              <span>{{ value.name }}</span>
            </div>
          </template>
          <template #option="{ option }">
            <div class="flex items-center gap-2">
              <i :class="option.type === 'interior' ? 'pi pi-home' : 'pi pi-sun'"></i>
              <span>{{ option.name }}</span>
            </div>
          </template>
        </Select>

        <Select v-model="selectedStorage" :options="storageUnits" optionLabel="name" placeholder="Alla stuvfack" showClear size="small">
          <template #value="{ value }">
            <div v-if="value" class="flex items-center gap-2">
              <i class="pi pi-box"></i>
              <span>{{ value.name }}</span>
            </div>
          </template>
          <template #option="{ option }">
            <div class="flex items-center gap-2">
              <i class="pi pi-box"></i>
              <span>{{ option.name }}</span>
            </div>
          </template>
        </Select>
      </div>

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
    </div>

    <!-- Tidslinje för att välja Area -->

    <div class="flex flex-col gap-4">
      <Card class="border border-zinc-100">
        <template #title>
          <span class="text-sm font-semibold text-center block">Välj område</span>
        </template>
        <template #content>
          <Timeline :value="[...boatData.areas].reverse()" class="w-full">
            <template #opposite="{ item }">
              <span class="inline-flex min-w-8 items-center justify-center rounded-full bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-600">
                {{ getAreaItemCount(item) }}
              </span>
            </template>
            <template #marker="{ item }">
              <button
                class="w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors"
                :class="
                  selectedArea?.id === item.id
                    ? 'bg-primary border-primary text-white'
                    : 'bg-white border-zinc-300 text-zinc-500 hover:border-primary'
                "
                @click="onAreaClick(item)"
              >
                <i :class="item.type === 'interior' ? 'pi pi-home text-xs' : 'pi pi-sun text-xs'"></i>
              </button>
            </template>
            <template #content="{ item }">
              <span
                class="text-sm cursor-pointer"
                :class="selectedArea?.id === item.id ? 'font-bold text-primary' : 'text-zinc-500'"
                @click="onAreaClick(item)"
                >{{ item.name }}</span
              >
            </template>
          </Timeline>
        </template>
      </Card>

      <Card v-if="selectedArea" class="border border-zinc-100">
        <template #title>
          <span class="text-sm font-semibold">Stuvfack i {{ selectedArea.name }}</span>
        </template>
        <template #content>
          <ul class="list-none p-0 m-0 flex flex-col gap-1">
            <li
              v-for="unit in selectedArea.storageUnits"
              :key="unit.id"
              class="flex items-center gap-2 px-2 py-2 rounded cursor-pointer transition-colors"
              :class="selectedStorage?.id === unit.id ? 'bg-primary/10 font-semibold' : 'hover:bg-zinc-100'"
              @click="onStorageClick(unit)"
            >
              <i class="pi pi-box text-sm text-zinc-400"></i>
              <span class="text-sm">{{ unit.name }}</span>
            </li>
          </ul>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item, Area, StorageUnit } from '../types/types'
import boatData from '../data/myboatdata'
import { ref, computed } from 'vue'

defineOptions({
  name: 'InventoryView',
})

const { id } = defineProps<{
  id: string
}>()

const showAddForm = ref(false)
const selectedArea = ref<Area | null>(null)
const selectedStorage = ref<StorageUnit | null>(null)

const storageUnits = computed(() => {
  if (selectedArea.value) {
    return selectedArea.value.storageUnits
  }
  return boatData.areas.flatMap((area) => area.storageUnits)
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

function getAreaItemCount(area: Area) {
  return area.storageUnits.reduce((total, unit) => total + unit.items.length, 0)
}

function onAreaChange() {
  selectedStorage.value = null
}

function onAreaClick(area: Area) {
  if (selectedArea.value?.id === area.id) {
    selectedArea.value = null
    selectedStorage.value = null
  } else {
    selectedArea.value = area
    selectedStorage.value = null
  }
}

function onStorageClick(unit: StorageUnit) {
  selectedStorage.value = selectedStorage.value?.id === unit.id ? null : unit
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
