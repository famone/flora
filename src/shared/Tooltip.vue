<template>
    <div
        class="absolute bg-[rgba(0,0,0,.6)] top-[120%] rounded p-2 left-1/2 -translate-x-1/2 translate-y-2 text-sm text-white font-medium opacity-0 transition-all group-hover/tip:translate-y-0 group-hover/tip:opacity-100 ">
        <slot name="content" />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>