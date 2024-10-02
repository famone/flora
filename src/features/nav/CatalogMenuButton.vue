<template>
  <button
    class="bg-primary rounded px-4 py-2 text-white text-lg whitespace-nowrap font-bold flex items-center"
    :disabled="loading"
  >
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    <XMarkIcon
      v-else-if="props.isCatalogVisible"
      class="h-6 mr-1"
    />
    <Squares2X2Icon
      v-else
      class="h-6 mr-1"
    />
    Каталог
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Squares2X2Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { useShopStore } from '@/stores/shop';

const store = useShopStore();
const props = defineProps({
  isCatalogVisible: {
    type: Boolean,
    default: false
  }
});
const loading = computed(() => {
  return store.cats.length ? false : true;
});

</script>

<style scoped></style>