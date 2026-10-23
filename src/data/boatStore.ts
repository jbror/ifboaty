import { ref } from 'vue'
import type { Boat } from '../types/types'
import myboatdata from './myboatdata'

export const boats = ref<Boat[]>([myboatdata])