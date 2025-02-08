
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { getProject } from '@/sanity/sanity.utils'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/footer'
import TextData from '@/app/components/Textdata'
import QuantitySet from '@/app/components/QuantitySet'
import { addToCart } from '@/app/addtocart/addtocart'



type Props = {
    params: {product: string}
}

const page = async ({ params }: Props) => {
    // const { addToCart } = useCart();
    

    const slug = params.product
    const prod = await getProject(slug)
    // const handleAddToCart = () => {
    //     addToCart({
    //       _id: prod._id,
    //       name: prod.name,
    //       price: prod.price,
    //       image: prod.image,
    //       quantity: 1
    //     });
    //   };
    return (
        <div className='flex flex-col w-full justify-between font-Poppins'>
            <div className=''>
            </div> 
            <div >
              <Navbar />
            </div>
                {/* first line */}
                <div className='flex w-full px-36 flex-row gap-2 py-9 justify-start items-center'>
                    <h1 className='text-lg text-[#9F9F9F] font-normal px-3'>Home</h1>
                    <Image src="/Vector.png" alt='arrow' width={8} height={10} className='mx-2'/>
                    <h1 className='text-lg text-[#9F9F9F] font-normal px-3'>Shop</h1>
                    <Image src="/Vector.png" alt='arrow' width={8} height={10} className='mx-2'/>
                    <Image src="/Line 5.png" height={40} width={2} alt='line5' className='h-8 justify-center ml-5 text-black'/>
                    <h1 className='text-lg ml-8 text-black font-normal'>{prod.name}</h1>
                </div>
    {/* Product details */}
                <div className='flex flex-col w-full p-24 items-center  border-2 justify-between'>
                <div className='flex flex-row sm:gap-32 md:gap-10 gap-2 '>
                    {/* big image */}
                    <div className='h-[500px] w-[423px] rounded-lg flex items-center bg-[#FFF9E5]'>
                        <Image src={prod.image} height={1050} width={1000} alt='outdoor sofa' className='my-2  h-auto w-full justify-center '/>
                    </div>
                    <div className='flex flex-col gap-6 px-10 py-3 items-start'>
                        <h1 className='text-5xl font-normal'>{prod.name}</h1>
                        <h1 className='text-3xl font-medium text-[#9F9F9F]'>Rs. {prod.price}</h1>
                            <div className='flex flex-row'>
                            <span className="text-yellow-400 text-2xl">★★★★★</span>
                            <Image src="/Line 5.png" height={40} width={2} alt='line5' className='h-8 justify-center ml-5 text-black'/>
                            <span className="text-gray-500 text-sm ml-2 py-2 px-3">5 Customer Review</span>
                            </div>
                            <p className='text-wrap w-[424px]'>{prod.description}</p>
                            <div className='flex flex-col gap-2'>
                                <span className='text-[#9F9F9F]'>Size</span>
                                <div className='flex flex-row w-[123px] sm:gap-3 gap-0 h-[60px] justify-between '> 
                                    <div className='bg-[#FBEBB5] sm:h-[30px] h-[30px] sm:w-[30px] w-[30px] text-sm rounded-lg py-1 px-3'>L</div>
                                    <div className='bg-[#FAF4F4] sm:h-[30px] h-[30px] sm:w-[30px] w-[30px] text-sm rounded-lg py-1 px-2'>XL</div>
                                    <div className='bg-[#FAF4F4] sm:h-[30px] h-[30px] sm:w-[30px] w-[30px] text-sm rounded-lg py-1 px-2'>XS</div>
                                </div>
                                <span className='text-[#9F9F9F]'>Color</span>
                                <div className='flex flex-row w-[123px] sm:gap-3 gap-0 h-[60px] justify-between '> 
                                <span className="w-12 h-10 rounded-full cursor-pointer" style={{ backgroundColor: "#816DFA" }}></span>
                                <span className="w-12 h-10 rounded-full cursor-pointer" style={{ backgroundColor: "#000000" }}></span>
                                <span className="w-12 h-10 rounded-full cursor-pointer" style={{ backgroundColor: "#CDBA7B" }}></span>
                                </div>
                            </div>
                            {/* <div className="mb-9 flex items-center space-x-4"> */}
                                {/* <div className="flex items-center border  rounded-xl py-1">
                            <button className="px-3 py-2 text-lg">-</button>
                            <input type="number" className="w-12 h-14 text-center items-center font-medium " value="1" onChange={`${}`} />
                            <button className="px-3 py-2 text-lg">+</button>
                            </div> */}
                            <QuantitySet prod={prod}/>
                          {/* <button className="px-10 py-4 border-black border bg-pink-200 transition-transform hover:scale-95 rounded-xl text-lg font-medium hover:shadow-lg" onClick={() => addToCart(prod)}>
                          Add To Cart
                        </button>
                       </div> */}
                    </div>      
                </div> 
            </div>
            </div>
  )
}

export default page




                    