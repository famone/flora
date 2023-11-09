<template>
    <div class="text-lg font-medium leading-7" v-html="props.description">
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    description: {
        default: '',
        type: String
    }
})
</script>