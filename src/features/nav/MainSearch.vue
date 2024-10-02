<template>
  <div class="flexrow w-full relative">
    <input
      v-model="searchInput"
      placeholder="Поиск"
      class="rounded py-2.5 ring-primary border-0 ring-1 focus:ring-primary focus:outline-none w-full"
      @input="startSearch"
      @focus="onFocus"
      @focusout="onFocusout"
    >

    <button
      class="bg-primary rounded px-10 py-2 text-white h-full whitespace-nowrap absolute right-0 top-0"
      @click="redirectOnSearch"
    >
      <MagnifyingGlassIcon class="h-6" />
    </button>

    <transition name="fade-move">
      <div
        v-if="showDropDown"
        class="absolute w-full z-20 top-16 left-0 rounded-lg overflow-hidden bg-white"
        style="box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);"
      >
        <router-link
          v-for="(item, index) in searchResults"
          :key="index"
          :to="`/product/${item?.slug}`"
          class="block px-4 py-2.5 text font-semibold hover:bg-gray-100 cursor-pointer"
        >
          <magnify class="text-gray-400 inline-block mr-2" />
          <span v-html="item?.name" />
        </router-link>
        <p
          v-if="searchHistory.length"
          class="px-4 py-1 text-md font-bold border-t"
        >
          Вы недавно искали:
        </p>
        <div
          v-for="(item, idx) in searchHistory"
          :key="idx"
          class="px-4 py-2.5 text font-semibold hover:bg-gray-100 cursor-pointer relative border-b"
        >
          <history class="text-gray-400 inline-block mr-2" />{{ item }}
          <XMarkIcon
            class="h-6 text-gray-400 inline-block absolute right-2.5 top-2.5"
            @click="removeFromHistory(idx)"
          />
        </div>
        <p
          v-if="searchPopular.length"
          class="px-4 py-1 text-md font-bold"
        >
          Часто ищут:
        </p>
        <div
          v-for="(item, idx) in searchPopular"
          :key="idx"
          class="px-4 py-2.5 text font-semibold hover:bg-gray-100 cursor-pointer relative"
        >
          <magnify class="text-gray-400 inline-block mr-2" />{{ item }}
        </div>
      </div>
    </transition>
  </div>
</template>
  
<script setup lang="ts">
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import history from '@/shared/icons/history.vue';
import magnify from '@/shared/icons/magnify.vue';
import { ref } from 'vue';
import { useSearch } from './model/useSearch';

const emit = defineEmits(['onFocus', 'onFocusout']);
const { searchInput, startSearch, searchResults, searchHistory, redirectOnSearch, removeFromHistory } = useSearch();

const showDropDown = ref<boolean>(false);

const searchPopular = [
  'Флокс',
  'Айва японская',
  'Барбарис'
];

function onFocus() {
  showDropDown.value = true;
  emit('onFocus');
}
function onFocusout() {
  showDropDown.value = false;
  emit('onFocusout');
}
</script>
