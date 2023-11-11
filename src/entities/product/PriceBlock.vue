<template>
    <div class="col-span-4 pl-8" v-if="product">
        <h1 class="text-2xl font-bold mb-2">{{ product.name }}</h1>
        <div class="mb-1 font-semibold flex">
            <span class=" mr-4">Артикул: {{ product.sku }}</span>
            <span class="flex items-center">
                <StarIcon class="text-amber-400 h-6 mr-1" /> 4.7
            </span>
        </div>
        <p class="mb-4 font-semibold">Контейнер: {{ product.container?.sl }}</p>

        <div class="rounded-xl bg-gray-100 p-4">
            <div class="flex justify-between items-center mb-4">
                <p class="text-4xl font-semibold items-center" v-if="store.catalogSelected">
                    {{ product.price[store.catalogSelected] }} ₽
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
            <Transition name="list" mode="out-in">
                <button class="bg-primary rounded-xl px-4 py-4 text-white whitespace-nowrap font-bold w-full mt-4"
                    @click="addCart(1)" v-if="!productInCart()" key="saved" :disabled="inProgress">
                    Добавить в корзину
                </button>
                <div class="mt-4 flex items-center" v-else key="edited">
                    <router-link to="/cart">
                        <button class="bg-primary rounded-xl px-12 py-1.5 text-white font-bold mr-6">
                            В корзине
                            <span class="block text-sm font-normal">перейти</span>
                        </button>
                    </router-link>
                    <button class="bg-gray-300 rounded-xl w-14 px-4 py-4 whitespace-nowrap font-bold" @click="addCart(-1)"
                        :disabled="inProgress">
                        <MinusIcon />
                    </button>
                    <div class="text-lg font-semibold w-10 text-center">{{ productInCart()?.amount }}</div>
                    <button class="bg-gray-300 rounded-xl w-14 px-4 py-4 whitespace-nowrap font-bold" @click="addCart(1)"
                        :disabled="inProgress">
                        <PlusIcon />
                    </button>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Square2StackIcon, HeartIcon, CheckIcon, StarIcon, ExclamationTriangleIcon, PlusIcon, MinusIcon } from '@heroicons/vue/24/outline'
import { useShopStore } from '@/stores/shop'
import { Product } from '@/types/shop'
import { useCart } from '@/helpers/useCart'

const store = useShopStore()
interface Props {
    product: Product
}
const { product } = defineProps<Props>()

const { inProgress, productInCart, addCart } = useCart(product)

</script>
