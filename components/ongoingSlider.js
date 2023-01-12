import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import code from "../public/code.png";
import Link from "next/link";
const OngoingSlider = (props) => {
  return (
    <div className="bg-[#4bca80] rounded-md">
      <div className="flex justify-center items-start lg:justify-start xl:items-center lg:items-center xl:justify-start  pl-4">
        <Image src={logo} width={200} height={100} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div className="">
          <div className="flex justify-center items-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#fff] font-bold">
            Upgrade Your Skills Today!
          </div>
          <div className="flex justify-center items-center xl:text-[26px] lg:text-[25px] sm:text-[25px] text-[18px] text-[#fff] font-medium text-center">
            Learn the latest coding techniques and become a valuable asset in
            the tech industry
          </div>
          <div className=" rounded-md flex items-center justify-center pt-3">
            <Link href={`/dashboard/`}>
              <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-8  rounded-md text-center">
                <button className="font-medium">Apply Now</button>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-start">
          <Image src={code} />
        </div>
      </div>
    </div>
  );
};

export default OngoingSlider;
