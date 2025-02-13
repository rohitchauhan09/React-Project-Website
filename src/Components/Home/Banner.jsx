import React from 'react'

const Banner = () => {
  return (
      <div className='max-w-[1440px] sm:px-[160px] h-auto px-8'>
          <img src="hero.jpg" alt="" />
          <div className='flex flex-col  sm:flex-row items-center gap-4 sm:gap-12 py-8'>
              <h2 className='font-poppins text-[36px] sm:text-[64px] sm:font-medium font-semibold'>Simply Unique
                  Simply Better.</h2>
              <p className='font-poppins font-semibold text-sm   sm:text-lg sm:font-semibold '>3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
          </div>
    </div>
  )
}

export default Banner