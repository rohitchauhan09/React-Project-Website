import React from "react";
import { RxCross2 } from "react-icons/rx";

const Slider = ({ menu,setMenu }) => {
  return (
    <>
         { menu && 
              
        <div className="w-full h-full p-6 flex flex-col gap-3 absolute top-0  bg-white sm:hidden ">
          <div className="flex justify-between items-center">
            <h2 className="font-poppins text-lg font-medium">3Legant</h2>
            <RxCross2 className="cursor-pointer" onClick={() => setMenu(false)} />
          </div>
          <div>
            <input
              className="w-[300px] py-[6px] rounded-lg outline-none border"
              type="text"
            />
          </div>
          <ul className="list-none flex flex-col gap-8 ">
            <li className="border-b pb-3">Home</li>
            <li className="border-b pb-3">Shop</li>
            <li className="border-b pb-3">Product</li>
            <li className="border-b pb-3">Contact</li>
          </ul>
        </div>
      }
    </>
  );
};

export default Slider;
