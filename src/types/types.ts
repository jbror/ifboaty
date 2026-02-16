export interface Boat {
  id: number
  name: string
  year: number
  areas: Area[]
  data?: BoatData[]
}

export interface Area {
  id: number
  name: string
  type: 'interior' | 'exterior'
  storageUnits: StorageUnit[];
}

export interface StorageUnit {
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

export interface BoatData {
  location: string
  depth: string
  length: number
  height: number
  weight: number
  engine: string
}
