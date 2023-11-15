<template>
  <div class="bg-gray-100 rounded-xl overflow-hidden relative">
    <img
      src="https://static.vecteezy.com/system/resources/previews/011/572/123/original/sale-tag-promotion-3d-icon-illustration-free-png.png"
      class="h-20 absolute right-10 -top-4" />
    <div class="relative p-4 cursor-pointer" @click="collapsed = !collapsed">
      <p class="font-bold text-lg flex items-center">
        <TicketIcon class="h-6 mr-2" />
        Промокод или сертификат
      </p>
      <ChevronDownIcon class="h-5 text-gray-500 absolute top-1/2 right-4 -translate-y-1/2 transition-all"
        :class="{ 'rotate-180': !collapsed }" />
    </div>
    <div class="px-4 transition-all overflow-hidden" :class="collapsed ? 'h-0' : 'h-auto py-4'">
      <Input placeholder="Введите промокод" v-model="promocode" light class="mb-2" />
      <button
        class="bg-primary transition-all rounded-lg px-4 py-4 text-white whitespace-nowrap font-bold w-full text-sm hover:bg-primary_2">
        Применить
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from "@/shared/Input.vue";
import { TicketIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

const collapsed = ref(true);
const promocode = ref("");
</script>

<style scoped></style>