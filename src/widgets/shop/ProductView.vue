<template>
    <div class="container mx-auto" v-if="product">
        <div class="grid grid-cols-12 gap-6">
            <PhotoBlock :product="product" />
            <div class="col-span-4 pl-8">
                <PriceBlock :product="product" />
                <DeliveryBlock />
            </div>
            <ProductTabsBlock :activeTab="activeTab" :tabs="tabs" @chageTab="chageTab">
                <template #tabitem>
                    <Description v-if="activeTab == 0" :description="product.description" />
                    <Characters v-if="activeTab == 1" :spec="product.spec" />
                    <Reviews v-if="activeTab == 2" />
                    <!-- <component :is="tabs[activeTab].component" v-bind="{ ...tabs[activeTab].props }" /> -->
                </template>
            </ProductTabsBlock>
        </div>
    </div>
    <div v-else>
        ЗАГРУЗКА
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PriceBlock from '@/entities/product/PriceBlock.vue';
import PhotoBlock from '@/entities/product/PhotoBlock.vue';
import ProductTabsBlock from '@/entities/product/ProductTabsBlock.vue';
import DeliveryBlock from '@/entities/product/DeliveryBlock.vue'
import Description from '@/features/product/Description.vue'
import Characters from '@/features/product/Characters.vue'
import Reviews from '@/features/product/reviews/Reviews.vue'

import { Product } from '@/types/shop'
interface Props {
    product: Product | null
}
const { product } = defineProps<Props>()

const activeTab = ref(0)
const tabs = [
    {
        name: 'О товаре',
        component: Description,
        // props: { description: product?.description }
    },
    {
        name: 'Характеристики',
        component: Characters,
        // props: { spec: product?.spec }
    },
    {
        name: 'Отзывы',
        component: Reviews,
        // props: { title: product?.name }
    }
]

function chageTab(index: number) {
    activeTab.value = index
}

</script>

<style scoped></style>