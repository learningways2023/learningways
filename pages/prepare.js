import React from "react";
import { useState, useCallback, useEffect } from "react";
import Navbar from "../components/navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import naukri from "../public/naukri.png";
import CountUp from "react-countup";
import { useRouter } from "next/router";
import indeed from "../public/indeed.png";
import quikr from "../public/quikr.png";
import linkedin from "../public/linkedinp.png";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper";
import google from "../public/google.png";
import amazon from "../public/amazon.png";
import zomoto from "../public/zomoto.png";
import uber from "../public/uber.png";
import insta from "../public/instag.png";
import coin from "../public/coinbase.png";
import Footer from "../components/footer";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Prepare = () => {
  const router = useRouter()
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
      <div className="m-4 min-h-[80vh] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="p-4">
            <div className="text-black font-semibold xl:text-[42px] text-center  lg:text-[34px] sm:text-[32px] text-[24px]">
              Practice
            </div>
            <div className="xl:text-[28px] lg:text-[28px] text-center sm:text-[23px] text-[18px] pt-7 text-white font-normal">
              Solve easy to complex problems & get hands-on experience to get
              hired by your dream company!
            </div>
            <div className=" mt-7 grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
              <div
                className="bg-white w-full p-2 h-full flex flex-col justify-center rounded-lg items-center cursor-pointer"
                onClick={function handleEvent() {
                  router.push("/prepare#5dayinterview");
                }}
              >
                <Player
                  autoplay
                  loop
                  src="https://assets9.lottiefiles.com/packages/lf20_fxvz0c.json"
                  className="w-90 h-50"
                ></Player>
                <div className="font-semibold text-center">
                  5- Day Interview Prep
                </div>
              </div>
              <div
                className="bg-white w-full p-2 h-full flex flex-col justify-center rounded-lg items-center cursor-pointer"
                onClick={function handleEvent() {
                  router.push("/prepare#mcq");
                }}
              >
                <Player
                  autoplay
                  loop
                  src="https://assets7.lottiefiles.com/private_files/lf30_bivykh3v.json"
                  className="w-90 h-50"
                ></Player>
                <div className="font-semibold text-center">
                  MCQ- based Mock Tests
                </div>
              </div>
              <div
                className="bg-white w-full p-2 h-full flex flex-col justify-center rounded-lg items-center cursor-pointer"
                onClick={function handleEvent() {
                  router.push("/prepare#coding");
                }}
              >
                <Player
                  autoplay
                  loop
                  src="https://assets5.lottiefiles.com/private_files/lf30_dIdQa6.json"
                  className="w-90 h-50"
                ></Player>
                <div className="font-semibold text-center">
                  100- Day Coding Sprint
                </div>
              </div>
              <div
                className="bg-white w-full p-2 h-full flex flex-col justify-center rounded-lg items-center cursor-pointer"
                onClick={function handleEvent() {
                  router.push("/prepare#moc");
                }}
              >
                <Player
                  autoplay
                  loop
                  src="https://assets1.lottiefiles.com/packages/lf20_IwnaBUZCcz.json"
                  className="w-90 h-50"
                ></Player>
                <div className="font-semibold text-center">Mock Interviews</div>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto flex justify-center items-center ">
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/private_files/lf30_sisdcihk.json"
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
      <div
        id="5dayinterview"
        className="m-4 min-h-[80vh] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="w-auto h-auto flex justify-center items-center ">
            <Player
              autoplay
              loop
              src="https://assets5.lottiefiles.com/packages/lf20_r8nda3zk.json"
              className=" xl:w-[400px] xl:h-[400px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
            ></Player>
          </div>
          <div className="p-4 flex flex-col justify-between items-center space-y-4">
            <div className="text-black font-semibold xl:text-[42px] text-center  lg:text-[34px] sm:text-[32px] text-[24px] py-2">
              # 5 Day_Interview _Prep
            </div>
            <div className="xl:text-[28px] lg:text-[28px] text-center sm:text-[23px] text-[18px] pt-7 text-white font-normal">
              Prepare for the recruitment process , right from assessments to
              the interview , of your favorite tech jobs / internships in just 5
              days!
            </div>

            <div className="flex justify-center items-center mt-10">
              <div
                className="border-2 text-black rounded px-4 md:px-9 py-1 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                onClick={function handlePaage() {
                  router.push("/community");
                }}
              >
                <button>Start Now </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Test yourself Practice Coding & Ace Hiring Assessments
      </div>
      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] mb-10">
        Solve a new challenge every day for the next 100 days & be unstoppable!
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
              <div className="flex justify-center items-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[200px] h-[200px] boder items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={google} width={150} height={100} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[200px] h-[200px] boder items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={coin} width={150} height={100} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[200px] h-[200px] boder items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={insta} width={150} height={100} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[200px] h-[200px] boder items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={amazon} width={150} height={100} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[200px] h-[200px] boder items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={zomoto} width={120} height={80} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[200px] h-[200px] boder items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={uber} width={150} height={100} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div className="p-4">
          <Swiper
            slidesPerView={4}
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
              <div className="flex justify-center items-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[200px] h-[200px] boder items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={google} width={150} height={100} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[200px] h-[200px] boder items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={coin} width={150} height={100} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[200px] h-[200px] boder items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={insta} width={150} height={100} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[200px] h-[200px] boder items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={amazon} width={150} height={100} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[200px] h-[200px] boder items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={zomoto} width={120} height={80} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center">
                <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] w-[200px] h-[200px] boder items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
                  <div className="flex  justify-center items-center cursor-pointer">
                    <Image src={uber} width={150} height={100} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}

      <div
        id="mcq"
        className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10"
      >
        Test yourself
      </div>
      <div className=" min-h-[40vh]">
        <div className="px-4 py-8 mx-1 rounded-md md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] font-semibold card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#coding");
              }}
            >
              Verbal Ability test
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] font-semibold card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleClick() {
                router.push("/NCERT_Solutions");
              }}
            >
              Online Coding Assessment test
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] font-semibold card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#private_tutor");
              }}
            >
              General Aptitude test
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] font-semibold card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#personality_developement");
              }}
            >
              Computer Fundamentals test
            </div>
          </div>
        </div>
      </div>

      <div
        id="coding"
        className="m-4 min-h-[80vh] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="p-4 flex flex-col justify-between items-center space-y-4">
            <div className="text-black font-semibold xl:text-[34px] text-left  lg:text-[34px] sm:text-[32px] text-[24px]">
              100- Day Coding Sprint
            </div>
            <div className="xl:text-[28px] lg:text-[28px] text-left sm:text-[23px] text-[18px]  text-white font-normal">
              Solve a new challenge every day for the next 100 days & be
              unstoppable!
            </div>
            <div className="text-black font-semibold xl:text-[34px] text-left  lg:text-[34px] sm:text-[32px] text-[24px] ">
              Earn Your Badge Be the proud owner of
            </div>
            <div className="xl:text-[28px] lg:text-[28px] text-left sm:text-[23px] text-[18px]  text-white font-normal">
              Solve a new challenge every day for the next 100 days & be
              unstoppable!
            </div>

            <div className="flex justify-center items-center mt-10">
              <div
                className="border-2 text-black rounded px-4 md:px-9 py-1 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                onClick={function handlePaage() {
                  router.push("/community");
                }}
              >
                <button>Start your Day 1 Now! </button>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto flex justify-center items-center ">
            <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_DbCYKfCXBZ.json"
              className=" xl:w-[400px] xl:h-[400px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
            ></Player>
          </div>
        </div>
      </div>

      <div
        id="moc"
        className="m-4 min-h-[80vh] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="p-4">
            <div className="text-black font-semibold xl:text-[42px] text-center  lg:text-[34px] sm:text-[32px] text-[24px] py-2">
              Practice real life interviews on a virtual screen!
            </div>
            <div className="grid grid-cols-2 gap-6 py-2">
              <div className="w-full h-full flex justify-center items-center">
                <div className="bg-white w-[130px] h-[130px] rounded-[50%] flex justify-center items-center drop-shadow-2xl ">
                  <div className="p-1 text-black text-xl text-bold text-center ">
                    Preparation
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <div className="bg-white w-[130px] h-[130px] rounded-[50%] flex justify-center items-center drop-shadow-2xl ">
                  <div className="p-1 text-black text-xl text-bold text-center ">
                    Enhanced Confidence
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <div className="bg-white w-[130px] h-[130px] rounded-[50%] flex justify-center items-center drop-shadow-2xl ">
                  <div className="p-1 text-black text-xl text-bold text-center ">
                    Refined body Language
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <div className="bg-white w-[130px] h-[130px] rounded-[50%] flex justify-center items-center drop-shadow-2xl ">
                  <div className="p-1 text-black text-xl text-bold text-center ">
                    Improved interview Skills
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
              <div
                className="border-2 text-black rounded px-4 md:px-9 py-1 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                onClick={function handlePaage() {
                  router.push("/community");
                }}
              >
                <button>Start Now </button>
              </div>
            </div>
          </div>
          <div className="w-auto h-auto flex justify-center items-center ">
            <Player
              autoplay
              loop
              src="https://assets8.lottiefiles.com/packages/lf20_u5usuukc.json"
              className=" xl:w-[400px] xl:h-[400px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
            ></Player>
          </div>
        </div>
      </div>
      <div className="my-10 mx-4 py-4 px-2 min-h-[60vh] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12 bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-[150px] h-[150px] bg-white flex flex-col justify-between items-center rounded-md">
            <div className="text-2xl text-black font-bold pt-9">
              <CountUp end={10000} duration={8.75} decimal="," suffix="+" />
            </div>
            <div className="font-normal text-center pb-9">Active Users</div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-[150px] h-[150px] bg-white flex flex-col justify-between items-center rounded-md">
            <div className="text-2xl text-black font-bold pt-9">
              <CountUp end={20000} duration={8.75} decimal="," suffix="+" />
            </div>
            <div className="font-normal text-center pb-9">Opportunities</div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-[150px] h-[150px] bg-white flex flex-col justify-between items-center rounded-md">
            <div className="text-2xl text-black font-bold pt-9">
              <CountUp end={15000} duration={8.75} decimal="," suffix="+" />
            </div>
            <div className="font-normal text-center pb-9">Organisations</div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-[150px] h-[150px] bg-white flex flex-col justify-between items-center rounded-md">
            <div className="text-2xl text-black font-bold pt-9">
              <CountUp end={30000} duration={8.75} decimal="," suffix="+" />
            </div>
            <div className="font-normal text-center pb-9">Assessment</div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-[150px] h-[150px] bg-white flex flex-col justify-between items-center rounded-md">
            <div className="text-2xl text-black font-bold pt-9">
              <CountUp end={18000} duration={8.75} decimal="," suffix="+" />
            </div>
            <div className="font-normal text-center pb-9">Brand trust us</div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-[150px] h-[150px] bg-white flex flex-col justify-between items-center rounded-md">
            <div className="text-2xl text-black font-bold pt-9">
              <CountUp end={17000} duration={8.75} decimal="," suffix="+" />
            </div>
            <div className="font-normal text-center pb-9">Countries</div>
          </div>
        </div>
      </div>
      {/* <div className="text-2xl">
        <CountUp end={10000} duration={2.75} />
      </div> */}
      <Footer />
    </div>
  );
};

export default Prepare;
