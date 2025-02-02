import Image from 'next/image'
import React from 'react'

const Section2 = () => {
  return (
    <div className= 'flex justify-between items-center gap-[90px] h-[600px] bg-[#fff9e5] font-Poppins px-6 '>
         <div>
      <Image src="/Asgaard sofa 1.png" alt='' height={800} width={900} className="px-8 pt-5 "/>
    </div>
    <div className='flex flex-col justify-between items-center mt-16 px-36 py-16'>
      <h1 className='text-2xl font-semibold mb-2'>New Arrivals</h1>
      <h2 className='text-5xl mb-2 font-bold'>Asgaard sofa</h2>
      <br />
      
      <button className='h-12 w-[200px] border-2 border-black mt-4'>Order Now</button>
    </div>
   
  </div>
  )
}

export default Section2