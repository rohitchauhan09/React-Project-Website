import React from 'react'

const ShopItems = () => {
  return (
      <div className='h-[1707px] max-w-[1440px] px-40 pt-[60px] pb-[100px] flex gap-6'>
          <div className='flex flex-col gap-8'>
              <h2 className='text-xl text-[#121212] font-poppins font-semibold'>Filter</h2>
              <div className='flex flex-col gap-3'>
                  <h2 className='text-lg text-[#121212]'>CATEGORIES</h2>
                  <ul className='list-none h-[226px] w-[254px] flex flex-col gap-3 overflow-y-scroll'>
                      <li className='text-sm text-[#807E7E] font-semibold '>All Rooms</li>
                      <li className='text-sm text-[#807E7E] font-semibold '>Living Rooms</li>
                      <li className='text-sm text-[#807E7E] font-semibold '>Bedroom</li>
                      <li className='text-sm text-[#807E7E] font-semibold '>Kitchen</li>
                      <li className='text-sm text-[#807E7E] font-semibold '>Bathroom</li>
                      <li className='text-sm text-[#807E7E] font-semibold '>Dining</li>
                      <li className='text-sm text-[#807E7E] font-semibold '>Outdoor</li>
                      <li className='text-sm text-[#807E7E] font-semibold '>Dining</li>

                  </ul>

              </div>
              <div className='flex flex-col gap-3'>
                  <h2 className='text-lg text-[#121212]'>PRICES</h2>
                  <ul className='list-none flex flex-col gap-3 w-[254px] '>
                      <li className='text-sm text-[#807E7E] font-semibold flex justify-between  '>All Prices <input className='h-4 w-4' type="checkbox" name="" id="" /></li>
                      <li className='text-sm text-[#807E7E] font-semibold flex justify-between  '>$0.00 - 99.99 <input className='h-4 w-4' type="checkbox" name="" id="" /></li>
                      <li className='text-sm text-[#807E7E] font-semibold flex justify-between  '>$100.00 - 199.99 <input className='h-4 w-4' type="checkbox" name="" id="" /></li>
                      <li className='text-sm text-[#807E7E] font-semibold flex justify-between  '>$200.00 - 299.99 <input className='h-4 w-4' type="checkbox" name="" id="" /></li>
                      <li className='text-sm text-[#807E7E] font-semibold flex justify-between  '>$30.00 - 399.99 <input className='h-4 w-4' type="checkbox" name="" id="" /></li>
                      <li className='text-sm text-[#807E7E] font-semibold flex justify-between  '>$400.00+ <input className='h-4 w-4' type="checkbox" name="" id="" /></li>

                  </ul>

              </div>
          </div>
          
    </div>
  )
}

export default ShopItems