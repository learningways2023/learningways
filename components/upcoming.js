import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper";
import "swiper/css/effect-cube";
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
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
    >
      <div className="w-full min-h-screenx  py-9">
        <div className="p-4 flex justify-center items-center">
          <span className="xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-semi-bold">
            Upcomming Events
          </span>
        </div>
        <div className="p-4">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full">
                <UpCommingSlider />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <UpCommingSlider />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <UpCommingSlider />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <UpCommingSlider />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <UpCommingSlider />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default Upcoming;
