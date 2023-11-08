<template>
    <div class="container mx-auto" v-if="product">
        <div class="grid grid-cols-12 gap-6">
            <PhotoBlock :product="product" />
            <PriceBlock :product="product" />
        </div>
    </div>
</template>

<script setup lang="ts">
import PriceBlock from '@/entities/product/PriceBlock.vue';
import PhotoBlock from '@/entities/product/PhotoBlock.vue';
import { Product } from '@/types/shop'

interface Props {
    product?: Product
}
const { product } = defineProps<Props>()

</script>

<style scoped></style>