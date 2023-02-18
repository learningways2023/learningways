import React from "react";
import { useState, useCallback, useEffect } from "react";

import Navbar from "../components/navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import naukri from "../public/naukri.png";
import indeed from "../public/indeed.png";
import quikr from "../public/quikr.png";
import linkedin from "../public/linkedinp.png";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper";

import Footer from "../components/footer";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Learn = () => {
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
  };
  const isBreakpoint = useMediaQuery(620);
  return (
    <div>
      <Navbar />
      <div className="m-4 min-h-[60vh] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="p-4">
            <div className="text-black font-semibold xl:text-[42px] text-center  lg:text-[34px] sm:text-[32px] text-[24px]">
              Learn
            </div>
            <div className="xl:text-[28px] lg:text-[28px] text-center sm:text-[23px] text-[18px] pt-7 text-white font-normal">
              Enroll for the courses curated by the best industry professionals
              & enhance your career growth!
            </div>
            <div className="pl-4 pt-7">
              <div className="xl:text-[28px] lg:text-[28px] text-center  sm:text-[23px] text-[18px] font-normal py-3 px-3 rounded-md bg-white text-black">
                34,620+ students are preparing with us for their carrier
                development
              </div>
            </div>
          </div>
          <div className="w-auto h-auto flex justify-center items-center ">
            <Player
              autoplay
              loop
              src="https://assets7.lottiefiles.com/packages/lf20_inti4oxf.json"
              className=" xl:w-[400px] xl:h-[400px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
            ></Player>
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Learn & Join Dream Companies
      </div>
      {isBreakpoint ? (
        <div className="p-4 w-[100vw] flex justify-center items-center">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[310px] h-[200px] items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={linkedin} width={300} height={200} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[310px] h-[200px] items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={quikr} width={300} height={200} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[310px] h-[200px] items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={indeed} width={300} height={200} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[310px] h-[200px] items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={naukri} width={300} height={200} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[310px] h-[200px] items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={linkedin} width={300} height={200} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div className="p-4">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[310px] h-[200px] items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                <div className="flex  justify-center items-center cursor-pointer">
                  <Image src={linkedin} width={300} height={200} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[310px] h-[200px] items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                <div className="flex justify-center items-center cursor-pointer">
                  <Image src={quikr} width={300} height={200} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[310px] h-[200px] items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                <div className="flex justify-center items-center cursor-pointer">
                  <Image src={linkedin} width={300} height={200} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[310px] h-[200px] items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                <div className="flex justify-center items-center cursor-pointer">
                  <Image src={indeed} width={300} height={200} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[310px] h-[200px] items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                <div className="flex justify-center items-center cursor-pointer">
                  <Image src={naukri} width={300} height={200} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        What to expect ?
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          <div className="bg-[#ffff] border-2 border-gray-300 w-[300px] h-[300px] rounded-md drop-shadow-xl infpic">
            <div className="font-semibold text-black xl:text-[28px] pt-4 lg:text-[28px] text-center  sm:text-[23px] text-[18px]">
              Unlimited Access
            </div>
            <div className=" text-black xl:text-[24px] pt-4 lg:text-[24px] text-center  sm:text-[20px] text-[16px]">
              Get lifetime access to the learning material of all the courses
            </div>
          </div>
          <div className="bg-[#ffff] border-2 border-gray-300 w-[300px] h-[300px] rounded-md drop-shadow-xl">
            <div className="font-semibold text-black xl:text-[28px] pt-4 lg:text-[28px] text-center  sm:text-[23px] text-[18px]">
              Hands-on learning
            </div>
            <div className=" text-black xl:text-[24px] pt-4 lg:text-[24px] text-center  sm:text-[20px] text-[16px]">
              Get lifetime access to the learning material of all the
              coursesWork on capstone projects and assignments and build your
              proof-of-work
            </div>
          </div>
          <div className="bg-[#ffff] border-2 border-gray-300 w-[300px] h-[300px] rounded-md drop-shadow-xl">
            <div className="font-semibold text-black xl:text-[28px] pt-4 lg:text-[28px] text-center  sm:text-[23px] text-[18px]">
              Industry Experts
            </div>
            <div className=" text-black xl:text-[24px] pt-4 lg:text-[24px] text-center  sm:text-[20px] text-[16px]">
              Learn from the best industry professionals to fast-track your
              career growth
            </div>
          </div>
          <div className="bg-[#ffff] border-2 border-gray-300 w-[300px] h-[300px] rounded-md drop-shadow-xl">
            <div className="font-semibold text-black xl:text-[28px] pt-4 lg:text-[28px] text-center  sm:text-[23px] text-[18px]">
              Industry-recognized Certification
            </div>
            <div className=" text-black xl:text-[24px] pt-4 lg:text-[24px] text-center  sm:text-[20px] text-[16px]">
              Showcase your skills with an exclusive certificate from Unstop
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Learn;
