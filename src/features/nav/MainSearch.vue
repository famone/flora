<template>
    <div class="flexrow w-full relative">
        <input placeholder="Поиск" v-model="searchInput" @input="startSearch"
            class="rounded py-2.5 ring-primary border-0 ring-1 focus:ring-primary focus:outline-none w-full"
            @focus="onFocus" @focusout="onFocusout">

        <button class="bg-primary rounded px-10 py-2 text-white h-full whitespace-nowrap absolute right-0 top-0"
            @click="redirectOnSearch">
            <MagnifyingGlassIcon class="h-6" />
        </button>

        <transition name="fade-move">
            <div class="absolute w-full z-20 top-16 left-0 rounded-lg overflow-hidden bg-white"
                style="box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);" v-if="showDropDown">
                <router-link :to="`/product/${item?.slug}`"
                    class="block px-4 py-2.5 text font-semibold hover:bg-gray-100 cursor-pointer"
                    v-for="(item, index) in searchResults" :key="index">
                    <!-- <MagnifyingGlassIcon class="h-5 text-gray-400 inline-block mr-2" /> -->
                    <magnify class="text-gray-400 inline-block mr-2" />
                    <span v-html="item?.name"></span>
                </router-link>
                <p class="px-4 py-1 text-md font-bold" v-if="searchHistory.length">Вы недавно искали:</p>
                <div class="px-4 py-2.5 text font-semibold hover:bg-gray-100 cursor-pointer relative"
                    v-for="(item, idx) in searchHistory" :key="idx">
                    <history class="text-gray-400 inline-block mr-2" />{{ item }}
                    <XMarkIcon class="h-6 text-gray-400 inline-block absolute right-2.5 top-2.5"
                        @click="removeFromHistory(idx)" />
                </div>
            </div>
        </transition>
    </div>
</template>
  
<script setup lang="ts">
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import history from '@/shared/icons/history.vue'
import magnify from '@/shared/icons/magnify.vue'
import { ref } from 'vue'
import { useSearch } from './model/useSearch'

const emit = defineEmits(['onFocus', 'onFocusout'])
const { searchInput, startSearch, searchResults, searchHistory, redirectOnSearch, removeFromHistory } = useSearch()

const showDropDown = ref<boolean>(false)

function onFocus() {
    showDropDown.value = true
    emit('onFocus')
}
function onFocusout() {
    showDropDown.value = false
    emit('onFocusout')
}
</script>
