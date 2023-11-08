<template>
    <section class="py-8">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8">Популярные растения</h2>
        <div class="grid grid-cols-5 gap-6">
          <div v-for="(item, index) in store.popular.slice(0,10)" :key="index" class="col-span-1">
            <ProductCard :item="item"  />
          </div>
        </div>
      </div>
    </section>
  </template>
  
<script setup lang="ts">
import ProductCard from '@/entities/ProductCard.vue'
import { useShopStore } from '@/stores/shop'

const store = useShopStore()
  // const loading = ref(true)
  
  // const loadData = async () => {
  //   const { data }: any = await $fetch('https://sflora.ru/wp-json/sf/v1/get/news')
  //   loading.value = false
  //   console.log(data)
  // }
  
  // onMounted(() => {
  //   loadData()
  // })
  
  </script>
  