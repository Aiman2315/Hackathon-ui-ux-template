import Footer from "@/app/components/footer";
import Navbar from "@/app/components/Navbar";
import TextData from "@/app/components/Textdata";
import Image from "next/image";
import Link from "next/link";


const page = () => {
  return (
    <div className='flex flex-col w-full font-Poppins'>
      {/* Hero */}
      <div className="bg-transparent">
        <Navbar />
      </div>
      <div className='w-full'/> 
        <div className='flex flex-col w-full h-[330px] justify-center items-center'>
          <Image src="/Rectangle 1 (1).png" height={1000} width={1000} className='w-full h-full'alt='rectangle fixed'/>
          <Image src="/Meubel House_Logos-05.png" height={77} width={77} className='absolute translate-y-[-50px]' alt='logo'/>
          <h1 className='text-5xl font-medium absolute mt-26'>My Account</h1>

          <div className='flex flex-row justify-between items-center h-screen mt-20 absolute py-3 pt-10 px-3 space-x-2'>
          <h2 className='font-medium'>Home</h2>
          <Image src="/Vector.png" height={10} width={8} className='mt-[-2]' alt='arrow'/>
          <h2 className='font-normal'>My account</h2>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 w-full px-14 mt-5 ">
        <div className="flex flex-col w-[400px] mb-7">
          <h1 className="font-semibold text-4xl py-4 pt-1">Log In</h1>
          <div className="flex flex-col font-medium mt-7 py-4 pt-3 my-3">
            <label htmlFor="">Username or email address</label>
            <input
              className="h-[60px] w-[350px] border-2 my-2 rounded-lg"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col  h-[150px] font-medium pb-6">
            <label htmlFor="">Password</label>
            <input
              className="h-[60px] w-[350px] border-2 my-2 rounded-lg pt-6"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="font-normal mb-2">
            <input className="mr-4 " type="checkbox" name="" id="" />
            <span className="">Remember me</span>
          
          </div>
          <div className="flex gap-6 items-center font-Poppins mt-5">
            <button className="h-[50px] w-[170px] border-2 rounded-xl border-gray-500">
              Log In
            </button>
            <span className="text-1xl font-light">Lost your password?</span>
          </div>
        </div>

        <div className="flex flex-col m-20">
          <h1 className="font-semibold text-4xl">Register</h1>
          <br />
          <div className="flex flex-col my-4 font-medium mb-7 py-2">
            <label htmlFor=""> Email address</label>
            <br />
            <input
              className="h-[60px] w-[350px] border-2 rounded-lg"
              type="text"
              name=""
              id=""
            />
          </div>

          <div className="flex flex-col my-4  text-sm w-[400px] text-gray-600 font-Poppins">
            <span>
              A link to set a new password will be sent to your email address.
            </span>
            <p className="mt-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <b className="text-black">privacy policy.</b>
            </p>
            <br />
          </div>
          <div className="flex flex-col my-4">
            <div className="flex gap-6 items-center">
              <button className="h-[50px] w-[170px] border-2 rounded-xl font-Poppins border-gray-500">
                Register
              </button>
             
            </div>
          </div>
      </div>
        </div>
        <TextData />
    </div>
  );
};

export default page;