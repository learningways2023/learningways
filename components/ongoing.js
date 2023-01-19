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

import OngoingSlider from "../components/ongoingSlider";

const Ongoing = () => {
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
      <div className=" w-full min-h-[70vh] py-9">
        <div className="p-4 flex justify-center items-center">
          <span className="xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-semi-bold">
            Ongoing Events
          </span>
        </div>
        <div className="p-4 h-auto">
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
              <div className="w-full ">
                <OngoingSlider
                  head="Data Science"
                  content="Unlock the power of data with our comprehensive Data Science course. Learn from industry experts and advance your career now"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <OngoingSlider
                  head="UPSC Current Affairs"
                  content="Stay ahead of the curve with our comprehensive UPSC Current Affairs course"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
