<template>
  <div>
    <DataTable :value="boats">
      <Column field="name" header="Namn"></Column>

    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const boats = ref([
    { name: 'Röja' },
   
]);
</script>