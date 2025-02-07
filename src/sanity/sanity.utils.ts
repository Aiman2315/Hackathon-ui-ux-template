import { createClient, groq } from "next-sanity";
import { client } from "./lib/client";
import { Product } from "@/types/product-type";
import config from '@/sanity/config/client-config'

export async function getProjects(): Promise<Product[]>{
    return createClient(config).fetch(
        groq`*[ _type == 'product']{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            price,
            description,
            stockLevel,
        }`
    )
}

