import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import 'primeicons/primeicons.css'

import Button from 'primevue/button'
import ToggleButton from 'primevue/togglebutton'

const app = createApp(App)


app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.use(router)


app.component('Button', Button)
app.component('ToggleButton', ToggleButton)

app.mount('#app')