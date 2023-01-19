import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

import Link from "next/link";

import s1 from "../public/s11.png";

import s2 from "../public/s12.png";
import s3 from "../public/s13.png";
import s4 from "../public/s14.png";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Access = () => {
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
      <div className="w-full min-h-screen py-9">
        <div className="px-4 py-7  flex justify-center items-center">
          <span className="xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-semi-bold text-center">
            Assess yourself
          </span>
        </div>
        <div className="p-4 w-full text-center">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
            <div className="h-auto w-full    infPic flex items-center justify-center  ">
              <div className="w-[250px] md:w-[300px] lg:w-[300px] xl:w-[350px] rounded-lg bg-[#085464] drop-shadow-lg  cursor-pointer text-white wwd">
                <div className="flex justify-center items-center rounded-md px-3 py-3">
                  <Image src={s1} width={100} height={100} />
                </div>
                <div className="text-[18px] lg:text-[20px] xl:text-[23px] font-medium flex justify-center items-center px-3 py-3">
                  <span>NCERT Test</span>
                </div>
                <div className=" px-3 py-3 text-[15px] lg:text-[18px] xl:text-[20px] flex justify-center items-center ">
                  <span className="text-center leading-relaxed">
                    Assess your knowledge and understanding of the NCERT
                    curriculum
                  </span>
                </div>
                <div className=" flex justify-center items-center px-3 py-6">
                  <Link href="/login">
                    <div className=" gt xl:text-[20px] lg:text-[18px] bg-white text-[#085464] py-2 px-4 rounded-md ">
                      <button className="font-medium">Learn & Grow</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-auto w-full infPic flex items-center justify-center  ">
              <div className="w-[250px] md:w-[300px] lg:w-[300px] xl:w-[350px] rounded-lg bg-[#085464] drop-shadow-lg  cursor-pointer text-white wwd">
                <div className="flex justify-center items-center rounded-md px-3 py-3">
                  <Image src={s2} width={100} height={100} />
                </div>
                <div className="text-[18px] lg:text-[20px] xl:text-[23px] font-medium flex justify-center items-center px-3 py-3">
                  <span>UPSC </span>
                </div>
                <div className="text-[15px] lg:text-[18px] xl:text-[20px]   flex justify-center items-center px-3 py-3">
                  <span className="text-center leading-relaxed">
                    Assess an individual's knowledge and understanding of the
                    subjects covered in the UPSC Civil Services Examination.
                  </span>
                </div>
                <div className=" flex justify-center items-center px-3 py-6">
                  <Link href="/login">
                    <div className=" gt xl:text-[20px] lg:text-[18px] bg-white text-[#085464] py-2 px-4 rounded-md ">
                      <button className="font-medium">Choose Here</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-auto w-full    infPic flex items-center justify-center  ">
              <div className="w-[250px] md:w-[300px] lg:w-[300px] xl:w-[350px] rounded-lg bg-[#085464] drop-shadow-lg  cursor-pointer text-white wwd">
                <div className="flex justify-center items-center rounded-md px-3 py-3">
                  <Image src={s3} width={100} height={100} />
                </div>
                <div className="text-[18px] lg:text-[20px] xl:text-[23px] font-medium flex justify-center items-center px-3 py-3 ">
                  <span>Coding</span>
                </div>
                <div className="text-[15px] lg:text-[18px] xl:text-[20px]   flex justify-center items-center px-3 py-3">
                  <span className="text-center leading-relaxed">
                    Evaluate your coding skills and identify areas for
                    improvement
                  </span>
                </div>
                <div className=" flex justify-center items-center px-3 py-6">
                  <Link href="/login">
                    <div className=" gt xl:text-[20px] lg:text-[18px] text-[#085464] bg-white py-2 px-4 rounded-md ">
                      <button className="font-medium">Decide Here</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-auto w-full    infPic flex items-center justify-center  ">
              <div className="w-[250px] md:w-[300px] lg:w-[300px] xl:w-[350px] rounded-lg bg-[#085464] drop-shadow-lg  cursor-pointer text-white wwd">
                <div className="flex justify-center items-center rounded-md px-3 py-3">
                  <Image src={s4} width={100} height={100} />
                </div>
                <div className="text-[18px] lg:text-[20px] xl:text-[23px] font-medium flex justify-center items-center px-3 py-3">
                  <span>Skill fit</span>
                </div>
                <div className="text-[15px] lg:text-[18px] xl:text-[20px]   flex justify-center items-center px-3 py-3">
                  <span className="text-center leading-relaxed">
                    Take our Skill-Based Assessment Test and find out
                  </span>
                </div>
                <div className=" flex justify-center items-center px-3 py-6">
                  <Link href="/login">
                    <div className=" gt xl:text-[20px] lg:text-[18px] bg-white text-[#085464] py-2 px-4 rounded-md ">
                      <button className="font-medium">Start Here</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[80vh] px-4 pt-7 bg-[#fff]">
        <div className="lg:flex justify-center items-start ">
          <div className="lg:flex lg:justify-between lg:items-center px-0">
            <div className="w-auto h-auto p-1 ">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:gap-6 lg:gap-5 sm:gap-4 gap-4">
                <div className="  rounded-md flex items-center justify-center">
                  <span className="xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-medium text-center lg:text-left xl:text-left">
                    Most reliable career guidance platform
                  </span>
                </div>
                <div className="xl:text-[26px] lg:text-[25px] sm:text-[25px] text-[18px] flex items-center justify-start text-center lg:text-left xl:text-left">
                  <span>Let us Learn- Practice & Grow together</span>
                </div>
                <div className=" rounded-md flex items-center justify-center lg:justify-start xl:justify-start pt-4">
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-9  rounded-md ">
                    <button className="font-medium">Signup </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-auto h-auto ">
              <Player
                autoplay
                loop
                src="https://assets4.lottiefiles.com/packages/lf20_ikvz7qhc.json"
                className=" xl:w-[400px] xl:h-[400px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
              ></Player>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
