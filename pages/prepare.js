import React from "react";
import { useState, useCallback, useEffect } from "react";
import ClassFiveToTenCard from "../components/classFiveToTenCard";
import Navbar from "../components/navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import naukri from "../public/naukri.png";
import community from "../public/community.png";
import blog from "../public/blog.png";
import forum from "../public/forum.png";
import group from "../public/group.png";
import member from "../public/members.png";
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
                  router.push("/community#activites");
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
                  router.push("/community#blogs");
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
                  router.push("/community#forums");
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
                  router.push("/community#groups");
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
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 border-2 border-gray-300 w-[300px] h-[300px] rounded-lg drop-shadow-xl infPic cursor-pointer">
            <div className="font-semibold text-black xl:text-[28px] pt-4 lg:text-[28px] text-center  sm:text-[23px] text-[18px]">
              Unlimited Access
            </div>
            <div className=" text-black xl:text-[24px] pt-4 lg:text-[24px] text-center  sm:text-[20px] text-[16px]">
              Get lifetime access to the learning material of all the courses
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 border-2 border-gray-300 w-[300px] h-[300px] rounded-lg drop-shadow-xl infPic cursor-pointer">
            <div className="font-semibold text-black xl:text-[28px] pt-4 lg:text-[28px] text-center  sm:text-[23px] text-[18px]">
              Hands-on learning
            </div>
            <div className=" text-black xl:text-[24px] pt-4 lg:text-[24px] text-center  sm:text-[20px] text-[16px]">
              Get lifetime access to the learning material of all the
              coursesWork on capstone projects and assignments and build your
              proof-of-work
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 border-2 border-gray-300 w-[300px] h-[300px] rounded-lg drop-shadow-xl infPic cursor-pointer">
            <div className="font-semibold text-black xl:text-[28px] pt-4 lg:text-[28px] text-center  sm:text-[23px] text-[18px]">
              Industry Experts
            </div>
            <div className=" text-black xl:text-[24px] pt-4 lg:text-[24px] text-center  sm:text-[20px] text-[16px]">
              Learn from the best industry professionals to fast-track your
              career growth
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 border-2 border-gray-300 w-[300px] h-[300px] rounded-lg drop-shadow-xl infPic cursor-pointer">
            <div className="font-semibold text-black xl:text-[28px] pt-4 lg:text-[28px] text-center  sm:text-[23px] text-[18px]">
              Industry-recognized Certification
            </div>
            <div className=" text-black xl:text-[24px] pt-4 lg:text-[24px] text-center  sm:text-[20px] text-[16px]">
              Showcase your skills with an exclusive certificate from Unstop
            </div>
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Get rewards on every course purchase !{" "}
      </div>
      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] mb-10">
        Join 33,000+ members and get exclusive coupons worth ₹2000+ from
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
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Learning Modules
      </div>
      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] mb-10">
        Get placement ready with self-paced & live courses curated by top
        industry experts!
      </div>
      <div className="mx-4 py-2 px-1 min-h-[80vh] cardbg1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets1.lottiefiles.com/packages/lf20_0yfsb3a1.json"
            tittle="Introduction to Coding"
            desc="In this course, students will learn the basics of coding, including problem-solving, logical thinking, and creativity. They will use different online tools and platforms, such as Code.org, Scratch, and Tynker, to create simple programs, games, and animations. They will also learn about different careers in tech and how coding can be used in real-life situations."
            level="Beginner"
            age="8-12 years"
            duration="4 weeks, 1 hour per week"
          />
        </div>
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets2.lottiefiles.com/packages/lf20_8cxcnczq.json"
            tittle="Mobile App Development"
            desc="In this course, students will learn how to design and develop their own mobile apps using MIT App Inventor, a block-based visual programming tool. They will create apps that can interact with sensors, databases, and external APIs, using design thinking principles and user-centered design. They will also learn how to publish and share their app on different platforms, such as Android and iOS."
            level="Intermediate"
            age="12-16 years"
            duration="6 weeks, 1.5 hours per week"
          />
        </div>
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets7.lottiefiles.com/packages/lf20_hgoxocuy.json"
            tittle="Cybersecurity and Ethical Hacking"
            desc="In this course, students will learn about the basics of cybersecurity and ethical hacking, including network security, cryptography, and social engineering. They will use different tools and techniques to assess and exploit vulnerabilities in computer systems, while following ethical guidelines and legal frameworks. They will also learn about different careers in cybersecurity and how to stay safe online in a connected world"
            level="Advanced"
            age="14-18 years"
            duration="8 weeks, 2 hours per week"
          />
        </div>
      </div>
      <div className="flex justify-end  p-4 items-center ">
        <div
          className="border-2 text-black rounded px-4 md:px-9 py-1 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
          onClick={function handlePaage() {
            router.push("/community");
          }}
        >
          <button>Explore More -{`>`}</button>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Bundled Courses
      </div>
      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] mb-10">
        Learn what recruiters are looking for through these foolproof, practical
        & to-the-point placement preparation courses .
      </div>
      <div className="mx-4 py-2 px-1 min-h-[80vh] cardbg1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-7">
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets1.lottiefiles.com/packages/lf20_0yfsb3a1.json"
            tittle="Introduction to Coding"
            desc="In this course, students will learn the basics of coding, including problem-solving, logical thinking, and creativity. They will use different online tools and platforms, such as Code.org, Scratch, and Tynker, to create simple programs, games, and animations. They will also learn about different careers in tech and how coding can be used in real-life situations."
            level="Beginner"
            age="8-12 years"
            duration="4 weeks, 1 hour per week"
          />
        </div>
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets2.lottiefiles.com/packages/lf20_8cxcnczq.json"
            tittle="Mobile App Development"
            desc="In this course, students will learn how to design and develop their own mobile apps using MIT App Inventor, a block-based visual programming tool. They will create apps that can interact with sensors, databases, and external APIs, using design thinking principles and user-centered design. They will also learn how to publish and share their app on different platforms, such as Android and iOS."
            level="Intermediate"
            age="12-16 years"
            duration="6 weeks, 1.5 hours per week"
          />
        </div>
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets7.lottiefiles.com/packages/lf20_hgoxocuy.json"
            tittle="Cybersecurity and Ethical Hacking"
            desc="In this course, students will learn about the basics of cybersecurity and ethical hacking, including network security, cryptography, and social engineering. They will use different tools and techniques to assess and exploit vulnerabilities in computer systems, while following ethical guidelines and legal frameworks. They will also learn about different careers in cybersecurity and how to stay safe online in a connected world"
            level="Advanced"
            age="14-18 years"
            duration="8 weeks, 2 hours per week"
          />
        </div>
      </div>
      <div className="flex justify-end  p-4 items-center ">
        <div
          className="border-2 text-black rounded px-4 md:px-9 py-1 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
          onClick={function handlePaage() {
            router.push("/community");
          }}
        >
          <button>Explore More -{`>`}</button>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
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
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Tech Blogs
      </div>
      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] mb-10">
        Dive into the world of coding with these curated articles!
      </div>
      <div className="mx-4 py-2 px-1 min-h-[80vh] cardbg1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-7">
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets1.lottiefiles.com/packages/lf20_0yfsb3a1.json"
            tittle="Introduction to Coding"
            desc="In this course, students will learn the basics of coding, including problem-solving, logical thinking, and creativity. They will use different online tools and platforms, such as Code.org, Scratch, and Tynker, to create simple programs, games, and animations. They will also learn about different careers in tech and how coding can be used in real-life situations."
            level="Beginner"
            age="8-12 years"
            duration="4 weeks, 1 hour per week"
          />
        </div>
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets2.lottiefiles.com/packages/lf20_8cxcnczq.json"
            tittle="Mobile App Development"
            desc="In this course, students will learn how to design and develop their own mobile apps using MIT App Inventor, a block-based visual programming tool. They will create apps that can interact with sensors, databases, and external APIs, using design thinking principles and user-centered design. They will also learn how to publish and share their app on different platforms, such as Android and iOS."
            level="Intermediate"
            age="12-16 years"
            duration="6 weeks, 1.5 hours per week"
          />
        </div>
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets7.lottiefiles.com/packages/lf20_hgoxocuy.json"
            tittle="Cybersecurity and Ethical Hacking"
            desc="In this course, students will learn about the basics of cybersecurity and ethical hacking, including network security, cryptography, and social engineering. They will use different tools and techniques to assess and exploit vulnerabilities in computer systems, while following ethical guidelines and legal frameworks. They will also learn about different careers in cybersecurity and how to stay safe online in a connected world"
            level="Advanced"
            age="14-18 years"
            duration="8 weeks, 2 hours per week"
          />
        </div>
      </div>
      <div className="flex justify-end  p-4 items-center ">
        <div
          className="border-2 text-black rounded px-4 md:px-9 py-1 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
          onClick={function handlePaage() {
            router.push("/community");
          }}
        >
          <button>Explore More -{`>`}</button>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Webinars
      </div>
      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] mb-10">
        Dive into the world of coding with these curated articles!
      </div>
      <div className="mx-4 py-2 px-1 min-h-[80vh] cardbg1 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-7">
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets1.lottiefiles.com/packages/lf20_0yfsb3a1.json"
            tittle="Introduction to Coding"
            desc="In this course, students will learn the basics of coding, including problem-solving, logical thinking, and creativity. They will use different online tools and platforms, such as Code.org, Scratch, and Tynker, to create simple programs, games, and animations. They will also learn about different careers in tech and how coding can be used in real-life situations."
            level="Beginner"
            age="8-12 years"
            duration="4 weeks, 1 hour per week"
          />
        </div>
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets2.lottiefiles.com/packages/lf20_8cxcnczq.json"
            tittle="Mobile App Development"
            desc="In this course, students will learn how to design and develop their own mobile apps using MIT App Inventor, a block-based visual programming tool. They will create apps that can interact with sensors, databases, and external APIs, using design thinking principles and user-centered design. They will also learn how to publish and share their app on different platforms, such as Android and iOS."
            level="Intermediate"
            age="12-16 years"
            duration="6 weeks, 1.5 hours per week"
          />
        </div>
        <div className="flex justify-center items-center">
          <ClassFiveToTenCard
            img="https://assets7.lottiefiles.com/packages/lf20_hgoxocuy.json"
            tittle="Cybersecurity and Ethical Hacking"
            desc="In this course, students will learn about the basics of cybersecurity and ethical hacking, including network security, cryptography, and social engineering. They will use different tools and techniques to assess and exploit vulnerabilities in computer systems, while following ethical guidelines and legal frameworks. They will also learn about different careers in cybersecurity and how to stay safe online in a connected world"
            level="Advanced"
            age="14-18 years"
            duration="8 weeks, 2 hours per week"
          />
        </div>
      </div>
      <div className="flex justify-end  p-4 items-center ">
        <div
          className="border-2 text-black rounded px-4 md:px-9 py-1 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
          onClick={function handlePaage() {
            router.push("/community");
          }}
        >
          <button>Explore More -{`>`}</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Prepare;
