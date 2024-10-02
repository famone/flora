<template>
  <div
    class="text-lg font-medium leading-7"
    v-html="props.description"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  description: {
    default: '',
    type: String
  }
});
</script>