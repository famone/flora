<template>
    <div class="relative" :class="{ 'light': light, 'focused': focused }">
        <label class="absolute left-3 transition-all text-gray-400 z-10 pointer-events-none text-md top-5">
            {{ props.placeholder }}
        </label>
        <input type="text"
            class="w-full bg-gray-100 rounded-lg px-3 pt-7 pb-3 text-semibold border-none font-semibold focus:ring-primary_2"
            v-model="value" @focus="focused = true" @focusout="focusOut" @change="focusOut" maxlength="4">
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'

const props = defineProps({
    placeholder: {
        type: String,
        defaul: ''
    },
    modelValue: {
        type: String,
        defaul: ''
    },
    light: {
        type: Boolean,
        defaul: false
    },
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

const focused = ref<boolean>(true)

function focusOut() {
    if (value.value !== '' || null) {
        focused.value = true
    } else {
        focused.value = false
    }
}
onMounted(() => {
    focusOut()
})

</script>

<style scoped>
/* text-sm top-2 */
.focused label {
    font-size: 12px;
    top: 8px;
}

.light input {
    padding-top: 20px;
    padding-bottom: 6px;
    background: #fff;
}

.light label {
    top: 14px;
    font-size: 14px;
}

.light.focused label {
    top: 4px;
    font-size: 12px;
}
</style>