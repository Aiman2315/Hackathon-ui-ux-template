import { PortableTextBlock } from "next-sanity"

export type Product = {
    _id: string
    _createdAt: Date
    name: string
    slug: string
    image: string
    price:number
    description: string,
    stockLevel: number
    category: string
    inventory: number
    
};
