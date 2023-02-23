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
                  "Jayesh guidance helped me land a job as a full-stack
                  developer. He's knowledgeable and effective in teaching."
                </span>
              </div>
            </div>

            <div className="rounded-md flex pt-5 items-center justify-center">
              <div>
                <Image src={ment} width={100} height={100} />
              </div>
              <div className="pl-5">
                <div className="lg:text-lg md:text-lg text-base text-black font-semibold">
                  Mr Jayesh
                </div>
                <div className="sm:text-[14px] text-[13px] font-semibold   text-gray-700">
                  Full Stack Development
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
                  "Rishabh mentorship helped me develop a comprehensive digital
                  marketing strategy for my business. Her experience and
                  knowledge are invaluable."
                </span>
              </div>
            </div>

            <div className="rounded-md flex pt-5 items-center justify-center">
              <div>
                <Image src={ment} width={100} height={100} />
              </div>
              <div className="pl-5">
                <div className="lg:text-lg md:text-lg text-base text-black font-semibold">
                  Mr Rishabh
                </div>
                <div className="sm:text-[14px] text-[13px] font-semibold   text-gray-700">
                  Digital Marketing
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
                  "Aafiya mentorship made the learning process easier.She taught
                  me the technical skills I needed and how to approach data
                  problems strategically."
                </span>
              </div>
            </div>

            <div className="rounded-md flex pt-5 items-center justify-center">
              <div>
                <Image src={ment} width={100} height={100} />
              </div>
              <div className="pl-5">
                <div className="lg:text-lg md:text-lg text-base text-black font-semibold">
                  Mr Aafiya
                </div>
                <div className="sm:text-[14px] text-[13px] font-semibold   text-gray-700">
                  Data Science
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

// "https://assets7.lottiefiles.com/packages/lf20_l13zwx3i.json"
// https://assets9.lottiefiles.com/packages/lf20_1rsb3quq.json
// https://assets10.lottiefiles.com/packages/lf20_qrtp2d9r.json
