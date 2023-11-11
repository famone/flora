<template>
    <router-link :to="sub.slug" class="grid grid-cols-4 gap-6 py-4 first:pt-0">
        <div class="col-span-1">
            <div class="rounded overflow-hidden relative">
                <img v-lazy="sub.img" class="h-[16rem] object-cover w-full">
            </div>
        </div>
        <div class="col-span-3 py-2 h-full">
            <h4 class="text-xl font-bold mb-2 flex items-center gap-2">
                {{ sub.name }}
                <span class="text-xs text-gray-400">{{ sub.count }} позиций</span>
            </h4>
            <p class="descr font-semibold text-gray-500" v-html="sub.description"></p>
        </div>

    </router-link>
</template>

<script setup lang="ts">
import { Subcategory } from '@/types/shop'

interface Props {
    sub: Subcategory
}
const { sub } = defineProps<Props>()
</script>

<style scoped>
.descr {
    font-size: 14px;
    line-clamp: 8;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>