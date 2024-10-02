<template>
  <div class="rounded-xl bg-gray-100 py-2 px-4 divide-y">
    <CartItemCard
      v-for="(item, index) in cart"
      :key="index"
      :index="index"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
import CartItemCard from './CartItemCard.vue';
import { CartItem } from '@/types/shop';

interface Props {
  cart: CartItem[]
}

const { cart } = defineProps<Props>();

</script>

<style scoped></style>