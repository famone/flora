<template>
  <p
    v-if="catalogSelected"
    class="flex items-center transition-all hover:opacity-70 cursor-pointer"
  >
    <MapPinIcon class="h-6 mr-1" /> {{ catalogName(catalogSelected) }}
  </p>
  <p v-else>
    Не выбран
  </p>
</template>

<script setup lang="ts">
import { useCatalog } from '@/features/nav/model/useCatalog';
import { MapPinIcon } from '@heroicons/vue/24/outline';
import { CatalogSelectedType } from '@/types/shop';

const { catalogTypes } = useCatalog();

interface Props {
  catalogSelected: CatalogSelectedType
}
const { catalogSelected } = defineProps<Props>();


const catalogName = (catalogSelected: CatalogSelectedType) => {
  return catalogTypes.value.find((item) => item.value === catalogSelected)?.name;
};
</script>

<!-- 
// ВТОРОЙ СПОСОБ    
import { PropType, computed } from 'vue'
import { useCatalog } from '@/features/nav/model/useCatalog'
import { MapPinIcon } from '@heroicons/vue/24/outline'
import { CatalogSelectedType } from '@/types/shop'

const { catalogTypes } = useCatalog()

const props = defineProps({
    catalogSelected: {
        type: Object as PropType<CatalogSelectedType>,
        default: null
    }
})

const catalogName = computed(() => {
    return catalogTypes.value.find((item) => item.value === props.catalogSelected)?.name
}) -->
