import type { Boat, StorageUnit, Item, BoatData } from '../types/types'

const baseItems: Item[] = [
  {
    id: 20,
    name: 'Skruvmejsel',
    quantity: 2,
    category: 'Verktyg',
  },
  {
    id: 21,
    name: 'Krok',
    quantity: 3,
    category: 'Redskap',
  },
  {
    id: 25,
    name: 'Flytväst',
    quantity: 4,
    category: 'Utrustning',
  },
  {
    id: 28,
    name: 'Kastrull',
    quantity: 2,
    category: 'Kök',
  },
]

const baseStorage: StorageUnit = {
  id: 1,
  name: 'Default',
  items: baseItems,
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
      storageUnits: [baseStorage],
    },
  ],
  data: [],
}

export default myBoat


function getAllItems(): Item[] {
  return myBoat.areas
  .flatMap((area) => area.storageUnits)
  .flatMap((unit) => unit.items)
}


export const allItemsInBoat: Item[] = getAllItems()
