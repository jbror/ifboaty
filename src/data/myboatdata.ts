import type { Boat, StorageUnit, Item } from '../types/types'

const allItems: Item[] = [
  {
    id: 20,
    name: 'mejsel',
    quantity: 2,
    category: 'verktyg',
  },
  {
    id: 21,
    name: 'kaka',
    quantity: 3,
    category: 'kex',
  },
]
const defaultStorageUnit: StorageUnit = {
  id: 1,
  name: 'Default',
  items: allItems,
}

const myBoat: Boat = {
  id: 620,
  name: 'Röja',
  year: 1978,
  areas: [
    {
      id: 1,
      name: 'Base',
      type: 'interior',
      storageUnits: [defaultStorageUnit],
    },
  ],
  data: [],
}

export default myBoat
