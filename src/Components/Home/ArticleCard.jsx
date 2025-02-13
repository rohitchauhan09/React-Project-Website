import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const ArticleCard = ({articleData}) => {
    return (
        <div className='flex flex-col gap-2'>
            <img className='sm:w-[357px] sm:h-[325px]  w-[311px] h-[283px]' src={articleData.url} alt="" />
            <p className='font-poppins font-semibold text-[18px] text-[#23262F]'>{articleData.content}</p>
           <a className="font-poppins font-medium text-sm pb-1 border-b border-b-black w-[110px] flex items-center gap-1" href="">Read More<FaArrowRight/></a>
        </div>
  )
}
export default ArticleCard