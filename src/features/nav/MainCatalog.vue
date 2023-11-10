<template>
    <div class="absolute top-full left-0 bg-white py-6 w-full inner-shadow rounded-b-xl">
        <div class="container mx-auto">
            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-3">
                    <ul class=" space-y-1">
                        <li v-for="(cat, index) in store.cats" :key="index" @mouseover="changeCat(index)"
                            @click="closeCatalog">
                            <router-link :to="cat.url"
                                class="flex items-center rounded-md p-2 text-gray-600 transition-all font-semibold relative"
                                :class="{ 'bg-primary_light': index === selectedCat }">
                                <component :is="getIcon(cat.name)" class="h-8 mr-2" />
                                {{ cat.name }}
                                <ChevronRightIcon class="h-5 absolute right-2 top-1/2 -translate-y-2.5 text-primary_2"
                                    v-if="index === selectedCat" />
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-span-9 border-l pl-4">
                    <div class="text-2xl font-bold mb-4 flex items-center gap-2">
                        {{ store.cats[selectedCat].name }}
                        <span class="text-xs text-gray-400">{{ store.cats[selectedCat].child?.length }} категорий</span>
                    </div>
                    <div class="sub">
                        <div class="sub-gradient"></div>
                        <div class="sub-cols pb-16">
                            <ul class="columns-5">
                                <li v-for="group in  filteredCats()" class="flex mb-2" style="page-break-inside: avoid;">
                                    <span class="mr-4 font-semibold text-primary_2 leading-5">{{ group.letter }}</span>
                                    <ul>
                                        <li v-for="(sub, idx) in  group.subs" :key="idx" @click="closeCatalog">
                                            <router-link :to="sub.url"
                                                class="text-sm font-semibold pb-2 text-gray-600 col-span-1 block hover:text-primary_2">
                                                {{ sub.name }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import useIcons from './model/useIcons'
import { Subcategory } from '@/types/shop'
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

import { useShopStore } from '@/stores/shop'
const store = useShopStore()

const emit = defineEmits(['closeCatalog'])
const { getIcon } = useIcons()

const selectedCat = ref(2)
const changeCat = (index: number): void => {
    selectedCat.value = index
}

function closeCatalog() {
    emit('closeCatalog')
}

// активаня категория, в зависимости от стр.
const route = useRoute()
if (route.params.cat) {
    setActiveCat()
}
function setActiveCat() {
    const activeCat = store.cats.find((i) => i.slug === route.params.cat)
    if (activeCat) {
        selectedCat.value = store.cats.indexOf(activeCat)
    }
}
const filteredCats = () => {
    if (store.cats[selectedCat.value].child?.length) {
        const subs = store.cats[selectedCat.value].child
        const letters = Array.from(new Set(subs?.map((i: Subcategory) => i.name[0])))
        const res = letters.map((i) => {
            return {
                letter: i,
                subs: subs?.filter((j) => j.name.startsWith(i))
            }
        })
        return res
    }
}
</script>

<style scoped>
.inner-shadow {
    box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.1);
}

.sub {
    position: relative;
}

.sub-cols {
    position: relative;
    overflow: hidden;
    overflow-y: auto;
    height: 360px;
}

.sub-gradient {
    width: 100%;
    position: absolute;
    bottom: -1px;
    left: 0px;
    z-index: 1;
    height: 60px;
    transition: opacity 0.25s ease-in-out 0s, transform 0.25s ease-in-out 0s;
    background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
}
</style>