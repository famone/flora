<template>
  <div class="relative">
    <!-- <AdjustmentsHorizontalIcon class="h-6 absolute right-2 top-2 text-gray-400" /> -->
    <div class="flex items-center text-gray-500">
      Сортировка:
      <span
        class="flex items-center ml-1 text-primary_2 cursor-pointer"
        @click="filtersVisible = !filtersVisible"
      >
        {{ filters[props.selectedFilter].name }}
        <ChevronDownIcon class="h-4 ml-1 mt-1" />
      </span>
    </div>
    <transition name="fade-move">
      <div
        v-if="filtersVisible"
        class="absolute w-full z-20 top-8 -right-2 rounded-md drop-shadow-lg overflow-hidden bg-white"
      >
        <div
          v-for="(item, index) in filters"
          :key="index"
          class="px-4 py-2.5 text font-semibold hover:bg-gray-100 cursor-pointer"
          :class="{ 'bg-primary_light': props.selectedFilter === index }"
          @click="selectFilter(index)"
        >
          <component
            :is="item.icon"
            class="h-4 mr-2 text-gray-500 inline-block"
          />
          {{ item.name }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon, ArrowUpRightIcon, ArrowDownRightIcon, CheckIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const emit = defineEmits(['selectFilter']);
// const selectedFilter = ref<number>(0)
const props = defineProps({
  selectedFilter: {
    required: true,
    type: Number
  }
});

const filtersVisible = ref(false);
const filters = ref([
  {
    name: 'По умлочанию'
  },
  {
    name: 'По возрастанию',
    icon: ArrowUpRightIcon
  },
  {
    name: 'По убыванию',
    icon: ArrowDownRightIcon
  },
  {
    name: 'По наличию',
    icon: CheckIcon
  }
]);

function selectFilter(index: number) {
  emit('selectFilter', index);
  filtersVisible.value = false;
}

</script>

<style scoped></style>