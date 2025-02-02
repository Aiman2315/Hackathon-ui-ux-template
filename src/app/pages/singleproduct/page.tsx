'use client'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import React, { useState } from 'react'
const page = () => {

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
                <h1 className='text-lg ml-8 text-black font-normal'>Asgaard Sofa</h1>
            </div>
            {/* Product details */}
            <div className='felx flex-row w-full p-24 items-center  border-2 justify-between'>
                
                <div className='flex flex-row sm:gap-32 md:gap-10 gap-2 '>
                    {/* side images */}
                    <div className='flex flex-col gap-10 p-8 '>
                        <div className='flex flex-wrap flex-col h-[80px] w-[76px] rounded-lg bg-[#FFF9E5] items-center justify-center'>
                            <Image src="/Outdoor sofa set 1.png" height={100} width={100} alt='outdoor sofa' className='mb-2 mr-1  h-auto w-auto justify-center '/>
                        </div>
                        <div className='flex flex-wrap flex-col gap-3 h-[80px] w-[76px] rounded-lg bg-[#FFF9E5] items-center justify-center'>
                            <Image src="/Outdoor sofa set_2 1.png" height={100} width={100} alt='outdoor sofa' className='mb-2 mr-1  h-auto w-auto justify-center '/>
                        </div>
                        <div className='flex flex-wrap flex-col gap-3 h-[80px] w-[76px] rounded-lg bg-[#FFF9E5] items-center justify-center'>
                            <Image src="/Stuart sofa 1.png" height={100} width={100} alt='outdoor sofa' className='mb-2 mr-1  h-auto w-auto justify-center '/>
                        </div>
                        <div className='flex flex-wrap flex-col gap-3 h-[80px] w-[76px] rounded-lg bg-[#FFF9E5] items-center justify-center'>
                            <Image src="/Maya sofa three seater (1) 1.png" height={100} width={100} alt='outdoor sofa' className='mb-2 mr-1  h-auto w-auto justify-center '/>
                        </div>
                    </div>
                    {/* big image */}
                    <div className='h-[500px] w-[423px] rounded-lg flex items-center bg-[#FFF9E5]'>
                        <Image src="/Asgaard sofa 1.png" height={1050} width={1000} alt='outdoor sofa' className='my-2  h-auto w-full justify-center '/>
                    </div>
                    <div className='flex flex-col gap-6 px-10 py-3 items-start'>
                        <h1 className='text-5xl font-normal'>Asgaard Sofa</h1>
                        <h1 className='text-3xl font-medium text-[#9F9F9F]'>Rs. 250,000.00</h1>
                            <div className='flex flex-row'>
                            <span className="text-yellow-400 text-2xl">★★★★★</span>
                            <Image src="/Line 5.png" height={40} width={2} alt='line5' className='h-8 justify-center ml-5 text-black'/>
                            <span className="text-gray-500 text-sm ml-2 py-2 px-3">5 Customer Review</span>
                            </div>
                            <p className='text-wrap w-[424px]'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
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
                            <div className="mb-9 flex items-center space-x-4">
                            <div className="flex items-center border  rounded-xl py-1">
                           <button className="px-3 py-2 text-lg">-</button>
                          <input type="number" className="w-12 h-14 text-center items-center font-medium " value="1" />
                          <button className="px-3 py-2 text-lg">+</button>
                          </div>
                          <button className="px-10 py-4 border-black border rounded-xl text-lg font-medium">
                          Add To Cart
                        </button>
                       </div>
                    </div>      
                </div>
                <div className="text-gray-400 justify text-center items-start space-x-11">
                <p>SKU <span className="text-gray-400 font-medium px-5">: SS001</span></p>
                <br />
                 <p>Category <span className="text-gray-400 font-medium px-5 ">: Sofas</span></p>
                 <br />
                 <p className=''>Tags <span className="text-gray-400 font-medium px-5">: Sofa, Chair, Home, Shop</span></p>
                </div>
            </div>
            <div>
                <div className="flex justify-center space-x-16 pb-9 pt-14 text-2xl">
        <span className="text-black font-normal pb-2">Description</span>
        <span className="text-gray-400 cursor-pointer">Additional Information</span>
        <span className="text-gray-400 cursor-pointer">Reviews [5]</span>
      </div>

      {/* Description Text */}
      <div className="text-gray-400 justify-between px-52">
        <p>
          Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active 
          stereo speaker takes the unmistakable look and sound of Marshall, unplugs the 
          chords, and takes the show on the road.
        </p>
        <p className="mt-4">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled 
          engineering. Setting the bar as one of the loudest speakers in its class, the 
          Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts 
          a clear midrange and extended highs for a sound that is both articulate and 
          pronounced. The analogue knobs allow you to fine tune the controls to your 
          personal preferences while the guitar-influenced leather strap enables easy and 
          stylish travel.
        </p>
      </div>

      {/* Images Section */}
      <div className="mt-9 grid md:grid-cols-2 gap-6 px-28">
        <div className="bg-[#FFF9E5] rounded-lg">
          <Image src="/Cloud sofa three seater + ottoman_2 1.png" alt="Sofa 1" width={1000} height={1000} className="w-full h-auto" />
        </div>
        <div className="bg-[#FFF9E5] rounded-lg">
          <Image src="/Cloud sofa three seater + ottoman_1 1.png" alt="Sofa 2" width={1000} height={1000} className="w-full h-auto " />
        </div>
      </div>
      <div className="flex justify-center border-b pb-16"></div>

      <main className='flex flex-col justify-between w-full sm:h-screen h-[1600px] bg-[#FFFFFF]'>
              <div className='flex flex-col justify-center items-center w-full h-[200px] '>
                  <h1 className='text-4xl font-medium font-Poppins mt-14'>Related Products</h1><br />
              </div>
              <div className='flex sm:flex-row flex-col justify-center sm:pt-8 pt-0 items-center gap-3 w-full h-[500px] font-Poppins space-x-16'>
                  <div className='flex flex-col justify-center items-center w-[300px] h-[400px]'>
                      <Image src="/Trenton modular sofa_3 1.png" width={1000} height={1000} alt='sofa' className='sm:h-[400px] h-[200px] sm:w-[400px] w-[200px]'/>
                      <h1 className='font-normal max-w-52'>Trenton Modular Sofa_3</h1>
                      <h1 className='sm:text-1xl text-xl font-medium mt-6'>RS. 25,000.00</h1>
                  </div>            
                  <div className='flex flex-col justify-center items-center w-[300px] h-[400px] px-2'>
                      <Image src="/Granite dining table with dining chair 1.png" width={1000} height={1000} alt='sofa' className='sm:h-[400px] h-[200px] sm:w-[400px] w-[200px]'/>
                      <h1 className='font-normal max-w-52 '>Granite Dining table with dining chair</h1>
                      <h1 className='sm:text-1xl text-xl font-medium mt-6'>RS. 25,000.00</h1>
                  </div>
                  <div className='flex flex-col justify-center items-center w-[300px] h-[400px]'>
                      <Image src="/Outdoor bar table and stool 1.png" width={1000} height={1000} alt='sofa' className='sm:h-[400px] h-[200px] sm:w-[400px] w-[200px]'/>
                      <h1 className='font-normal max-w-44'>Outdoor bar table and stool</h1>
                      <h1 className='sm:text-1xl text-xl font-medium mt-6'>RS. 25,000.00</h1>
                  </div>
                  <div className='flex flex-col justify-center items-center w-[300px] h-[400px]'>
                      <Image src="/Plain console with teak mirror 1.png" width={1000} height={1000} alt='sofa' className='sm:h-[400px] h-[200px] sm:w-[400px] w-[200px]'/>
                      <h1 className='font-normal max-w-44'>Plain console with teak mirror</h1>
                      <h1 className='sm:text-1xl text-xl font-medium mt-6'>RS. 25,000.00</h1>
                  </div>
              </div>
              <div className='flex flex-col justify-center sm:mt-0 mt-32 items-center w-full h-[200px] '>
                  <h1 className='sm:text-1xl text-xl font-medium border-b-2 border-black pt-3 py-4'>View More</h1>
                  <br />
              </div>
          </main>
           </div>
           </div>
  )
}

export default page



