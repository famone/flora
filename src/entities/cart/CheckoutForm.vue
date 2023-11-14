<template>
    <div class="grid grid-cols-6 gap-6">
        <div class="col-span-3">
            <Input placeholder="ФИО" v-model="name" />
        </div>
        <div class="col-span-3">
            <Input placeholder="Телефон" v-model="phone" />
        </div>
        <div class="col-span-3">
            <Input placeholder="E-mail" v-model="email" />
        </div>
        <div class="col-span-3">
            <Input placeholder="Почтовый индекс" v-model="post" />
        </div>
        <div class="col-span-3">
            <Input placeholder="Регион" v-model="region" />
        </div>
        <div class="col-span-3">
            <Input placeholder="Населенный пункт" v-model="city" />
        </div>
        <div class="col-span-4">
            <Input placeholder="Улица" v-model="street" />
        </div>
        <div class="col-span-1">
            <Input placeholder="Дом" v-model="house" />
        </div>
        <div class="col-span-1">
            <Input placeholder="Квартира" v-model="room" />
        </div>
        <div class="col-span-6">
            <Textarea placeholder="Комментарий" v-model="comment" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Input from '@/shared/Input.vue'
import Textarea from '@/shared/Textarea.vue'
import { ref } from 'vue'

const name = ref('')
const phone = ref('')
const email = ref('')
const post = ref('')
const region = ref('')
const city = ref('')
const street = ref('')
const house = ref('')
const room = ref('')
const comment = ref('')

</script>

<style scoped></style>