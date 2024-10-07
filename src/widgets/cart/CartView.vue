<template>
  <div class="container mx-auto">
    <h2
      class="col-span-4 text-3xl font-bold mb-6"
    >
      Корзина
      <sup class="text-sm text-gray-400">{{ controlAmount }}</sup>
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
    <div
      v-else
      class="text-center"
    >
      <img
        src="@/assets/img/emptybox.svg"
        alt=""
        class="mx-auto mb-6 h-24"
      >
      <h3 class="text-2xl font-bold items-center mb-2">
        Сложите в корзину нужные товары
      </h3>
      <p class="title text-neutral-400">
        А чтобы их найти, загляните в каталог или в раздел со скидками
      </p>
      <div class="flex gap-4 mt-6 justify-center">
        <router-link to="/product-category">
          <button class="bg-primary rounded-xl px-4 py-4 text-white whitespace-nowrap font-bold">
            Перейти в каталог
          </button>
        </router-link>
        <router-link to="/product-category">
          <button class="bg-gray-200 rounded-xl px-4 py-4 whitespace-nowrap font-bold">
            На главную
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import CartTotals from '@/entities/cart/CartTotals.vue';
import CartBlock from '@/entities/cart/CartBlock.vue';
import { computed } from 'vue';

const cartStore = useCartStore();

const controlAmount = computed(() => {
  const amount = cartStore.cart.length;
  if(amount === 1){
    return `${amount} товар`;
  }else{
    return `${amount} товаров`;
  }
});
</script>

<style scoped></style>