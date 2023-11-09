<template>
    <div class="col-span-4 pl-8">
        <h1 class="text-2xl font-bold mb-2">{{ props.product.name }}</h1>
        <div class="mb-1 font-semibold flex">
            <span class=" mr-4">Артикул: {{ props.product.sku }}</span>
            <span class="flex items-center">
                <StarIcon class="text-amber-400 h-6 mr-1" /> 4.7
            </span>
        </div>
        <p class="mb-4 font-semibold">Контейнер: {{ props.product.container.sl }}</p>

        <div class="rounded-xl bg-gray-200 p-4">
            <div class="flex justify-between items-center mb-4">
                <p class="text-4xl font-semibold items-center" v-if="store.catalogSelected">
                    {{ props.product.price[store.catalogSelected] }} ₽
                </p>
                <p v-else class="text-4xl font-semibold items-center">****</p>
                <div class="flex gap-3">
                    <HeartIcon class="h-6" />
                    <ExclamationTriangleIcon class="h-6" />
                    <Square2StackIcon class="h-6" />
                </div>
            </div>
            <p class="font-semibold flex items-center">
                <CheckIcon class="text-primary_2 h-4 mr-1" /> Товар в наличии
            </p>

            <button class="bg-primary rounded-xl px-4 py-4 text-white whitespace-nowrap font-bold w-full mt-4">
                Добавить в корзину
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Square2StackIcon, HeartIcon, CheckIcon, StarIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import { useShopStore } from '@/stores/shop'

const store = useShopStore()
const props = defineProps({
    product: {
        type: Object,
        default: () => {
            return {}
        }
    }
})
</script>

<style scoped></style>