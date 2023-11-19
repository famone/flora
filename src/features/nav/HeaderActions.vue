<template>
    <div class="flex gap-2">
        <router-link v-for="(item, idx) in actions" :key="idx" :to="item.link" @click="item.action">
            <div class="cursor-pointer text-center p-2 text-xs hover:translate-y-1 transition-all relative">
                <span v-if="item.bage && cartStore.cart.length" class="bage">{{ cartStore.cart.length }}</span>
                <component :is="item.component" class="h-5 mx-auto mb-1" />
                {{ item.txt }}
            </div>
        </router-link>
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

const cartStore = useCartStore()
const showLoginForm = ref(false)

const actions = ref([
    {
        txt: 'Войти',
        component: UserIcon,
        action: () => {
            showLoginForm.value = true
        },
        link: '/'
    },
    {
        txt: 'Избранное',
        component: HeartIcon,
        link: '/'
    },
    {
        txt: 'Корзина',
        component: ShoppingCartIcon,
        bage: true,
        link: '/cart'
    }
])
</script>