import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Newhero from "../components/hero";
import Image from "next/image";
import Link from "next/link";
import Ongoing from "../components/ongoing";
import Categories from "../components/categories";
import ment from "../public/john.png";
import Blogs from "../components/blogs";
import s1 from "../public/s1.jpg";
import s4 from "../public/s4.jpg";
import Upcoming from "../components/upcoming";
import s5 from "../public/s5.jpg";
import kid from "../public/kid.png";
import upsc from "../public/upsc.png";
import parent from "../public/parent.png";
import paint from "../public/paint.png";
import s2 from "../public/s2.jpg";
import Mentor from "../components/mentor";
import s3 from "../public/s3.jpg";
import code from "../public/code.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper";
import "swiper/css/effect-cube";
import UpCommingSlider from "../components/upcommingSlider";
import OngoingSlider from "../components/ongoingSlider";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
const ApptitudeSlide = () => {
  return (
    <div className="w-full bg-[#085464] min-h-screen px-4 pt-7 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div className="w-full h-full flex justify-start items-center">
          <div className="h-[400px]">
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
            <span className="xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#fff] font-medium text-center lg:text-left xl:text-left">
              Unlock Your Potential !
            </span>
          </div>
          <div className="xl:text-[26px] lg:text-[25px] sm:text-[25px] text-[18px] flex items-start justify-start text-center text-white">
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
