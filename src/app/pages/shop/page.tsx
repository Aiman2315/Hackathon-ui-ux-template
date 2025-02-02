import React from 'react'
import Image from 'next/image'
import Footer from '@/app/components/footer'
import TextData from '@/app/components/Textdata'
import Navbar from '@/app/components/Navbar'
import Productlist from '@/app/productlist/[id]/page'

const page = () => {
  return (
    <main className='flex flex-col items-center justify-center font-Poppins'>
      {/* hero section */}
      <div className='bg-transparent'>
        <Navbar />
      </div>
      <div className=""/> 
        <div className='flex flex-col w-full h-[320px] justify-center items-center'>
          <Image src="/Rectangle 1 (1).png" height={1000} width={1000} className='w-full h-full'alt='rectangle fixed'/>
          <Image src="/Meubel House_Logos-05.png" height={77} width={77} className='absolute translate-y-[-50px]' alt='logo'/>
          <h1 className='text-5xl font-medium absolute mt-26 px-6'>Shop</h1>
            <div className='flex flex-row justify-between items-center w-[121px] mt-20 absolute py-4 pt-10 px-1'>
              <h2 className='font-medium'>Home</h2>
              <Image src="/Vector.png" height={10} width={8} className='mt-[-2]' alt='arrow'/>
              <h2 className='font-light'>Shop</h2>
            </div>
        </div>
        {/* pink bar */}
        <div className='flex sm:flex-row flex-col items-center mt-16 sm:h-[100px] h-[135px] sm:pt-0 pt-5 w-full bg-[#FAF4F4]'> 
          <div className='flex flex-row sm:ml-80 ml-0 gap-3 justify-center w-[30px] mb-1'>
            <Image src="/system-uicons_filtering.png" height={25} width={25} alt='filter'  className='sm:h-[25px] h-[20px] w-[25px]'/>
            <h2 className='text-xl'>Filter</h2>
            <Image src="/ci_grid-big-round.png" height={25} width={25} alt='grid' className='sm:h-[25px] h-[20px] w-[25px]'/>
            <Image src="/bi_view-list.png" height={25} width={25} alt='viewList' className='sm:h-[25px] h-[25px] w-[25px] text-black'/>
            <Image src="/Line 5.png" height={10} width={25} alt='line5' className='h-10 justify-start ml-5 text-black'/>
          <div className='flex flex-row justify-'>
              <h2 className='text-nowrap sm:text-lg text-sm px-4 mt-1'>Showing 1–16 of 32 results </h2>
          </div>
          </div>
          <div className='flex flex-row justify-center items-center gap-4 ml-20 px-10'>
            <h1 className='lg:translate-x-[500px] sm:translate-x-[100px] font-medium px-4'>Show</h1>
            <div className='bg-main sm:w-[55px] w-[30px] sm:h-[55px] h-[35px] justify-between lg:translate-x-[100px] sm:translate-x-[500px]'>
            <button className="h-[50px] w-[45px] font-Poppins ml-96 mb-3 text-gray-400 bg-white">
               16
            </button>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center gap-4 ml-20'>
            <h1 className='lg:translate-x-[450px] sm:translate-x-[100px] font-medium'>Sort By</h1>
            <div className='bg-main sm:w-[188px] w-[80px] sm:h-[55px] h-[30px] justify-between items-center lg:translate-x-[450px] sm:translate-x-[100px]'>
              <button className="h-[50px] w-[175px] font-Poppins mb-4 text-gray-400 bg-white ">
                Default
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center gap-4 mx-20 w-full bg-main'>
          <div className='flex flex-col items-center justify-center w-[287px] '></div>
        </div>
        <div className='font-Poppins font-medium mt-5'>
        <Productlist/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        
          <div className='flex flex-row sm:w-[400px] w-[200px] sm:gap-3 gap-0 h-[80px] justify-between '> 
            <div className='bg-[#FBEBB5] sm:h-[60px] h-[30px] sm:w-[60px] w-[30px] sm:text-lg text-sm rounded-lg sm:px-6 px-3 sm:py-4 py-2'>1</div>
            <div className='bg-[#FFF9E5] sm:h-[60px] h-[30px] sm:w-[60px] w-[30px] sm:text-lg text-sm rounded-lg sm:px-6 px-3 sm:py-4 py-2'>2</div>
            <div className='bg-[#FFF9E5] sm:h-[60px] h-[30px] sm:w-[60px] w-[30px] sm:text-lg text-sm rounded-lg sm:px-6 px-3 sm:py-4 py-2'>3</div>
            <div className='bg-[#FFF9E5] sm:h-[60px] h-[30px] sm:w-[90px] w-[55px] sm:text-lg text-sm rounded-lg sm:px-6 px-3 sm:py-4 py-2'>Next</div>
          </div>
      <TextData />
    </main>
  )
}

export default page