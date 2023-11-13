import { defineStore } from 'pinia'
import axios from 'axios'
import { Category, CatalogSelectedType, Product } from '@/types/shop'
import router from '@/router/index'
import { useCartStore } from './cart'

interface GoodsState {
    catalogSelected: CatalogSelectedType
    cats: Category[],
    popular: Product[]
    subcat: Product[]
    singleSubcat: {
        title: string
        slug: string
        items: Product[]
    } | null
}

export const useShopStore = defineStore('shop', {
    state: (): GoodsState => ({
        catalogSelected: null,
        cats: [],
        popular: [],
        subcat: [],
        singleSubcat: null
    }),
    getters: {
        // getSingleGood: (state) => (id: string) => {
        //     return state.goods.find(i  => i.slug === id)
        // },
        // getTotal(state){
        //     const lang = useLangStore().lang
        //     let total = 0
        //     if(!state.cart.length) return 0
        //     state.cart.forEach((item) => {
        //         if(item.price !== null){
        //             const answer = item.price[lang as keyof typeof item.price];
        //             total += answer * item.quantity
        //         }
        //     })
        //     return total
        // }
    },
    actions: {
        async LOAD_CATS() {
            try {
                const { data } = await axios.get<Category[]>('https://sflora.ru/wp-json/sf/v1/get/categories')
                this.cats = data
            } catch {
                router.replace('/404')
            }
        },
        async LOAD_SUBCAT(category: string) {
            this.subcat = []
            try {
                const { data }: any = await axios.get(`https://sflora.ru/wp-json/sf/v1/get/category/${category}`)
                this.subcat = data.items
            } catch {
                router.replace('/404')
            }
        },
        async LOAD_SUBCAT_SINGLE(category: string) {
            this.singleSubcat = null
            try {
                const { data }: any = await axios.get(`https://sflora.ru/wp-json/sf/v1/get/category/${category}`)
                this.singleSubcat = {
                    title: data.category.name,
                    slug: data.category.slug,
                    items: data.items
                }
            } catch {
                router.replace('/404')
            }
        },
        async LOAD_POPULAR() {
            try {
                const { data }: any = await axios.get('https://sflora.ru/wp-json/sf/v1/get/popular/product')
                this.popular = data.items
            } catch {
                router.replace('/404')
            }
        },
        async LOAD_PRODUCT(id: string) {
            try {
                const { data }: any = await axios.get(`https://sflora.ru/wp-json/sf/v1/get/product/${id}`)
                // console.log(data.data)
                return data.data
            } catch {
                router.replace('/404')
            }
        },
        CHANGE_CATALOG(val: CatalogSelectedType) {
            this.catalogSelected = val
            useCartStore().CLEAR_ALL_CART()
        }
    },
    persist: {
        paths: ['catalogSelected']
    }
})
