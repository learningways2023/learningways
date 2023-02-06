// import React, { useEffect } from "react";
// import { useAnimation, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Autoplay, Pagination, Navigation, EffectCube } from "swiper";
// import "swiper/css/effect-cube";

// import OngoingSlider from "../components/ongoingSlider";

// const Ongoing = () => {
//   const squareVariants = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 },
//   };
//   const controls = useAnimation();
//   const [ref, inView] = useInView();
//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);
//   return (
//     <div>
//       <div className="mx-4 my-5 min-h-[70vh] ">
//         <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
//           Ongoing Events
//         </div>

//         <div className="p-4 h-auto">
//           <Swiper
//             spaceBetween={30}
//             slidesPerView={1}
//             centeredSlides={true}
//             autoplay={{
//               delay: 3500,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             modules={[Autoplay, Pagination]}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <div className="w-full ">
//                 <OngoingSlider
//                   head="Data Science"
//                   content="Unlock the power of data with our comprehensive Data Science course. Learn from industry experts and advance your career now"
//                 />
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="w-full">
//                 <OngoingSlider
//                   head="UPSC Current Affairs"
//                   content="Stay ahead of the curve with our comprehensive UPSC Current Affairs course"
//                 />
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ongoing;

import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination,Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import OngoingSlider from "../components/ongoingSlider";
const Ongoing = () => {
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
    <div className="">
      <div className="mx-4 min-h-[70vh] my-5">
        <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
          Ongoing Events
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
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCube, Pagination,Autoplay]}
            className="mySwiper w-12/12 h-[90vh] md:h-[70vh]  lg:h-[70vh]  xl:h-[70vh]  "
            
          >
            <SwiperSlide>
              <div className="w-full">
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
