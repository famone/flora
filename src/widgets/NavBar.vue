<template>
  <header class="header shadow-md mx-auto sticky top-0 z-40">
    <div
      v-if="overlay"
      class="h-screen w-screen fixed top-0 left-0 bg-black opacity-60 -z-10"
      @click="changeCatalogVisibility"
    />
    <TopBar @closeCatalogIfVisible="closeCatalogIfVisible" />
    <transition name="fade-slide">
      <MainCatalog
        v-if="isCatalogVisible"
        @closeCatalog="changeCatalogVisibility"
      />
    </transition>
    <div class="bg-white py-2">
      <div class="container mx-auto">
        <div class="flex gap-6 justify-between items-center">
          <MainLogo />
          <CatalogMenuButton
            :is-catalog-visible="isCatalogVisible"
            @click="changeCatalogVisibility"
          />
          <MainSearch
            @on-focus="(overlay = true), (isCatalogVisible = false)"
            @on-focusout="overlay = false"
          />
          <HeaderActions />
        </div>
      </div>
    </div>
    <div class="bg-white pb-5">
      <div class="container mx-auto flex justify-between items-center">
        <ul class="flex justify-end items-center gap-6 text-sm font-semibold">
          <li
            v-for="(item, i) in main_nav"
            :key="i"
            class="hover:opacity-70 transition-all"
          >
            <router-link
              :to="item.link"
              class="flex items-center gap-2"
            >
              <component
                :is="item.icon"
                class="h-6 text-primary_2"
              />
              {{ item.txt }}
            </router-link>
          </li>
        </ul>
        <div class="gap-2 flex">
          <router-link
            v-for="(btn, i) in buttons"
            :key="i"
            :to="btn.link"
          >
            <button :class="btn.style">
              <component
                :is="btn.icon"
                class="h-4 mr-1"
              />
              {{ btn.txt }}
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { ArrowDownTrayIcon, BookmarkIcon } from '@heroicons/vue/24/outline';
import MainSearch from '@/features/nav/MainSearch.vue';
import CatalogMenuButton from '@/features/nav/CatalogMenuButton.vue';
import HeaderActions from '@/features/nav/HeaderActions.vue';
import TopBar from '@/widgets/TopBar.vue';
import MainLogo from '@/shared/MainLogo.vue';
import MainCatalog from '@/features/nav/MainCatalog.vue';
import { useNavBar } from './model/useNavBar';

const overlay = ref(false);
const isCatalogVisible = ref(false);
const { main_nav } = useNavBar();

const buttons = ref([
  {
    txt: 'Скачать прайс',
    icon: ArrowDownTrayIcon,
    link: '/',
    style: 'bg-primary text-white rounded text-sm px-2 py-1 flex items-center',
  },
  {
    txt: 'Наш справочник',
    icon: BookmarkIcon,
    link: '/',
    style: 'bg-gray-200 rounded text-sm px-2 py-1 flex items-center',
  },
]);

const changeCatalogVisibility = () => {
  overlay.value = !overlay.value;
  isCatalogVisible.value = !isCatalogVisible.value;
};
const closeCatalogIfVisible = () => {
  overlay.value = false;
  isCatalogVisible.value = false;
};
</script>

<style>
.bage {
  color: #fff;
  position: absolute;
  top: -4px;
  font-size: 10px;
  right: 12px;
  background-color: red;
  font-weight: 700;
  height: 16px;
  width: 16px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
  