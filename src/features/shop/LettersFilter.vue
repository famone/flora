<template>
  <div class="flex items-center flex-wrap gap-2 mb-6">
    <div
      v-for="(letter, index) in getLetters"
      :key="index"
      :class="[letterClass, { 'text-white bg-primary': letter === props.selectedLetter }]"
      @click="changeLetter(letter)"
    >
      {{ letter }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { Subcategory } from '@/types/shop';

const emit = defineEmits(['changeLetter']);
const props = defineProps({
  items: {
    type: Object,
    required: true
  },
  selectedLetter: {
    type: String,
    default: ''
  }
});

const letters = ref<string[]>([]);

const getLetters = computed(() => {
  letters.value = props.items.map((i: Subcategory) => i.name[0]);
  return Array.from(new Set(letters.value));
});
watch(() => props.items, () => {
  emit('changeLetter', '');
});

const changeLetter = (letter: string): void => {
  if (letter === props.selectedLetter) {
    emit('changeLetter', '');
  } else {
    emit('changeLetter', letter);
  }
};

const letterClass = 'h-8 w-8 bg-gray-200 rounded-md justify-center items-center flex font-semibold text-md cursor-pointer';

</script>

<style scoped></style>