import React from 'react'
import { HiOutlineMail } from "react-icons/hi";

const Media = () => {
  return (
      <div className='max-w-[1440px] h-auto relative flex items-center justify-center py-[120px] px-[32px] sm:px-0 sm:py-0 bg-[#F2F4F6] '>
          <img className='hidden sm:block' src="newspaper.jpg" alt="" />
          <div className='absolute sm:top-1/4 sm:left-[30%]   flex  flex-col  items-center gap-3 sm:gap-2'>
              <h2 className='sm:text-[44px] text-[28px] font-semibold font-poppins'>Join our Newsletter</h2>
              <p className='sm:text-lg  text-base text-center text-[#141718] font-medium sm:font-normal'>Sign up for deals, new products and promotions</p>
              <div className='sm:w-[488px] sm:h-[52px] w-[311px] h-[48px]  flex items-center justify-between shadow-md'>
                  <a className='flex items-center gap-2 text-[#6C7275]'  href=""><HiOutlineMail className='text-lg text-black' />Email Adress</a>
                  <a className='text-[#6C7275]' href="">Signup</a>
              </div>
          </div>
    </div>
  )
}

export default Media