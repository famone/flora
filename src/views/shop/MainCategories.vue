<template>
  <MainCategoriesView
    v-if="store.cats.length"
    :items="store.cats"
  />
  <div
    v-else
    class="divide-y"
  >
    <CategorySkeleton
      v-for="i in 6"
      :key="i"
    />
  </div>
  <!-- {{ store }} -->
</template>

<script setup lang="ts">
import MainCategoriesView from '@/widgets/shop/MainCategoriesView.vue';
import { useShopStore } from '@/stores/shop';
import CategorySkeleton from '@/shared/CategorySkeleton.vue';

const store = useShopStore();

</script>

<style scoped></style>