import { defineStore } from 'pinia'
// import axios from 'axios'
import { CartItem } from '@/types/shop'
// import router from '@/router/index'

interface CartState {
    cart: CartItem[]
}

export const useCartStore = defineStore('cart', {
    state: (): CartState => ({
        cart: []
    }),
    getters: {

    },
    actions: {
        ADD_CART_ITEM(item: CartItem) {
            this.cart.push(item)
        },
        CHANGE_AMOUNT(index: number, val: number) {
            if (this.cart[index].amount === 1 && val === -1) return this.DELETE_CART_ITEM(index)
            this.cart[index].amount += val
        },
        DELETE_CART_ITEM(index: number) {
            this.cart.splice(index, 1)
        },
        CLEAR_ALL_CART() {
            this.cart = []
        }
    },
    persist: {
        paths: ['cart']
    }
})
