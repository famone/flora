<template>
  <div>
    <Hero />
    <CategoryIconCards />
    <Popular />
    <VkNews />
  </div>
</template>

<script setup lang="ts">
import Hero from '@/widgets/home/Hero.vue';
import CategoryIconCards from '@/widgets/home/CategoryIconCards.vue';
import Popular from '@/widgets/home/Popular.vue';
import VkNews from '@/widgets/home/VkNews.vue';
</script>

<style scoped></style>