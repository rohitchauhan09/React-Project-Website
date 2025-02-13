import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import ArticleCard from './ArticleCard';
import ArticleCardData from './ArticleCard.json'



const Article = () => {
  return (
      <div className='max-w-[1440px] sm:px-[160px] px-8  sm:py-[80px] py-6 flex flex-col gap-12'>
          <div className='flex items-center justify-between'>
              <h2 className='font-semibold  text-3xl'>Articles</h2>
              <a className="font-poppins sm:text-lg text-sm pb-1 border-b-[2px] border-b-black sm:w-[142px] w-28 font-medium flex items-end gap-2 " href="">More Article<FaArrowRight/></a>
          </div>
          <div className='flex flex-wrap sm:flex-nowrap items-center justify-center gap-4'>
              {
                  ArticleCardData.map((articleData) => {
                      return <ArticleCard articleData={articleData} />
                  })
              }
          </div>
          
    </div>
  )
}

export default Article