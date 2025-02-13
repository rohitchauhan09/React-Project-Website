import React from 'react'
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
      <div className='max-w-[1440px]  bg-[#141718] px-8  sm:px-[160px] pt-[80px] pb-9 flex flex-col flex-wrap gap-16'>
          <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12 sm:gap-none'>
              <div className='flex flex-wrap sm:flex-row flex-col   gap-8 items-center justify-center'>
                  <h2 className='font-poppins font-medium text-2xl text-white'>3Legant</h2>
                  <p className='text-sm text-[#E8ECEF] font-poppins sm:border-l pl-4'>Git & Decoration Store</p>
              </div>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-6  sm:px-0'>
                  <NavLink className='text-sm text-[#E8ECEF] font-poppins' to={"/"}>Home</NavLink>
                  <NavLink className='text-sm text-[#E8ECEF] font-poppins' to={"/shop"}>Shop</NavLink>
                  <NavLink className='text-sm text-[#E8ECEF] font-poppins' to={"/about"}>About</NavLink>
                  <NavLink className='text-sm text-[#E8ECEF] font-poppins' to={"/blog"}>Blog</NavLink>
                  <NavLink className='text-sm text-[#E8ECEF] font-poppins' to={"/contact"}>Contact</NavLink>
              </div>
          </div> 

          <div className='flex flex-wrap flex-col-reverse sm:flex-row justify-between  sm:border-t sm:border-t-[#6C7275] '>
              <div className='flex  flex-col-reverse   sm:flex-row items-center justify-center  gap-6'>
                  <p className='text-[#E8ECEF] text-xs font-poppins font-normal'>Copyright © 2023 3legant. All rights reserved</p>
                  <p className='text-[#FEFEFE] text-xs font-poppins'>Privacy Policy</p>
                  <p className='text-[#FEFEFE] text-xs font-poppins'>Term of Use</p>
              </div>
              <div className='flex items-center justify-center  gap-4 py-8   sm:px-0'>
                  <SlSocialInstagram  className='text-white text-xl'/>
                  <SlSocialFacebook   className='text-white text-xl'/> 
                  <SlSocialYoutube   className='text-white text-xl'/>
              </div>
          </div>
    </div>
  )
}
export default Footer