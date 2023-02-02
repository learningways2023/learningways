import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import bullet from "../public/bulletwhite.svg";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import PremiumCourseCard from "../components/premiumCourseCard";
import dbms from "../public/dbms.png";
import ment from "../public/john.png";
import search from "../public/search.png";
import Uparrow from "../components/uparrow";
import medal from "../public/medal.png";
import bullet1 from "../public/bullet.svg";
import Image from "next/image";
const JointEntranceExam = () => {
  const classes =
    "border-2 border-[#085464] text-[#085464] text-base font-medium w-full h-full rounded-md focus:ring-[#085464] focus:border-[#085464]  block py-2.5 lg:px-6 xl:px-6 px-9 ";

  return (
    <div>
      <Navbar />
      <Uparrow url="joint_entrance_exam" />
      <div className="m-4 min-h-[100vh] bg-[#085464]">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="w-full h-full flex-row justify-center items-center">
            <div className="text-[#ffff] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
              Join the most comprehensive course
            </div>
            <div className="text-[#ffff] p-2  font-medium flex  items-center text-center xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              Interactive Classes
            </div>
            <div className="text-[#ffff] p-2  font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              Comprehensive Study Material
            </div>
            <div className="text-[#ffff] p-2  font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              Performance Analytics
            </div>
            <div className="text-[#ffff] p-2  font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              Personalized Feedback
            </div>
            <div className="text-[#ffff] p-2  font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              Mock Exams
            </div>
            <div className="text-[#ffff] p-2  font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              Study Schedules
            </div>
            <div className="text-[#ffff] p-2  font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              Online Resources
            </div>
            <div className="text-[#ffff] p-2  font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              Video Lectures.
            </div>
          </div>
          <div className=" p-4 rounded-md flex items-center justify-center pb-9">
            <div className="newloginContainer bg-white  rounded-md">
              <form
                className="newLoginForm m-4 py-7"
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
                  <label className="text-lg font-medium ">Contact </label>
                </div>
                <input
                  className={classes}
                  type="number"
                  name="entry.1045781291"
                  placeholder="Enter your Mobile Number"
                />
                <div className="flex justify-between pr-[1.5rem] pb-1">
                  <label className="text-lg font-medium ">Class</label>
                </div>
                <input
                  className={classes}
                  type="text"
                  name="entry.1166974658"
                  placeholder="Enter your Grade"
                />
                <div className="flex justify-between pr-[1.5rem] pb-1">
                  <label className="text-lg font-medium ">City</label>
                </div>
                <input
                  className={classes}
                  type="text"
                  name="entry.1166974658"
                  placeholder="Type Your City"
                />

                <div className=" flex justify-center items-center pt-7 pb-3  ">
                  <div className="getstarted gt text-[18px] text-white py-2 px-7 rounded-md flex justify-center items-center">
                    <button type="submit" className="font-medium">
                      Request a call back
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#085464] px-4 py-9 lg:px-7 xl:px-7 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
        CATEGORIES
      </div>
      <div className="px-4 py-9 lg:px-7 xl:px-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 pt-9 gap-6 ">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] focus:bg-[#085464] focus:text-white rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            JEE SYLLABUS
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            JEE NOTIFICATION
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            JEE COURSES
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            STUDY MATERIAL
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            QUIZ SECTION
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            PREVIOUS YEAR PAPERS
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            MENTORSHIP
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            TOPPERS TALK
          </div>
        </div>
      </div>
      <div className="text-[#085464] px-4 py-9 lg:px-7 xl:px-7 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
        ANNOUNUCEMENTS
      </div>
      <div className="min-h-[50vh]  px-4 py-9 lg:px-7 xl:px-7  flex-wrap justify-center items-center pb-9">
        <div className="">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-x-auto  border rounded-lg bg-white drop-shadow-2xl">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-2 py-3 text-lg font-bold text-left text-[#085464] uppercase w-4/12"
                    >
                      Event
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-lg font-bold text-left text-[#085464] uppercase w-4/12"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-lg font-bold text-left text-[#085464] uppercase w-4/12"
                    >
                      Desc
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  <tr>
                    <td className="px-2 py-4 text-lg font-medium text-gray-800 w-4/12">
                      TODAY QUIZ
                    </td>
                    <td className="px-2 py-4 text-lg text-gray-800 w-4/12">
                      Jan 31 2023
                    </td>
                    <td className="px-2 py-4 text-lg text-gray-800 w-4/12 ">
                      UPSC CSE Exam 2022 was held on June 5, 2022.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-4 text-lg font-medium text-gray-800 w-4/12">
                      Upcomming Course
                    </td>
                    <td className="px-2 py-4 text-lg text-gray-800 w-4/12">
                      Jan 31 2023
                    </td>
                    <td className="px-2 py-4 text-lg text-gray-800 w-4/12 ">
                      UPSC CSE Exam 2022 was held on June 5, 2022.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-4 text-lg font-medium text-gray-800 w-4/12">
                      Notification
                    </td>
                    <td className="px-2 py-4 text-lg text-gray-800 w-4/12">
                      Jan 31 2023
                    </td>
                    <td className="px-2 py-4 text-lg text-gray-800 w-4/12 ">
                      UPSC CSE Exam 2023
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#085464] px-4 py-9 lg:px-7 xl:px-7  font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
        JEE COURSES
      </div>
      <div className="m-4 min-h-[60vh] ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="flex  items-center">
            <div className="">
              <div className="text-[#c47993] p-2  font-medium flex  items-center text-center xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
                <Image src={bullet1} width={40} height={40} className="mr-3" />
                Interactive Classes
              </div>
              <div className="text-[#c47993] p-2  font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
                <Image src={bullet1} width={40} height={40} className="mr-3" />
                Comprehensive Study Material
              </div>
            </div>
          </div>

          <div className="w-auto h-auto ">
            <Player
              autoplay
              loop
              src="https://assets7.lottiefiles.com/packages/lf20_inti4oxf.json"
              className=" xl:w-[400px] xl:h-[400px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
            ></Player>
          </div>
        </div>
      </div>

      <div className="px-4 py-9 lg:px-7 xl:px-7">
        <div className=" p-2 py-2  font-medium flex  items-center text-center xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
          <Image src={bullet1} width={40} height={40} className="mr-3" />
          Video lectures by experienced JEE instructors
        </div>
        <div className=" p-2 py-2  font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
          <Image src={bullet1} width={40} height={40} className="mr-3" />
          Practice quizzes and mock exams to assess your learning
        </div>
        <div className=" p-2 py-2 font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
          <Image src={bullet1} width={40} height={40} className="mr-3" />
          Personalized feedback and support from instructors
        </div>
        <div className=" p-2 py-2 font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
          <Image src={bullet1} width={40} height={40} className="mr-3" />
          Study materials, including notes and interactive simulations
        </div>
        <div className=" p-2 py-2 font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
          <Image src={bullet1} width={40} height={40} className="mr-3" />
          Access to a community of JEE aspirants for peer-to-peer learning and
          support
        </div>
      </div>
      <div className="px-4 py-9 lg:px-7 xl:px-7 w-full flex flex-wrap">
        <PremiumCourseCard
          img={dbms}
          tittle="JEE Mastery: Maths    "
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
          tittle="JEE Mastery: Chemistry"
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
          tittle="JEE Mastery: Physics"
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
      <div className="text-[#085464] px-4 py-9 lg:px-7 xl:px-7 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
        What you get?
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        <div className="px-4 py-9 lg:px-7 xl:px-7">
          <div className=" p-2 py-2  font-medium flex  items-center text-center xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Concept explanations
          </div>
          <div className=" p-2 py-2  font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Practice problems
          </div>
          <div className=" p-2 py-2 font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Problem-solving strategies
          </div>
          <div className=" p-2 py-2 font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Assessments and mock tests
          </div>
          <div className=" p-2 py-2 font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Interactive sessions and mentoring
          </div>
          <div className=" p-2 py-2 font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Performance tracking.
          </div>
        </div>
        <div className="w-auto h-auto ">
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_inti4oxf.json"
            className=" xl:w-[400px] xl:h-[400px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
          ></Player>
        </div>
      </div>

      <div className="text-[#085464] px-4 py-9 lg:px-7 xl:px-7 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
        JEE PRATICE TEST
      </div>
      <div className=" px-4  lg:px-7 xl:px-7 text-[#c47993]  font-medium flex justify-center items-center text-center   xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
        Boost Your JEE Performance with JEE Mastery: Practice and Mock Test
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        <div className="px-4 py-9 lg:px-7 xl:px-7">
          <div className=" p-2 py-2  font-medium flex  items-center text-center xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Realistic JEE-style math questions
          </div>
          <div className=" p-2 py-2  font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Time-bound simulation of the JEE exam
          </div>
          <div className=" p-2 py-2 font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Detailed solution explanations
          </div>
          <div className=" p-2 py-2 font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Performance analysis and feedback
          </div>
          <div className=" p-2 py-2 font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Opportunity to identify strengths and weaknesses
          </div>
          <div className=" p-2 py-2 font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Improved test-taking skills and confidence.
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

      <div className="px-4 py-9 lg:px-7 xl:px-7 w-full flex flex-wrap">
        <PremiumCourseCard
          img={dbms}
          tittle="JEE Mastery: Maths    "
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
          tittle="JEE Mastery: Chemistry"
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
          tittle="JEE Mastery: Physics"
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
      <div className="text-[#085464] px-4 py-9 lg:px-7 xl:px-7 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
        Study Material
      </div>
      <div className="px-4 lg:px-7 xl:px-7 text-[#c47993]  font-medium flex justify-center items-center text-center   xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
        A comprehensive study material designed to help students prepare for the
        Physics, Chemistry & Mathematics section of the Joint Entrance
        Examination (JEE)
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        <div className="px-4 py-9 lg:px-7 xl:px-7">
          <div className=" p-2 py-2  font-medium flex  items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Detailed explanations of mathematical concepts and theories
          </div>
          <div className=" p-2 py-2  font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Practice problems and sample questions
          </div>
          <div className=" p-2 py-2 font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Strategies for solving math problems efficiently
          </div>
          <div className=" p-2 py-2 font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Performance tracking and analysis tools
          </div>
          <div className=" p-2 py-2 font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Summary of important formulas and concepts
          </div>
          <div className=" p-2 py-2 font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
            <Image src={bullet1} width={40} height={40} className="mr-3" />
            Regular assessments and mock tests
          </div>
        </div>
        <div className="w-auto flex justify-center items-center h-auto ">
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_inti4oxf.json"
            className=" xl:w-[400px] xl:h-[400px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
          ></Player>
        </div>
      </div>

      <div className="text-[#085464] px-4 py-9 lg:px-7 xl:px-7 font-medium flex justify-start  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
        Download Here
      </div>
      <div className="p-4 lg:px-7 xl:px-7 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-black">
        JEE Physics Chapter Wise Material -{" "}
        <span className="text-[#c47993] cursor-pointer">
          Click here to Download
        </span>
      </div>
      <div className="p-4 lg:px-7 xl:px-7 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-black">
        JEE Chemistry Chapter Wise Material-{" "}
        <span className="text-[#c47993] cursor-pointer">
          Click here to Download
        </span>
      </div>
      <div className="p-4 lg:px-7 xl:px-7 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-black">
        JEE Mathematics Chapter Wise Material -{" "}
        <span className="text-[#c47993] cursor-pointer">
          Click here to Download
        </span>
      </div>
      <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
        Previous Year Questions
      </div>
      <div className=" p-4 text-[#c47993]  font-medium flex justify-center items-center text-center   xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
        JEE Main Previous Year Question Papers: Download and Practice Now!
      </div>
      <div className="flex justify-center items-center">
        <div className=" p-4   w-full md:w-6/12 lg:w-4/12 xl:w-4/12 ">
          <div>
            <i className="absolute ml-[4px] mt-3">
              <Image src={search} width={20} height={20} />
            </i>
          </div>
          <input
            className={classes}
            type="text"
            required
            placeholder="Search Your Question Paper"
          />
        </div>
      </div>
      <div className="px-4 py-9 lg:px-7 xl:px-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 pt-9 gap-6 ">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] focus:bg-[#085464] focus:text-white rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            2023
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            2022
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            2021
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            2020
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            2019
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            2018
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            2017
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            2016
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            2015
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            2014
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            2013
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            2012
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            2011
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            2010
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            2009
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            2008
          </div>
        </div>
      </div>
      <div className="text-[#085464] px-4 py-9 lg:px-7 xl:px-7 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
        JEE SYLLABUS
      </div>
      <div className=" p-4 text-[#c47993]  font-medium flex justify-center items-center text-center   xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
        JEE Preparation Made Easy with Detailed Syllabus Coverage
      </div>

      <div className="px-4 py-9 lg:px-7 xl:px-7">
        <div className=" p-2 py-2  font-medium flex  items-center text-center xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
          <Image src={bullet1} width={40} height={40} className="mr-3" />
          <div className=" xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-black">
            Mathematics: Algebra, Trigonometry, Analytical Geometry,
            Differential Calculus, Integral Calculus, Vectors and more -{" "}
            <span className="text-[#c47993] cursor-pointer">
              Click here to Download
            </span>
          </div>
        </div>
        <div className=" p-2 py-2  font-medium flex  items-center text-center xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
          <Image src={bullet1} width={40} height={40} className="mr-3" />
          <div className=" xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-black">
            Physics: Mechanics, Thermodynamics, Electromagnetic Induction,
            Optics, Modern Physics, and Electromagnetic Waves and more -{" "}
            <span className="text-[#c47993] cursor-pointer">
              Click here to Download
            </span>
          </div>
        </div>
        <div className=" p-2 py-2  font-medium flex  items-center text-center xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
          <Image src={bullet1} width={40} height={40} className="mr-3" />
          <div className=" xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-black">
            Chemistry: Physical Chemistry, Organic Chemistry, Inorganic
            Chemistry, Analytical Chemistry and moreI-{" "}
            <span className="text-[#c47993] cursor-pointer">
              Click here to Download
            </span>
          </div>
        </div>
      </div>
      <div className="text-[#085464] px-4 py-9 lg:px-7 xl:px-7 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] lg:text-left xl:text-left">
        MENTORSHIP
      </div>
      <div className="text-[#c47993] p-4 pb-9 font-medium  xl:text-[35px] lg:text-[25px] sm:text-[25px] text-[20px] text-center ">
        Meet our mentors to get personalised Feedback, strategies and approach{" "}
        {"  "}{" "}
        <span
          className="text-[#085464] cursor-pointer"
          onClick={function handleClick() {
            router.push("/classFivetoTen");
          }}
        >
          {" "}
          -Click Here To Join
        </span>
      </div>
      <div className="px-4 py-9 lg:px-7 xl:px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#085464] flex justify-center items-center high1">
                <span className="text-white font-medium lg:text-xl md:text-lg p-2 text-sm text-center">
                  "John helped me improve my coding skills and gave me valuable
                  insights on how to advance in my career." - Jane Smith, Junior
                  Developer
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto flex justify-center items-center">
                <span className=" text-[#085464] lg:text-lg md:text-lg text-[14px] text-center font-medium py-4">
                  John is a Senior Software Engineer with over 10 years of
                  experience in the tech industry. He specializes in Agile
                  development methodologies and has a proven track record of
                  successfully mentoring junior developers.
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div>
                <Image src={ment} width={100} height={100} />
              </div>
              <div className="pl-5">
                <div className="lg:text-lg md:text-lg text-base text-[#085464] font-semibold">
                  Mr John Doe
                </div>
                <div className="sm:text-[14px] text-[13px] font-medium text-gray-500">
                  Senior Software Engineer
                </div>
              </div>
            </div>
            <div className="py-7 flex justify-center items-center pb-4">
              <div className="getstarted  gt xl:text-[20px] lg:text-[18px] text-[#fff]  py-2 px-8  rounded-md text-center">
                <button className="font-medium">
                  Schedule a session with John
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#085464] flex justify-center items-center high1">
                <span className="text-white font-medium lg:text-xl md:text-lg p-2 text-sm text-center">
                  "John helped me improve my coding skills and gave me valuable
                  insights on how to advance in my career." - Jane Smith, Junior
                  Developer
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto flex justify-center items-center">
                <span className=" text-[#085464] lg:text-lg md:text-lg text-[14px] text-center font-medium py-4">
                  John is a Senior Software Engineer with over 10 years of
                  experience in the tech industry. He specializes in Agile
                  development methodologies and has a proven track record of
                  successfully mentoring junior developers.
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div>
                <Image src={ment} width={100} height={100} />
              </div>
              <div className="pl-5">
                <div className="lg:text-lg md:text-lg text-base text-[#085464] font-semibold">
                  Mr John Doe
                </div>
                <div className="sm:text-[14px] text-[13px] font-medium text-gray-500">
                  Senior Software Engineer
                </div>
              </div>
            </div>
            <div className="py-7 flex justify-center items-center pb-4">
              <div className="getstarted  gt xl:text-[20px] lg:text-[18px] text-[#fff]  py-2 px-8  rounded-md text-center">
                <button className="font-medium">
                  Schedule a session with John
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#085464] flex justify-center items-center high1">
                <span className="text-white font-medium lg:text-xl md:text-lg text-sm p-2 text-center">
                  "John helped me improve my coding skills and gave me valuable
                  insights on how to advance in my career." - Jane Smith, Junior
                  Developer
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto flex justify-center items-center">
                <span className=" text-[#085464] lg:text-lg md:text-lg text-[14px] text-center font-medium py-4">
                  John is a Senior Software Engineer with over 10 years of
                  experience in the tech industry. He specializes in Agile
                  development methodologies and has a proven track record of
                  successfully mentoring junior developers.
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div>
                <Image src={ment} width={100} height={100} />
              </div>
              <div className="pl-5">
                <div className="lg:text-lg md:text-lg text-base text-[#085464] font-semibold">
                  Mr John Doe
                </div>
                <div className="sm:text-[14px] text-[13px] font-medium text-gray-500">
                  Senior Software Engineer
                </div>
              </div>
            </div>
            <div className="py-7 flex justify-center items-center pb-4">
              <div className="getstarted  gt xl:text-[20px] lg:text-[18px] text-[#fff]  py-2 px-8  rounded-md text-center">
                <button className="font-medium">
                  Schedule a session with John
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#085464] px-4 py-9 lg:px-7 xl:px-7 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
        SUCCESS STORIES
      </div>
      <div className="px-4 py-9 lg:px-7 xl:px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        <div className="p-5 rounded-md infPic flex items-center justify-center bg-[#085464] drop-shadow-lg  cursor-pointer text-white wwd">
          <div>
            <div className="px-3 py-3 flex justify-center items-center rounded-md">
              <Image src={ment} width={100} height={100} />
            </div>
            <div className="px-3  text-[20px] font-medium flex justify-center items-center">
              <span>Janarthanan S</span>
            </div>
            <div className="px-3  text-[20px] font-medium flex justify-center items-center pb-3">
              <Image src={medal} width={30} height={30} />
              <span className="pl-1">1st Rank</span>
            </div>
            <div className="px-3 py-3 text-[17px]  flex justify-center items-center pb-3">
              <span className="text-center leading-relaxed">
                "I used to think coding was boring, but this program made it so
                much fun! I love being able to bring my ideas to life with code.
                I can't wait to show my friends and family all the cool things
                I've made
              </span>
            </div>
          </div>
        </div>
        <div className="p-5 rounded-md infPic flex items-center justify-center bg-[#085464] drop-shadow-lg  cursor-pointer text-white wwd">
          <div>
            <div className="px-3 py-3 flex justify-center items-center rounded-md">
              <Image src={ment} width={100} height={100} />
            </div>
            <div className="px-3  text-[20px] font-medium flex justify-center items-center">
              <span>Janarthanan S</span>
            </div>
            <div className="px-3  text-[20px] font-medium flex justify-center items-center pb-3">
              <Image src={medal} width={30} height={30} />
              <span className="pl-1">2nd Rank</span>
            </div>
            <div className="px-3 py-3 text-[17px]  flex justify-center items-center pb-3">
              <span className="text-center leading-relaxed">
                This program helped me understand UPSC concepts better and
                manage my time efficiently. I cleared the exam in my first
                attempt, I highly recommend it for UPSC aspirants.
              </span>
            </div>
          </div>
        </div>
        <div className="p-5 rounded-md infPic flex items-center justify-center bg-[#085464] drop-shadow-lg  cursor-pointer text-white wwd">
          <div>
            <div className="px-3 py-3 flex justify-center items-center rounded-md">
              <Image src={ment} width={100} height={100} />
            </div>
            <div className="px-3  text-[20px] font-medium flex justify-center items-center">
              <span>Janarthanan S</span>
            </div>
            <div className="px-3  text-[20px] font-medium flex justify-center items-center pb-3">
              <Image src={medal} width={30} height={30} />
              <span className="pl-1">3rd Rank</span>
            </div>
            <div className="px-3 py-3 text-[17px]  flcenterex justify-center items-center pb-3">
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
      <div className="text-[#085464] px-4 py-9 lg:px-7 xl:px-7 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
        PARTNER WITH US SCHOOL
      </div>
      <div className="px-4 py-9 lg:px-7 xl:px-7 min-h-[100vh] bg-[#fff]">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="w-full h-full flex justify-center items-start">
            <div className=" flex-row justify-center items-center">
              <div className="text-[#c47993] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
                Partner with us for a successful JEE journey.
              </div>
              <div className="text-[#085464] p-2  font-medium flex   items-center text-center xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
                Cutting-edge online program, expert instructors, personalized
                support. Join now, empower your students
              </div>
            </div>
          </div>
          <div className=" p-4 rounded-md flex items-center justify-center pb-9">
            <div className="newloginContainer bg-white  rounded-md drop-shadow-2xl">
              <form
                className="newLoginForm m-4 py-7"
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
                  <label className="text-lg font-medium ">Email </label>
                </div>
                <input
                  className={classes}
                  type="email"
                  name="entry.1045781291"
                  placeholder="Enter your Email Address"
                />
                <div className="flex justify-between pr-[1.5rem] pb-1">
                  <label className="text-lg font-medium ">Contact </label>
                </div>
                <input
                  className={classes}
                  type="number"
                  name="entry.1045781291"
                  placeholder="Enter your Mobile Number"
                />
                <div className="flex justify-between pr-[1.5rem] pb-1">
                  <label className="text-lg font-medium ">School</label>
                </div>
                <input
                  className={classes}
                  type="text"
                  name="entry.1166974658"
                  placeholder="Enter your School Name"
                />
                <div className="flex justify-between pr-[1.5rem] pb-1">
                  <label className="text-lg font-medium ">City</label>
                </div>
                <input
                  className={classes}
                  type="text"
                  name="entry.1166974658"
                  placeholder="Type Your City"
                />

                <div className=" flex justify-center items-center pt-7 pb-3  ">
                  <div className="getstarted gt text-[18px] text-white py-2 px-7 rounded-md flex justify-center items-center">
                    <button type="submit" className="font-medium">
                      Request a call back
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JointEntranceExam;
