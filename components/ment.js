import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

import ment from "../public/john.png";

const Ment = () => {
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div
      
    >
      <div className="px-4 pt-9">
        <div className="py-9 flex justify-center items-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-semi-bold text-center pb-7">
          Expertise and Passion: Meet the team of mentors dedicated to helping
          you achieve your dreams
        </div>
      </div>
      <div className="py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:mx-4 mx-1">
        <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#085464] flex justify-center items-center high1">
                <span className="text-white font-medium lg:text-xl md:text-lg text-sm text-center">
                  "John helped me improve my coding skills and gave me valuable
                  insights on how to advance in my career." - Jane Smith, Junior
                  Developer
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto flex justify-center items-center">
                <span className=" text-[#085464] lg:text-lg md:text-lg text-[14px] text-center font-medium py-4">
                  John is a Senior Software Engineer with over 10 years of
                  experience in the tech industry. He specializes in Agile
                  development methodologies and has a proven track record of
                  successfully mentoring junior developers.
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div>
                <Image src={ment} width={100} height={100} />
              </div>
              <div className="pl-5">
                <div className="lg:text-lg md:text-lg text-base text-[#085464] font-semibold">
                  Mr John Doe
                </div>
                <div className="sm:text-[14px] text-[13px] font-medium text-gray-500">
                  Senior Software Engineer
                </div>
              </div>
            </div>
            <div className="py-7 flex justify-center items-center pb-4">
              <div className="getstarted  gt xl:text-[20px] lg:text-[18px] text-[#fff]  py-2 px-8  rounded-md text-center">
                <button className="font-medium">
                  Schedule a session with John
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#085464] flex justify-center items-center high1">
                <span className="text-white font-medium lg:text-xl md:text-lg text-sm text-center">
                  "John helped me improve my coding skills and gave me valuable
                  insights on how to advance in my career." - Jane Smith, Junior
                  Developer
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto flex justify-center items-center">
                <span className=" text-[#085464] lg:text-lg md:text-lg text-[14px] text-center font-medium py-4">
                  John is a Senior Software Engineer with over 10 years of
                  experience in the tech industry. He specializes in Agile
                  development methodologies and has a proven track record of
                  successfully mentoring junior developers.
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div>
                <Image src={ment} width={100} height={100} />
              </div>
              <div className="pl-5">
                <div className="lg:text-lg md:text-lg text-base text-[#085464] font-semibold">
                  Mr John Doe
                </div>
                <div className="sm:text-[14px] text-[13px] font-medium text-gray-500">
                  Senior Software Engineer
                </div>
              </div>
            </div>
            <div className="py-7 flex justify-center items-center pb-4">
              <div className="getstarted  gt xl:text-[20px] lg:text-[18px] text-[#fff]  py-2 px-8  rounded-md text-center">
                <button className="font-medium">
                  Schedule a session with John
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#085464] flex justify-center items-center high1">
                <span className="text-white font-medium lg:text-xl md:text-lg text-sm text-center">
                  "John helped me improve my coding skills and gave me valuable
                  insights on how to advance in my career." - Jane Smith, Junior
                  Developer
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto flex justify-center items-center">
                <span className=" text-[#085464] lg:text-lg md:text-lg text-[14px] text-center font-medium py-4">
                  John is a Senior Software Engineer with over 10 years of
                  experience in the tech industry. He specializes in Agile
                  development methodologies and has a proven track record of
                  successfully mentoring junior developers.
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div>
                <Image src={ment} width={100} height={100} />
              </div>
              <div className="pl-5">
                <div className="lg:text-lg md:text-lg text-base text-[#085464] font-semibold">
                  Mr John Doe
                </div>
                <div className="sm:text-[14px] text-[13px] font-medium text-gray-500">
                  Senior Software Engineer
                </div>
              </div>
            </div>
            <div className="py-7 flex justify-center items-center pb-4">
              <div className="getstarted  gt xl:text-[20px] lg:text-[18px] text-[#fff]  py-2 px-8  rounded-md text-center">
                <button className="font-medium">
                  Schedule a session with John
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ment;
