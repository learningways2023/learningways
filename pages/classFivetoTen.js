import React from "react";
import Navbar from "../components/navbar";
import filter from "../public/filter.png";
import Image from "next/image";
import PremiumCourseCard from "../components/premiumCourseCard";
import Footer from "../components/footer";
import face from "../public/facebook.png";
import insta from "../public/insta.png";
import { useRouter } from "next/router";
import linked from "../public/linkedin.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import UpcommingCard from "../components/upcommingCard";
import twitter from "../public/twitter.png";
import dbms from "../public/dbms.png";
import john from "../public/john.png";
import Uparrow from "../components/uparrow";
const ClassFivetoTen = () => {
  const router = useRouter();
  const classes =
    "border-2 border-[#085464] text-[#085464] text-base font-medium w-full h-full rounded-md focus:ring-[#085464] focus:border-[#085464]  block py-2.5 lg:px-5 xl:px-5 px-12 ";
  const FormHeader = (props) => (
    <h2 className="font-[500] text-[#085464] xl:text-[40px] lg:text-[32px] sm:text-[32px] text-[20px]">
      {props.title}
    </h2>
  );
  return (
    <div>
      <Navbar />
      <Uparrow url="classFivetoTen" />
      <div className="px-4 py-9 lg:px-7 xl:px-7 min-h-[50vh]">
        <div className="py-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#coding");
              }}
            >
              Coding Course
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              NCERT
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#private_tutor");
              }}
            >
              Private Tutoring
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#personality_developement");
              }}
            >
              Personality Development
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#quiz");
              }}
            >
              Quiz Section
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#join");
              }}
            >
              Join Community
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#materials");
              }}
            >
              Reading Materials
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen/#summer_camp");
              }}
            >
              Summer Camp
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-9 lg:px-7 xl:px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div
          id="coding"
          className="text-[#085464] font-medium flex  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[30px] text-[20px] lg:text-left xl:text-left"
        >
          Coding Course
        </div>
        <div className="p-4 flex-row md:flex lg:flex xl:flex justify-center  md:justify-between xl:justify-between lg:justify-between space-x-4 md:items-center ">
          <div className="py-2 md:py-0 lg:py-0 xl:py-0 flex justify-center items-center ">
            <div className="w-[130px] h-[50px] bg-[#085464] rounded-xl flex justify-center items-center cursor-pointer">
              <div>
                <Image src={filter} width={20} height={20} />
              </div>
              <div className="pl-3 text-[20px] text-white">Grades</div>
            </div>
          </div>
          <div className="py-2 md:py-0 lg:py-0 xl:py-0 flex justify-center items-center">
            <div className="min-w-[130px] h-[50px] p-2 bg-[#085464] rounded-xl flex justify-center items-center cursor-pointer">
              <div>
                <Image src={filter} width={20} height={20} />
              </div>
              <div className="pl-3 text-[20px] text-white">All Languages</div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-9 lg:px-7 xl:px-7 w-full flex flex-wrap ">
        <PremiumCourseCard
          img={dbms}
          tittle="Introduction to Digital Marketing"
          s1="Learn the basics of digital marketing, including web design, search engine optimization, social media, and online advertising."
          s2="Understand the importance of digital marketing in today's business environment"
          array={[
            "Understand the importance of digital marketing in today's business environment",
            "Learn the different channels and tactics used in digital marketing",
            "Discover how to create a digital marketing strategy",
            "Learn the basics of website design and optimization",
            "Understand the role of search engine optimization (SEO) in digital marketing",
            "Learn how to use social media for business",
            "Understand the basics of online advertising, including pay-per-click and display advertising",
            "Learn how to measure and analyze the effectiveness of your digital marketing efforts",
            "Discover how to stay up-to-date with the latest digital marketing trends and best practices",
          ]}
        />
        <PremiumCourseCard
          img={dbms}
          tittle="Introduction to Digital Marketing"
          s1="Learn the basics of digital marketing, including web design, search engine optimization, social media, and online advertising."
          s2="Understand the importance of digital marketing in today's business environment"
          array={[
            "Understand the importance of digital marketing in today's business environment",
            "Learn the different channels and tactics used in digital marketing",
            "Discover how to create a digital marketing strategy",
            "Learn the basics of website design and optimization",
            "Understand the role of search engine optimization (SEO) in digital marketing",
            "Learn how to use social media for business",
            "Understand the basics of online advertising, including pay-per-click and display advertising",
            "Learn how to measure and analyze the effectiveness of your digital marketing efforts",
            "Discover how to stay up-to-date with the latest digital marketing trends and best practices",
          ]}
        />
        <PremiumCourseCard
          img={dbms}
          tittle="Introduction to Digital Marketing"
          s1="Learn the basics of digital marketing, including web design, search engine optimization, social media, and online advertising."
          s2="Understand the importance of digital marketing in today's business environment"
          array={[
            "Understand the importance of digital marketing in today's business environment",
            "Learn the different channels and tactics used in digital marketing",
            "Discover how to create a digital marketing strategy",
            "Learn the basics of website design and optimization",
            "Understand the role of search engine optimization (SEO) in digital marketing",
            "Learn how to use social media for business",
            "Understand the basics of online advertising, including pay-per-click and display advertising",
            "Learn how to measure and analyze the effectiveness of your digital marketing efforts",
            "Discover how to stay up-to-date with the latest digital marketing trends and best practices",
          ]}
        />
      </div>
      <div className=" min-h-[70vh]">
        <div className="px-4 py-9 lg:px-7 xl:px-7 text-[#085464] font-medium flex justify-center items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[30px] text-[20px] lg:text-left xl:text-left">
          Testimonials
        </div>
        <div className="px-4 py-9 lg:px-7 xl:px-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <div className="py-5 w-full flex justify-center items-center">
            <div className=" w-[300px] lg:w-[600px] xl:w-[600px] min-h-[200px] bg-white border border-1 border-gray-300 rounded-lg drop-shadow-2xl cursor-pointer text-[#085464] hover:bg-[#085464] flex-row p-3 hover:text-white wwd1 justify-center items-center text-center text-xl">
              <div className="flex justify-center items-center text-center py-4 ">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
                Wikipedia{" "}
              </div>
              <div className=" flex-row md:flex lg:flex xl:flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <Image src={john} width={100} height={100} />
                </div>
                <div className="pl-5">
                  <div className="lg:text-lg md:text-lg text-base  font-semibold">
                    Danielle Dodder | Parent, Naples, FL
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 w-full flex justify-center items-center">
            <div className=" w-[300px] lg:w-[600px] xl:w-[600px] min-h-[200px] border border-1 border-gray-300 bg-white rounded-lg drop-shadow-2xl cursor-pointer text-[#085464] hover:bg-[#085464] flex-row p-3 hover:text-white wwd1 justify-center items-center text-center text-xl">
              <div className="flex justify-center items-center text-center py-4 ">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
                Wikipedia{" "}
              </div>
              <div className=" flex-row md:flex lg:flex xl:flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <Image src={john} width={100} height={100} />
                </div>
                <div className="pl-5">
                  <div className="lg:text-lg md:text-lg text-base  font-semibold">
                    Danielle Dodder | Parent, Naples, FL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="private_tutor"
        className="px-4 py-9 lg:px-7 xl:px-7  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
      >
        <div className="text-[#085464] font-medium flex  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[30px] text-[20px] lg:text-left xl:text-left">
          Private Tutor
        </div>
        <div className="p-4 flex-row md:flex lg:flex xl:flex justify-center  md:justify-between xl:justify-between lg:justify-between space-x-4 md:items-center ">
          <div className="py-2 md:py-0 lg:py-0 xl:py-0 flex justify-center items-center ">
            <div className="w-[130px] h-[50px] bg-[#085464] rounded-xl flex justify-center items-center cursor-pointer">
              <div>
                <Image src={filter} width={20} height={20} />
              </div>
              <div className="pl-3 text-[20px] text-white">Grades</div>
            </div>
          </div>
          <div className="py-2 md:py-0 lg:py-0 xl:py-0 flex justify-center items-center">
            <div className="min-w-[130px] h-[50px] p-2 bg-[#085464] rounded-xl flex justify-center items-center cursor-pointer">
              <div>
                <Image src={filter} width={20} height={20} />
              </div>
              <div className="pl-3 text-[20px] text-white">
                Choose your Tutor
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-9 lg:px-7 xl:px-7 min-h-[70vh] flex justify-center items-center">
        <div className="p-4 w-[300px] md:w-10/12 lg:w-10/12 xl:w-10/12 min-h-[400px] border border-1 border-gray-300 bg-white rounded-lg drop-shadow-2xl cursor-pointer text-[#085464] hover:bg-[#085464] flex-row  hover:text-white wwd1 justify-center items-center text-center text-xl">
          <div className="flex justify-center items-center text-center py-4 ">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. Wikipedia In
            publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. Wikipedia In
            publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. Wikipedia
          </div>
          <div className=" flex-row md:flex lg:flex xl:flex items-center justify-center">
            <div className="flex justify-center items-center">
              <Image src={john} width={100} height={100} />
            </div>
            <div className="pl-5">
              <div className="lg:text-lg md:text-lg text-base  font-semibold">
                Christina , LosAngeles, CA
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-9 lg:px-7 xl:px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div
          id="personality_developement"
          className="text-[#085464] font-medium flex  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[30px] text-[20px] lg:text-left xl:text-left"
        >
          Personality Development
        </div>
        <div className="p-4 flex-row md:flex lg:flex xl:flex justify-center  md:justify-between xl:justify-between lg:justify-between space-x-4 md:items-center ">
          <div className="py-2 md:py-0 lg:py-0 xl:py-0 flex justify-center items-center ">
            <div className="w-[130px] h-[50px] bg-[#085464] rounded-xl flex justify-center items-center cursor-pointer">
              <div>
                <Image src={filter} width={20} height={20} />
              </div>
              <div className="pl-3 text-[20px] text-white">Grades</div>
            </div>
          </div>
          <div className="py-2 md:py-0 lg:py-0 xl:py-0 flex justify-center items-center">
            <div className="min-w-[130px] h-[50px] p-2 bg-[#085464] rounded-xl flex justify-center items-center cursor-pointer">
              <div>
                <Image src={filter} width={20} height={20} />
              </div>
              <div className="pl-3 text-[20px] text-white">Course Name</div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-9 lg:px-7 xl:px-7 w-full flex flex-wrap ">
        <PremiumCourseCard
          img={dbms}
          tittle="Introduction to Digital Marketing"
          s1="Learn the basics of digital marketing, including web design, search engine optimization, social media, and online advertising."
          s2="Understand the importance of digital marketing in today's business environment"
          array={[
            "Understand the importance of digital marketing in today's business environment",
            "Learn the different channels and tactics used in digital marketing",
            "Discover how to create a digital marketing strategy",
            "Learn the basics of website design and optimization",
            "Understand the role of search engine optimization (SEO) in digital marketing",
            "Learn how to use social media for business",
            "Understand the basics of online advertising, including pay-per-click and display advertising",
            "Learn how to measure and analyze the effectiveness of your digital marketing efforts",
            "Discover how to stay up-to-date with the latest digital marketing trends and best practices",
          ]}
        />
        <PremiumCourseCard
          img={dbms}
          tittle="Introduction to Digital Marketing"
          s1="Learn the basics of digital marketing, including web design, search engine optimization, social media, and online advertising."
          s2="Understand the importance of digital marketing in today's business environment"
          array={[
            "Understand the importance of digital marketing in today's business environment",
            "Learn the different channels and tactics used in digital marketing",
            "Discover how to create a digital marketing strategy",
            "Learn the basics of website design and optimization",
            "Understand the role of search engine optimization (SEO) in digital marketing",
            "Learn how to use social media for business",
            "Understand the basics of online advertising, including pay-per-click and display advertising",
            "Learn how to measure and analyze the effectiveness of your digital marketing efforts",
            "Discover how to stay up-to-date with the latest digital marketing trends and best practices",
          ]}
        />
        <PremiumCourseCard
          img={dbms}
          tittle="Introduction to Digital Marketing"
          s1="Learn the basics of digital marketing, including web design, search engine optimization, social media, and online advertising."
          s2="Understand the importance of digital marketing in today's business environment"
          array={[
            "Understand the importance of digital marketing in today's business environment",
            "Learn the different channels and tactics used in digital marketing",
            "Discover how to create a digital marketing strategy",
            "Learn the basics of website design and optimization",
            "Understand the role of search engine optimization (SEO) in digital marketing",
            "Learn how to use social media for business",
            "Understand the basics of online advertising, including pay-per-click and display advertising",
            "Learn how to measure and analyze the effectiveness of your digital marketing efforts",
            "Discover how to stay up-to-date with the latest digital marketing trends and best practices",
          ]}
        />
      </div>
      <div className=" min-h-[70vh]">
        <div className="text-[#085464] px-4 py-9 lg:px-7 xl:px-7 font-medium flex justify-center items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[30px] text-[20px] lg:text-left xl:text-left">
          Testimonials
        </div>
        <div className="px-4 py-9 lg:px-7 xl:px-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <div className="py-5 w-full flex justify-center items-center">
            <div className=" w-[300px] lg:w-[600px] xl:w-[600px] min-h-[200px] bg-white border border-1 border-gray-300 rounded-lg drop-shadow-2xl cursor-pointer text-[#085464] hover:bg-[#085464] flex-row p-3 hover:text-white wwd1 justify-center items-center text-center text-xl">
              <div className="flex justify-center items-center text-center py-4 ">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
                Wikipedia{" "}
              </div>
              <div className=" flex-row md:flex lg:flex xl:flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <Image src={john} width={100} height={100} />
                </div>
                <div className="pl-5">
                  <div className="lg:text-lg md:text-lg text-base  font-semibold">
                    Danielle Dodder | Parent, Naples, FL
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 w-full flex justify-center items-center">
            <div className=" w-[300px] lg:w-[600px] xl:w-[600px] min-h-[200px] border border-1 border-gray-300 bg-white rounded-lg drop-shadow-2xl cursor-pointer text-[#085464] hover:bg-[#085464] flex-row p-3 hover:text-white wwd1 justify-center items-center text-center text-xl">
              <div className="flex justify-center items-center text-center py-4 ">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
                Wikipedia{" "}
              </div>
              <div className=" flex-row md:flex lg:flex xl:flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <Image src={john} width={100} height={100} />
                </div>
                <div className="pl-5">
                  <div className="lg:text-lg md:text-lg text-base  font-semibold">
                    Danielle Dodder | Parent, Naples, FL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="quiz"
        className="text-[#085464] px-4 py-9 lg:px-7 xl:px-7 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[30px] text-[20px] lg:text-left xl:text-left"
      >
        Quiz Section
      </div>

      <div className="px-4 py-9 lg:px-7 xl:px-7 w-full flex flex-wrap ">
        <PremiumCourseCard
          img={dbms}
          tittle="Introduction to Digital Marketing"
          s1="Learn the basics of digital marketing, including web design, search engine optimization, social media, and online advertising."
          s2="Understand the importance of digital marketing in today's business environment"
          array={[
            "Understand the importance of digital marketing in today's business environment",
            "Learn the different channels and tactics used in digital marketing",
            "Discover how to create a digital marketing strategy",
            "Learn the basics of website design and optimization",
            "Understand the role of search engine optimization (SEO) in digital marketing",
            "Learn how to use social media for business",
            "Understand the basics of online advertising, including pay-per-click and display advertising",
            "Learn how to measure and analyze the effectiveness of your digital marketing efforts",
            "Discover how to stay up-to-date with the latest digital marketing trends and best practices",
          ]}
        />
        <PremiumCourseCard
          img={dbms}
          tittle="Introduction to Digital Marketing"
          s1="Learn the basics of digital marketing, including web design, search engine optimization, social media, and online advertising."
          s2="Understand the importance of digital marketing in today's business environment"
          array={[
            "Understand the importance of digital marketing in today's business environment",
            "Learn the different channels and tactics used in digital marketing",
            "Discover how to create a digital marketing strategy",
            "Learn the basics of website design and optimization",
            "Understand the role of search engine optimization (SEO) in digital marketing",
            "Learn how to use social media for business",
            "Understand the basics of online advertising, including pay-per-click and display advertising",
            "Learn how to measure and analyze the effectiveness of your digital marketing efforts",
            "Discover how to stay up-to-date with the latest digital marketing trends and best practices",
          ]}
        />
        <PremiumCourseCard
          img={dbms}
          tittle="Introduction to Digital Marketing"
          s1="Learn the basics of digital marketing, including web design, search engine optimization, social media, and online advertising."
          s2="Understand the importance of digital marketing in today's business environment"
          array={[
            "Understand the importance of digital marketing in today's business environment",
            "Learn the different channels and tactics used in digital marketing",
            "Discover how to create a digital marketing strategy",
            "Learn the basics of website design and optimization",
            "Understand the role of search engine optimization (SEO) in digital marketing",
            "Learn how to use social media for business",
            "Understand the basics of online advertising, including pay-per-click and display advertising",
            "Learn how to measure and analyze the effectiveness of your digital marketing efforts",
            "Discover how to stay up-to-date with the latest digital marketing trends and best practices",
          ]}
        />
      </div>
      <div className=" min-h-[70vh]">
        <div className="text-[#085464] px-4 py-9 lg:px-7 xl:px-7 font-medium flex justify-center items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[30px] text-[20px] lg:text-left xl:text-left">
          Testimonials
        </div>
        <div className="px-4 py-9 lg:px-7 xl:px-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <div className="py-5 w-full flex justify-center items-center">
            <div className=" w-[300px] lg:w-[600px] xl:w-[600px] min-h-[200px] bg-white border border-1 border-gray-300 rounded-lg drop-shadow-2xl cursor-pointer text-[#085464] hover:bg-[#085464] flex-row p-3 hover:text-white wwd1 justify-center items-center text-center text-xl">
              <div className="flex justify-center items-center text-center py-4 ">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
                Wikipedia{" "}
              </div>
              <div className=" flex-row md:flex lg:flex xl:flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <Image src={john} width={100} height={100} />
                </div>
                <div className="pl-5">
                  <div className="lg:text-lg md:text-lg text-base  font-semibold">
                    Danielle Dodder | Parent, Naples, FL
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 w-full flex justify-center items-center">
            <div className=" w-[300px] lg:w-[600px] xl:w-[600px] min-h-[200px] border border-1 border-gray-300 bg-white rounded-lg drop-shadow-2xl cursor-pointer text-[#085464] hover:bg-[#085464] flex-row p-3 hover:text-white wwd1 justify-center items-center text-center text-xl">
              <div className="flex justify-center items-center text-center py-4 ">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
                Wikipedia{" "}
              </div>
              <div className=" flex-row md:flex lg:flex xl:flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <Image src={john} width={100} height={100} />
                </div>
                <div className="pl-5">
                  <div className="lg:text-lg md:text-lg text-base  font-semibold">
                    Danielle Dodder | Parent, Naples, FL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="join" className="w-full min-h-[60vh] bg-[#085464] ">
        <div className="text-[#ffff] py-4 font-medium flex justify-center items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[30px] text-[20px] lg:text-left xl:text-left">
          Join Community
        </div>
        <div className="flex justify-center items-center text-center py-4 xl:text-[35px] lg:text-[35px] sm:text-[30px] text-[16px] text-white px-4">
          A community is a group of people living in a particular area. A
          community can be made up of a large or small group of people. T he
          land area of a community can also be large or small.
        </div>
        <div className="flex justify-center items-center pt-7">
          <div className="grid grid-cols-4 gap-3">
            <div className="flex  items-center cursor-pointer ">
              <Image src={face} width={60} height={60} />
            </div>
            <div className="flex  items-center cursor-pointer">
              <Image src={insta} width={60} height={60} />
            </div>
            <div className="flex  items-center cursor-pointer">
              <Image src={linked} width={60} height={60} />
            </div>
            <div className="flex  items-center cursor-pointer">
              <Image src={twitter} width={60} height={60} />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-9 lg:px-7 xl:px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="text-[#085464] font-medium flex  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[30px] text-[20px] lg:text-left xl:text-left">
          Upcomming Events
        </div>
        <div className="p-4 flex-row md:flex lg:flex xl:flex justify-center  md:justify-between xl:justify-between lg:justify-between space-x-4 md:items-center ">
          <div className="py-2 md:py-0 lg:py-0 xl:py-0 flex justify-center items-center ">
            <div className="w-[130px] h-[50px] bg-[#085464] rounded-xl flex justify-center items-center cursor-pointer">
              <div>
                <Image src={filter} width={20} height={20} />
              </div>
              <div className="pl-3 text-[20px] text-white">Grades</div>
            </div>
          </div>
          <div className="py-2 md:py-0 lg:py-0 xl:py-0 flex justify-center items-center">
            <div className="min-w-[130px] h-[50px] p-2 bg-[#085464] rounded-xl flex justify-center items-center cursor-pointer">
              <div>
                <Image src={filter} width={20} height={20} />
              </div>
              <div className="pl-3 text-[20px] text-white">Search Events</div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-9 lg:px-7 xl:px-7 w-full flex flex-wrap">
        <UpcommingCard
          img={dbms}
          tittle="International Yoga Day"
          s1="Learn the basics of digital marketing, including web design, search engine optimization, social media, and online advertising."
          s2="Understand the importance of digital marketing in today's business environment"
          array={[
            "Understand the importance of digital marketing in today's business environment",
            "Learn the different channels and tactics used in digital marketing",
            "Discover how to create a digital marketing strategy",
            "Learn the basics of website design and optimization",
            "Understand the role of search engine optimization (SEO) in digital marketing",
            "Learn how to use social media for business",
            "Understand the basics of online advertising, including pay-per-click and display advertising",
            "Learn how to measure and analyze the effectiveness of your digital marketing efforts",
            "Discover how to stay up-to-date with the latest digital marketing trends and best practices",
          ]}
        />
        <UpcommingCard
          img={dbms}
          tittle="International Yoga Day"
          s1="Learn the basics of digital marketing, including web design, search engine optimization, social media, and online advertising."
          s2="Understand the importance of digital marketing in today's business environment"
          array={[
            "Understand the importance of digital marketing in today's business environment",
            "Learn the different channels and tactics used in digital marketing",
            "Discover how to create a digital marketing strategy",
            "Learn the basics of website design and optimization",
            "Understand the role of search engine optimization (SEO) in digital marketing",
            "Learn how to use social media for business",
            "Understand the basics of online advertising, including pay-per-click and display advertising",
            "Learn how to measure and analyze the effectiveness of your digital marketing efforts",
            "Discover how to stay up-to-date with the latest digital marketing trends and best practices",
          ]}
        />
        <UpcommingCard
          img={dbms}
          tittle="International Yoga Day"
          s1="Learn the basics of digital marketing, including web design, search engine optimization, social media, and online advertising."
          s2="Understand the importance of digital marketing in today's business environment"
          array={[
            "Understand the importance of digital marketing in today's business environment",
            "Learn the different channels and tactics used in digital marketing",
            "Discover how to create a digital marketing strategy",
            "Learn the basics of website design and optimization",
            "Understand the role of search engine optimization (SEO) in digital marketing",
            "Learn how to use social media for business",
            "Understand the basics of online advertising, including pay-per-click and display advertising",
            "Learn how to measure and analyze the effectiveness of your digital marketing efforts",
            "Discover how to stay up-to-date with the latest digital marketing trends and best practices",
          ]}
        />
      </div>
      <div className="pt-9"></div>
      <div
        id="summer_camp"
        className="px-4 py-9 lg:px-7 xl:px-7 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1"
      >
        <div className="text-[#085464]  flex-row  items-center text-center  lg:text-left xl:text-left">
          <div className="xl:text-[42px] font-medium lg:text-[32px] sm:text-[32px] text-[20px]">
            Summer Camps
          </div>
          <div className="text-lg md:text-xl lg:text-xl xl:text-xl pt-7 pb-4">
            Summer camp is a community where children come together to have fun
            while learning lifelong lessons. T he setting of the camp is such
            that children start developing a sense of independence while trying
            ne w adventures. Summer camps are known for their safe environment
            and the fun activities for kids that they provide.
          </div>
        </div>
        <div className="p-4 flex-row md:flex lg:flex xl:flex justify-center  md:justify-between xl:justify-between lg:justify-between space-x-4 md:items-center ">
          <div className="py-2 md:py-0 lg:py-0 xl:py-0 flex justify-center items-center ">
            <div className="w-[130px] h-[50px] bg-[#085464] rounded-xl flex justify-center items-center cursor-pointer">
              <div>
                <Image src={filter} width={20} height={20} />
              </div>
              <div className="pl-3 text-[16px] text-white">Grades</div>
            </div>
          </div>
          <div className="py-2 md:py-0 lg:py-0 xl:py-0 flex justify-center items-center">
            <div className="min-w-[130px] h-[50px] p-2 bg-[#085464] rounded-xl flex justify-center items-center cursor-pointer">
              <div>
                <Image src={filter} width={20} height={20} />
              </div>
              <div className="pl-3 text-[16px] text-white">
                Choose Your Favourite
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-9 lg:px-7 xl:px-7 w-full flex flex-wrap ">
        <PremiumCourseCard
          img={dbms}
          tittle="Introduction to Digital Marketing"
          s1="Learn the basics of digital marketing, including web design, search engine optimization, social media, and online advertising."
          s2="Understand the importance of digital marketing in today's business environment"
          array={[
            "Understand the importance of digital marketing in today's business environment",
            "Learn the different channels and tactics used in digital marketing",
            "Discover how to create a digital marketing strategy",
            "Learn the basics of website design and optimization",
            "Understand the role of search engine optimization (SEO) in digital marketing",
            "Learn how to use social media for business",
            "Understand the basics of online advertising, including pay-per-click and display advertising",
            "Learn how to measure and analyze the effectiveness of your digital marketing efforts",
            "Discover how to stay up-to-date with the latest digital marketing trends and best practices",
          ]}
        />
        <PremiumCourseCard
          img={dbms}
          tittle="Introduction to Digital Marketing"
          s1="Learn the basics of digital marketing, including web design, search engine optimization, social media, and online advertising."
          s2="Understand the importance of digital marketing in today's business environment"
          array={[
            "Understand the importance of digital marketing in today's business environment",
            "Learn the different channels and tactics used in digital marketing",
            "Discover how to create a digital marketing strategy",
            "Learn the basics of website design and optimization",
            "Understand the role of search engine optimization (SEO) in digital marketing",
            "Learn how to use social media for business",
            "Understand the basics of online advertising, including pay-per-click and display advertising",
            "Learn how to measure and analyze the effectiveness of your digital marketing efforts",
            "Discover how to stay up-to-date with the latest digital marketing trends and best practices",
          ]}
        />
        <PremiumCourseCard
          img={dbms}
          tittle="Introduction to Digital Marketing"
          s1="Learn the basics of digital marketing, including web design, search engine optimization, social media, and online advertising."
          s2="Understand the importance of digital marketing in today's business environment"
          array={[
            "Understand the importance of digital marketing in today's business environment",
            "Learn the different channels and tactics used in digital marketing",
            "Discover how to create a digital marketing strategy",
            "Learn the basics of website design and optimization",
            "Understand the role of search engine optimization (SEO) in digital marketing",
            "Learn how to use social media for business",
            "Understand the basics of online advertising, including pay-per-click and display advertising",
            "Learn how to measure and analyze the effectiveness of your digital marketing efforts",
            "Discover how to stay up-to-date with the latest digital marketing trends and best practices",
          ]}
        />
      </div>
      <div className="  min-h-[70vh]">
        <div className="text-[#085464] px-4 py-9 lg:px-7 xl:px-7 font-medium flex justify-center items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[30px] text-[20px] lg:text-left xl:text-left">
          Testimonials
        </div>
        <div className="px-4 py-9 lg:px-7 xl:px-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <div className="py-5 w-full flex justify-center items-center">
            <div className=" w-[300px] lg:w-[600px] xl:w-[600px] min-h-[200px] bg-white border border-1 border-gray-300 rounded-lg drop-shadow-2xl cursor-pointer text-[#085464] hover:bg-[#085464] flex-row p-3 hover:text-white wwd1 justify-center items-center text-center text-xl">
              <div className="flex justify-center items-center text-center py-4 ">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
                Wikipedia{" "}
              </div>
              <div className=" flex-row md:flex lg:flex xl:flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <Image src={john} width={100} height={100} />
                </div>
                <div className="pl-5">
                  <div className="lg:text-lg md:text-lg text-base  font-semibold">
                    Danielle Dodder | Parent, Naples, FL
                    personality_developement{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 w-full flex justify-center items-center">
            <div className=" w-[300px] lg:w-[600px] xl:w-[600px] min-h-[200px] border border-1 border-gray-300 bg-white rounded-lg drop-shadow-2xl cursor-pointer text-[#085464] hover:bg-[#085464] flex-row p-3 hover:text-white wwd1 justify-center items-center text-center text-xl">
              <div className="flex justify-center items-center text-center py-4 ">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
                Wikipedia{" "}
              </div>
              <div className=" flex-row md:flex lg:flex xl:flex items-center justify-center">
                <div className="flex justify-center items-center">
                  <Image src={john} width={100} height={100} />
                </div>
                <div className="pl-5">
                  <div className="lg:text-lg md:text-lg text-base  font-semibold">
                    Danielle Dodder | Parent, Naples, FL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#085464] px-4 py-9 lg:px-7 xl:px-7 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[30px] text-[20px] lg:text-left xl:text-left">
        Enroll your child in the best school
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="min-h-[80vh] w-11/12  bg-white drop-shadow-2xl rounded-lg border border-1 border-gray-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 ">
            <div className=" p-4 rounded-md flex items-center justify-center">
              <div className="newloginContainer">
                <div className="newLoginTop flex items-center justify-center">
                  <FormHeader title="Find School" />
                </div>
                <form
                  className="newLoginForm"
                  action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_QJ0517TP7rdLkVNpYs49aiK3qiH__gMYL8MdvoFop15jEw/formResponse"
                >
                  <label className="text-lg font-medium pb-1">Name</label>
                  <input
                    className={classes}
                    type="text"
                    name="entry.2005620554"
                    placeholder="Enter your Name"
                  />

                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg font-medium ">Contact No.</label>
                  </div>
                  <input
                    className={classes}
                    type="number"
                    name="entry.1166974658"
                    placeholder="Enter your Mobile Number"
                  />

                  <div className="flex justify-between pr-[1.5rem] pt-1 pb-3">
                    <label className="text-lg font-medium ">
                      Class Of Your Ward
                    </label>
                  </div>
                  <select className={classes} name="entry.337514865_sentine">
                    <option value="Class I">Class I</option>
                    <option value="Class II">Class II</option>
                    <option value="Class III">Class III</option>
                    <option value="Class IV">Class IV</option>
                    <option value="Class V">Class V</option>
                  </select>
                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg font-medium ">City</label>
                  </div>
                  <input
                    className={classes}
                    type="text"
                    name="entry.1045781291"
                    placeholder="Enter your Email"
                  />
                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg font-medium ">Pincode</label>
                  </div>
                  <input
                    className={classes}
                    type="number"
                    name="entry.1045781291"
                    placeholder="Enter your Email"
                  />

                  <div className=" flex justify-center items-center pt-7 pb-3  ">
                    <div className="getstarted gt text-[18px] text-white py-2 px-7 rounded-md flex justify-center items-center">
                      <button type="submit" className="font-medium">
                        Get Suggestion !
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex justify-center items-center">
              {/* https://assets6.lottiefiles.com/packages/lf20_uqsv3ztj.json */}
              <div className="  ">
                <Player
                  autoplay
                  loop
                  src="https://assets6.lottiefiles.com/packages/lf20_uqsv3ztj.json"
                  className="  xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
                ></Player>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-7"></div>
      <div className="text-[#085464] p-4 py-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[30px] text-[20px] lg:text-left xl:text-left">
        Feedback: Your Ward deserves best & we are on it .
      </div>
      <Footer />
    </div>
  );
};

export default ClassFivetoTen;
