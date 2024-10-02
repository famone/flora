<template>
  <section class="py-8">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-8">
        Категории товаров
      </h2>
      <div class="grid grid-cols-3 gap-6">
        <div
          v-for="(cat, index) in store.cats"
          :key="index"
          class="col-span-1"
        >
          <GradientCard :item="cat" />
          <!-- <ProductCard :item="item"  /> -->
          <!-- <div class="rounded-lg p-4 ring-1 ring-gray-300 font-medium transition-all cursor-pointer relative hover:ring-primary_2 ">
            <component :is="getIcon(cat.name)" class="mb-4 h-12" />
            <p class="text-lg font-bold items-center">{{ cat.name }}</p>
            <p class="title text-neutral-400" v-html="cat.description"></p>
           </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useShopStore } from '@/stores/shop';
import GradientCard from '@/entities/shop/GradientCard.vue';

const store = useShopStore();


</script>
