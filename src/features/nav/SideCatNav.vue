<template>
    <ul class=" space-y-1">
        <li v-for="(cat, index) in store.cats" :key="index">
            <router-link :to="cat.url"
                class="flex items-center rounded-md p-2 text-gray-600 transition-all font-semibold relative text-sm"
                :class="{ 'bg-primary_light': cat.slug === route.params.cat }">
                <component :is="getIcon(cat.name)" class="h-8 mr-2" />
                {{ cat.name }}
            </router-link>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useShopStore } from '@/stores/shop'
import useIcons from './model/useIcons'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useShopStore()
const { getIcon } = useIcons()
</script>

<style scoped></style>