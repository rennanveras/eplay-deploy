declare interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

declare type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

declare type Product = {
  id: number
  price: number
}

declare type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

declare type PurchaseResponse = {
  orderId: string
}
