export interface Category {
    id: number
    name: string
    slug: string
    description: string
    url: string
    img: string
    count: number
    child?: Subcategory[] | []
}

export interface Subcategory {
    id: number
    name: string
    slug: string
    description: string
    url: string
    img: string
    count: number
}

export interface Product {
    id: number | null
    name: string
    slug: string
    picture: string
    url: string
    price: { sl: number, rg: number }
    quantity: { sl: number, rg: number }
    container?: { sl: string, rg: string }
    sku?: string
    category?: object
    parentCategory?: object
    visability?: string
    gallery?: string[]
    labels?: string[]
    description?: string
    inStock?: string
    spec?: object
}

export interface CartItem extends Product {
    amount: any
}

export interface CatalogType {
    name: string
    value: CatalogSelectedType
    descr: string
    location: string
}
export type CatalogSelectedType = null | 'sl' | 'rg'