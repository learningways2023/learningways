import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper";
import tab from "../public/tablogo.png";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
const Splash = () => {
  const router = useRouter();
  return (
    <div>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        Pagination={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper min-h-[100vh] "
      >
        <SwiperSlide>
          <div className="w-full flex justify-center items-center min-h-[100vh] bg-gradient-to-r from-blue-500 to-cyan-500">
            <div className="fixed top-1 left-2">
              <Image src={tab} width={30} height={30} />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="w-full h-full flex justify-center items-start">
                <Player
                  autoplay
                  loop
                  src="https://assets4.lottiefiles.com/packages/lf20_xlmz9xwm.json"
                  className=" w-[250px] h-[200px] "
                ></Player>
              </div>
              <div className="min-h-[40vh] min-w-[290px] mx-4 rounded-[5%] bg-white  opacity-90 flex flex-col justify-between items-center">
                <div className="font-semibold text-black text-xl text-center py-2">
                  Discover your next skill Learn anything you want !
                </div>
                <div className="font-normal text-gray-500 text-md text-center py-2">
                  Discover the things you want to learn & grow with them
                </div>
                <div
                  className="border-2 text-black rounded px-7  py-1 my-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                  onClick={function handlePaage() {
                    router.push("/home");
                  }}
                >
                  <button>Get Started</button>
                </div>
              </div>
            </div>
            <div className="fixed bottom-1">
              <div
                className="font-normal text-black text-md text-center py-2 cursor-pointer"
                onClick={function handlePaage() {
                  router.push("/home");
                }}
                I
              >
                Skip
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex justify-center items-center min-h-[100vh] bg-gradient-to-r from-blue-500 to-cyan-500">
            <div className="fixed top-1 left-2">
              <Image src={tab} width={30} height={30} />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="w-full h-full flex justify-center items-start">
                <Player
                  autoplay
                  loop
                  src="https://assets7.lottiefiles.com/packages/lf20_w7x9i6ag.json"
                  className=" w-[250px] h-[200px] "
                ></Player>
              </div>
              <div className="min-h-[40vh] min-w-[290px] mx-4 rounded-[5%] bg-white  opacity-90 flex flex-col justify-between items-center">
                <div className="font-semibold text-black text-xl text-center px-2 py-2">
                  Education is for improving the lives of others & for leaving
                  your community & world better than you found it.
                </div>
                <div className="font-normal text-gray-500 text-md text-center py-2">
                  Join our community now !
                </div>
                <div
                  className="border-2 text-black rounded px-7  py-1 my-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                  onClick={function handlePaage() {
                    router.push("/community");
                  }}
                >
                  <button>Join us</button>
                </div>
              </div>
            </div>
            <div className="fixed bottom-1">
              <div
                className="font-normal text-black text-md text-center pt-2 cursor-pointer"
                onClick={function handlePaage() {
                  router.push("/home");
                }}
              >
                Skip
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Splash;
