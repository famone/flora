<template>
    <div>
        <Transition name="list" mode="out-in">
            <button class=" bg-primary_light rounded text-sm font-semibold p-1  flex items-center" @click.prevent
                v-if="productInCart(product.id)">
                <CheckIcon class="h-4 transition-all mr-1 text-primary_2" />
                Добавлено
            </button>
            <button class=" bg-primary rounded text-sm font-semibold p-1 group/btn flex items-center" v-else
                :disabled="inProgress" @click.prevent="addCartItem(product, 1)">
                <PlusIcon class="h-4 group-hover/btn:rotate-90 transition-all mr-1" />
                В корзину
            </button>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { PlusIcon, CheckIcon } from '@heroicons/vue/24/outline'
import { useCart } from '@/helpers/useCart'
import { Product } from '@/types/shop'

interface Props {
    product: Product
}

const { product } = defineProps<Props>()
const { inProgress, addCartItem, productInCart } = useCart()


</script>

<style scoped></style>