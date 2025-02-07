"use client"
import React from 'react'
import { shopLinks } from '@/app/constant'
import Image from 'next/image'
import Link from 'next/link'
import { getProjects } from '@/sanity/sanity.utils'
import { Product } from '@/types/product-type'
import { addToCart } from '@/app/addtocart/addtocart'
import product from '@/sanity/schemaTypes/product'




const Productlist = async () => {
  const products = await getProjects()

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    addToCart(product)
  }
  return (
    <div className='grid sm:grid-cols-4 grid-cols-2 gap-4 sm:m-0 m-2 justify-items-end'>
      { products.map((prod) => (
        <Link key={prod._id} href={'/product'}>

      <div  className='col-span-1  h-[450px]  gap-2 justify-center items-end rounded-lg shadow-lg text-center'>
        <Image src={prod.image} height={300} width={300} alt='sofa' className=' sm:h-[300px] h-[200px] sm:w-[300px] w-[200px] object-contain' />
        <h2 className='sm:text-lg text-sm font-normal'>{prod.name}</h2>
        <h1 className='sm:text-2xl text-xl mt-3'>{prod.price}</h1>

        <button className='bg-gradient-to-r from-blue-400 to-green-400 text-black font-semibold py-3 px-3 mt-3 rounded-lg shadow-md
        hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out'

        onClick={(e) => handleAddToCart(e, prod)}
        > 
          Add to Cart
      </button>
      </div>
        </Link>
      ))}
      
   
    </div>
  )
}

export default Productlist