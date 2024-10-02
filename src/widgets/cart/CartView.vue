<template>
  <div class="container mx-auto">
    <h2
      v-if="cartStore.cart.length"
      class="col-span-4 text-3xl font-bold mb-6"
    >
      Корзина
      <sup class="text-sm text-gray-400">{{ cartStore.cart.length }}</sup>
    </h2>
    <div
      v-if="cartStore.cart.length"
      class="grid grid-cols-12 gap-6"
    >
      <div class="col-span-8">
        <CartBlock :cart="cartStore.cart" />
      </div>
      <div class="col-span-4 pl-8">
        <CartTotals />
      </div>
    </div>
    <div v-else>
      <h2 class="text-3xl font-bold mb-6">
        Ваша корзина пуста
      </h2>
      <router-link to="/product-category">
        <button class="bg-primary rounded-xl px-4 py-4 text-white whitespace-nowrap font-bold">
          Перейти в каталог
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import CartTotals from '@/entities/cart/CartTotals.vue';
import CartBlock from '@/entities/cart/CartBlock.vue';

const cartStore = useCartStore();
</script>

<style scoped></style>