<template>
  <section class="py-8">
    <div class="container mx-auto">
      <div class="grid grid-cols-5 gap-6">
        <div class="col-span-1">
          <SideCatNav />
        </div>
        <div class="col-span-4">
          <router-view />
          <!-- <CategoryView v-if="currentCat && currentCat.child?.length" :items="currentCat.child" :title="title" />
                    <SubcategoryView v-else :title="title" :items="store.subcat" /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SideCatNav from '@/features/nav/SideCatNav.vue';


</script>

<style scoped></style>