'use client'
import React, { useState } from 'react'
import { addToCart } from '../addtocart/addtocart';

const QuantitySet = ({prod}: any) => {
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        setQuantity(prev => prev + 1);
    };

    const decrement = () => {
        setQuantity(prev => Math.max(0, prev - 1));
    };
  return (
    <div className="mb-9 flex items-center space-x-4">
                    <div className="flex items-center border  rounded-xl py-1">
                           <button className="px-3 py-2 text-lg" onClick={decrement}>-</button>
                          <input type="number" className="w-12 h-14 text-center items-center font-medium " value={quantity} defaultValue={'1'} />
                          <button className="px-3 py-2 text-lg" onClick={increment}>+</button>
                     </div>
                 <button className="px-10 py-4 border-black border bg-pink-200 transition-transform hover:scale-95 rounded-xl text-lg font-medium hover:shadow-lg" onClick={() => addToCart(prod)}>
                                      Add To Cart
                                    </button>
    </div>
          
                    
  )
}

export default QuantitySet