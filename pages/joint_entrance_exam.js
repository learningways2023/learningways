import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import bullet from "../public/bulletblack.svg";
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
    " text-black border-b-2  text-base bg-inherit placeholder-[#333]  w-full h-full   block py-2.5 lg:px-9 xl:px-9 px-9 outline-0 focus:outline-0 ";

  return (
    <div>
      <Navbar />
      <Uparrow url="joint_entrance_exam" />
      <div className="m-4 min-h-[100vh] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="w-full h-full flex-row justify-center items-center">
            <div className="text-[#ffff] p-4 pt-9   flex justify-center  items-center text-center xl:text-[42px] text-white font-semibold lg:text-[34px] sm:text-[32px] text-[24px] ">
              Join the most comprehensive course
            </div>
            <div className="text-[#ffff] p-2    flex  items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              Interactive Classes
            </div>
            <div className="text-[#ffff] p-2    flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              Comprehensive Study Material
            </div>
            <div className="text-[#ffff] p-2    flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              Performance Analytics
            </div>
            <div className="text-[#ffff] p-2    flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              Personalized Feedback
            </div>
            <div className="text-[#ffff] p-2    flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              Mock Exams
            </div>
            <div className="text-[#ffff] p-2    flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              Study Schedules
            </div>
            <div className="text-[#ffff] p-2    flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              Online Resources
            </div>
            <div className="text-[#ffff] p-2    flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              Video Lectures.
            </div>
          </div>
          <div className=" p-4 rounded-md flex items-center justify-center  pt-9">
            <div className="newloginContainer cardbg1  rounded-md">
              <div className="card-col">
                <form
                  className="newLoginForm m-4 py-7"
                  action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_QJ0517TP7rdLkVNpYs49aiK3qiH__gMYL8MdvoFop15jEw/formResponse"
                >
                  <label className="text-lg   pb-1">Name</label>
                  <input
                    className={classes}
                    type="text"
                    name="entry.2005620554"
                    placeholder="Enter your Name"
                  />

                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg   ">Contact </label>
                  </div>
                  <input
                    className={classes}
                    type="number"
                    name="entry.1045781291"
                    placeholder="Enter your Mobile Number"
                  />
                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg   ">Class</label>
                  </div>
                  <input
                    className={classes}
                    type="text"
                    name="entry.1166974658"
                    placeholder="Enter your Grade"
                  />
                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg   ">City</label>
                  </div>
                  <input
                    className={classes}
                    type="text"
                    name="entry.1166974658"
                    placeholder="Type Your City"
                  />

                  <div className=" flex justify-center items-center pt-7 pb-3  ">
                    <div
                      className=" border-2 text-white rounded px-2 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                      onClick={function showModal() {
                        setModal(true);
                      }}
                    >
                      Request a call back !
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Categories
      </div>
      <div className="px-4 py-8 mx-1 md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            JEE SYLLABUS
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#data_science");
            }}
          >
            {" "}
            JEE NOTIFICATION
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#mobile_development");
            }}
          >
            {" "}
            JEE COURSES
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#game_development");
            }}
          >
            {" "}
            STUDY MATERIAL
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#cloud_computing");
            }}
          >
            {" "}
            QUIZ SECTION
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#cyberSecurity");
            }}
          >
            {" "}
            PREVIOUS YEAR PAPERS
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#devops");
            }}
          >
            {" "}
            MENTORSHIP
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#ai");
            }}
          >
            {" "}
            TOPPERS TALK
          </div>
        </div>
      </div>
      <div className="text-black p-4 mb-10 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Announcements
      </div>

      <div className="min-h-[50vh] py-8  flex justify-center items-center ">
        <div className="min-h-[50vh] w-11/12   inline-block align-middle">
          <div className="overflow-x-auto  border-3 border-gray-200 rounded-lg bg-white infp drop-shadow-2xl">
            <table className="w-full  divide-y divide-gray-200 ">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-3 text-lg text-center font-bold  text-black uppercase w-4/12"
                  >
                    Event
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-lg font-bold text-center text-black uppercase w-4/12"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-lg font-bold text-center text-black uppercase w-4/12"
                  >
                    Desc
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 ">
                <tr className="">
                  <td className="px-2 py-4 text-lg font-medium text-center text-gray-800 w-4/12">
                    Current Affairs
                  </td>
                  <td className="px-2 py-4 text-lg text-center text-gray-800 w-4/12">
                    Jan 26 2023
                  </td>
                  <td className="px-2 py-4 text-lg text-center text-gray-800 w-4/12 ">
                    UPSC CSE Exam 2022 was held on June 5, 2022.
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-4 text-lg text-center font-medium text-gray-800 w-4/12">
                    Upcomming Course
                  </td>
                  <td className="px-2 py-4 text-lg text-center text-gray-800 w-4/12">
                    Jan 26 2023
                  </td>
                  <td className="px-2 py-4 text-lg text-center text-gray-800 w-4/12 ">
                    UPSC CSE Exam 2022 was held on June 5, 2022.
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-4 text-lg text-center font-medium text-gray-800 w-4/12">
                    Notification
                  </td>
                  <td className="px-2 py-4 text-lg text-center text-gray-800 w-4/12">
                    Jan 26 2023
                  </td>
                  <td className="px-2 py-4 text-lg text-center text-gray-800 w-4/12 ">
                    UPSC CSE Exam 2023
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] ">
        JEE Courses
      </div>
      <div className="mx-4 my-8 min-h-[60vh] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="flex  items-center">
            <div className="py-8">
              <div className="text-[#fff] p-2    flex  items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
                <Image src={bullet} width={40} height={40} className="mr-3" />
                Interactive Classes
              </div>
              <div className="text-[#ffff] p-2    flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
                <Image src={bullet} width={40} height={40} className="mr-3" />
                Comprehensive Study Material
              </div>
              <div className=" p-2 py-2 text-[#ffff]   flex  items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
                <Image src={bullet} width={40} height={40} className="mr-3" />
                Video lectures by experienced JEE instructors
              </div>
              <div className=" p-2 py-2  text-[#ffff]  flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
                <Image src={bullet} width={40} height={40} className="mr-3" />
                Practice quizzes and mock exams to assess your learning
              </div>
              <div className=" p-2 py-2  text-[#ffff] flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
                <Image src={bullet} width={40} height={40} className="mr-3" />
                Personalized feedback and support from instructors
              </div>
              <div className=" p-2 py-2  text-[#ffff] flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
                <Image src={bullet} width={40} height={40} className="mr-3" />
                Study materials, including notes and interactive simulations
              </div>
              <div className=" p-2 py-2  text-[#ffff] flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
                <Image src={bullet} width={40} height={40} className="mr-3" />
                Access to a community of JEE aspirants for peer-to-peer learning
                and support
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

      <div className="mx-4 my-8 mt-10 cardbg1 rounded-md">
        <div className=" w-full py-9  flex flex-wrap">
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
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        What you get?
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 mx-4 my-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
        <div className="px-4 py-9 lg:px-7 xl:px-7">
          <div className=" p-2 py-2 text-white   flex  items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
            Concept explanations
          </div>
          <div className=" p-2 py-2  text-white  flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
            Practice problems
          </div>
          <div className=" p-2 py-2 text-white  flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
            Problem-solving strategies
          </div>
          <div className=" p-2 py-2  text-white flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
            Assessments and mock tests
          </div>
          <div className=" p-2 py-2 text-white  flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
            Interactive sessions and mentoring
          </div>
          <div className=" p-2 py-2 text-white  flex   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
            Performance tracking.
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
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        JEE Practice Test
      </div>

      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
        Boost Your JEE Performance with JEE Mastery: Practice and Mock Test
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 py-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md mt-10 mx-4">
        <div className="px-4 py-9 lg:px-7 xl:px-7">
          <div className=" p-2 py-2    flex text-white items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
            Realistic JEE-style math questions
          </div>
          <div className=" p-2 py-2    flex  text-white items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
            Time-bound simulation of the JEE exam
          </div>
          <div className=" p-2 py-2   flex text-white  items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
            Detailed solution explanations
          </div>
          <div className=" p-2 py-2   flex text-white  items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
            Performance analysis and feedback
          </div>
          <div className=" p-2 py-2   flex text-white   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
            Opportunity to identify strengths and weaknesses
          </div>
          <div className=" p-2 py-2   flex text-white  items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
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

      <div className="mx-4 my-8 mt-10 cardbg1 rounded-md">
        <div className=" w-full py-9  flex flex-wrap">
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
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Study Material
      </div>

      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
        A comprehensive study material designed to help students prepare for the
        Physics, Chemistry & Mathematics section of the Joint Entrance
        Examination (JEE)
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 py-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md mt-10 mx-4">
        <div className="px-4 py-9 lg:px-7 xl:px-7">
          <div className=" p-2 py-2    flex text-white items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-2" />
            Detailed explanations of mathematical concepts and theories
          </div>
          <div className=" p-2 py-2    flex  text-white items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
            Practice problems and sample questions
          </div>
          <div className=" p-2 py-2   flex text-white  items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
            Strategies for solving math problems efficiently
          </div>
          <div className=" p-2 py-2   flex text-white  items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
            Performance tracking and analysis tools
          </div>
          <div className=" p-2 py-2   flex text-white   items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
            Summary of important formulas and concepts
          </div>
          <div className=" p-2 py-2   flex text-white  items-center text-left xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            <Image src={bullet} width={40} height={40} className="mr-3" />
            Regular assessments and mock tests
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
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Download Here
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 py-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md mt-10 mx-4">
        <div className="px-4 py-9 lg:px-7 xl:px-7">
          <div className="p-4 lg:px-7 xl:px-7 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-white">
            JEE Physics Chapter Wise Material -{" "}
            <span className="text-black cursor-pointer">
              Click here to Download
            </span>
          </div>
          <div className="p-4 lg:px-7 xl:px-7 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-white">
            JEE Chemistry Chapter Wise Material-{" "}
            <span className="text-black cursor-pointer">
              Click here to Download
            </span>
          </div>
          <div className="p-4 lg:px-7 xl:px-7 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-white">
            JEE Mathematics Chapter Wise Material -{" "}
            <span className="text-black cursor-pointer">
              Click here to Download
            </span>
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
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Previous Year Questions
      </div>

      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
        JEE Main Previous Year Question Papers: Download and Practice Now!
      </div>

      {/* <div className="flex justify-center items-center">
        <div className=" p-4   w-full md:w-6/12 lg:w-4/12 xl:w-4/12 ">
          <div>
            <i className="absolute ml-3 mt-3">
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
      </div> */}
      <div className="px-4 py-8 mx-1 md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            2023
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#data_science");
            }}
          >
            {" "}
            2022
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#mobile_development");
            }}
          >
            {" "}
            2021
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#game_development");
            }}
          >
            {" "}
            2020
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#cloud_computing");
            }}
          >
            {" "}
            2019
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#cyberSecurity");
            }}
          >
            {" "}
            2018
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#devops");
            }}
          >
            {" "}
            2017
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#ai");
            }}
          >
            {" "}
            2016
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#ai");
            }}
          >
            {" "}
            2015
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#ai");
            }}
          >
            {" "}
            2014
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#ai");
            }}
          >
            {" "}
            2013
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#ai");
            }}
          >
            {" "}
            2012
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#ai");
            }}
          >
            {" "}
            2011
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#ai");
            }}
          >
            {" "}
            2010
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#ai");
            }}
          >
            {" "}
            2009
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#ai");
            }}
          >
            {" "}
            2008
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        JEE Syllabus
      </div>

      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
        JEE Preparation Made Easy with Detailed Syllabus Coverage
      </div>

      <div className="px-4 py-9 lg:px-7 xl:px-7 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md mt-10 mx-4 my-8">
        <div className=" p-2 py-2    flex  items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
          <Image src={bullet} width={40} height={40} className="mr-3" />
          <div className=" xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-white">
            Mathematics: Algebra, Trigonometry, Analytical Geometry,
            Differential Calculus, Integral Calculus, Vectors and more -{" "}
            <span className="text-black cursor-pointer">
              Click here to Download
            </span>
          </div>
        </div>
        <div className=" p-2 py-2    flex  items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
          <Image src={bullet} width={40} height={40} className="mr-3" />
          <div className=" xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-white">
            Physics: Mechanics, Thermodynamics, Electromagnetic Induction,
            Optics, Modern Physics, and Electromagnetic Waves and more -{" "}
            <span className="text-black cursor-pointer">
              Click here to Download
            </span>
          </div>
        </div>
        <div className=" p-2 py-2    flex  items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
          <Image src={bullet} width={40} height={40} className="mr-3" />
          <div className=" xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-white">
            Chemistry: Physical Chemistry, Organic Chemistry, Inorganic
            Chemistry, Analytical Chemistry and moreI-{" "}
            <span className="text-black cursor-pointer">
              Click here to Download
            </span>
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Mentorship
      </div>

      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
        <div className="text-[#fff]     text-center ">
          Meet our mentors to get personalised Feedback, strategies and approach{" "}
          {"  "}{" "}
          <span
            className="text-black cursor-pointer"
            onClick={function handleClick() {
              router.push("/classFivetoTen");
            }}
          >
            {" "}
            - Click Here To Join
          </span>
        </div>
      </div>

      <div className=" py-9 mx-4 p-4 my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cardbg1 rounded-md gap-6 ">
        <div className="sm:p-6 rounded-lg flex  items-center justify-center  infPic card-col  ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#ffff] opacity-[0.7] flex justify-center items-center high1">
                <span className="text-black   lg:text-xl md:text-lg p-2 text-sm text-center">
                  "John helped me improve my coding skills and gave me valuable
                  insights on how to advance in my career." - Jane Smith, Junior
                  Developer
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto flex justify-center items-center">
                <span className=" text-black lg:text-lg md:text-lg text-[14px] text-center   py-4">
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
                <div className="lg:text-lg md:text-lg text-base text-[#fff] font-semibold">
                  Mr John Doe
                </div>
                <div className="sm:text-[14px] text-[13px]   text-gray-700">
                  Senior Software Engineer
                </div>
              </div>
            </div>
            <div className="py-7 flex justify-center items-center pb-4">
              <div
                className=" border-2 text-white rounded px-4 py-2 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                onClick={function showModal() {
                  setModal(true);
                }}
              >
                Schedule a session with John
              </div>
            </div>
          </div>
        </div>
        <div className="sm:p-6 rounded-lg flex  items-center justify-center  infPic card-col  ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#ffff] opacity-[0.7] flex justify-center items-center high1">
                <span className="text-black   lg:text-xl md:text-lg p-2 text-sm text-center">
                  "John helped me improve my coding skills and gave me valuable
                  insights on how to advance in my career." - Jane Smith, Junior
                  Developer
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto flex justify-center items-center">
                <span className=" text-black lg:text-lg md:text-lg text-[14px] text-center   py-4">
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
                <div className="lg:text-lg md:text-lg text-base text-[#fff] font-semibold">
                  Mr John Doe
                </div>
                <div className="sm:text-[14px] text-[13px]   text-gray-700">
                  Senior Software Engineer
                </div>
              </div>
            </div>
            <div className="py-7 flex justify-center items-center pb-4">
              <div
                className=" border-2 text-white rounded px-4 py-2 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                onClick={function showModal() {
                  setModal(true);
                }}
              >
                Schedule a session with John
              </div>
            </div>
          </div>
        </div>
        <div className="sm:p-6 rounded-lg flex  items-center justify-center  infPic card-col  ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#ffff] opacity-[0.7] flex justify-center items-center high1">
                <span className="text-black   lg:text-xl md:text-lg p-2 text-sm text-center">
                  "John helped me improve my coding skills and gave me valuable
                  insights on how to advance in my career." - Jane Smith, Junior
                  Developer
                </span>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto flex justify-center items-center">
                <span className=" text-black lg:text-lg md:text-lg text-[14px] text-center   py-4">
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
                <div className="lg:text-lg md:text-lg text-base text-[#fff] font-semibold">
                  Mr John Doe
                </div>
                <div className="sm:text-[14px] text-[13px]   text-gray-700">
                  Senior Software Engineer
                </div>
              </div>
            </div>
            <div className="py-7 flex justify-center items-center pb-4">
              <div
                className=" border-2 text-white rounded px-4 py-2 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                onClick={function showModal() {
                  setModal(true);
                }}
              >
                Schedule a session with John
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Success Stories
      </div>

      <div className="px-4 mx-4 rounded-md py-9 lg:px-7 xl:px-7 font-semibold grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-8">
        <div className="p-5 rounded-md infPic flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 drop-shadow-lg  cursor-pointer text-white ">
          <div>
            <div className="px-3 py-3 flex justify-center items-center rounded-md">
              <Image src={ment} width={100} height={100} />
            </div>
            <div className="px-3  text-[20px]  text-black flex justify-center items-center">
              <span>Janarthanan S</span>
            </div>
            <div className="px-3  text-[20px]   flex justify-center items-center pb-3">
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
        <div className="p-5 rounded-md infPic flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 drop-shadow-lg  cursor-pointer text-white ">
          <div>
            <div className="px-3 py-3 flex justify-center items-center rounded-md">
              <Image src={ment} width={100} height={100} />
            </div>
            <div className="px-3  text-[20px]  text-black flex justify-center items-center">
              <span>Janarthanan S</span>
            </div>
            <div className="px-3  text-[20px]   flex justify-center items-center pb-3">
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
        <div className="p-5 rounded-md infPic flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 drop-shadow-lg  cursor-pointer text-white ">
          <div>
            <div className="px-3 py-3 flex justify-center items-center rounded-md">
              <Image src={ment} width={100} height={100} />
            </div>
            <div className="px-3  text-[20px]  text-black flex justify-center items-center">
              <span>Janarthanan S</span>
            </div>
            <div className="px-3  text-[20px]   flex justify-center items-center pb-3">
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
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Partner With Us School
      </div>

      <div className="px-4 py-9 lg:px-7 xl:px-7 my-8 mx-4 min-h-[90vh] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="w-full h-full flex justify-center items-start">
            <div className="flex flex-col items-center justify-between ">
              <div className=" p-4 pt-9  flex justify-center  items-center text-center xl:text-[42px] text-white font-semibold lg:text-[34px] sm:text-[32px] text-[24px]  mt-10 ">
                Partner with us for a successful JEE journey.
              </div>
              <div className="text-black p-2    flex   items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] pt-10">
                Cutting-edge online program, expert instructors, personalized
                support. Join now, empower your students
              </div>
            </div>
          </div>
          <div className=" p-4 rounded-md flex items-center justify-center pb-9">
            <div className="newloginContainer cardbg1  rounded-md drop-shadow-2xl">
              <div className="card-col">
                <form
                  className="newLoginForm m-4 py-7"
                  action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_QJ0517TP7rdLkVNpYs49aiK3qiH__gMYL8MdvoFop15jEw/formResponse"
                >
                  <label className="text-lg   pb-1">Name</label>
                  <input
                    className={classes}
                    type="text"
                    name="entry.2005620554"
                    placeholder="Enter your Name"
                  />
                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg   ">Email </label>
                  </div>
                  <input
                    className={classes}
                    type="email"
                    name="entry.1045781291"
                    placeholder="Enter your Email Address"
                  />
                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg   ">Contact </label>
                  </div>
                  <input
                    className={classes}
                    type="number"
                    name="entry.1045781291"
                    placeholder="Enter your Mobile Number"
                  />
                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg   ">School</label>
                  </div>
                  <input
                    className={classes}
                    type="text"
                    name="entry.1166974658"
                    placeholder="Enter your School Name"
                  />
                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg   ">City</label>
                  </div>
                  <input
                    className={classes}
                    type="text"
                    name="entry.1166974658"
                    placeholder="Type Your City"
                  />

                  <div className=" flex justify-center items-center pt-7 pb-3  ">
                    <div
                      className=" border-2 text-white rounded px-2 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                      onClick={function showModal() {
                        setModal(true);
                      }}
                    >
                      Request a call back !
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JointEntranceExam;
