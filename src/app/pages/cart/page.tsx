import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import TextData from '@/app/components/Textdata'


const page = () => {
  return (
    <div className='flex flex-col  w-full justify-between font-Poppins'>
      {/* Hero */}
      <div className="bg-transparent">
        <Navbar />
      </div>
        <div className='w-full'/> 
          <div className='flex flex-col w-full h-[320px] justify-center items-center'>
            <Image src="/Rectangle 1 (1).png" height={1000} width={1000} className='w-full h-full'alt='rectangle fixed'/>
            <Image src="/Meubel House_Logos-05.png" height={77} width={77} className='absolute translate-y-[-50px]' alt='logo'/>
          <h1 className='text-5xl font-medium absolute mt-26 px-6'>Cart</h1>
          <div className='flex flex-row justify-between items-center w-[121px] mt-20 absolute py-4 pt-10 px-1'>
    
              <h2 className='font-medium'>Home</h2>
              <Image src="/Vector.png" height={10} width={8} className='mt-[-2]' alt='arrow'/>
              <h2 className='font-normal'>Cart</h2>
          </div>
        </div>
        {/* form */}
        <div className='flex contain-layout sm:flex-row flex-col w-full h-[525px] justify-between  items-center gap-3 p-44 mb-32'>
          <div className='flex flex-row sm:flex-row justify-between items-center'>
            <div className='sm:w-[817px] w-[350px] h-[216px] translate-y-[-100px] flex flex-col '>
              <div className='w-full h-[55px] bg-[#FFF9E5] p-4 font-medium justify-center items-center flex flex-row sm:gap-16 gap-7'>
                <h1>Product</h1>
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>Subtotal</h1>
              </div>
              <div className='w-full h-[55px] bg-main p-4 flex flex-row sm:gap-16 gap-10'>
                <Image src="/Asgaard sofa 1.png" height={60} width={150} alt='asgaard' className='bg-[#FBEBB5] rounded-md sm:h-[106px] h-[50px] sm:w-[106px] w-[50px]'/>
                <div className='flex flex-row justify-start pt-16 items-end sm:gap-10 gap-5'>
                  <h1 className='text-[#9F9F9F] sm:text-base text-sm'>Asgaard Sofa</h1>
                  <h1 className='text-[#9F9F9F] sm:text-base text-sm'>250,000.00</h1>
                  <div className='border-2 sm:h-[32px] h-[26px] sm:w-[32px] w-[26px] sm:text-base text-center rounded-lg text-black px-2 translate-y-1'>1</div>
                  <h1 className='text-black sm:text-base text-sm font-normal'>Rs. 250,000.00</h1>
                  <Image src="/Delete.png" height={20} width={20} alt='delete' className='sm:mt-1 mt-0 pt-5'/>
                </div>

              </div>
            </div>
          </div>
          {/* 2nd div */}
          <div className='sm:h-[390px] h-[359px] sm:w-[393px] w-[300px] bg-[#FFF9E5] rounded-lg flex flex-col mb-6 sm:gap-8 gap-2 justify-center items-center py-7'>
            <h1 className='sm:text-4xl text-2xl font-semibold mb-14'>Cart Totals</h1>
            <div className='flex flex-row justify-center items-start w-full p-3 gap-16'>
              <h1 className='font-medium sm:text-lg text-sm'>Subtotal</h1>
              <h1 className='font-medium sm:text-lg text-sm text-[#9F9F9F]'>RS. 250,000.00</h1>
            </div>
            <div className='flex flex-row justify-center items-start w-full p-3 gap-16 '>
              <h1 className='font-medium  text-lg'>Total</h1>
              <h1 className='font-medium text-2xl text-[#B88E2F]'>RS. 250,000.00</h1>
            </div>
              <Link href={'/checkout'}><Button className='bg-transparent hover:bg-transparent text-black sm:w-[222px] w-[150px] sm:h-[59px] h-[40px] border-2 border-black rounded-2xl sm:text-xl text-base font-normal'>Check Out</Button></Link>
          </div>
        </div>  
        <TextData />    
    </div>
  )
}

export default page