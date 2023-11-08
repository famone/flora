<template>
    <div @click.prevent="addToFavourite"
        class="h-8 w-8 rounded-full bg-gray-200 flex absolute top-2 right-2 z-10 justify-center items-center">
        <span class="transition-colors mdi" :class="liked ? 'mdi-heart text-red-500' : 'mdi-heart-outline'"></span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const liked = ref(false)
const addToFavourite = () => {
    liked.value = !liked.value
}
</script>

<style scoped></style>