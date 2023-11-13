import { ref } from 'vue'
import { useShopStore } from '@/stores/shop'
import { Product } from '@/types/shop'

export function useFilters() {
    const store = useShopStore()
    const selectedFilter = ref<number>(0)

    const changeFilter = (n: number) => {
        selectedFilter.value = n
    }

    const filterProducts = (products: Product[]) => {
        if (store.catalogSelected) {
            let filtered = [...products]
            if (selectedFilter.value === 1) {
                return filtered.sort((a, b) => a.price[store.catalogSelected as keyof typeof a.price] - b.price[store.catalogSelected as keyof typeof b.price]) //по возрастанию
            } else if (selectedFilter.value === 2) {
                return filtered.sort((a, b) => b.price[store.catalogSelected as keyof typeof a.price] - a.price[store.catalogSelected as keyof typeof b.price]) //по убыванию
            } else if (selectedFilter.value === 3) {
                return filtered.filter((i) => i.inStock === 'instock') //по наличию
            } else {
                return products
            }
        } else {
            return products
        }
    }

    return {
        changeFilter,
        selectedFilter,
        filterProducts
    }
}