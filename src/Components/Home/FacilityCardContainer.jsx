import React from 'react'
import FacilityCard from './FacilityCard'
import FacilityCardData from './FacilityCard.json'


const FacilityCardContainer = () => {
    return (
        <div className=' grid grid-cols-2  sm:px-[160px] items-center justify-center  sm:justify-between py-10  gap-3 rounded-sm sm:flex px-8'>
            {
                FacilityCardData.map((facilitydata) => {
                 return   <FacilityCard facilitydata={facilitydata} />
                })
           }

        </div>


        
  )
}

export default FacilityCardContainer