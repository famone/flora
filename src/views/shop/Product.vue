<template>
    <div class="py-8 pt-16">
        <ProductView :product="product" />
        <!-- <Popular /> -->
    </div>
</template>

<script setup lang="ts">
import { watch, ref, onMounted } from 'vue'
// import Popular from '@/widgets/home/Popular.vue'
import ProductView from '@/widgets/shop/ProductView.vue'
import { useShopStore } from '@/stores/shop'
import { Product } from '@/types/shop'

const store = useShopStore()
const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
const product = ref<Product>()

watch(() => props.id, () => {
    setProduct()
})

onMounted(() => {
    setProduct()
})

async function setProduct() {
    product.value = await store.LOAD_PRODUCT(props.id)
}

</script>

<style scoped></style>