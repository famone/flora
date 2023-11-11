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
        CHANGE_AMOUNT(index: number, amount: number) {
            this.cart[index].amount += amount
        },
        DELETE_CART_ITEM(index: number) {
            this.cart.splice(index, 1)
        }
    },
    // persist: {
    //     paths: ['cart']
    // }
})
