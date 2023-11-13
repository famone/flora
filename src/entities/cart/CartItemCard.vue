<template>
    <div class="grid grid-cols-7 gap-6 py-2">
        <div class="col-span-1">
            <router-link class="group" :to="`/product/${item.slug}`">
                <div class="rounded overflow-hidden relative">
                    <img v-lazy="item.picture" class="h-28 object-cover w-full">
                </div>
            </router-link>
        </div>
        <div class="col-span-4 flex flex-col justify-between">
            <div>
                <p class="text-sm text-gray-500 mb-1">Название</p>
                <router-link :to="`/product/${item.slug}`">
                    <h4 class="title font-semibold group-hover/item:text-primary_2 hover:text-primary_2 transition-all">
                        {{ item.name }}
                    </h4>
                </router-link>
            </div>
            <button class="bg-gray-300 rounded-lg w-8 h-8 flex justify-center items-center py-4"
                @click="cartStore.DELETE_CART_ITEM(index)">
                <TrashIcon class="text-black h-4" />
            </button>
        </div>
        <div class="col-span-1">
            <p class="text-sm text-gray-500 mb-1">Цена</p>
            <p class="font-bold" v-if="store.catalogSelected">{{ item.price[store.catalogSelected] * item.amount }} ₽</p>
        </div>
        <div class="col-span-1">
            <p class="text-sm text-gray-500 mb-1">Кол-во</p>
            <div class="flex items-center">
                <button class="bg-gray-300 rounded-lg w-8 h-8 flex justify-center items-center py-4"
                    @click="cartStore.CHANGE_AMOUNT(index, -1)">
                    <MinusIcon class="text-black w-4 h-4" />
                </button>
                <div class="font-bold w-8 text-center">{{ item.amount }}</div>
                <button class="bg-gray-300 rounded-lg w-8 h-8 flex justify-center items-center py-4"
                    @click="cartStore.CHANGE_AMOUNT(index, 1)">
                    <PlusIcon class="text-black w-4 h-4" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PlusIcon, MinusIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { CartItem } from '@/types/shop'
import { useShopStore } from '@/stores/shop'
import { useCartStore } from '@/stores/cart'

const store = useShopStore()
const cartStore = useCartStore()
interface Props {
    item: CartItem,
    index: number
}
const { item, index } = defineProps<Props>()




</script>

<style scoped></style>