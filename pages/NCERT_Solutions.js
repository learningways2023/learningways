import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import bullet from "../public/bulletblack.svg";
import Image from "next/image";
import dbms from "../public/dbms.png";
import Uparrow from "../components/uparrow";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import Exams from "../components/exams";
import PremiumCourseCard from "../components/premiumCourseCard";
const NCERTSolutions = () => {
  const classes =
    " text-black border-b-2  text-base bg-inherit placeholder-[#333]  w-full h-full   block py-2.5 lg:px-9 xl:px-9 px-9 outline-0 focus:outline-0 ";

  return (
    <div>
      <Navbar />
      <Uparrow url="NCERT_Solutions" />

      <div className="mx-4 my-5 min-h-[100vh] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="w-full h-full flex-row justify-center items-center">
            <div className="text-[#ffff] p-4 pt-9   flex justify-center  items-center text-center xl:text-[42px] text-white font-semibold lg:text-[34px] sm:text-[32px] text-[24px]">
              Unlock Your Potential with NCERT !
            </div>
            <div className="text-[#ffff] p-2    flex  items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px]  ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              NCERT Solutions
            </div>
            <div className="text-[#ffff] p-2  font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              NCERT MCQs
            </div>
            <div className="text-[#ffff] p-2  font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              NCERT Summary
            </div>
            <div className="text-[#ffff] p-2  font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              NCERT Courses
            </div>
            <div className="text-[#ffff] p-2  font-medium flex   items-center text-left xl:text-[30px] lg:text-[30px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              NCERT Exam Preparation
            </div>
          </div>
          <div className=" p-4 rounded-md flex items-center justify-center pb-9">
            <div className="newloginContainer cardbg1  rounded-md">
              <div className="card-col">
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
                    <label className="text-lg font-medium ">Email</label>
                  </div>
                  <input
                    className={classes}
                    type="email"
                    name="entry.1045781291"
                    placeholder="Enter your Email"
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
                    <label className="text-lg font-medium ">School</label>
                  </div>
                  <input
                    className={classes}
                    type="text"
                    name="entry.1166974658"
                    placeholder="Type Your School Name"
                  />

                  <div className=" flex justify-center items-center pt-7 pb-3  ">
                    <div
                      className=" border-2 text-white rounded px-2 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                      onClick={function showModal() {
                        setModal(true);
                      }}
                    >
                      Get an Idea !
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
            NCERT COURSES
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
            NCERT
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
            NCERT MCQ
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
            NCERT SOLUTION
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
            NCERT SUMMARY
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
            EXAM PREPARATION
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Unlock Your Exam Success
      </div>

      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
        Download NCERT PDFs and Solutions for Classes 1-12 on our Website and
        Boost Your Grades
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 py-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md mt-10 mx-4">
        <div className="px-4 py-9 lg:px-7 xl:px-7">
          <div className=" p-2 py-2    flex text-white items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            Students can access the latest NCERT PDF textbooks and solutions for
            all classes and subjects. Our detailed solutions, written according
            to the latest marking schemes, will help students ace their class
            tests, board exams and competitive exams like JEE, NEET, AIIMS. The
            easy-to-download format and user-friendly interface makes studying
            convenient and efficient.
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
        NCERT COURSES
      </div>

      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
        Achieve academic success with our NCERT-based online courses. Master the
        curriculum and excel
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
        DOWNLOAD NCERT
      </div>

      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
        Easily access the latest NCERT curriculum. Download textbooks and excel
        in your studies with our resources
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
            CLASS 5
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
            CLASS 6
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
            CLASS 7
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
            CLASS 8
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
            CLASS 9
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
            CLASS 10
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
            CLASS 11
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
            CLASS 12
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        NCERT SUMMARY
      </div>

      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
        Master the NCERT curriculum in minutes with our concise summaries. Stay
        ahead in your studies and excel.
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
            CLASS 5
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
            CLASS 6
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
            CLASS 7
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
            CLASS 8
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
            CLASS 9
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
            CLASS 10
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
            CLASS 11
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
            CLASS 12
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        NCERT MCQs
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
            CLASS 5
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
            CLASS 6
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
            CLASS 7
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
            CLASS 8
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
            CLASS 9
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
            CLASS 10
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
            CLASS 11
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
            CLASS 12
          </div>
        </div>
      </div>

      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        NCERT EXAM PREPARATION
      </div>

      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
        Achieve success on competitive exams with our expert tips and
        strategies. Unlock your potential and excel.
      </div>

      <div className="mx-4 my-8 mt-10 cardbg1 rounded-md">
        <div className=" w-full py-9  flex flex-wrap">
          <Exams
            tittle="Indian National Olympiad (INO)"
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

          <Exams
            tittle="Science Olympiad Foundation"
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
          <Exams
            tittle="Kishore Vigyan Protsahan Yojana (KVPY)"
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
          <Exams
            tittle="NSO–NATIONAL SCIENCE OLYMPIAD"
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
          <Exams
            tittle="NDA FOUNDATION"
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
          <Exams
            tittle="UPSC FOUNDATION"
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
          <Exams
            tittle="JEE- NEET FOUNDATION"
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
          <Exams
            tittle="CDS FOUNDATION"
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
      <Footer />
    </div>
  );
};

export default NCERTSolutions;
