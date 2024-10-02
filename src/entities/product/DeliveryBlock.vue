<template>
  <div class="mt-4">
    <div class="divide-y">
      <div
        v-for="(item, index) in punkts"
        :key="index"
        class="py-1"
      >
        <p class="font-bold flex items-center mb-1">
          <MapPinIcon
            v-if="index == 0"
            class="h-6 mr-1"
          />
          <subway
            v-else
            class="h-4 w-4 ml-1 mr-2"
          />
          {{ item.name }}
        </p>
        <p class="text-sm text-gray-400 pl-7">
          {{ item.location }}
        </p>
      </div>
    </div>
    <router-link
      to="/"
      class="group"
    >
      <p class="transition-all font-semibold mt-4 text-sm text-primary_2 pl-7 group-hover:opacity-80">
        Еще 2 пункта
        <ArrowLongRightIcon class="transition-all inline-block h-5 ml-2 group-hover:translate-x-1" />
      </p>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { MapPinIcon, ArrowLongRightIcon } from '@heroicons/vue/24/outline';
import subway from '@/shared/icons/subway.vue';

const punkts = [
  {
    name: 'Питомник',
    location: 'Самовывоз'
  },
  {
    name: 'ул. Промышленная, д. 6 (м. Нарвская)',
    location: 'Пункт выдачи заказов'
  },
  {
    name: 'Пулковское шоссе, д. 53 к 2',
    location: 'Пункт выдачи заказов'
  },
];
</script>

<style scoped></style>