import React from 'react'

const FacilityCard = ({ facilitydata }) => {
  return (
    <>
      <div className='sm:w-[230px] sm:h-[230px] w-[148px] h-[198px] border flex  flex-col justify-center px-8 py-10 gap-3 rounded-sm bg-[#F3F5F7]'>
        <img className='sm:w-10 sm:h-9 size-7' src={facilitydata.url} alt="" />
        <h2 className='sm:text-[18px] text-base font-poppins font-medium'>{facilitydata.title}</h2>
        <p className='text-sm  font-medium text-[#6C7275] font-poppins'>{facilitydata.info}</p>
      </div>
    </>
  )
}

export default FacilityCard