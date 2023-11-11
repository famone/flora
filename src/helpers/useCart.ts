import { ref, nextTick } from 'vue'
import { Product, CartItem } from '@/types/shop'
import { useCartStore } from '@/stores/cart'

export function useCart(product: Product) {

    const cartStore = useCartStore()
    const inProgress = ref<boolean>(false)
    const outOfStock = product.inStock === 'instock' ? false : true

    const productInCart = (): CartItem | null => {
        const inCart = cartStore.cart.find((i) => i.id === product?.id)
        return inCart ? inCart : null
    }

    async function addCart(val: number) {
        // переписать на промисах, но это не точно
        if (outOfStock) return
        inProgress.value = true
        await nextTick() // prevent doubleclick
        const payload = { amount: val, ...product } as CartItem
        inProgress.value = false
        if (!productInCart()) {
            cartStore.ADD_CART_ITEM(payload)
        } else {
            let index = cartStore.cart.indexOf(productInCart() as CartItem)
            if (val < 0 && val === -productInCart()?.amount) return cartStore.DELETE_CART_ITEM(index)
            cartStore.CHANGE_AMOUNT(index, val)
        }
    }

    return {
        inProgress,
        outOfStock,
        productInCart,
        addCart
    }
}