import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const SaleBanner = () => {
  return (
    <div className="max-w-[1440px] flex flex-col  sm:flex-row  ">
      <img className="sm:h-[532px] h-[300px]" src="sale-banner.jpg" alt="" />
      <div className="sm:w-[720px]  sm:h-[532px] h-[300px] flex flex-col bg-[#F3F5F7] sm:px-[160px] sm:pl-[72px] px-8 py-10 sm:gap-3 gap-2 sm:py-40    ">
        <span className="font-poppins text-sm sm:text-base font-semibold text-md text-blue-500 ">
          SALE UP TO 35% OFF
        </span>
        <h2 className="font-poppins sm:font-semibold font-medium sm:text-[40px] text-[32px] leading-[38px]  text-[#141718] sm:leading-[44px]  ">HUNDREDS of New lower prices!</h2>
        <p className="font-poppins sm:text-lg text-base font-medium text-[#121212]  sm:font-medium ">It’s more affordable than ever to give every room in your home a stylish makeover.</p>
        <div className="flex items-center sm:gap-1 gap-0">
        <a className="font-poppins sm:text-base text-sm pb-1 border-b border-b-black w-20 font-medium " href="">Shop Now</a><FaArrowRight/>

        </div>
      </div>
    </div>
  );
};

export default SaleBanner;
