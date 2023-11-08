<template>
    <h2 class="col-span-4 text-3xl font-bold mb-6">{{ title }}</h2>
    <LettersFilter :items="items" :selected-letter="selectedLetter" v-if="items" @changeLetter="changeLetter" />
    <div class="divide-y">
        <SubcatCard v-for="(sub, index) in items" :key="index" :sub="sub" v-show="letterFilter(sub.name)" />
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { Subcategory } from '@/types/shop'
import SubcatCard from '@/entities/shop/SubcatCard.vue'
import LettersFilter from '@/features/shop/LettersFilter.vue'

interface Props {
    title: string
    items?: Subcategory[]
}
const { items, title } = defineProps<Props>()
const selectedLetter = ref<string>('')

const changeLetter = (letter: string): void => {
    selectedLetter.value = letter
}

// const letterFilter = (name: string) => {
//     if (selectedLetter.value === '') return true
//     if (name.startsWith(selectedLetter.value)) {
//         return true
//     } else {
//         return false
//     }
// }
function letterFilter(name: string): boolean {
    if (selectedLetter.value === '') return true
    if (name.startsWith(selectedLetter.value)) {
        return true
    } else {
        return false
    }
}

</script>
  