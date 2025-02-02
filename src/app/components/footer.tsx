import Link from "next/link"


export default function Footer() {
  return (
    <main className="w-full bg-white py-16 font-Poppins">
      {/* Instagram Section */}
    <footer className="w-full py-2 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Address Column */}
          <div className="text-sm text-[#9F9F9F] mt-20">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-medium mb-4 text-[#9F9F9F]">Links</h3>
            <br />
            <nav className="flex flex-col space-y-3 text-sm font-medium">
              <Link href="#" className="hover:underline">Home</Link>
              <br/>
              <Link href="#" className="hover:underline">Shop</Link>
              <br />
              <Link href="#" className="hover:underline">About</Link>
              <br />
              <Link href="#" className="hover:underline">Contact</Link>
            </nav>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-medium mb-4 text-[#9F9F9F]">Help</h3>
            <br />
            <nav className="flex flex-col space-y-3 text-sm font-medium">
              <Link href="#" className="hover:underline">Payment Options</Link>
              <br />
              <Link href="#" className="hover:underline">Returns</Link>
              <br />
              <Link href="#" className="hover:underline">Privacy Policies</Link>
            </nav>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="font-medium mb-4 text-[#9F9F9F]">Newsletter</h3>
            <br />
            <form className="flex flex-col sm:flex-row lg:flex-col gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-3 py-2 border-b-2 border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors rounded-sm"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-400">
          <p className="text-sm font-medium">2022 Meubel House. All rights reserved</p>
        </div>
      </div>
    </footer>
    </main>
  )
}