import React from 'react'

const Categories = () => {
  return (
      <div className='flex flex-col  sm:flex-row max-w-[1440px] sm:px-[160px] px-8 items-center gap-6'>
          <img className='sm:w-[548px] sm:h-[664px] w-[311px] h-[377px]' src="card1.jpg" alt="" />
          <div className='flex flex-col gap-6'>
              <img className='sm:h-[319px] sm:w-[548px] w-[311px] h-[180px]' src="card2.jpg" alt="" />
              <img className='sm:h-[319px] sm:w-[548px] w-[311px] h-[180px]' src="card3.jpg" alt="" />
          </div>
          
    </div>
  )
}

export default Categories