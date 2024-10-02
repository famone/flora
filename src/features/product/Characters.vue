<template>
  <div>
    <div class="flex justify-between items-end flex-nowrap pb-5">
      <p class="tetx-md font-medium text-gray-500 whitespace-nowrap">
        Отношение к свету
      </p>
      <span class="w-full border-b-2 border-dotted" />
      <p class="tetx-md font-semibold whitespace-nowrap">
        {{ props.spec.otnoshenieksvetu }}
      </p>
    </div>
    <div class="flex justify-between items-end flex-nowrap pb-5">
      <p class="tetx-md font-medium text-gray-500 whitespace-nowrap">
        Почва
      </p>
      <span class="w-full border-b-2 border-dotted" />
      <p class="tetx-md font-semibold whitespace-nowrap">
        {{ props.spec.pochva }}
      </p>
    </div>
    <div class="flex justify-between items-end flex-nowrap pb-5">
      <p class="tetx-md font-medium text-gray-500 whitespace-nowrap">
        Ширина куста (см)
      </p>
      <span class="w-full border-b-2 border-dotted" />
      <p class="tetx-md font-semibold whitespace-nowrap">
        {{ props.spec.shirinakusta }}
      </p>
    </div>
    <div class="flex justify-between items-end flex-nowrap pb-5">
      <p class="tetx-md font-medium text-gray-500 whitespace-nowrap">
        Высота с цветоносом (см)
      </p>
      <span class="w-full border-b-2 border-dotted" />
      <p class="tetx-md font-semibold whitespace-nowrap">
        {{ props.spec.vysotascvetonosom }}
      </p>
    </div>
    <div class="flex justify-between items-end flex-nowrap pb-5">
      <p class="tetx-md font-medium text-gray-500 whitespace-nowrap">
        Время цветения
      </p>
      <span class="w-full border-b-2 border-dotted" />
      <p class="tetx-md font-semibold whitespace-nowrap">
        {{ props.spec.vremyacveteniya }}
      </p>
    </div>
    <div
      v-if="props.spec.czvet !== ''"
      class="flex justify-between items-end flex-nowrap pb-5"
    >
      <p class="tetx-md font-medium text-gray-500 whitespace-nowrap">
        Цвет
      </p>
      <span class="w-full border-b-2 border-dotted" />
      <p class="tetx-md font-semibold whitespace-nowrap">
        {{ props.spec.czvet }}
      </p>
    </div>
    <!-- <pre>{{ props.spec }}</pre> -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  spec: {
    default: null,
    type: Object
  }
});
</script>

<style scoped></style>