<template>
    <div class="flex justify-between items-center mb-4">
        <input type="text" :class="inp" v-model="item.val" v-for="(item, index) in codeArr" :key="index"
            @input="changeFocus(index, $event)" class="otpInp">
    </div>
    <pre>{{ codeStr }}</pre>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

const inp = 'bg-gray-100 rounded-lg px-3 pt-5 pb-5 text-semibold border-none font-semibold focus:ring-primary_2 w-1/6 text-center'

const codeArr = ref([
    {
        val: ''
    },
    {
        val: ''
    },
    {
        val: ''
    },
    {
        val: ''
    },
    {
        val: ''
    },
])

const codeStr = computed(() => {
    return codeArr.value.map(i => {
        return i.val
    }).join('')
})


const changeFocus = (index: number, e: any) => {
    const inputs = document.querySelectorAll('.otpInp')
    // console.log(codeArr.value[index].val)
    if (e.data === null && index === 0) return
    if (e.data === null) {
        const nextEl = inputs[index - 1] as HTMLElement
        nextEl.focus()
        return
    }
    if (index === inputs.length - 1) return
    const nextEl = inputs[index + 1] as HTMLElement
    nextEl.focus()
}

</script>

<style scoped></style>