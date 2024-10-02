<template>
  <div class="rounded-xl bg-gray-100 mb-4">
    <div class="p-4">
      <router-link to="/checkout">
        <button
          class=" bg-primary rounded-xl px-4 py-4 text-white whitespace-nowrap font-bold w-full group transition-all"
          :class="{ 'opacity-50': leftToOrder !== 0 }"
        >
          Перейти к оформлению
          <ArrowRightIcon class="transition-all inline-block h-4 ml-1 group-hover:translate-x-1" />
        </button>
      </router-link>
    </div>
    <div class="p-4 border-b border-gray-300">
      <div class="flex justify-between items-center mb-2">
        <p class="font-bold text-lg ">
          Ваша корзина
        </p>
        <p class="text-sm text-gray-500">
          {{ productsAmountTotal }} товара • {{ productsAmountTotal }} упаковок
        </p>
      </div>
      <div class="flex justify-between items-center mb-2">
        <p class="text-sm">
          Товары ({{ productsAmountTotal }})
        </p>
        <p class="font-bold">
          {{ productsPriceTotal.toLocaleString() }} ₽
        </p>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-sm">
          Упаковка
        </p>
        <p class="font-bold">
          {{ packagePriceTotal.toLocaleString() }} ₽
        </p>
      </div>
    </div>
    <div class="p-4 border-b border-gray-300">
      <div class="flex justify-between items-center mb-2">
        <p class="font-bold">
          Минимальная сумма заказа - 2 500 ₽
        </p>
      </div>
      <div class="flex justify-between items-center mb-2">
        <p class="text-sm">
          Для оформления осталось
        </p>
        <p class="font-bold  text-red-500">
          {{ leftToOrder.toLocaleString() }} ₽
        </p>
      </div>
    </div>
    <div class="p-4 py-6">
      <div class="flex justify-between items-center">
        <p class="font-extrabold text-xl flex items-center">
          К оплате
        </p>
        <p class="font-extrabold text-xl text-primary_2">
          {{ totalPrice.toLocaleString() }} ₽
        </p>
      </div>
    </div>
  </div>
  <div class="bg-yellow-50 rounded-xl p-4 flex">
    <div class="mr-2">
      <ExclamationCircleIcon class="h-6 text-yellow-700" />
    </div>
    <p class="text-yellow-700">
      Промокод и сертификат применяется после окончательного формирования заказа в корзине!
    </p>
  </div>
</template>

<script setup lang="ts">
import { ExclamationCircleIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';
import { useCartTotals } from '@/helpers/useCart';

const { productsAmountTotal, productsPriceTotal, packagePriceTotal, totalPrice, leftToOrder } = useCartTotals();
</script>

<style scoped></style>