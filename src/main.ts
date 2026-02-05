import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import './styles.css'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import 'primeicons/primeicons.css'

const app = createApp(App)

// Aura med lite egen styling för menyn
const myTheme = definePreset(Aura, {
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
