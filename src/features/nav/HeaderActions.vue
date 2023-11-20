<template>
    <div class="flex gap-2">
        <div class="cursor-pointer text-center p-2 text-xs hover:translate-y-1 transition-all relative"
            v-for="(item, idx) in actions" :key="idx" @click.prevent="item.action">
            <span v-if="item.bage && cartStore.cart.length" class="bage">{{ cartStore.cart.length }}</span>
            <component :is="item.component" class="h-5 mx-auto mb-1" />
            {{ item.txt }}
        </div>
        <transition name="fade-slide">
            <LoginModal v-if="showLoginForm" @close-modal="showLoginForm = !showLoginForm" />
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginModal from '@/features/nav/modals/LoginModal.vue'
import { UserIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/vue/24/outline'
import { useCartStore } from '@/stores/cart'
import router from '@/router/index'

const cartStore = useCartStore()
const showLoginForm = ref(false)

const actions = ref([
    {
        txt: 'Войти',
        component: UserIcon,
        action: () => {
            showLoginForm.value = true
        },
    },
    {
        txt: 'Избранное',
        component: HeartIcon,
        action: () => {
            router.push('/favourites')
        },
    },
    {
        txt: 'Корзина',
        component: ShoppingCartIcon,
        bage: true,
        action: () => {
            router.push('/cart')
        },
    }
])
</script>