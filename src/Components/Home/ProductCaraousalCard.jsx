import React from 'react'
import { IoMdStar } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCaraousalCard = (props) => {
  const { imgurl, title, price } = props.productData
  const {onclick} = props.onclick

  return (
    <div className='flex flex-col gap-3 sm:min-w-[252px] sm:min-h-[433px] min-w-[252px]  relative'>
          <img className='sm:min-w-[252px] sm:min-h-[349px] min-w-[231px] min-h-[308px]' src={imgurl} alt="" />
          <span className='px-3 py-[3px] bg-white text-base font-poppins font-semibold  rounded-sm absolute top-4 left-4'>NEW</span>
          <span className='px-[10px] py-[3px] text-base bg-[#38CB89] font-semibold text-white  rounded-sm absolute top-14 left-4'>-50%</span>
      <span className='bg-white rounded-full w-6 h-6 border  absolute top-6 right-6 flex justify-center items-center opacity-1'>
      <AiOutlineHeart className='font-semibold text-[#6C7275] '/>
      </span>
      <button onClick={onclick} className=' sm:px-[76px] sm:py-[14px] px-16 py-[14px] rounded-lg bg-[#141718] absolute sm:bottom-[130px] bottom-[170px] left-3 text-white font-poppins text-sm hover:bg-white hover:text-black hover:border hover:border-black'>Add to Cart</button>
          <div className='flex flex-col gap-[6px]'>
              <div className='flex'>
              <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar/>
              </div>
        <p className='text-[#141718] font-poppins text-lg font-semibold'>{title}</p>
              <div className='flex gap-2'>
          <span className='text-[#141718] sm:text-md text-sm font-medium'>{price}</span>
              </div>
      </div>
    </div>
  )
}
export default ProductCaraousalCard


