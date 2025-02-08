
import Footer from "@/app/components/footer"
import Navbar from "@/app/components/Navbar"
import TextData from "@/app/components/Textdata"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { FaUser, FaCalendarAlt, FaTag } from 'react-icons/fa';


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
            <h1 className='text-5xl font-medium absolute mt-26'>Blog</h1>
            <div className='flex flex-row justify-between items-center w-[121px] mt-20 absolute py-3 pt-8 space-x-2'>
                <h2 className='font-medium'>Home</h2>
                <Image src="/Vector.png" height={10} width={8} className='mt-[-2]' alt='arrow'/>
                <h2 className='font-normal'>Blog</h2>
                </div>
               </div>
               <div className="max-w-screen-lg mx-auto mt-20 py-5 space-x-4">
      {/* Main Content */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left Section (Image) */}
        <div className="col-span-2">
          <Image 
            src="/pexels-mikhail-nilov-6894103.jpg" 
            alt="Laptop on wooden table" 
            width={800} 
            height={400} 
            className="rounded-lg"
          />
          <div className="flex items-center text-gray-500 text-sm mt-4 space-x-7">
            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-600" size={20} />
              <span>Admin</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-gray-600" size={20} />
              <span>14 Oct 2022</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaTag className="text-gray-600" size={20} />
              <span>Wood</span>
            </div>
          </div>
          <h2 className="text-3xl font-medium mt-5">Going all-in with millennial design</h2>
          <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla lacinia magna, a condimentum arcu fringilla quis. Curabitur ipsum lectus, placerat sed ultrices eget, rutrum sed urna. Donec ut tortor feugiat, lobortis orci eget, finibus purus. Vivamus sed ante orci. Vivamus et vestibulum justo. Etiam venenatis tortor sed dolor tristique, nec facilisis tellus gravida. Vivamus rutrum sollicitudin magna. Suspendisse pharetra auctor massa a facilisis.
          </p>
          <a href="#" className="text-black mt-4 inline-block border-b-2 border-black py-2">Read more</a>
        </div>
        {/* Right Sidebar */}
        <div>
          <div className="mb-10 py-10 ">
            <h3 className="text-2xl font-semibold px-28 pb-6">Categories</h3>
            <ul className="space-y-8 text-gray-400 px-28 mt-5">
              <li>Crafts</li>
              <li>Design</li>
              <li>Handmade</li>
              <li>Interior</li>
              <li>Wood</li>
            </ul>
          </div>
        </div>
        <div className="col-span-2">
          <Image 
            src="/pexels-karolina-grabowska-5387236.jpg" 
            alt="" 
            width={800} 
            height={400} 
            className="rounded-lg"
          />
          <div className="flex items-center text-gray-500 text-sm mt-4 space-x-7">
            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-600" size={20} />
              <span>Admin</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-gray-600" size={20} />
              <span>14 Oct 2022</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaTag className="text-gray-600" size={20} />
              <span>Handmade</span>
            </div>
          </div>
          <h2 className="text-3xl font-medium mt-5">Exploring new ways of decorating</h2>
          <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla lacinia magna, a condimentum arcu fringilla quis. Curabitur ipsum lectus, placerat sed ultrices eget, rutrum sed urna. Donec ut tortor feugiat, lobortis orci eget, finibus purus. Vivamus sed ante orci. Vivamus et vestibulum justo. Etiam venenatis tortor sed dolor tristique, nec facilisis tellus gravida. Vivamus rutrum sollicitudin magna. Suspendisse pharetra auctor massa a facilisis.
          </p>
          <a href="#" className="text-black mt-4 inline-block border-b-2 border-black py-2">Read more</a>
        </div>
        <div className="col-span-2">
          <Image 
            src="/pexels-cottonbro-4065876.jpg" 
            alt="" 
            width={800} 
            height={400} 
            className="rounded-lg"
          />
          <div className="flex items-center text-gray-500 text-sm mt-4 space-x-7">
            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-600" size={20} />
              <span>Admin</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-gray-600" size={20} />
              <span>14 Oct 2022</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaTag className="text-gray-600" size={20} />
              <span>Wood</span>
            </div>
          </div>
          <h2 className="text-3xl font-medium mt-5">Handmade pieces that took time to make</h2>
          <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla lacinia magna, a condimentum arcu fringilla quis. Curabitur ipsum lectus, placerat sed ultrices eget, rutrum sed urna. Donec ut tortor feugiat, lobortis orci eget, finibus purus. Vivamus sed ante orci. Vivamus et vestibulum justo. Etiam venenatis tortor sed dolor tristique, nec facilisis tellus gravida. Vivamus rutrum sollicitudin magna. Suspendisse pharetra auctor massa a facilisis.
          </p>
          <a href="#" className="text-black mt-4 inline-block border-b-2 border-black py-2">Read more</a>
        </div>
        </div>
        <br />
        <div className='flex flex-row sm:w-[400px] w-[200px] sm:gap-3 gap-0 h-[80px] justify-between items-center px-4 '> 
            <div className='bg-[#FBEBB5] sm:h-[60px] h-[30px] sm:w-[60px] w-[30px] sm:text-lg text-sm rounded-lg sm:px-6 px-3 sm:py-4 py-2'>1</div>
            <div className='bg-[#FFF9E5] sm:h-[60px] h-[30px] sm:w-[60px] w-[30px] sm:text-lg text-sm rounded-lg sm:px-6 px-3 sm:py-4 py-2'>2</div>
            <div className='bg-[#FFF9E5] sm:h-[60px] h-[30px] sm:w-[60px] w-[30px] sm:text-lg text-sm rounded-lg sm:px-6 px-3 sm:py-4 py-2'>3</div>
            <div className='bg-[#FFF9E5] sm:h-[60px] h-[30px] sm:w-[90px] w-[55px] sm:text-lg text-sm rounded-lg sm:px-6 px-3 sm:py-4 py-2'>Next</div>
          </div>
        </div>
        <TextData />
      </div>
    )
  }
export default page