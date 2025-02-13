import React from 'react'
import { FaSkullCrossbones } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Error = () => {
  return (
      <div className='h-screen w-screen flex  flex-col justify-center items-center bg-slate-100 gap-4'>
          <h2 className='text-[72px] font-poppins font-semibold text-red-500'>Error 404</h2>
          <p className='text-[32px] font-poppins font-medium text-slate-500 flex items-center gap-4'>Page Not Found<FaSkullCrossbones /></p>
          <Link className='px-3 py-1 border rounded-md bg-blue-500 text-white font-poppins font-medium text-lg' to={"/"}>Back to Home</Link>
    </div>
  )
}

export default Error