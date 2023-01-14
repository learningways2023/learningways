import React from "react";
import Image from "next/image";
import logo from "../public/logo3.svg";
import code from "../public/code.png";
import Link from "next/link";
const ApptitudeSlide = () => {
  return (
    <div className="bg-[#085464] rounded-md pb-8">
      <div className="px-3 py-3 flex justify-center items-start lg:justify-start xl:items-center lg:items-center xl:justify-start  pl-4">
        <Image src={logo} width={200} height={100} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div className="px-3 py-3 lex justify-center items-center">
          <Image src={code} />
        </div>
        <div className="">
          <div className="flex justify-center items-start xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#fff] font-bold">
            Unlock Your Potential !
          </div>
          <div className="px-3 py-9 pb-5 flex justify-center items-start xl:text-[26px] lg:text-[25px] sm:text-[25px] text-[18px] text-[#fff]  text-center">
            Take our online test to discover your strengths and find the career
            path that's right for you. Our comprehensive assessment measures
            your abilities in various areas and provides personalized results
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApptitudeSlide;
