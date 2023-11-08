<template>
    <h2 class="col-span-4 text-3xl font-bold mb-6" v-if="title">{{ title }}</h2>
    <TitleSkeleton v-else class="mb-6" />
    <div class="grid grid-cols-4 gap-6" v-if="items && items.length">
        <div v-for="(item, index) in items" :key="index" class="col-span-1">
            <ProductCard :item="item" />
        </div>
    </div>
    <div class="grid grid-cols-4 gap-6" v-else>
        <div v-for="i in 40" :key="i" class="col-span-1">
            <ProductSkeleton />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import TitleSkeleton from '@/shared/TitleSkeleton.vue'
import { Product } from '@/types/shop'
import ProductCard from '@/entities/ProductCard.vue'
import ProductSkeleton from '@/shared/ProductSkeleton.vue'

interface Props {
    title?: string
    items?: Product[]
}
// tofix
const { title, items } = defineProps<Props>()

</script>