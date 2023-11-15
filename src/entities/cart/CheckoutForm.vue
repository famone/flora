<template>
    <div class="grid grid-cols-6 gap-6">
        <Teleport to="#payment" v-if="isMounted">
            <button class="bg-green-500 rounded-xl px-4 py-4 text-white whitespace-nowrap font-bold w-full"
                @click="submitForm">
                Оплатить онлайн
            </button>
        </Teleport>
        <div class="col-span-3">
            <Input placeholder="ФИО" v-model="data.name" />
        </div>
        <div class="col-span-3">
            <Input placeholder="Телефон" v-model="data.phone" />
        </div>
        <div class="col-span-3">
            <Input placeholder="E-mail" v-model="data.email" />
        </div>
        <div class="col-span-3">
            <Input placeholder="Почтовый индекс" v-model="data.post" />
        </div>
        <div class="col-span-3">
            <Input placeholder="Регион" v-model="data.region" />
        </div>
        <div class="col-span-3">
            <Input placeholder="Населенный пункт" v-model="data.city" />
        </div>
        <div class="col-span-4">
            <Input placeholder="Улица" v-model="data.street" />
        </div>
        <div class="col-span-1">
            <Input placeholder="Дом" v-model="data.house" />
        </div>
        <div class="col-span-1">
            <Input placeholder="Квартира" v-model="data.room" />
        </div>
        <div class="col-span-6">
            <Textarea placeholder="Комментарий" v-model="data.comment" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Input from '@/shared/Input.vue'
import Textarea from '@/shared/Textarea.vue'
import { onMounted, reactive, ref } from 'vue'

const data = reactive({
    name: '',
    phone: '',
    email: '',
    post: '',
    region: '',
    city: '',
    street: '',
    house: '',
    room: '',
    comment: ''
})

const isMounted = ref(false)

onMounted(() => {
    isMounted.value = true
})

function submitForm() {
    console.log(data)
}

</script>

<style scoped></style>