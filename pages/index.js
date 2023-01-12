import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Newhero from "../components/hero";
import Image from "next/image";
import Link from "next/link";
import Blogs from "../components/blogs";
import s1 from "../public/s1.jpg";
import paint from "../public/paint.png";
import s2 from "../public/s2.jpg";
import Mentor from "../components/mentor";
import s3 from "../public/s3.jpg";
import code from "../public/code.png";
import ApptitudeSlide from "../components/apptitudeSlide";
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
const Index = () => {
  return (
    <div>
      <Navbar />
      <Newhero />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div>
          <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/packages/lf20_g2es3iti.json"
            className=" xl:w-[500px] xl:h-[500px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
          ></Player>
        </div>
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <div className=" rounded-md flex items-center justify-center bg-white drop-shadow  cursor-pointer text-black wwd">
            <div>
              <div className="flex justify-center items-center rounded-md">
                <Image src={s1} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center pb-3">
                <span>8th - 9th</span>
              </div>
              <div className="text-[17px]  flex justify-center items-center pb-3">
                <span className="text-center leading-relaxed">
                  Choose your ideal stream & subjects.
                </span>
              </div>
              <div className=" flex justify-center items-center pb-3">
                <Link href="/login">
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-4 rounded-md ">
                    <button className="font-medium">Look Here</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" rounded-md flex items-center justify-center bg-white drop-shadow  cursor-pointer text-black wwd">
            <div>
              <div className="flex justify-center items-center rounded-md">
                <Image src={s2} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center pb-3">
                <span>10th - 12th</span>
              </div>
              <div className="text-[17px]  flex justify-center items-center pb-3">
                <span className="text-center leading-relaxed">
                  Select your ideal course & career
                </span>
              </div>
              <div className=" flex justify-center items-center pb-3">
                <Link href="/login">
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-4 rounded-md ">
                    <button className="font-medium">Choose Here</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" rounded-md flex items-center justify-center bg-white drop-shadow  cursor-pointer text-black wwd">
            <div>
              <div className="flex justify-center items-center rounded-md">
                <Image src={s3} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center pb-3">
                <span>College</span>
              </div>
              <div className="text-[17px]  flex justify-center items-center pb-3">
                <span className="text-center leading-relaxed">
                  Choose your ideal stream & subjects
                </span>
              </div>
              <div className=" flex justify-center items-center pb-3">
                <Link href="/login">
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-4 rounded-md ">
                    <button className="font-medium">Decide Here</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" rounded-md flex items-center justify-center bg-white drop-shadow  cursor-pointer text-black wwd">
            <div>
              <div className="flex justify-center items-center rounded-md">
                <Image src={s1} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center pb-3">
                <span>Working Professionals</span>
              </div>
              <div className="text-[17px]  flex justify-center items-center pb-3">
                <span className="text-center leading-relaxed">
                  Finalize your career growth trajectory.
                </span>
              </div>
              <div className=" flex justify-center items-center pb-3">
                <Link href="/login">
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-4 rounded-md ">
                    <button className="font-medium">Start Here</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <span className="xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-medium">
          Ongoing Events
        </span>
      </div>
      <div className="p-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
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
              <OngoingSlider />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <OngoingSlider />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <OngoingSlider />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <OngoingSlider />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <OngoingSlider />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex justify-center items-center">
        <span className="xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-medium">
          Upcomming Events
        </span>
      </div>
      <div className="p-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
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
      <div className="px-4 flex justify-center items-center">
        <span className="xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-medium text-center">
          Career mistake s you are most likely to make
        </span>
      </div>
      <div className="px-4 flex justify-center items-center">
        <span className="xl:text-[32px] lg:text-[22px] sm:text-[22px] text-[10px] text-[#333] font-medium text-center">
          Wondering where your career planning is going wrong? Check out these
          articles for advice!
        </span>
      </div>
      <div className="p-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
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
              <ApptitudeSlide />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <ApptitudeSlide />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <ApptitudeSlide />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <ApptitudeSlide />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <ApptitudeSlide />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="p-4">
        <div className="flex justify-center items-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-bold text-center">
          Most reliable career guidance platform
        </div>
        <div className="px-4 flex justify-center items-center">
          <span className="xl:text-[32px] lg:text-[22px] sm:text-[22px] text-[10px] text-[#333] font-medium text-center">
            Take your career to the next level with the guidance of a seasoned
            professional. Our mentoring program connects you with an expert in
            your field who can provide personalized advice and support.
          </span>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/login">
            <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-3 px-7 rounded-md ">
              <button className="font-medium">Signup</button>
            </div>
          </Link>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-center items-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-bold text-center">
          Join the revolution
        </div>
        <div className="flex justify-center items-center">
          <Image src={paint} />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-center items-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-bold text-center">
          Here's why they love Learning Ways
        </div>
        <div className="px-4 flex justify-center items-center">
          <span className="xl:text-[32px] lg:text-[22px] sm:text-[22px] text-[10px] text-[#333] font-medium text-center">
            Thousands of users have discovered their ideal academic and career
            path using Mentorias four step career guidance solution. Looking for
            career counselling online? Hear what our users have to share about
            their experience
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-center items-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-bold text-center">
          Meet Our Team of Expert Mentors
        </div>
        <div className="px-4 flex justify-center items-center pb-4">
          <span className="xl:text-[32px] lg:text-[22px] sm:text-[22px] text-[10px] text-[#333] font-medium text-center">
            Get to know the talented and thoroughly trained experts who will
            guide you towards your ideal future path.
          </span>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
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
              <Mentor />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <Mentor />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <Mentor />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <Mentor />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <Mentor />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="p-4">
        <div className="bg-white rounded-md bd">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div className="pb-3">
              <div className="flex justify-center items-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#085464] font-bold text-center">
                Not sure if career counselling is right for you?
              </div>
              <div className="flex justify-center items-center xl:text-[26px] lg:text-[25px] sm:text-[25px] text-[18px] text-[#085464] font-medium text-center">
                Book a Career Brainstorm Session to explore your options with a
                counsellor before opting for the full career guidance solution.
              </div>
              <div className=" rounded-md flex items-center justify-center pt-3">
                <Link href={`/dashboard/`}>
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-[#fff] py-2 px-8  rounded-md text-center">
                    <button className="font-medium">Know More</button>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex justify-center items-start pb-3">
              <Image src={code} />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-center items-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-bold text-center">
          Browse through our blogs
        </div>
        <div className="px-4 flex justify-center items-center pb-4">
          <span className="xl:text-[32px] lg:text-[22px] sm:text-[22px] text-[10px] text-[#333] font-medium text-center">
            Get expert advice on course and career options, career guidance,
            skill development and more from your trusted career advisor!
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
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
              <Blogs />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <Blogs />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <Blogs />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <Blogs />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <Blogs />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <Blogs />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <Blogs />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
