<template>
  <div class="grid grid-cols-6 gap-6">
    <Teleport
      v-if="isMounted"
      to="#payment"
    >
      <button
        class="bg-green-500 rounded-xl px-4 py-4 text-white whitespace-nowrap font-bold w-full"
        @click="submitForm"
      >
        Оплатить онлайн
      </button>
    </Teleport>
    <div class="col-span-3">
      <Input
        v-model="data.name"
        placeholder="ФИО"
      />
    </div>
    <div class="col-span-3">
      <Input
        v-model="data.phone"
        placeholder="Телефон"
      />
    </div>
    <div class="col-span-3">
      <Input
        v-model="data.email"
        placeholder="E-mail"
      />
    </div>
    <div class="col-span-3">
      <Input
        v-model="data.post"
        placeholder="Почтовый индекс"
      />
    </div>
    <div class="col-span-3">
      <Input
        v-model="data.region"
        placeholder="Регион"
      />
    </div>
    <div class="col-span-3">
      <Input
        v-model="data.city"
        placeholder="Населенный пункт"
      />
    </div>
    <div class="col-span-4">
      <Input
        v-model="data.street"
        placeholder="Улица"
      />
    </div>
    <div class="col-span-1">
      <Input
        v-model="data.house"
        placeholder="Дом"
      />
    </div>
    <div class="col-span-1">
      <Input
        v-model="data.room"
        placeholder="Квартира"
      />
    </div>
    <div class="col-span-6">
      <Textarea
        v-model="data.comment"
        placeholder="Комментарий"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from '@/shared/Input.vue';
import Textarea from '@/shared/Textarea.vue';
import { onMounted, reactive, ref } from 'vue';

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
});

const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
});

function submitForm() {
  console.log(data);
}

</script>

<style scoped></style>