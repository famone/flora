<template>
  <div class="col-span-8">
    <div class="grid grid-cols-7 gap-6">
      <div class="col-span-1">
        <div class="h-full space-y-2">
          <div class="w-full h-1/4">
            <img
              v-lazy="props.product.picture"
              class="h-full w-full object-cover rounded-lg"
            >
          </div>
          <div
            v-for="(img, i) in props.product.gallery"
            :key="i"
            class="w-full h-1/4"
          >
            <img
              v-lazy="img"
              class="h-full w-full object-cover rounded-lg"
            >
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <div class="h-[34rem] rounded-xl bg-gray-200 overflow-hidden">
          <img
            v-lazy="props.product.picture"
            class="h-full max-w-full mx-auto"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    default: () => {
      return {};
    }
  }
});
</script>

<style scoped></style>