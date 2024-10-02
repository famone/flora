<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">
      {{ product.name }}
    </h1>
    <div class="mb-1 font-semibold flex">
      <span class="mr-4">Артикул: {{ product.sku }}</span>
      <span class="flex items-center">
        <StarIcon class="text-amber-400 h-6 mr-1" /> 4.7
      </span>
    </div>
    <p class="mb-4 font-semibold">
      Контейнер: {{ product.container?.sl }}
    </p>

    <div class="rounded-xl bg-gray-100 p-4">
      <div class="flex justify-between items-center mb-4">
        <p
          v-if="store.catalogSelected"
          class="text-4xl font-semibold items-center"
        >
          {{ product.price[store.catalogSelected] }} ₽
        </p>
        <p
          v-else
          class="text-4xl font-semibold items-center"
        >
          ****
        </p>
        <div class="flex gap-3">
          <HeartIcon class="h-6" />
          <Square2StackIcon class="h-6" />
        </div>
      </div>
      <p
        v-if="product.inStock !== 'instock'"
        class="font-semibold flex items-center"
      >
        <ExclamationTriangleIcon class="text-red-500 h-5 mr-1" /> Товар
        закончился
      </p>
      <p
        v-else
        class="font-semibold flex items-center"
      >
        <CheckIcon class="text-primary_2 h-5 mr-1" /> Товар в наличии
      </p>


      <Transition
        name="list"
        mode="out-in"
      >
        <!-- in cart -->
        <div
          v-if="productInCart(product.id)"
          key="edited"
          class="mt-4 flex items-center justify-between"
        >
          <button
            class="bg-gray-300 rounded-xl w-14 px-4 py-4 whitespace-nowrap font-bold relative group/tip"
            @click="deleteCartItem(product.id)"
          >
            <TrashIcon />
          </button>
          <router-link to="/cart">
            <button class="bg-primary rounded-xl px-10 py-1.5 text-white font-bold">
              В корзине
              <span class="block text-sm font-normal">перейти</span>
            </button>
          </router-link>
          <button
            class="bg-gray-300 rounded-xl w-14 px-4 py-4 whitespace-nowrap font-bold"
            :disabled="inProgress"
            @click="addCartItem(product, -1)"
          >
            <MinusIcon />
          </button>
          <div class="text-lg font-semibold w-8 text-center">
            {{ productInCart(product.id)?.amount }}
          </div>
          <button
            class="bg-gray-300 rounded-xl w-14 px-4 py-4 whitespace-nowrap font-bold"
            :disabled="inProgress"
            @click="addCartItem(product, 1)"
          >
            <PlusIcon />
          </button>
        </div>
        <!-- not in cart -->
        <button
          v-else
          class="bg-primary rounded-xl px-4 py-4 text-white whitespace-nowrap font-bold w-full mt-4"
          :disabled="inProgress"
          :class="{ 'opacity-50': product.inStock !== 'instock' }"
          @click="addCartItem(product, 1)"
        >
          Добавить в корзину
        </button>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Square2StackIcon, HeartIcon, CheckIcon, StarIcon, ExclamationTriangleIcon, PlusIcon, MinusIcon, TrashIcon } from '@heroicons/vue/24/outline';
import { useShopStore } from '@/stores/shop';
import { Product } from '@/types/shop';
import { useCart } from '@/helpers/useCart';

const store = useShopStore();
interface Props {
  product: Product;
}
const { product } = defineProps<Props>();
const { inProgress, productInCart, addCartItem, deleteCartItem } = useCart();
</script>

<style></style>
