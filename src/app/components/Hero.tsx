'use client'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState< 'small' | 'medium' | 'large' >('small')

    let windowsWidth : number
    const checkWindowSize = () => {
        if(typeof window !== 'undefined') {
           windowsWidth = window.innerWidth
        }
        if (windowsWidth <= 1024) {
            setIsDesktop('medium')
        }
        else if (windowsWidth >=1024){
                setIsDesktop('large')
        }
        else if(windowsWidth <= 768){
            setIsDesktop('small')            
        }
    }

    useEffect(() => {
      checkWindowSize()
      
    }, [isDesktop])
    
  return (
    <div className='flex justify-center items-center gap-[50px] h-[800px] bg-[#FBEBB5] py-32 px-32'>
      <div className='pt-16 px-6'>
        <h1 className='text-6xl font-medium font-Poppins pt-6'>Rocket single</h1>
        <br />
        <h2 className='text-6xl mb-4 font-Poppins font-medium'>seater</h2>
        <br />
        <span className="text-2xl mt-8 font-Poppins font-medium inline-block cursor-pointer border-b-2 border-black pt-1 py-4">Shop Now</span>
      </div>
      <div>
        <Image src="/Rocket single seater 1.png" alt='' height={600} width={600} className="py-10"/>
      </div>
    </div>
  )
}

export default Hero