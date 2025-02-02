import Footer from '@/app/components/footer'
import Navbar from '@/app/components/Navbar'
import TextData from '@/app/components/Textdata'
import Image from 'next/image'
import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'

const page = () => {
  return (
    <div className='flex flex-col w-full font-Poppins'>
      {/* Hero */}
      <div className='bg-transparent'>
        <Navbar />
      </div>
      <div className='w-full'/> 
        <div className='flex flex-col w-full h-[320px] justify-center items-center'>
          <Image src="/Rectangle 1 (1).png" height={1000} width={1000} className='w-full h-full'alt='rectangle fixed'/>
          <Image src="/Meubel House_Logos-05.png" height={77} width={77} className='absolute translate-y-[-50px]' alt='logo'/>
          <h1 className='text-5xl font-medium absolute mt-26'>Contact</h1>
            <div className='flex flex-row justify-between items-center w-[121px] mt-20 absolute py-3 pt-8 space-x-2 '>

              <h2 className='font-medium'>Home</h2>
              <Image src="/Vector.png" height={10} width={8} className='mt-[-2]' alt='arrow'/>
              <h2 className='font-normal'>Contact</h2>
            </div>
        </div>
        <br />
        <br />
      {/* Contact page */}
      <div className="flex-grow px-4 py-12">
            <div className='w-fill flex flex-col gap-4 justify-center items-center'>
                <h2 className="text-3xl font-semibold">Get In Touch With Us</h2>
                <div className='sm:w-[644px] w-full items-center justify-center'>
                    <p className="text-[#9F9F9F] text-center">
                      For More Information About Our Products And Services, Please Feel Free To Drop Us An Email. Our Staff will Always Be There To Help You Out. Do not Hesitate! </p>
                </div>
            </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5  mt-36">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4 ">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-black text-2xl mb-5" />
                <div>
                  <h3 className="text-lg font-medium">Address</h3>
                  <p className="text-gray-900">
                    236 5th SE Avenue,
                     New York NY10000, 
                     United States
                  </p>
                </div>
              </div>
              <br />
              <br />

              <div className="flex items-center space-x-4">
                <FaPhone className="text-black text-2xl rotate-90 mb-6" />
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-gray-900">Mobile: (+84) 546-6789</p>
                  <p className="text-gray-900">Hotline: (+84) 456-6789</p>
                </div>
              </div>
              <br />
              <br />

              <div className="flex items-center space-x-4">
                <FaClock className="text-black text-2xl mb-11" />
                <div>
                  <h3 className="text-lg font-medium">Working Time</h3>
                  <p className="text-gray-900">Monday-Friday: 9:00 - 22:00</p>
                  <p className="text-gray-900">Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-5">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Abc"
                  className="mt-1 block w-full border rounded-md px-5 py-2 text-[#9F9F9F] border-[#9F9F9F] mb-8 "
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-5">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="ABC@email.com"
                  className="mt-1 block w-full border rounded-md px-5 py-2 text-[#9F9F9F] border-[#9F9F9F] mb-8"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-5">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="This is an Optional"
                  className="mt-1 block w-full border rounded-md px-5 py-2 text-[#9F9F9F] border-[#9F9F9F] mb-8"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-5">Message</label>
                <textarea
                  id="message"
                  placeholder="Hi! I'd like to ask about!"
                  rows={4}
                  className="mt-1 block w-full border rounded-md px-5 py-2 text-[#9F9F9F] border-[#9F9F9F] mb-8"
                />
              </div>
              <br />

              <button
                type="submit"
                className="w-[230px] py-2 bg-transparent text-black font-normal rounded-xl hover:bg-[#9F9F9F] border-2 border-gray-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <TextData />
    </div>
  )
}

export default page