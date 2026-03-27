import type { Boat, StorageUnit, Item, Area } from '../types/types'

// Aktern: id 10-19
const akternItems: Item[] = [
  { id: 10, name: 'Landgång', quantity: 1, category: 'Utrustning' },
  { id: 11, name: 'Fendrar', quantity: 4, category: 'Utrustning' },
]
const akternStorage: StorageUnit = {
  id: 10,
  name: 'Akterluckan',
  items: akternItems,
}
const akternArea: Area = {
  id: 1,
  name: 'Aktern',
  type: 'exterior',
  storageUnits: [akternStorage],
}

// Sittbrunnen: id 20-29
const sittbrunnItems: Item[] = [
  { id: 20, name: 'Skruvmejsel', quantity: 2, category: 'Verktyg' },
  { id: 21, name: 'Krok', quantity: 3, category: 'Redskap' },
  { id: 22, name: 'Flytväst', quantity: 4, category: 'Utrustning' },
]
const sittbrunnStorage: StorageUnit = {
  id: 20,
  name: 'Sittbrunnslåda',
  items: sittbrunnItems,
}

const sittbrunnStorageTwo: StorageUnit = {
  id: 20,
  name: 'LådaTampar',
  items: sittbrunnItems,
}

const sittbrunnArea: Area = {
  id: 2,
  name: 'Sittbrunn',
  type: 'interior',
  storageUnits: [sittbrunnStorage, sittbrunnStorageTwo], 
}

// Däck: id 30-39
const deckItems: Item[] = [
  { id: 30, name: 'Bogserline', quantity: 1, category: 'Rigg' },
  { id: 31, name: 'Förtöjningslina', quantity: 2, category: 'Rigg' },
]
const deckStorage: StorageUnit = {
  id: 30,
  name: 'Saker på däck',
  items: deckItems,
}
const deckArea: Area = {
  id: 3,
  name: 'Däck',
  type: 'exterior',
  storageUnits: [deckStorage],
}

// Ruffen: id 40-49
const ruffenArea: Area = {
  id: 4,
  name: 'Ruffen',
  type: 'interior',
  storageUnits: [
    {
      id: 40,
      name: 'Skafferi',
      items: [
        { id: 40, name: 'Pasta', quantity: 3, category: 'Mat' },
        { id: 41, name: 'Konservburkar', quantity: 6, category: 'Mat' },
        { id: 42, name: 'Kaffe', quantity: 1, category: 'Dryck' },
        { id: 43, name: 'Olja', quantity: 1, category: 'Mat' },
      ],
    },
    {
      id: 41,
      name: 'Garderob',
      items: [
        { id: 44, name: 'Regnjacka', quantity: 2, category: 'Kläder' },
        { id: 45, name: 'Varma strumpor', quantity: 4, category: 'Kläder' },
        { id: 46, name: 'Mössa', quantity: 2, category: 'Kläder' },
      ],
    },
    {
      id: 42,
      name: 'Under sängarna',
      items: [
        { id: 47, name: 'Reservtåg', quantity: 1, category: 'Rigg' },
        { id: 48, name: 'Verktygsväska', quantity: 1, category: 'Verktyg' },
      ],
    },
    {
      id: 43,
      name: 'Golvet',
      items: [
        { id: 49, name: 'Vattenflaskor', quantity: 4, category: 'Nödvändigheter' },
        { id: 50, name: 'Batteri', quantity: 1, category: 'System' },
      ],
    },
    {
      id: 44,
      name: 'Salongen',
      items: [
        { id: 51, name: 'Kortlek', quantity: 1, category: 'Fritid' },
        { id: 52, name: 'Ficklampa', quantity: 2, category: 'Utrustning' },
        { id: 53, name: 'Sjökort', quantity: 3, category: 'Navigation' },
      ],
    },
  ],
}

// Förpik: id 50-59
const forpikItems: Item[] = [
  { id: 50, name: 'Tamp', quantity: 2, category: 'Utrustning' },
  { id: 51, name: 'Rullsegel', quantity: 1, category: 'Segel' },
]
const forpikStorage: StorageUnit = {
  id: 50,
  name: 'Saker runt fören',
  items: forpikItems,
}
const forpikArea: Area = {
  id: 5,
  name: 'Förpik',
  type: 'exterior',
  storageUnits: [forpikStorage],
}

const myBoat: Boat = {
  id: 620,
  name: 'Röja',
  year: 1978,
  areas: [akternArea, sittbrunnArea, ruffenArea, deckArea, forpikArea],
  data: [],
}

export default myBoat

export const allStorageUnits = myBoat.areas.flatMap((x) => x.storageUnits).flatMap((s) => s.name)
