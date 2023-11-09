<template>
    <div class="w-3/4 mb-12" v-for="(item, index) in reviews" :key="index">
        <div class="flex justify-start mb-2">
            <div>
                <div
                    class="h-12 w-12 bg-primary_light rounded-full text-primary_2 items-center flex justify-center font-bold text-lg mr-4">
                    {{ item.user_name[0] }}
                </div>
            </div>
            <div class="flex justify-between items-center my-3 w-full">
                <p class="text-md font-bold">{{ item.user_name }}</p>
                <div class="text-gray-500 text-sm flex items-center justify-end gap-2">
                    {{ formateDate(item.date) }}
                    <div class="flex">
                        <StarIcon class="text-amber-400 h-4 mr-1" v-for="i in 5" :key="i" />
                    </div>
                </div>
            </div>
        </div>
        <div class="ml-16">
            <p class="mb-6">{{ item.comment }}</p>
            <ReplyItem v-if="item.reply.length" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/solid'
import { formateDate } from '@/helpers/dates'
import ReplyItem from './ReplyItem.vue'

const reviews = [
    {
        user_name: 'Ирина',
        date: '2023-07-10 16:22:52',
        user_avatar: 'https://secure.gravatar.com/avatar/27c94b2e00cf32363dd2c3a5a89b336a?s=250&d=retro&r=g',
        comment: 'Зимует даже у нас, в Сибири, очень красивый. Рекомендую.',
        reply: [
            {
                user_name: 'Северная Флора',
                date: '2023-08-10 16:22:52',
                user_avatar: 'https://secure.gravatar.com/avatar/27c94b2e00cf32363dd2c3a5a89b336a?s=250&d=retro&r=g',
                comment: 'Спасибо большое за ваш отзыв!',
            }
        ],
    },
    {
        user_name: 'Константин',
        date: '2023-01-12 16:22:52',
        user_avatar: 'https://secure.gravatar.com/avatar/27c94b2e00cf32363dd2c3a5a89b336a?s=250&d=retro&r=g',
        comment: 'Здравствуйте! Благодарим Вас за такой отличный товар 5 звезд. Спасибо что уделили время и сняли фото и видео товара. Приятно будет посадить. Обязательно затаримся снова в вашем магазине!',
        reply: [],
    }
]
</script>

<style scoped></style>