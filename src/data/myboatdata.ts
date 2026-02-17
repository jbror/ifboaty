import type { Boat, StorageUnit } from '../types/types'

const defaultStorageUnit: StorageUnit = {
  id: 1,
  name: 'Default',
  items: [],
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
