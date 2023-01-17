import React from "react";
import Link from "next/link";
import Image from "next/image";
import pnf from "../public/404.png";
const Pnf = () => {
  return (
    <div className=" lg:h-screen">
      <div className="lg:flex justify-center items-center  sm:pt-10 p-4">
        <div className="lg:flex lg:justify-between lg:items-center sm:p-5 py-5 px-0">
          <div className="w-auto h-auto p-1 ">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:gap-6 lg:gap-5 sm:gap-4 gap-4">
              <div className="  rounded-md flex items-center justify-center">
                <span className="xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-medium text-center lg:text-left xl:text-left">
                  Sorry,either you mistyped the url or we deleted that page,but
                  let's agree to blame this on you.
                </span>
              </div>

              <div className=" rounded-md flex items-center justify-center lg:justify-start xl:justify-start pt-4">
                <Link href={`/`}>
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-3 px-6  rounded-md ">
                    <button className="font-medium">Back to Home</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-auto h-full">
            <Image src={pnf} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pnf;
