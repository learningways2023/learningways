import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/pagination";
import UpCommingSlider from "../components/upcommingSlider";
const Upcoming = () => {
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  // https://assets8.lottiefiles.com/packages/lf20_ytg7s6tx.json
  // https://assets8.lottiefiles.com/packages/lf20_ilp95ggh.json
  return (
    <div className="pb-9">
      <div className="mx-4 min-h-[70vh] my-5">
        <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-0 md:mt-10 lg:mt-10 xl:mt-10 ">
          Upcomming Events
        </div>

        <div className="p-4  rounded-md ">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            
            modules={[EffectCube, Autoplay]}
            className="mySwiper h-[90vh] md:h-[70vh]  lg:h-[70vh]  xl:h-[70vh]"
          >
            <SwiperSlide>
              <div className="w-full">
                <UpCommingSlider
                  head="UPSC GS History"
                  content="Ace UPSC GS History with our comprehensive online course. Learn from experts and boost your exam preparation now"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <UpCommingSlider
                  head="NCERT Summary Class"
                  content="Get ahead in your studies with our NCERT Summary course. Learn efficiently and effectively. Enroll now"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <UpCommingSlider
                  head="Kids Coding Class  "
                  content="Give your child a head start in technology! Enroll them in our fun and interactive kids coding class today!"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
