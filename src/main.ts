import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import './styles.css'
import Aura from '@primevue/themes/aura'

import Nora from '@primevue/themes/nora'
 import Lara from '@primevue/themes/lara'
 import Material from '@primevue/themes/material'
import { definePreset } from '@primevue/themes'
import 'primeicons/primeicons.css'

const app = createApp(App)

// Aura med lite egen styling för menyn
const myTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}',
    },
  },
  colorScheme: {
    light: {
      highlight: {
        background: '{sky.50}',
        focusBackground: '{sky.100}',
        color: '{sky.700}',
        focusColor: '{sky.800}',
      },
    },
    dark: {
      highlight: {
        background: '{sky.950}',
        focusBackground: '{sky.900}',
        color: '{sky.100}',
        focusColor: '{sky.50}',
      },
    },
  },
  components: {
    menu: {
      root: {
        background: '#1d2937',
        borderRadius: '0',
        borderColor: 'transparent',
        borderWidth: '0',
      },
      item: {
        color: '{zinc.200}',
        focusBackground: 'rgba(255, 255, 255, 0.15)',
        focusColor: '{zinc.50}',
      },
    },
  },
})
app.use(PrimeVue, {
  theme: {
    preset: myTheme,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue',
      },
    },
  },
})
app.use(router)

app.mount('#app')
