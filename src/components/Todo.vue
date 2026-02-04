<template>
  <div class="flex">
    <h1>Båt ID: {{ id }}</h1>
    <p>/Todo</p>
  </div>
</template>

<script setup lang="ts">

 const props = defineProps<{
  id: string
}>()

</script>
<style scoped></style>
