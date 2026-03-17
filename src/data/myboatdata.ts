
import type { Boat, StorageUnit, Item, BoatData, Area } from '../types/types'

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



const pantryItems: Item[] = [
  {
    id: 41,
    name: 'Kanel',
    quantity: 1,
    category: 'Skafferi'
  },
  {
    id: 201,
    name: 'Ketchup',
    quantity: 1,
    category: 'Skafferi',
  }

] 

const baseStorage: StorageUnit = {
  id: 1,
  name: 'Default',
  items: baseItems,
}

const skafferiStorage: StorageUnit = {
  id: 2,
  name: 'Pantry',
  items: pantryItems,
}




const ruffenArea: Area = {
  id: 2,
  name: 'Ruffen',
  type: 'interior',
  storageUnits: [skafferiStorage],
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
    ruffenArea
  ],
  data: [],
}

export default myBoat





export const allStorageUnits =  myBoat.areas.flatMap((x) => x.storageUnits).flatMap((s) => s.name)






function getAllItems(): Item[] {
  return myBoat.areas
  .flatMap((area) => area.storageUnits)
  .flatMap((unit) => unit.items)
}


export const allItemsInBoat: Item[] = getAllItems()
