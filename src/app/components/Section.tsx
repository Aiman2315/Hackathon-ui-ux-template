import Image from "next/image";
import react from "react";



export default function Section() {
  return (
    <div className="bg-pink-50 py-4">
        <div className="flex justify-center items-center py-9">
          {/* Product 1 */}
          <div className="text-align: right-9">
            <Image src="/Granite square side table 1.png" alt="Side Table" className="mx-auto mb-4" width="600" height="600"/>
            <h3 className="text-4xl font-medium mb-4 mt-[-50px] font-Poppins px-5">Side table</h3>
            <br />
            <a href="#" className="underline border-black mt-1 pt-5 py-3 font-medium text-2xl font-Poppins px-5">
              View More
            </a>
          </div>
          {/* Product 2 */}
          <div className="text-align: left-6 py-5 px-7">
            <Image src="/Cloud sofa three seater + ottoman_3 1.png" alt="Side Table" className="mx-auto mb-4" width="600" height="600"/>
            <h3 className="text-4xl font-medium mb-4 mt-[-50px] px-24 top-5 font-Poppins">Side table</h3>
            <br />
            <a href="#" className="font-medium text-2xl px-24 py-3 font-Poppins underline  border-black ">
              View More
            </a>
          </div>
        </div>
      </div>
  );
}
