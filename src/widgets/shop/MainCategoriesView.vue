<template>
  <div class="divide-y">
    <CategoryCard
      v-for="(item, index) in items"
      :key="index"
      :cat="item"
    />
  </div>
</template>

<script setup lang="ts">
import CategoryCard from '@/entities/shop/CategoryCard.vue';
import { Category } from '@/types/shop';
interface Props {
  items: Category[]
}
const { items } = defineProps<Props>();
</script>