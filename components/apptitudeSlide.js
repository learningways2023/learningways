import React from "react";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
const ApptitudeSlide = () => {
  return (
    <div className="min-h-[80vh] bg-gradient-to-r from-blue-500 to-cyan-500 mx-4 my-5 rounded-md  flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-4 xl:gap-4">
        <div className="w-full h-full flex justify-center items-center">
          <div className="">
            <Player
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_ikvz7qhc.json"
              className=" xl:w-[400px] xl:h-[400px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
            ></Player>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
          <div className="  rounded-md flex items-start justify-center">
            <span className="font-semibold xl:text-[42px] text-white   lg:text-[34px] sm:text-[32px] text-[24px] text-center lg:text-left xl:text-left">
              Unlock Your Potential !
            </span>
          </div>
          <div className="xl:text-[26px] pt-10 px-4 lg:text-[25px] sm:text-[25px] text-[18px] font-semibold flex items-start justify-start text-center text-white">
            <span>
              Take our online test to discover your strengths and find the
              career path that's right for you. Our comprehensive assessment
              measures your abilities in various areas and provides personalized
              results
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApptitudeSlide;
