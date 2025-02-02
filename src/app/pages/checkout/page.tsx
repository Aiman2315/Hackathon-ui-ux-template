import Image from 'next/image'
import React, { useState } from 'react'
import Footer from '@/app/components/footer'
import Navbar from '@/app/components/Navbar'
import TextData from '@/app/components/Textdata'

const page = () => {
  return (
    <div className='flex flex-col w-full justify-between font-Poppins'>
      {/* Hero */}
      <div className='bg-transparent'>
        <Navbar />
      </div>
        <div className='w-full'/> 
          <div className='flex flex-col w-full h-[320px] justify-center items-center'>
            <Image src="/Rectangle 1 (1).png" height={1000} width={1000} className='w-full h-full'alt='rectangle fixed'/>
            <Image src="/Meubel House_Logos-05.png" height={77} width={77} className='absolute translate-y-[-50px]' alt='logo'/>
          <h1 className='text-5xl font-medium absolute mt-26'>Checkout</h1>
          <div className='flex flex-row justify-between items-center w-[121px] mt-20 absolute py-3 pt-8 space-x-2'>
              <h2 className='font-medium'>Home</h2>
              <Image src="/Vector.png" height={10} width={8} className='mt-[-2]' alt='arrow'/>
              <h2 className='font-normal'>Checkout</h2>
          </div>
        </div>
         {/* form */}
      <div className='flex flex-row w-full justify-between gap-2 p-10 '>

<div className='flex flex-row w-[45%]  p-4 justify-center items-start '>
  <div className='flex flex-col w-[45%] gap-10 mt-10'>
    <h1 className='text-4xl font-semibold pt-5'>Billing details</h1>
    <div className="space-y-6">
    
    <form className=" space-y-16 mt-2 ">
      <div className='flex flex-row gap-5'>
        <div className='flex flex-col'>
          <label htmlFor="name" className="block text-xl font-normal text-black">First Name</label><br />
          <input
            id="name"
            type="text"
            placeholder=""
            className="mt-1 block w-[218px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="name" className="block text-xl font-normal text-black">Last Name</label><br />
              <input
                id="name"
                type="text"
                placeholder=""
                className="mt-1 block w-[218px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
              />
            </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-xl font-normal text-black">Company Name (Optional)</label><br />
          <input
            id="email"
            type="email"
            placeholder=""
            className="mt-1 block w-[453px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
            />
        </div>

        <div>
          <label htmlFor="subject" className="block text-xl font-normal text-black">Country / Region</label><br />
          <select name="countries" id="country" className='w-[453px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]'>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="USA">USA</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="France">France</option>
            <option value="Spain">Spain</option>                                    
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xl font-normal text-black">Street address</label><br />
          <input
            id="subject"
            type="text"
            placeholder=""
            className="mt-1 block w-[453px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-xl font-normal text-black">Town / City</label><br />
          <input
            id="subject"
            type="text"
            placeholder=""
            className="mt-1 block w-[453px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
            />
        </div>
        <div>
          <label htmlFor="message" className="block text-xl font-normal text-black">Privonce</label><br />
          <input
            id="subject"
            type="text"
            placeholder=""
            className="mt-1 block w-[453px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
            />
        </div>
        <div>
          <label htmlFor="message" className="block text-xl font-normal text-black">Zip code</label><br />
          <input
            id="subject"
            type="text"
            placeholder=""
            className="mt-1 block w-[453px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-xl font-normal text-black">Phone</label><br />
          <input
            id="subject"
            type="text"
            placeholder=""
            className="mt-1 block w-[453px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
          />
        </div>  <div>
          <label htmlFor="message" className="block text-xl font-normal text-black">Email</label><br />
          <input
            id="subject"
            type="text"
            placeholder=""
            className="mt-1 block w-[453px] h-[75px] border rounded-lg px-3 py-2 text-[#9F9F9F] border-[#9F9F9F]"
            />
        </div>

       
    </form>
  </div>
  {/* form end */}
  </div>
</div>
  <div className='flex flex-col w-[45%] h-full p-4 top-0 justify-self-end gap-5 items-center mt-20'>
    <div className='flex flex-row w-full justify-between items-center'>
      <div className='flex flex-col p-4 gap-8 justify-between items-start '>
        <h1 className='text-3xl font-medium'>Product</h1>
        <div className='flex flex-row justify-between gap-3 items-center'>
          <h1 className='text-[#9F9F9F] font-medium'>Asgaard Sofa</h1>
          <h1 className=' text-xl'>x</h1>
          <h1 className=' text-xl'>1</h1>
        </div>
        <h1 className='text-black font-normal text-xl'>Subtotal</h1>
        <h1 className='text-black font-normal text-xl'>Total</h1>
      </div>
      <div className='flex flex-col p-4 gap-8 justify-between items-end px-12'>
        <h1 className='text-3xl font-medium'>Subtotal</h1>
        <div className='flex flex-row justify-between gap-3 items-center'>
          <h1 className='text-[black font-normal text-xl'>RS. 250,000.00</h1>
        </div>
        <h1 className='text-black font-normal text-xl'>RS. 250,000.00</h1>
        <h1 className='text-[#B88E2F] font-bold text-3xl'>RS. 250,000.00</h1>
      </div>
    </div>
    <div className='flex flex-col w-full'>
      <div className="flex items-center space-x-2 px-5">

      <input type="radio" name="payment"></input>
        <label className=''>Direct Bank Transfer</label>
      </div>
        <p className='px-8 text-[#9F9F9F] mt-4 pb-5'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
      
      <div className=" space-x-2 px-5">
      <input type="radio" name="payment" ></input>
      <label className='text-gray-700'>Direct Bank Transfer</label>
      </div>

      <div className="flex items-center space-x-2 mb-2 mt-2 px-5">

      <input type="radio" name="payment"></input>
        <label className='text-gray-700'>Cash on Delivery</label>
      </div> 
    

    </div>  
    <div className='text-left font-light px-5'>
      <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b className='font-semibold'>privacy policy.</b></p>
    </div>     
    <button
          type="submit"
          className="w-[318px] h-[64px] py-2 bg-transparent mt-5 text-black font-normal text-xl rounded-xl hover:bg-transparent border-2 border-gray-500"
        >
          Place order
        </button>     
     </div>
     </div>
    <TextData />
   </div>
  )
}
export default page

