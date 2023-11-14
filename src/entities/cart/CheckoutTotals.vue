<template>
    <div class="rounded-xl bg-gray-100 mb-4">
        <div class="p-4">
            <button class="bg-green-500 rounded-xl px-4 py-4 text-white whitespace-nowrap font-bold w-full">
                Оплатить онлайн
            </button>
        </div>
        <div class="p-4 border-b border-gray-300">
            <div class="flex justify-between items-center mb-2">
                <p class="font-bold text-lg ">Ваша корзина</p>
                <p class="text-sm text-gray-500">{{ productsAmountTotal }} товара • {{ productsAmountTotal }} упаковок</p>
            </div>
            <div class="flex justify-between items-center mb-2">
                <p class="text-sm">Товары ({{ productsAmountTotal }})</p>
                <p class="font-bold">{{ productsPriceTotal.toLocaleString() }} ₽</p>
            </div>
            <div class="flex justify-between items-center">
                <p class="text-sm">Упаковка</p>
                <p class="font-bold">{{ packagePriceTotal.toLocaleString() }} ₽</p>
            </div>
        </div>
        <div class="p-4 py-6">
            <div class="flex justify-between items-center">
                <p class="font-extrabold text-xl flex items-center">К оплате</p>
                <p class="font-extrabold text-xl text-primary_2">{{ totalPrice.toLocaleString() }} ₽</p>
            </div>
        </div>
    </div>
    <Promocode />
</template>

<script setup lang="ts">
import Promocode from '@/features/cart/Promocode.vue'
import { useCartTotals } from '@/helpers/useCart'

const { productsAmountTotal, productsPriceTotal, packagePriceTotal, totalPrice } = useCartTotals()
</script>

<style scoped></style>