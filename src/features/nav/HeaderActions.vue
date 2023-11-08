<template>
    <div class="flex gap-2">
        <router-link v-for="(item, idx) in actions" :key="idx" to="/">
            <div class="cursor-pointer text-center p-2 text-xs hover:translate-y-1 transition-all relative">
                <span v-if="item.bage" class="bage">2</span>
                <component :is="item.component" class="h-5 mx-auto mb-1" />
                {{ item.txt }}
            </div>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UserIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/vue/24/outline'
const actions = ref([
    {
        txt: 'Войти',
        component: UserIcon
    },
    {
        txt: 'Избранное',
        component: HeartIcon
    },
    {
        txt: 'Корзина',
        component: ShoppingCartIcon,
        bage: true
    }
])
</script>