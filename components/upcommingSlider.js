import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import code from "../public/upcome.png";
import Link from "next/link";
const UpCommingSlider = (props) => {
  return (
    <div className="bg-[#4bca80] rounded-md">
      <div className="flex justify-center items-start lg:justify-start xl:items-center lg:items-center xl:justify-start  pl-4">
        <Image src={logo} width={200} height={100} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div className="pb-7">
          <div className="pl-5 flex justify-start items-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#fff] font-bold    ">
            Unlock the Power of Digital Marketing
          </div>
          <div className="pl-5 flex justify-center items-center xl:text-[20px] lg:text-[20px] sm:text-[20px] text-[12px] text-[#fff] font-medium ">
            Take your career to the next level with our comprehensive digital
            marketing course. Learn the latest techniques and strategies to
            drive results for your business or clients.
          </div>
          <div className=" pl-5 pt-7 flex lg:justify-start xl:justify-start justify-start items-center xl:text-[26px] lg:text-[25px] sm:text-[25px] text-[18px] text-[#fff] font-medium">
            LEARN FROM INDUSTRY EXPERTS
          </div>
          
          <div className=" pl-5 flex lg:justify-start xl:justify-start justify-start items-center  xl:text-[18px] lg:text-[18px] sm:text-[18px] text-[10px] text-[#fff] ">
            Hands-on projects
          </div>
          <div className=" pl-5 flex lg:justify-start xl:justify-start justify-start items-center xl:text-[18px] lg:text-[18px] sm:text-[18px] text-[10px] text-[#fff]  ">
            Flexible schedule
          </div>
          <div className=" pl-5 flex lg:justify-start xl:justify-start justify-start items-center xl:text-[18px] lg:text-[18px] sm:text-[18px] text-[10px] text-[#fff]  ">
            Career opportunities upon completion
          </div>
        </div>

        <div className="flex justify-center items-start">
          <Image src={code} height={300} />
        </div>
      </div>
    </div>
  );
};

export default UpCommingSlider;
