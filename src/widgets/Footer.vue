<template>
    <div class="py-12 bg-gray-100">
        <div class="container mx-auto">
            <div class="grid grid-cols-12 gap-6">
                <div class="col-span-4">
                    <router-link to="/">
                        <img src="@/assets/img/logo.svg" class="h-12 mb-4">
                    </router-link>
                    <p class="text-sm">Питомник заложен в 2002 году на участке <br>
                        площадью около 1 га в деревне Парицы, <br>
                        в 5 км от Гатчины (50 км от Санкт-Петербурга).</p>

                    <router-link to="/">
                        <img src="@/assets/img/appm_logo.svg" class="h-12 mt-8 mb-4">
                    </router-link>
                    <p class="text-sm">Член ассоциации производителей <br> посадочного материала</p>
                </div>
                <div class="col-span-3">
                    <h6 class="text-md text-dim_dark font-extrabold tracking-widest mb-8">КАРТА САЙТА</h6>
                    <ul class=" space-y-3 font-semibold">
                        <li v-for="(item, i) in nav" :key="i" class="hover:text-primary_2 transition-all">
                            <router-link to="/">{{ item.txt }}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-span-3">
                    <h6 class="text-md text-dim_dark font-extrabold tracking-widest mb-8">КАТЕГОРИИ</h6>
                    <ul class=" space-y-3 font-semibold">
                        <li v-for="(item, i) in store.cats" :key="i" class="hover:text-primary_2 transition-all">
                            <router-link :to="item.url">{{ item.name }}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-span-2">
                    <h6 class="text-md text-dim_dark font-extrabold tracking-widest mb-8">КОНТАКТЫ</h6>
                    <ul class=" space-y-3 font-semibold">
                        <li>pitomnik@sflora.ru</li>
                        <li>+7(921)332-13-80</li>
                        <li class="text-gray-500 font-normal">Ленинградская область,
                            Гатчинский район, д. Парицы,
                            ул.Большая, д.69а</li>
                        <li class="text-gray-500 font-normal text-sm mt-4">Версия: {{ printVersion }}</li>
                    </ul>
                </div>
            </div>
            <div class="flex justify-between mt-14">
                <router-link to="/">
                    <p
                        class="text-sm text-dim_dark font-extrabold tracking-widest mb-8 flex hover:opacity-50 transition-all">
                        <img src="@/assets/img/navi.svg" class="mr-2">
                        ПОСМОТРЕТЬ НА КАРТЕ
                    </p>
                </router-link>
                <a href="https://webink.site/" target="_blank">
                    <p
                        class="text-sm text-dim_dark font-extrabold tracking-widest mb-8 flex hover:opacity-50 transition-all">
                        РАЗРАБОТКА - WEBINK
                    </p>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useNavBar } from './model/useNavBar'
import { useShopStore } from '@/stores/shop'
import { version } from '../../package.json';

const { nav } = useNavBar()
const store = useShopStore()

const printVersion = ref('')
printVersion.value = version
</script>

<style scoped></style>