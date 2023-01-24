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
    <div>
      <div className="w-full min-h-[70vh]  py-9">
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
                <UpCommingSlider head="UPSC GS History" content="Ace UPSC GS History with our comprehensive online course. Learn from experts and boost your exam preparation now" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <UpCommingSlider head="NCERT Summary Class" content="Get ahead in your studies with our NCERT Summary course. Learn efficiently and effectively. Enroll now" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <UpCommingSlider head="Kids Coding Class  " content="Give your child a head start in technology! Enroll them in our fun and interactive kids coding class today!" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
