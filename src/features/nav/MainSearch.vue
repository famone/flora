<template>
    <div class="flexrow w-full relative">
        <input placeholder="Поиск"
            class="rounded py-2.5 ring-primary border-0 ring-1 focus:ring-primary focus:outline-none w-full"
            @focus="onFocus" @focusout="onFocusout">

        <button class="bg-primary rounded px-12 py-2 text-white h-full whitespace-nowrap absolute right-0 top-0">
            <MagnifyingGlassIcon class="h-6" />
        </button>
    </div>
</template>
  
<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
const emit = defineEmits(['onFocus', 'onFocusout'])

function onFocus() {
    emit('onFocus')
}
function onFocusout() {
    emit('onFocusout')
}
</script>
  
<style scoped></style>
  