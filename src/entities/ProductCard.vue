<template>
    <router-link :to="`/product/${item.slug}`">
        <div class="group/item cursor-pointer">
            <div class="rounded overflow-hidden relative">
                <LikeButton />
                <img v-lazy="item.picture" class="h-[20rem] object-cover w-full group-hover/item:scale-105 transition-all">
            </div>
            <div class="py-2 h-full">
                <div class="flex justify-between items-center mb-2">
                    <p class="text-xl font-bold items-center" v-if="store.catalogSelected">
                        {{ item.price[store.catalogSelected] }} ₽
                    </p>
                    <p class="text-xl font-bold items-center" v-else>****</p>
                    <button class=" bg-primary rounded text-sm font-semibold p-1 group/btn flex items-center"
                        @click.prevent="addToCart">
                        <PlusIcon class="h-4 group-hover/btn:rotate-90 transition-all mr-1" />
                        В корзину
                    </button>
                </div>
                <h4 class="title font-semibold group-hover/item:text-primary_2">{{ item.name }}</h4>
            </div>
        </div>
    </router-link>
</template>
  
<script setup lang="ts">
import { Product } from '@/types/shop'
import { PlusIcon } from '@heroicons/vue/24/outline'
import LikeButton from '@/shared/LikeButton.vue'
import { useShopStore } from '@/stores/shop'

const store = useShopStore()
interface Props {
    item: Product
}
const { item } = defineProps<Props>()

const addToCart = (): void => {
    alert('добавить в корзину')
}

</script>

<style scoped>
.title {
    font-size: 14px;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>