<template>
    <div @click.prevent="addToFavourite"
        class="h-8 w-8 rounded-full bg-gray-200 flex absolute top-2 right-2 z-10 justify-center items-center">
        <!-- <span class="transition-colors mdi" :class="liked ? 'mdi-heart text-red-500' : 'mdi-heart-outline'"></span> -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 h-5" :class="{ 'liked': liked }">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { HeartIcon } from '@heroicons/vue/24/outline'

const liked = ref(false)
const addToFavourite = () => {
    liked.value = !liked.value
}
</script>

<style scoped>
svg {
    transition: all .1s ease;
}

svg.liked {
    fill: red;
    stroke: red;
}
</style>