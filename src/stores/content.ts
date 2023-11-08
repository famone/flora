import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router/index'
import { Heroslide, Vkitem } from '@/types/content'

interface ContState {
    news: Heroslide[],
    vk_news: Vkitem[]
}

export const useContentStore = defineStore('content', {
    state: (): ContState => ({
        news: [],
        vk_news: []
    }),
    getters: {
    },
    actions: {
        async LOAD_NEWS() {
            try {
                const { data }: any = await axios.get('https://sflora.ru/wp-json/sf/v1/get/news')
                this.news = data.data
            } catch {
                router.replace('/404')
            }
        },
        async LOAD_VK() {
            try {
                const { data } = await axios.get<Vkitem[]>('https://sflora.ru/wp-json/sf/v1/get/vknews?count=10')
                this.vk_news = data
            } catch {
                router.replace('/404')
            }
        },
    }
})
