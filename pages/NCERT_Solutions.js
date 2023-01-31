import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import bullet from "../public/bulletwhite.svg";
import Image from "next/image";
import dbms from "../public/dbms.png";
import Uparrow from "../components/uparrow";
import Exams from "../components/exams";
import PremiumCourseCard from "../components/premiumCourseCard";
const NCERTSolutions = () => {
  const classes =
    "border-2 border-[#085464] text-[#085464] text-base font-medium w-full h-full rounded-md focus:ring-[#085464] focus:border-[#085464]  block py-2.5 lg:px-5 xl:px-5 px-12 ";

  return (
    <div>
      <Navbar />
      <Uparrow url="NCERT_Solutions" />
      <div className="m-4 min-h-[100vh] bg-[#085464]">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="w-full h-full flex-row justify-center items-center">
            <div className="text-[#ffff] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] ">
              Unlock Your Potential with NCERT !
            </div>
            <div className="text-[#ffff] p-2  font-medium flex  items-center text-center xl:text-[32px] lg:text-[32px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              NCERT Solutions
            </div>
            <div className="text-[#ffff] p-2  font-medium flex   items-center text-left xl:text-[32px] lg:text-[32px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              NCERT MCQs
            </div>
            <div className="text-[#ffff] p-2  font-medium flex   items-center text-left xl:text-[32px] lg:text-[32px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              NCERT Summary
            </div>
            <div className="text-[#ffff] p-2  font-medium flex   items-center text-left xl:text-[32px] lg:text-[32px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              NCERT Courses
            </div>
            <div className="text-[#ffff] p-2  font-medium flex   items-center text-left xl:text-[32px] lg:text-[32px] sm:text-[25px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              NCERT Exam Preparation
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
                  <div className="getstarted gt text-[18px] text-white py-2 px-7 rounded-md flex justify-center items-center">
                    <button type="submit" className="font-medium">
                      Get an Idea !
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 pt-9 gap-6 ">
        <div className="w-full h-full">
          <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] focus:bg-[#085464] focus:text-white rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            NCERT COURSES
          </div>
        </div>
        <div className="w-full h-full">
          <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            NCERT
          </div>
        </div>
        <div className="w-full h-full">
          <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            NCERT MCQ
          </div>
        </div>
        <div className="w-full h-full">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            NCERT SOLUTION
          </div>
        </div>
        <div className="w-full h-full">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            NCERT SUMMARY
          </div>
        </div>
        <div className="w-full h-full">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            EXAM PREPARATION
          </div>
        </div>
      </div>
      <div className="text-[#c47993] p-4  font-medium   xl:text-[32px] lg:text-[32px] sm:text-[25px] text-[18px] ">
        Unlock Your Exam Success:{" "}
        <span className="text-[#085464] cursor-pointer ">
          Download NCERT PDFs and Solutions for Classes 1-12 on our Website and
          Boost Your Grades
        </span>
      </div>
      <div className=" p-4  font-medium flex justify-center items-center text-center   xl:text-[32px] lg:text-[32px] sm:text-[25px] text-[18px] ">
        Students can access the latest NCERT PDF textbooks and solutions for all
        classes and subjects. Our detailed solutions, written according to the
        latest marking schemes, will help students ace their class tests, board
        exams and competitive exams like JEE, NEET, AIIMS. The easy-to-download
        format and user-friendly interface makes studying convenient and
        efficient.
      </div>
      <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] ">
        NCERT COURSES
      </div>
      <div className=" p-4  font-medium flex justify-center items-center text-center   xl:text-[32px] lg:text-[32px] sm:text-[25px] text-[18px] ">
        Achieve academic success with our NCERT-based online courses. Master the
        curriculum and excel
      </div>
      <div className="w-full flex flex-wrap">
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
      <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] ">
        DOWNLOAD NCERT
      </div>
      <div className=" p-4  font-medium flex justify-center items-center text-center   xl:text-[32px] lg:text-[32px] sm:text-[25px] text-[18px] ">
        Easily access the latest NCERT curriculum. Download textbooks and excel
        in your studies with our resources
      </div>
      <div className="">
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 pt-9 gap-6 ">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] focus:bg-[#085464] focus:text-white rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 5
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 6
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 7
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 8
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 9
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 10
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 11
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 12
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] ">
        NCERT SUMMARY
      </div>
      <div className=" p-4  font-medium flex justify-center items-center text-center   xl:text-[32px] lg:text-[32px] sm:text-[25px] text-[18px] ">
        Master the NCERT curriculum in minutes with our concise summaries. Stay
        ahead in your studies and excel.
      </div>
      <div className="">
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 pt-9 gap-6 ">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] focus:bg-[#085464] focus:text-white rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 5
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 6
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 7
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 8
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 9
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 10
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 11
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 12
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] ">
        NCERT MCQS
      </div>

      <div className="">
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 pt-9 gap-6 ">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] focus:bg-[#085464] focus:text-white rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 5
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 6
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 7
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 8
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 9
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 10
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 11
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              CLASS 12
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] ">
        NCERT EXAM PREPARATION
      </div>
      <div className=" p-4  font-medium flex justify-center items-center text-center   xl:text-[32px] lg:text-[32px] sm:text-[25px] text-[18px] ">
        Achieve success on competitive exams with our expert tips and
        strategies. Unlock your potential and excel.
      </div>
      <div className="w-full flex flex-wrap ">
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
      <Footer />
    </div>
  );
};

export default NCERTSolutions;
