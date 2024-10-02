<template>
  <div class="relative">
    <label
      class="absolute left-3 transition-all text-gray-400 z-10 pointer-events-none"
      :class="focused ? 'text-sm top-2' : 'text-md top-5'"
    >{{ props.placeholder }}</label>
    <span class="absolute bottom-3 right-3 text-gray-400">{{ value?.length }}/{{ maxLength }}</span>
    <textarea
      v-model="value"
      rows="3"
      class="w-full bg-gray-100 rounded-lg px-3 pt-7 pb-3 text-semibold border-none font-semibold focus:ring-primary_2 resize-none"
      @focusin="focused = true"
      @focusout="focusOut"
      @change="focusOut"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, watch } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    defaul: ''
  },
  modelValue: {
    type: String,
    defaul: ''
  }
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  }
});

const focused = ref<boolean>(true);
const maxLength = ref(250);

watch(() => value.value, (nv) => {
  if (nv !== undefined && maxLength.value < nv.length) {
    value.value = value.value?.slice(0, maxLength.value);
  }
});

function focusOut() {
  if (value.value !== '' || null) {
    focused.value = true;
  } else {
    focused.value = false;
  }
}
onMounted(() => {
  focusOut();
});

</script>

<style scoped></style>