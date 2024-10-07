<template>
  <div class="py-12 bg-[#1E1E1E] rounded-t-[32px]  ">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-4">
          <router-link to="/">
            <img
              src="@/assets/img/logo_dark.svg"
              class="h-12 mb-4"
            >
          </router-link>
          <p class="text-sm text-neutral-500">
            Питомник заложен в 2002 году на участке <br>
            площадью около 1 га в деревне Парицы, <br>
            в 5 км от Гатчины (50 км от Санкт-Петербурга).
          </p>

          <router-link to="/">
            <img
              src="@/assets/img/appm_dark.svg"
              class="h-12 mt-8 mb-4"
            >
          </router-link>
          <p class="text-sm text-neutral-500">
            Член ассоциации производителей <br> посадочного материала
          </p>
        </div>
        <div class="col-span-2">
          <h6 class="text-md text-white font-extrabold tracking-widest mb-6">
            КАРТА САЙТА
          </h6>
          <ul class="text-neutral-500 space-y-3 font-semibold">
            <li
              v-for="(item, i) in nav"
              :key="i"
              class="hover:text-primary_2 transition-all"
            >
              <router-link to="/">
                {{ item.txt }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-span-3">
          <h6 class="text-md text-white font-extrabold tracking-widest mb-6">
            КАТЕГОРИИ
          </h6>
          <ul class="text-neutral-500 space-y-3 font-semibold">
            <li
              v-for="(item, i) in store.cats"
              :key="i"
              class="hover:text-primary_2 transition-all"
            >
              <router-link :to="item.url">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-span-3">
          <ul class="text-white space-y-3 font-semibold mb-8">
            <li class="text-xl hover:text-primary_2 transition-all">
              +7(921)332-13-80
            </li>
            <li class="text-xl hover:text-primary_2 transition-all">
              pitomnik@sflora.ru
            </li>
            <li class="text-neutral-500 font-normal">
              Ленинградская область,
              Гатчинский район, д. Парицы,
              ул.Большая, д.69а
            </li>
          </ul>
          <h6 class="text-md text-white font-extrabold tracking-widest mb-6 uppercase">
            Мы в соцсетях
          </h6>
          <div class="flex items-center gap-4">
            <div class="bg-white rounded-xl h-12 w-12 flex justify-center items-center group cursor-pointer">
              <img
                src="@/assets/img/vk.svg"
                alt="vk"
                class="transition-all group-hover:opacity-60"
              >
            </div>
            <div class="bg-white rounded-xl h-12 w-12 flex justify-center items-center group cursor-pointer">
              <img
                src="@/assets/img/tg.svg"
                alt="tg"
                class="transition-all group-hover:opacity-60"
              >
            </div>
            <div class="bg-white rounded-xl h-12 w-12 flex justify-center items-center group cursor-pointer">
              <img
                src="@/assets/img/dzen.svg"
                alt="vk"
                class="transition-all group-hover:opacity-60"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-14">
        <router-link to="/">
          <p
            class="text-sm text-neutral-500 font-extrabold tracking-widest mb-6 flex hover:opacity-50 transition-all"
          >
            <img
              src="@/assets/img/navi.svg"
              class="mr-2"
            >
            ПОСМОТРЕТЬ НА КАРТЕ
          </p>
        </router-link>
        <a
          href="https://webink.site/"
          target="_blank"
        >
          <p
            class="text-sm text-neutral-500 font-extrabold tracking-widest mb-6 flex hover:opacity-50 transition-all"
          >
            РАЗРАБОТКА - WEBINK
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useNavBar } from './model/useNavBar';
import { useShopStore } from '@/stores/shop';
import { version } from '../../package.json';

const { nav } = useNavBar();
const store = useShopStore();

const printVersion = ref('');
printVersion.value = version;
</script>

<style scoped></style>