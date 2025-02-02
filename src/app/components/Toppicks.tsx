import Image from 'next/image'
import React from 'react'

const Toppicks = () => {
  return (
    <main className='flex flex-col justify-between w-full sm:h-screen h-[1600px] bg-[#FFFFFF]'>
        <div className='flex flex-col justify-center items-center w-full h-[200px] '>
            <h1 className='text-4xl font-medium font-Poppins'>Top Picks for you</h1><br />
            <p className='text-[#9F9F9F] font-Poppins'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>
        <div className='flex sm:flex-row flex-col justify-center sm:pt-8 pt-0 items-center gap-3 w-full h-[500px] font-Poppins space-x-16'>
            <div className='flex flex-col justify-center items-center w-[300px] h-[400px]'>
                <Image src="/Trenton modular sofa_3 1.png" width={1000} height={1000} alt='sofa' className='sm:h-[400px] h-[200px] sm:w-[400px] w-[200px]'/>
                <h1 className='font-normal max-w-52'>Trenton Modular Sofa_3</h1>
                <h1 className='sm:text-1xl text-xl font-medium mt-6'>RS. 25,000.00</h1>
            </div>            
            <div className='flex flex-col justify-center items-center w-[300px] h-[400px] py-5'>
                <Image src="/Granite dining table with dining chair 1.png" width={1000} height={1000} alt='sofa' className='sm:h-[400px] h-[200px] sm:w-[400px] w-[200px]'/>
                
        
                <h1 className='font-normal max-w-52'>Granite Dining table with dining chair</h1>
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
            <h1 className='sm:text-1xl text-xl font-semibold border-b-2 border-black pt-5 py-4'>View More</h1>
            <br />
        </div>
    </main>
  )
}

export default Toppicks