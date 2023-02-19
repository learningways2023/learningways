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
    <div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Expertise and Passion: Meet the team of mentors dedicated to helping you
        achieve your dreams
      </div>

      <div className=" py-9 mx-4 p-4 my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cardbg1 rounded-md gap-6 ">
        <div className="sm:p-6 rounded-lg flex  items-center justify-center  infPic card-col  ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#ffff]  flex justify-center items-center high1">
                <span className="text-black   lg:text-xl md:text-lg p-2 text-sm text-center">
                  "John helped me improve my coding skills and gave me valuable
                  insights on how to advance in my career." - Jane Smith, Junior
                  Developer
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto flex justify-center items-center">
                <span className=" text-black lg:text-lg md:text-lg text-[14px] text-center   py-4">
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
                <div className="lg:text-lg md:text-lg text-base text-black font-semibold">
                  Mr John Doe
                </div>
                <div className="sm:text-[14px] text-[13px] font-semibold   text-gray-700">
                  Senior Software Engineer
                </div>
              </div>
            </div>
            <div className="py-7 flex justify-center items-center pb-4">
              <div
                className=" border-2 text-white rounded px-4 py-2 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                onClick={function showModal() {
                  setModal(true);
                }}
              >
                Schedule a session with John
              </div>
            </div>
          </div>
        </div>
        <div className="sm:p-6 rounded-lg flex  items-center justify-center  infPic card-col  ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#ffff]  flex justify-center items-center high1">
                <span className="text-black   lg:text-xl md:text-lg p-2 text-sm text-center">
                  "John helped me improve my coding skills and gave me valuable
                  insights on how to advance in my career." - Jane Smith, Junior
                  Developer
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto flex justify-center items-center">
                <span className=" text-black lg:text-lg md:text-lg text-[14px] text-center   py-4">
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
                <div className="lg:text-lg md:text-lg text-base text-black font-semibold">
                  Mr John Doe
                </div>
                <div className="sm:text-[14px] text-[13px] font-semibold   text-gray-700">
                  Senior Software Engineer
                </div>
              </div>
            </div>
            <div className="py-7 flex justify-center items-center pb-4">
              <div
                className=" border-2 text-white rounded px-4 py-2 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                onClick={function showModal() {
                  setModal(true);
                }}
              >
                Schedule a session with John
              </div>
            </div>
          </div>
        </div>
        <div className="sm:p-6 rounded-lg flex  items-center justify-center  infPic card-col  ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#ffff]  flex justify-center items-center high1">
                <span className="text-black   lg:text-xl md:text-lg p-2 text-sm text-center">
                  "John helped me improve my coding skills and gave me valuable
                  insights on how to advance in my career." - Jane Smith, Junior
                  Developer
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto flex justify-center items-center">
                <span className=" text-black lg:text-lg md:text-lg text-[14px] text-center   py-4">
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
                <div className="lg:text-lg md:text-lg text-base text-black font-semibold">
                  Mr John Doe
                </div>
                <div className="sm:text-[14px] text-[13px] font-semibold   text-gray-700">
                  Senior Software Engineer
                </div>
              </div>
            </div>
            <div className="py-7 flex justify-center items-center pb-4">
              <div
                className=" border-2 text-white rounded px-4 py-2 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                onClick={function showModal() {
                  setModal(true);
                }}
              >
                Schedule a session with John
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ment;
