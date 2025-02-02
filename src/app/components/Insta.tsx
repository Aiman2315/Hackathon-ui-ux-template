import Image from 'next/image'
import React from 'react'

const Insta = () => {
  return (
    <div>
        <section className="relative w-full h-[450px] font-Poppins">
        {/* Background Image */}
        <Image src="/Group 43.png" alt="insta" layout="fill" objectFit="cover" className="object-cover"/>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000]px-4">
          <h1 className="text-5xl font-extrabold">Our Instagram</h1>
          <p className="opacity-[0.8] max-w-[600px] text-[16px] md:text-[18px] mt-2 text-black">
            Follow our store on Instagram
          </p>
          <button className="mt-7 px-16 py-3 rounded-full shadow-2xl bg-pink-50  text-black font-semibold">
            Follow Us
          </button>
        </div>
      </section>
    </div>
  )
}

export default Insta