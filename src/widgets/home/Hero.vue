<template>
  <div class="pt-8">
    <div class="container mx-auto relative">
      <button
        :class="sliderBtn"
        class="-left-12 prev-slide"
      >
        <ArrowSmallLeftIcon class="h-6" />
      </button>
      <button
        :class="sliderBtn"
        class="-right-12 next-slide"
      >
        <ArrowSmallRightIcon class="h-6" />
      </button>
      <swiper
        :slides-per-view="1"
        :space-between="24"
        :navigation="{ nextEl: '.next-slide', prevEl: '.prev-slide', }"
        :modules="modules"
      >
        <swiper-slide>
          <div class="h-[40rem] rounded-xl overflow-hidden bg-gray-200 slide-box p-24 flex items-center relative">
            <video-background
              src="https://sflora.ru/wp-content/uploads/2022/12/flora_movie.mp4"
              class="video-bg"
            />
            <div class="relative">
              <p class="text-lg text-white font-semibold tracking-widest mb-6">
                НОВОСТИ
              </p>
              <h1 class="text-4xl font-bold text-white max-w-[70%] mb-8">
                {{ starterSlide.name }}
              </h1>
              <p
                class="text-white max-w-[60%]"
                v-html="starterSlide.descr"
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          v-for="(slide, index) in content.news"
          :key="index"
        >
          <div
            class="h-[40rem] rounded-xl overflow-hidden bg-gray-200 slide-box p-24 flex items-center"
            :style="`background-image: url('${slide.mainImage}');`"
          >
            <div class="relative">
              <p class="text-lg text-white font-semibold tracking-widest mb-6">
                НОВОСТИ
              </p>
              <h1 class="text-4xl font-bold text-white max-w-[70%] mb-8">
                {{ normalizeString(slide.name) }}
              </h1>
              <p
                class="text-white max-w-[60%]"
                v-html="slide.descr"
              />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import VideoBackground from 'vue-responsive-video-background-player';
import { ArrowSmallRightIcon, ArrowSmallLeftIcon } from '@heroicons/vue/24/outline';
import { Heroslide } from '@/types/content';
import { useContentStore } from '@/stores/content';
const content = useContentStore();


function normalizeString(s: string) {
  return s[0].toUpperCase() + s.slice(1).toLocaleLowerCase();
}

const starterSlide = ref<Heroslide>({
  id: 1337,
  name: ' «СЕВЕРНАЯ ФЛОРА»',
  slug: '/',
  descr: ' Питомник "Северная флора" заложен в 2002 году для выращивания качественных здоровых растений с закрытой корневой системой, строго соответствующих сортовым признакам и пригодных для нашего климата. На участке площадью 1 га производится более 1000 сортов многолетних садовых цветов и 150 разновидностей лиственных кустарников. ',
  shortDescr: 'Коллекционный питомник <br> декоративных растений ',
  datetime: '',
  mainImage: '',
});

const sliderBtn = 'text-dim_dark bg-gray-200 text-xl h-10 w-10 rounded-full hover:bg-gray-100 transition-all top-1/2 absolute z-10 -translate-y-5 flex justify-center items-center';
const modules = [Navigation];

</script>

<style scoped>
.video-bg {
    position: absolute !important;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}

.slide-box {
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.slide-box::before {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #000;
    opacity: .4;
    content: "";
    z-index: 0;
}
</style>