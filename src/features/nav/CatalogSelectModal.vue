<template>
    <div class="fixed top-0 left-0 h-full w-full bg-[rgba(0,0,0,.5)] z-20 flex justify-center items-center text-black"
        @click="closeModal">
        <div class="bg-white rounded-lg p-8 max-w-[400px] relative" @click.stop>

            <div @click="closeModal"
                class="h-8 w-8 rounded-full bg-white absolute -right-12 top-0 cursor-pointer flex justify-center items-center">
                <XMarkIcon class="text-gray-500 h-7" />
            </div>

            <h4 class="text-2xl font-bold mb-2">Выберите адрес доставки</h4>
            <p class="text-sm font-semibold text-gray-500 mb-6">Выберите адрес, чтобы видеть актуальные цены и наличие
                товаров в
                интернет-магазине
            </p>
            <div class="space-y-4">
                <div class="rounded p-4 ring-1 ring-gray-300 font-medium transition-all cursor-pointer relative"
                    v-for="(item, index) in  catalogTypes" :key="index" @click="changeCatalog(item.value)"
                    :class="{ 'ring-2 ring-primary_2': catalogSelected === item.value }">
                    <CheckIcon class="text-primary_2 h-4  absolute top-2 right-2" v-if="catalogSelected === item.value" />
                    <p class="mb-1 font-medium flex items-center">
                        <MapPinIcon class="h-4 mr-1" />{{ item.name }}
                    </p>
                    <p class="text-sm">{{ item.descr }}</p>
                    <p class="text-sm text-gray-400">{{ item.location }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MapPinIcon } from '@heroicons/vue/24/outline'
import { useCatalog } from '@/features/nav/model/useCatalog'
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { CatalogSelectedType } from '@/types/shop'
const { catalogTypes } = useCatalog()

const emit = defineEmits(['changeCatalog', 'closeModal'])

interface Props {
    catalogSelected: CatalogSelectedType
}
const { catalogSelected } = defineProps<Props>()

const changeCatalog = (value: CatalogSelectedType) => {
    emit('changeCatalog', value)
}

function closeModal() {
    emit('closeModal')
}

</script>

<style scoped></style>