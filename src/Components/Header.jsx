import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { SlHandbag } from "react-icons/sl";
import { NavLink , Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import Slider from './Home/Slider';
import ProductCaraousalCard from './Home/ProductCaraousalCard';



const Header = ({ count }) => {
    const [menu, setMenu] = useState(false) 
    return (
        <> 
            {/* header top done */}
            <div className='flex flex-wrap items-center justify-center max-w-[1440px] h-10 gap-1 bg-[#F3F5F7] relative'>
                <img className='h-4 w-4' src="ticket-percent.png" alt=""  />
                <p  className='text-xs sm:text-sm flex gap-2 font-poppins items-center '>30% off storewide — Limited time!
                <Link  className='text-xs sm:text-sm text-blue-600 font-medium font-poppins  pb-1/2 border-b-[2px] border-b-blue-600 ' to={"/shop"}>Shop Now</Link>
                <FaArrowRight className='text-blue-600' /></p>
            </div>
            {/* main header  */}
            <div className='flex px-10 sm:px-[160px] py-4 items-center justify-between'>
                <div className='flex gap-2 items-center'>
                    <FaBars onClick={() => setMenu(true)} className='sm:hidden cursor-pointer'/>
                    <h2 className='text-xl sm:text-2xl font-poppins font-medium sm:font-semibold'>3Legant</h2>
                </div>
                <div className='hidden sm:flex sm:gap-12 items-center justify-center  font-poppins '>
                    <NavLink className={({isActive}) => (isActive ? "font-semibold" : "")} to={"/"}>Home</NavLink>
                    <NavLink className={({isActive}) => (isActive ? "font-semibold" : "")} to={"/shop"}>Shop</NavLink>
                    <NavLink className={({isActive}) => (isActive ? "font-semibold" : "")} to={"/product"}>Product</NavLink>
                    <NavLink className={({isActive}) => (isActive ? "font-semibold" : "")} to={"/contact"}>Contact Us</NavLink>

                </div>
                <div className='flex gap-6 items-center  '>
                    <FiSearch className='hidden sm:block text-lg cursor-pointer' />
                    <FaRegCircleUser className='hidden sm:block text-lg cursor-pointer' />
                    <div className='flex items-center gap-1'> 
                        <Link to={"/cart"}><SlHandbag className='text-lg cursor-pointer' /></Link>
                        <span className='rounded-full bg-black px-[6px] font-poppins  text-white text-xs '>{count}</span>
                    </div>
                </div>
            </div> 
            <Slider menu={menu} setMenu={setMenu} />
        </>
  )
}

export default Header