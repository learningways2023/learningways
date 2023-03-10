import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

import kid from "../public/kid.png";
import upsc from "../public/upsc.png";
import parent from "../public/parent.png";
import paint from "../public/paint.png";

const Goals = () => {
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
      {/* <div className="px-4 py-7">
        <div className="py-7 flex justify-center items-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-semi-bold text-center">
          Explore Your Career Goals
        </div>
        <div className="flex justify-center items-center py-7">
          <Image src={paint} />
        </div>
      </div> */}
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Here's why they love Learning Ways
      </div>

      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
        Hear from the people who have experienced the benefits of our
        Product/Service first hand
      </div>
      <div className="px-4 py-5">
        <div className="py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          <div className="p-5 rounded-md infPic flex items-center justify-center  bg-gradient-to-r from-blue-500 to-cyan-500 drop-shadow-lg  cursor-pointer text-white  ">
            <div>
              <div className="px-3 py-3 flex justify-center items-center rounded-md">
                <Image src={kid} width={100} height={100} />
              </div>
              <div className="px-3 py-3 text-[24px] text-black font-semibold flex justify-center items-center pb-3">
                <span>Ayush</span>
              </div>
              
              <div className="px-3 py-3 text-[17px]  flex justify-center items-center pb-3">
                <span className="text-center leading-relaxed">
                  I used to think coding was boring, but this program made it
                  so much fun! I love being able to bring my ideas to life with
                  code. I can't wait to show my friends and family all the cool
                  things I've made
                </span>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-md infPic flex items-center justify-center  bg-gradient-to-r from-blue-500 to-cyan-500 drop-shadow-lg  cursor-pointer text-white  ">
            <div>
              <div className="px-3 py-3 flex justify-center items-center rounded-md">
                <Image src={upsc} width={100} height={100} />
              </div>
              <div className="px-3 py-3 text-[24px] font-semibold text-black flex justify-center items-center pb-3">
                <span>Omkar</span>
              </div>
              <div className="px-3 py-3 text-[17px]  flex justify-center items-center pb-3">
                <span className="text-center leading-relaxed">
                  This program helped me understand UPSC concepts better and
                  manage my time efficiently. I cleared the exam in my first
                  attempt, I highly recommend it for UPSC aspirants.
                </span>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-md infPic flex items-center justify-center  bg-gradient-to-r from-blue-500 to-cyan-500 drop-shadow-lg  cursor-pointer text-white  ">
            <div>
              <div className="px-3 py-3 flex justify-center items-center rounded-md">
                <Image src={parent} width={100} height={100} />
              </div>
              <div className="px-3 py-3 text-[24px] font-semibold text-black flex justify-center items-center pb-3">
                <span>Avinash</span>
              </div>
              <div className="px-3 py-3 text-[17px]  flex justify-center items-center pb-3">
                <span className="text-center leading-relaxed">
                  As parents, we were always worried about our child's studies
                  and their ability to understand the concepts. But this program
                  has made such a huge difference. Our child is now able to
                  understand the material better, retain information longer and
                  even enjoys studying
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
