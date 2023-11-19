<template>
    <div class="relative" :class="{ 'light': light, 'focused': focused }">
        <label class="absolute left-3 transition-all text-gray-400 z-10 pointer-events-none text-md top-5">
            {{ props.placeholder }}
        </label>
        <input :type="type"
            class="w-full bg-gray-100 rounded-lg px-3 pt-7 pb-3 text-semibold border-none font-semibold focus:ring-primary_2"
            :class="{ error: error }" v-model="value" @focus="focused = true" @focusout="focusOut" @change="focusOut"
            :maxlength="type === 'password' ? 24 : ''" @blur="onBlur">

        <slot name="after"></slot>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'

const props = defineProps({
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    modelValue: {
        type: String,
        default: ''
    },
    light: {
        type: Boolean,
        default: false
    },
    error: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update:modelValue', 'onBlur'])

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

function onBlur() {
    emit('onBlur')
}

</script>

<style scoped>
.error {
    box-shadow: 0 0 0 1px red;
}

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