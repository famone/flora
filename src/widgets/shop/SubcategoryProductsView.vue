<template>
  <div class="flex justify-between items-center mb-6">
    <h2
      v-if="title"
      class="col-span-4 text-3xl font-bold"
    >
      {{ title }}
    </h2>
    <TitleSkeleton v-else />
    <SortSelect
      :selected-filter="selectedFilter"
      @select-filter="selectFilter"
    />
  </div>
  <div v-if="items && items.length">
    <div v-if="!filterProducts(items).length">
      Ничего не найдено, согласно параметрам фильтра
    </div>
  </div>
  <div
    v-if="items && items.length"
    class="grid grid-cols-4 gap-6"
  >
    <div
      v-for="(item, index) in filterProducts(items)"
      :key="index"
      class="col-span-1"
    >
      <ProductCard :item="item" />
    </div>
  </div>
  <div
    v-else
    class="grid grid-cols-4 gap-6"
  >
    <div
      v-for="i in 40"
      :key="i"
      class="col-span-1"
    >
      <ProductSkeleton />
    </div>
  </div>
</template>
  
<script setup lang="ts">
import TitleSkeleton from '@/shared/TitleSkeleton.vue';
import { Product } from '@/types/shop';
import ProductCard from '@/entities/ProductCard.vue';
import ProductSkeleton from '@/shared/ProductSkeleton.vue';
import SortSelect from '@/features/shop/SortSelect.vue';
import { useFilters } from '../model/useFilters';

const { selectedFilter, changeFilter, filterProducts } = useFilters();

interface Props {
  title?: string
  items?: Product[]
}
// fixed
const { title, items } = defineProps<Props>();

function selectFilter(n: number) {
  changeFilter(n);
}

</script>