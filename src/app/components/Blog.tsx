import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    
<section className="py-16 px-8 bg-white font-Poppins">
    <h2 className="text-4xl font-medium text-center mb-8">Our Blogs</h2>
    <p className="text-1xl text-center mb-14 text-gray-500">Find a bright ideal to suit your taste with our great selection</p>
    
    <div className="flex justify-center gap-8">
        {/* Blog 1 */}
        <div className="flex flex-col items-center">
            <div className="rounded-lg shadow-md w-80">
                <Image src="/Rectangle 13.png" alt="Blog Image 1" width={350} height={300} className="w-full h-80 object-cover rounded-lg"/>
            </div>
            <div className="mt-4 text-center">
                <h3 className="text-1xl font-medium mb-2">Going all-in with millennial design</h3>
                <Link href="#" className="text-black font-semibold border-b-2 border-black pt-6 py-2 ">
                    Read More
                </Link>
                <div className="text-sm text-black flex items-center justify-center gap-4">
                    {/* Clock Icon and Reading Time */}
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-6a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <br />
                        5 min
                    </span>
                    {/* Calendar Icon and Date */}
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 4h10M3 10h18M4 21h16a2 2 0 002-2V10a2 2 0 00-2-2H4a2 2 0 00-2 2v9a2 2 0 002 2z" />
        
                        </svg>
                        <br />
                        12th Oct 2022
                    </span>
                </div>
            </div>
        </div>

        {/* Blog 2 */}
        <div className="flex flex-col items-center">
            <div className="rounded-lg shadow-md w-80">
                <Image 
                    src="/Rectangle 14.png" alt="Blog Image 2" width={320} height={240} className="w-full h-80 object-cover rounded-lg"/>
            </div>
            <div className="mt-4 text-center">
                <h3 className="text-1xl font-medium mb-2">Going all-in with millennial design</h3>
                <Link href="#" className="text-black font-semibold border-b-2 border-black mb-4 pt-6 py-2">
                    Read More
                </Link>
                <div className="text-sm text-black flex items-center justify-center gap-4">
                    {/* Clock Icon and Reading Time */}
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-6a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <br />
                        5 min
                    </span>
                    {/* Calendar Icon and Date */}
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 4h10M3 10h18M4 21h16a2 2 0 002-2V10a2 2 0 00-2-2H4a2 2 0 00-2 2v9a2 2 0 002 2z" />
                        </svg>
                        <br />
                        12th Oct 2022
                    </span>
                </div>
            </div>
        </div>

        {/* Blog 3 */}
        <div className="flex flex-col items-center">
            <div className="rounded-lg shadow-md w-80">
                <Image 
                    src="/Rectangle 15.png" alt="Blog Image 3" width={320} height={240} className="w-full h-80 object-cover rounded-lg"/>
            </div>
            <div className="mt-4 text-center">
                <h3 className="text-1xl font-medium mb-2">Going all-in with millennial design</h3>
                <Link href="#" className="text-black font-semibold border-b-2 border-black pt-5 py-2 mb-6">
                    Read More
                </Link>
                <div className="text-sm text-black flex items-center justify-center gap-4">
                    {/* Clock Icon and Reading Time */}
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-6a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <br />
                        5 min
                    </span>
                    {/* Calendar Icon and Date */}
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 4h10M3 10h18M4 21h16a2 2 0 002-2V10a2 2 0 00-2-2H4a2 2 0 00-2 2v9a2 2 0 002 2z" />
                        </svg>
                        <br />
                        12th Oct 2022
                    </span>
                </div>
            </div>
        </div>
    </div>

    {/* View All Link */}
    <div className="mt-12 text-center">
        <Link 
            href="/blogs" 
            className="text-lg font-medium text-black border-b-2 border-black pt-6 py-4"
        >
            View All Post
        </Link>
    </div>
</section>
  )
}

export default Blog