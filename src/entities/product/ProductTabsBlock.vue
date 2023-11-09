<template>
    <div class="col-span-8 py-12">
        <div class="flex gap-4">
            <button class="pb-4 text-lg tab-button text-gray-400 font-semibold" v-for="(item, index) in props.tabs"
                :key="index" :class="{ 'active': activeTab === index }" @click="chageTab(index)">
                {{ item.name }}
                <sup class="text-gray-400" v-if="index === 2">2</sup>
            </button>
        </div>
        <div class="py-6">
            <slot name="tabitem" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
const emit = defineEmits(['chageTab'])
const props = defineProps({
    tabs: {
        type: Array as PropType<any>,
        default: []
    },
    activeTab: {
        type: Number,
        default: 0
    }
})

function chageTab(index: number) {
    emit('chageTab', index)
}

</script>

<style scoped>
.tab-button {
    position: relative;
    transition: all .2s ease;
}

.tab-button.tab-button.active {
    color: black;
}

.tab-button::before {
    content: '';
    height: 4px;
    width: 0%;
    background-color: var(--primary_2);
    position: absolute;
    left: 0;
    bottom: 0;
    transition: all .2s ease-in-out;
    opacity: 0;
}

.tab-button.active::before {
    width: 100%;
    opacity: 1;
}
</style>