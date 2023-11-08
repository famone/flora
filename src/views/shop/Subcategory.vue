<template>
    <SubcategoryProductsView :title="currentCat?.title" :items="currentCat?.items" />
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useShopStore } from '@/stores/shop'
import { Product } from '@/types/shop'
import SubcategoryProductsView from '@/widgets/shop/SubcategoryProductsView.vue'

interface Singlesub {
    title: string
    slug: string
    items: Product[]
}
const currentCat = ref<Singlesub | null>(null)

const store = useShopStore()
const props = defineProps({
    sub: {
        type: String,
        required: true
    }
})

const getCurrentSub = () => {
    currentCat.value = null
    store.LOAD_SUBCAT_SINGLE(props.sub).then(() => {
        currentCat.value = store.singleSubcat
    })
}

watch(() => props.sub, () => {
    getCurrentSub()
})
onMounted(() => {
    getCurrentSub()
})

</script>

<style scoped></style>