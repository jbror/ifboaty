<script setup lang="ts">

import ToggleButton from 'primevue/togglebutton'
import Button from 'primevue/button'
import { ref } from 'vue'




const checked = ref (false)

</script>

<template>


<h1>Hejsan här kommer snart en segelbåt  </h1>

<ToggleButton v-model="checked" onLabel="On" offLabel="Off" />

<Button icon="pi pi-home" aria-label="Save" />





</template>




<style scoped></style>
