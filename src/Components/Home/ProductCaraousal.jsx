import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ProductCaraousalCard from "./ProductCaraousalCard";
import Caraousaldata from "./ProductCaraousal.json";
import styles from './ProductCaraousal.module.css'

const ProductCaraousal = (props) => {
  return (
    <div className="sm:max-w-[1440px] sm:h-[669px] flex flex-col gap-12 sm:pl-40 sm:py-12  py-8 pl-8 ">
      {/* Header Section */}
      <div className="flex justify-between items-end sm:pr-40 pr-8 ">
        <h2 className="sm:text-5xl text-2xl font-semibold font-poppins sm:w-3 ">
          New Arrivals
        </h2> 
        <a
          className="font-poppins font-medium text-sm sm:text-base pb-1 border-b border-b-black w-[110px] flex items-center gap-1"
          href=""
        >
          Read More
          <FaArrowRight />
        </a>
      </div>

      {/* Product Container */}
      <div
  className={styles.productContainer}
>
  {Caraousaldata.map((productData, index) => (
    <ProductCaraousalCard key={index} productData={productData} onclick={props} />
  ))}
</div>

    </div>
  );
};

export default ProductCaraousal;
// flex gap-6 border border-green-400 w-full h-[480px] overflow-x-auto overflow-y-hidden
