import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import code from "../public/code.png";
import Link from "next/link";
const OngoingSlider = (props) => {
  return (
    <div className="bg-[#22A39F] rounded-md h-full">
      <div className="pb-5 flex justify-center items-start lg:justify-start xl:items-center lg:items-center xl:justify-start  pl-4">
        <Image src={logo} width={200} height={100} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div className="pb-7">
          <div className=" pl-5 pt-7 flex lg:justify-start xl:justify-start justify-start items-center xl:text-[26px] lg:text-[25px] sm:text-[25px] text-[18px] text-[#fff] font-medium">
            {props.head}
          </div>

          <div className=" pl-5 pt-3 flex lg:justify-start xl:justify-start justify-start items-center  xl:text-[18px] lg:text-[18px] sm:text-[18px] text-[10px] text-[#fff] ">
            {props.content}
          </div>
          <div className="px-4 pt-8 flex justify-start items-center">
            <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-3 px-6 rounded-md ">
              <button className="font-medium">Explore Now</button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-start">
          <Image src={code} height={200} />
        </div>
      </div>
    </div>
  );
};

export default OngoingSlider;
