<template>
    <div>
        <div class="flex justify-start mb-2">
            <div>
                <div
                    class="h-12 w-12 bg-primary_light rounded-full text-primary_2 items-center flex justify-center font-bold text-lg mr-4">
                    СФ
                </div>
            </div>
            <div class="flex justify-between items-center my-3 w-full">
                <p class="text-md font-bold">Северная Флора
                    <CheckBadgeIcon class="h-4 text-blue-500 inline-block" />
                </p>
                <div class="text-gray-500 text-sm flex items-center justify-end gap-2">
                    10 июля 2023 г.
                </div>
            </div>
        </div>
        <div class="ml-6 pl-8 border-l border-gray-300 mb-4">Спасибо большое за ваш отзыв!</div>
    </div>
</template>

<script setup lang="ts">
import { CheckBadgeIcon } from '@heroicons/vue/24/solid'
</script>
