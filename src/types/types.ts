export interface Boat {
  id: number
  name: string
  year: number
  areas: Area[]
}

export interface Area {
  id: number
  name: string
  type: 'interior' | 'exterior'
  storageUnits: storageUnit[];
}

export interface storageUnit {
  id: number
  name: string
  items: Item[]
}

export interface Item {
  id: number
  name: string
  quantity: number
  category?: string
}
