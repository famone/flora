<template>
    <div>
        <pre>{{ cartStore.cart }}</pre>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>

<style scoped></style>