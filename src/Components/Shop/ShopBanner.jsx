import React from 'react'
import { Link } from 'react-router-dom'

const ShopBanner = () => {
  return (
      <div className='px-40 relative'>
          <img src="Shop-image.jpg" alt="" />
          <div className='flex items-center absolute left-[35%] top-[30%]  flex-col'>
              <div className='flex items-center gap-8'>
              <Link className='text-[#605F5F]'  to={"/"}>Home</Link>
              <Link  to={"/shop"}>Shop</Link>
              </div>
              <h2 className='font-poppins text-[54px] font-medium'>Shop Page</h2>
              <p className='text-lg font-poppins'>Let’s design the place you always imagined.</p>

              
          </div>
    </div>
  )
}

export default ShopBanner