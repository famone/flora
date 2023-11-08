<template>
    <section class="py-8">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold mb-8">Сообщество Vkontakte</h2>
            <div class="relative">
                <button :class="sliderBtn" class="-left-12 prev-slide-2">
                    <ArrowSmallLeftIcon class="h-6" />
                </button>
                <button :class="sliderBtn" class="-right-12 next-slide-2">
                    <ArrowSmallRightIcon class="h-6" />
                </button>
                <swiper :slides-per-view="5" :space-between="24"
                    :navigation="{ nextEl: '.next-slide-2', prevEl: '.prev-slide-2', }" :modules="modules">
                    <swiper-slide v-for="(item, index) in store.vk_news" :key="index">
                        <VkCard :item="item" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>
  
<script setup lang="ts">
import VkCard from '@/entities/news/VkCard.vue'
import { useContentStore } from '@/stores/content'


import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from 'swiper/modules';
import { ArrowSmallRightIcon, ArrowSmallLeftIcon } from '@heroicons/vue/24/outline'

const store = useContentStore()
const modules = [Navigation]
const sliderBtn = 'text-dim_dark bg-gray-200 text-xl h-10 w-10 rounded-full hover:bg-gray-100 transition-all top-1/2 absolute z-10 -translate-y-20 flex justify-center items-center'
</script>
  