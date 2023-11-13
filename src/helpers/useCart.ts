import { ref, nextTick, computed } from 'vue'
import { Product, CartItem } from '@/types/shop'
import { useCartStore } from '@/stores/cart'
import { useShopStore } from '@/stores/shop'

export function useCart() {
    const store = useShopStore()
    const cartStore = useCartStore()
    const inProgress = ref<boolean>(false)

    const productInCart = (id: number): CartItem | null => {
        const inCart = cartStore.cart.find((i) => i.id === id)
        return inCart ? inCart : null
    }
    const deleteCartItem = async (id: number) => {
        inProgress.value = true
        await nextTick() // prevent doubleclick
        let index = cartStore.cart.indexOf(productInCart(id) as CartItem)
        cartStore.DELETE_CART_ITEM(index)
        inProgress.value = false
    }
    const addCartItem = async (product: Product, val: number) => {
        // переписать на промисах, но это не точно
        if (product.inStock === 'outofstock') return
        inProgress.value = true
        await nextTick() // prevent doubleclick
        const payload = { amount: val, ...product } as CartItem
        if (store.catalogSelected === 'rg') {
            payload.package = 20
        }
        inProgress.value = false
        if (product.id !== null) {
            if (!productInCart(product.id)) {
                cartStore.ADD_CART_ITEM(payload)
            } else {
                let index = cartStore.cart.indexOf(productInCart(product.id) as CartItem)
                cartStore.CHANGE_AMOUNT(index, val)
            }
        }
    }
    return {
        inProgress,
        productInCart,
        addCartItem,
        deleteCartItem
    }
}

export function useCartTotals() {
    const store = useShopStore()
    const cartStore = useCartStore()
    const minTotal = 2500

    const productsAmountTotal = computed((): number => {
        let amount = 0 as number
        cartStore.cart.forEach((i) => {
            amount += i.amount
        })
        return amount
    })
    const productsPriceTotal = computed((): number => {
        return cartStore.cart.reduce((a: number, b: CartItem) => {
            return a + b.price[store.catalogSelected as keyof typeof b.price] * b.amount
        }, 0)
    })
    const packagePriceTotal = computed((): number => {
        return cartStore.cart.reduce((a: number, b: CartItem) => {
            if (b.package) {
                return a + b.package * b.amount
            } else {
                return 0
            }
        }, 0)
    })
    const totalPrice = computed(() => {
        return packagePriceTotal.value + productsPriceTotal.value
    })
    const leftToOrder = computed(() => {
        if (totalPrice.value < minTotal) {
            return minTotal - totalPrice.value
        } else {
            return 0
        }
    })
    return {
        productsAmountTotal,
        productsPriceTotal,
        packagePriceTotal,
        totalPrice,
        leftToOrder
    }
}
