<template>
    <a :href="`https://vk.com/sever.flora?w=wall-38046188_${item.id}`" target="_blank">
        <div class="group cursor-pointer">
            <div class="rounded overflow-hidden relative">
                <img :src="item.image[0]" class="h-[24rem] object-cover w-full group-hover:scale-105 transition-all">
            </div>
            <div class="py-2 h-full">
                <!-- <pre>{{ item }}</pre> -->
                <div class="flex items-center gap-2 mb-2">
                    <div class="bg-gray-200 px-2 py-1 rounded flex items-center text-sm">
                        <HeartIcon class="h-4 mr-1" />{{ item.likes }}
                    </div>
                    <div class="bg-gray-200 px-2 py-1 rounded flex items-center text-sm">
                        <EyeIcon class="h-4 mr-1" />{{ item.views }}
                    </div>
                </div>
                <h4 class="title font-semibold group-hover:text-primary_2">{{ item.descr }}</h4>
            </div>
        </div>
    </a>
</template>
  
<script setup lang="ts">
import { HeartIcon, EyeIcon } from '@heroicons/vue/24/outline'
import { Vkitem } from '@/types/content'

interface Props {
    item: Vkitem
}
const { item } = defineProps<Props>()

</script>

<style scoped>
.title {
    font-size: 14px;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>