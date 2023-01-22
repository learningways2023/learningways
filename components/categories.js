import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import Link from "next/link";

import s1 from "../public/s11.png";
import s4 from "../public/s14.png";
import s5 from "../public/s15.png";

import s2 from "../public/s12.png";
import s3 from "../public/s13.png";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Categories = () => {
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
      <div className="w-full min-h-screen p-4 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
        <div className="w-full h-full flex justify-center items-center">
          <Player
            autoplay
            loop
            src="https://assets4.lottiefiles.com/packages/lf20_mlp3zxve.json"
            className=" w-[300px] h-[300px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
          ></Player>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" h-[280px] w-[280px]  rounded-lg  infPic flex items-center justify-center bg-white drop-shadow-lg  cursor-pointer text-black wwd">
            <div>
              <div className="flex justify-center items-center rounded-md px-3 py-3">
                <Image src={s1} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center px-3 py-7">
                <span>5th - 101th</span>
              </div>

              <div className=" flex justify-center items-center px-3 pb-9">
                <Link href="/login">
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-4 rounded-md ">
                    <button className="font-medium">Learn & Grow</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" h-[280px] w-[280px]  rounded-lg  infPic flex items-center justify-center bg-white drop-shadow-lg  cursor-pointer text-black wwd">
            <div>
              <div className="flex justify-center items-center rounded-md px-3 py-3">
                <Image src={s2} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center px-3 py-7">
                <span>11th - 12th</span>
              </div>

              <div className=" flex justify-center items-center px-3 pb-9">
                <Link href="/login">
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-4 rounded-md ">
                    <button className="font-medium">Learn & Grow</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" h-[280px] w-[280px]  rounded-lg  infPic flex items-center justify-center bg-white drop-shadow-lg  cursor-pointer text-black wwd">
            <div>
              <div className="flex justify-center items-center rounded-md px-3 py-3">
                <Image src={s3} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center px-3 py-7">
                <span>Engineering</span>
              </div>

              <div className=" flex justify-center items-center px-3 pb-9">
                <Link href="/login">
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-4 rounded-md ">
                    <button className="font-medium">Master Your code</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" h-[280px] w-[280px]  rounded-lg  infPic flex items-center justify-center bg-white drop-shadow-lg  cursor-pointer text-black wwd">
            <div>
              <div className="flex justify-center items-center rounded-md px-3 py-3">
                <Image src={s5} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center px-3 py-7">
                <span>Upgrade Skill</span>
              </div>

              <div className=" flex justify-center items-center px-3 pb-9">
                <Link href="/courses">
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-4 rounded-md ">
                    <button className="font-medium">Lets Empower</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <div className=" h-[280px] w-[280px]  rounded-lg  infPic flex items-center justify-center bg-white drop-shadow-lg  cursor-pointer text-black wwd">
            <div>
              <div className="flex justify-center items-center rounded-md px-3 py-3">
                <Image src={s4} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center px-3 py-7">
                <span>Competetive Exams</span>
              </div>

              <div className=" flex justify-center items-center px-3 pb-9">
                <Link href="/login">
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-4 rounded-md ">
                    <button className="font-medium">Ace the exam</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
