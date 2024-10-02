<template>
  <h2
    v-if="title !== ''"
    class="col-span-4 text-3xl font-bold mb-6"
  >
    {{ title }}
  </h2>
  <TitleSkeleton
    v-else
    class="mb-6"
  />
  <div
    v-if="items?.length"
    class="grid grid-cols-4 gap-6"
  >
    <div
      v-for="(item, index) in items"
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
      v-for="i in 20"
      :key="i"
      class="col-span-1"
    >
      <ProductSkeleton />
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { Product } from '@/types/shop';
import ProductCard from '@/entities/ProductCard.vue';
import ProductSkeleton from '@/shared/ProductSkeleton.vue';
import TitleSkeleton from '@/shared/TitleSkeleton.vue';
// import SubcatCard from '@/entities/shop/SubcatCard.vue'
// import LettersFilter from '@/features/shop/LettersFilter.vue'

interface Props {
  title: string
  items?: Product[]
}
const { title, items } = defineProps<Props>();

</script>
  