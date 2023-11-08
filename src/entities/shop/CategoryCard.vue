<template>
    <router-link :to="cat.url" class="grid grid-cols-4 gap-6 py-4 first:pt-0">
        <div class="col-span-1">
            <div class="rounded overflow-hidden relative">
                <img :src="cat.img" class="h-[16rem] object-cover w-full">
            </div>
        </div>
        <div class="col-span-3 py-2 h-full">
            <h4 class="text-xl font-bold mb-2">
                {{ cat.name }}
            </h4>
            <p class="descr font-semibold text-gray-500" v-html="cat.description"></p>
        </div>
    </router-link>
</template>

<script setup lang="ts">
import { Category } from '@/types/shop'

interface Props {
    cat: Category
}
const { cat } = defineProps<Props>()
</script>

<style scoped>
.descr {
    font-size: 14px;
    line-clamp: 9;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>