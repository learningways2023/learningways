import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Newhero from "../components/hero";
import Image from "next/image";
import Link from "next/link";
import Blogs from "../components/blogs";
import s1 from "../public/s1.jpg";
import kid from "../public/kid.png";
import upsc from "../public/upsc.png";
import parent from "../public/parent.png";
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
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div>
            <Player
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_mlp3zxve.json"
              className=" w-[250px] h-[250px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
            ></Player>
          </div>
          <div className=" rounded-md infPic flex items-center justify-center bg-white drop-shadow  cursor-pointer text-black wwd">
            <div>
              <div className="flex justify-center items-center rounded-md">
                <Image src={s1} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center pb-3">
                <span>5th - 10th</span>
              </div>
              <div className="text-[17px]  flex justify-center items-center pb-3">
                <span className="text-center leading-relaxed">
                  Choose your ideal stream & subjects.
                </span>
              </div>
              <div className=" flex justify-center items-center pb-3">
                <Link href="/login">
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-4 rounded-md ">
                    <button className="font-medium">Learn & Grow</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" rounded-md infPic flex items-center justify-center bg-white drop-shadow  cursor-pointer text-black wwd">
            <div>
              <div className="flex justify-center items-center rounded-md">
                <Image src={s2} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center pb-3">
                <span>11th - 12th</span>
              </div>
              <div className="text-[17px]  flex justify-center items-center pb-3">
                <span className="text-center leading-relaxed">
                  Select your ideal course & career
                </span>
              </div>
              <div className=" flex justify-center items-center pb-3">
                <Link href="/login">
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-4 rounded-md ">
                    <button className="font-medium">Continuous learning</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" rounded-md infPic flex items-center justify-center bg-white drop-shadow  cursor-pointer text-black wwd">
            <div>
              <div className="flex justify-center items-center rounded-md">
                <Image src={s3} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center pb-3">
                <span>Engineering</span>
              </div>
              <div className="text-[17px]  flex justify-center items-center pb-3">
                <span className="text-center leading-relaxed">
                  Choose your ideal stream & subjects
                </span>
              </div>
              <div className=" flex justify-center items-center pb-3">
                <Link href="/login">
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-4 rounded-md ">
                    <button className="font-medium">Master Your code</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" rounded-md infPic flex items-center justify-center bg-white drop-shadow  cursor-pointer text-black wwd">
            <div>
              <div className="flex justify-center items-center rounded-md">
                <Image src={s1} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center pb-3">
                <span>Upgrade Skill </span>
              </div>
              <div className="text-[17px]  flex justify-center items-center pb-3">
                <span className="text-center leading-relaxed">
                  Finalize your career growth trajectory.
                </span>
              </div>
              <div className=" flex justify-center items-center pb-3">
                <Link href="/login">
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-4 rounded-md ">
                    <button className="font-medium">Lets Empower</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" rounded-md infPic flex items-center justify-center bg-white drop-shadow  cursor-pointer text-black wwd">
            <div>
              <div className="flex justify-center items-center rounded-md">
                <Image src={s1} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center pb-3">
                <span>Competetive Exams</span>
              </div>
              <div className="text-[17px]  flex justify-center items-center pb-3">
                <span className="text-center leading-relaxed">
                  Finalize your career growth trajectory.
                </span>
              </div>
              <div className=" flex justify-center items-center pb-3">
                <Link href="/login">
                  <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-4 rounded-md ">
                    <button className="font-medium">Ace the exam</button>
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
      <div className="p-4 h-auto">
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
            <div className="w-full ">
              <OngoingSlider
                tittle="Unlock Your Coding Potential: Virtual Coding Bootcamp"
                sub=" Learn the latest coding skills and technologies from industry experts"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <OngoingSlider
                tittle="Get ahead of the competition with our comprehensive NCERT summary classes"
                sub="Don't let your studies fall behind - apply now for our NCERT summary classes and stay on top of your curriculum."
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <OngoingSlider
                tittle="Master the UPSC GS History Syllabus: Online Course"
                sub="Ready to take your UPSC GS History knowledge to the next level? Apply now for our online course and gain a deep understanding of the key concepts, events, and personalities that shape India's history"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <OngoingSlider
                tittle="Code Your Future: Coding Classes for Kids"
                sub="Give your child a head start in the digital age by enrolling them in our coding classes for kids. Our fun and interactive curriculum is designed to teach children the basics of coding and problem-solving in a way that is both engaging and easy to understand. Apply now and see your child's potential unfold! Limited spots available, sign up today"
              />
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
          Assess yourself
        </span>
      </div>
      <div className="p-4 w-[100%] ">
        <div className="flex justify-center items-center">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
            <div className="p-5 rounded-md infPic flex items-center justify-center bg-white drop-shadow  cursor-pointer text-black wwd">
              <div>
                <div className="flex justify-center items-center rounded-md">
                  <Image src={s1} width={100} height={100} />
                </div>
                <div className="text-[20px] font-medium flex justify-center items-center pb-3">
                  <span>NCERT Test</span>
                </div>
                <div className="text-[17px]  flex justify-center items-center pb-3">
                  <span className="text-center leading-relaxed">
                    Assess your knowledge and understanding of the NCERT
                    curriculum
                  </span>
                </div>
                <div className=" flex justify-center items-center pb-3">
                  <Link href="/login">
                    <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-2 px-4 rounded-md ">
                      <button className="font-medium">Learn & Grow</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-md infPic flex items-center justify-center bg-white drop-shadow  cursor-pointer text-black wwd">
              <div>
                <div className="flex justify-center items-center rounded-md">
                  <Image src={s2} width={100} height={100} />
                </div>
                <div className="text-[20px] font-medium flex justify-center items-center pb-3">
                  <span>UPSC </span>
                </div>
                <div className="text-[17px]  flex justify-center items-center pb-3">
                  <span className="text-center leading-relaxed">
                    Assess an individual's knowledge and understanding of the
                    subjects covered in the UPSC Civil Services Examination.
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
            <div className="p-5 rounded-md infPic flex items-center justify-center bg-white drop-shadow  cursor-pointer text-black wwd">
              <div>
                <div className="flex justify-center items-center rounded-md">
                  <Image src={s3} width={100} height={100} />
                </div>
                <div className="text-[20px] font-medium flex justify-center items-center pb-3">
                  <span>Coding</span>
                </div>
                <div className="text-[17px]  flex justify-center items-center pb-3">
                  <span className="text-center leading-relaxed">
                    Evaluate your coding skills and identify areas for
                    improvement
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
            <div className="p-5 rounded-md infPic flex items-center justify-center bg-white drop-shadow  cursor-pointer text-black wwd">
              <div>
                <div className="flex justify-center items-center rounded-md">
                  <Image src={s1} width={100} height={100} />
                </div>
                <div className="text-[20px] font-medium flex justify-center items-center pb-3">
                  <span>Skill fit</span>
                </div>
                <div className="text-[17px]  flex justify-center items-center pb-3">
                  <span className="text-center leading-relaxed">
                    Take our Skill-Based Assessment Test and find out
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
        <div>
          <div className="">
            <div className="lg:flex justify-center items-start  p-4">
              <div className="lg:flex lg:justify-between lg:items-center px-0">
                <div className="w-auto h-auto p-1 ">
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:gap-6 lg:gap-5 sm:gap-4 gap-4">
                    <div className="  rounded-md flex items-center justify-center">
                      <span className="xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-medium text-center lg:text-left xl:text-left">
                        Most reliable career guidance platform
                      </span>
                    </div>
                    <div className="xl:text-[26px] lg:text-[25px] sm:text-[25px] text-[18px] flex items-center justify-start text-center lg:text-left xl:text-left">
                      <span>Let us Learn- Practice & Grow together</span>
                    </div>
                    <div className=" rounded-md flex items-center justify-center lg:justify-start xl:justify-start pt-4">
                      <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-3 px-6  rounded-md ">
                        <button className="font-medium">Signup </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-auto h-auto ">
                  <Player
                    autoplay
                    loop
                    src="https://assets4.lottiefiles.com/packages/lf20_ikvz7qhc.json"
                    className=" xl:w-[400px] xl:h-[400px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
                  ></Player>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-bold text-center">
          Most reliable career guidance platform
        </div>
        <div className="px-4 flex justify-center items-center">
          <span className="xl:text-[32px] lg:text-[22px] sm:text-[22px] text-[10px] text-[#333] font-medium text-center">
            Let us Learn- Practice & Grow together
          </span>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/login">
            <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-3 px-7 rounded-md ">
              <button className="font-medium">Signup</button>
            </div>
          </Link>
        </div> */}
      </div>
      <div className="pb-4 pl-4 pr-4">
        <div className="flex justify-center items-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-bold text-center">
          Explore Your Career Goals
        </div>
        <div className="flex justify-center items-center">
          <Image src={paint} />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-center items-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-bold text-center">
          Here's why they love Learning Ways
        </div>
        <div className="px-4 flex justify-center items-center pb-7">
          <span className="xl:text-[32px] lg:text-[22px] sm:text-[22px] text-[10px] text-[#333] font-medium text-center">
            Hear from the people who have experienced the benefits of our
            Product/Service first hand
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          <div className="p-5 rounded-md infPic flex items-center justify-center bg-[#085464] drop-shadow  cursor-pointer text-white wwd">
            <div>
              <div className="flex justify-center items-center rounded-md">
                <Image src={kid} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center pb-3">
                <span>kid</span>
              </div>
              <div className="text-[17px]  flex justify-center items-center pb-3">
                <span className="text-center leading-relaxed">
                  "I used to think coding was boring, but this program made it
                  so much fun! I love being able to bring my ideas to life with
                  code. I can't wait to show my friends and family all the cool
                  things I've made
                </span>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-md infPic flex items-center justify-center bg-[#085464] drop-shadow  cursor-pointer text-white wwd">
            <div>
              <div className="flex justify-center items-center rounded-md">
                <Image src={upsc} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center pb-3">
                <span>UPSC Aspirant </span>
              </div>
              <div className="text-[17px]  flex justify-center items-center pb-3">
                <span className="text-center leading-relaxed">
                  This program helped me understand UPSC concepts better and
                  manage my time efficiently. I cleared the exam in my first
                  attempt, I highly recommend it for UPSC aspirants.
                </span>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-md infPic flex items-center justify-center bg-[#085464] drop-shadow  cursor-pointer text-white wwd">
            <div>
              <div className="flex justify-center items-center rounded-md">
                <Image src={parent} width={100} height={100} />
              </div>
              <div className="text-[20px] font-medium flex justify-center items-center pb-3">
                <span>Parent</span>
              </div>
              <div className="text-[17px]  flex justify-center items-center pb-3">
                <span className="text-center leading-relaxed">
                  "As parents, we were always worried about our child's studies
                  and their ability to understand the concepts. But this program
                  has made such a huge difference. Our child is now able to
                  understand the material better, retain information longer and
                  even enjoys studying
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-center items-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-bold text-center pb-7">
          Expertise and Passion: Meet the team of mentors dedicated to helping
          you achieve your dreams
        </div>

        {/* <div className="px-4 flex justify-center items-center pb-4">
          <span className="xl:text-[32px] lg:text-[22px] sm:text-[22px] text-[10px] text-[#333] font-medium text-center">
            Get to know the talented and thoroughly trained experts who will
            guide you towards your ideal future path.
          </span>
        </div> */}
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
      {/* <div className="p-4">
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
      </div> */}

      <Footer />
    </div>
  );
};

export default Index;
// https://assets4.lottiefiles.com/packages/lf20_ikvz7qhc.json
