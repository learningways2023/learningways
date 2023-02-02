import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import dbms from "../public/dbms.png";
import YouTube from "react-youtube";
import { useRouter } from "next/router";
import endq from "../public/endq.svg";
import startq from "../public/startq.svg";
import linkedin from "../public/linkedinp.png";
import naukri from "../public/naukri.png";
import indeed from "../public/indeed.png";
import Uparrow from "../components/uparrow";
import quikr from "../public/quikr.png";
import { useState, useCallback, useEffect } from "react";
import PremiumCourseCard from "../components/premiumCourseCard";
import DropdownComponent from "../components/dropDown";
import ment from "../public/john.png";
import medal from "../public/graduate.png";

import prof from "../public/prof_img.jpg";
const Professional = () => {
  const classes =
    "border-2 border-[#085464] text-[#085464] text-base font-medium w-full h-full rounded-md focus:ring-[#085464] focus:border-[#085464]  block py-2.5 lg:px-5 xl:px-5 px-12 ";

  const router = useRouter();
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
  const opts = {
    height: 350,
    width: 600,
    playerVars: {
      autoplay: 0,
    },
  };
  const opts2 = {
    height: 150,
    width: 310,
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div>
      <Navbar />
      <Uparrow url="professional" />
      <div>
        <div className="text-[#c47993] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
          Welcome to our Skill Development Webpage, where you can learn and
          improve your programming and design skills. We offer a variety of
          resources to help you succeed in your job search and career
          development.
        </div>
        <div className="flex  max-h-[70vh] justify-center items-center py-7">
          <Image src={prof} width={310} height={800} />
        </div>

        <div
          id="learn"
          className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] "
        >
          LEARN
        </div>
        <div className="py-7 px-4 xl:text-[30px] lg:text-[30px] sm:text-[28px] text-[18px] flex items-center justify-center text-center ">
          <span>
            In the Programming section, you'll find video tutorials on
            programming languages such as Python, Java, C++, etc. These
            tutorials will help you understand the basics and advanced concepts
            of programming. We also have a collection of programming-related
            blogs that will keep you updated with the latest trends, best
            practices and new technologies in the programming world.
          </span>
        </div>
        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
          Video Tutorials
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8">
          {isBreakpoint ? (
            <div className="flex justify-center items-center ">
              <YouTube videoId="RJRa57xGmQI" opts={opts2} />
            </div>
          ) : (
            <div className="flex justify-center items-center ">
              <YouTube videoId="RJRa57xGmQI" opts={opts} />
            </div>
          )}
          {isBreakpoint ? (
            <div className="flex justify-center items-center pt-9">
              <YouTube videoId="RJRa57xGmQI" opts={opts2} />
            </div>
          ) : (
            <div className="flex justify-center items-center ">
              <YouTube videoId="RJRa57xGmQI" opts={opts} />
            </div>
          )}
          {isBreakpoint ? (
            <div className="flex justify-center items-center pt-9">
              <YouTube videoId="RJRa57xGmQI" opts={opts2} />
            </div>
          ) : (
            <div className="flex justify-center items-center ">
              <YouTube videoId="RJRa57xGmQI" opts={opts} />
            </div>
          )}
          {isBreakpoint ? (
            <div className="flex justify-center items-center pt-9">
              <YouTube videoId="RJRa57xGmQI" opts={opts2} />
            </div>
          ) : (
            <div className="flex justify-center items-center ">
              <YouTube videoId="RJRa57xGmQI" opts={opts} />
            </div>
          )}
        </div>
        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
          Programming Blogs
        </div>
        <div className="py-7 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          <div className="w-full h-auto p-4 border border-1 border-[#036c81] rounded-xl">
            <div className="flex justify-center items-center">
              <Image src={dbms} width={400} height={200} />
            </div>
            <div className="py-3">
              <div className="flex justify-center items-center bg-[#085464] py-2 text-white rounded-lg">
                Data structures and algorithms
              </div>
            </div>
            <div className="flex justify-center items-center text-center text-[#085464] py-1">
              A data structure is a named location that can be used to store and
              organi z e data. A nd , an algorithm is a collection of steps to
              solve a particular problem. L earning data structures and
              algorithms allow us to write efficient and optimized computer
              programs.
            </div>
            <div className="pt-4 flex justify-center items-center ">
              <div className="getstarted  gt xl:text-[20px] lg:text-[18px] text-[#fff]  py-2 px-8  rounded-md text-center">
                <button className="font-medium">Read full Article</button>
              </div>
            </div>
          </div>
          <div className="w-full h-auto p-4 border border-1 border-[#036c81] rounded-xl">
            <div className="flex justify-center items-center">
              <Image src={dbms} width={400} height={200} />
            </div>
            <div className="py-3">
              <div className="flex justify-center items-center bg-[#085464] py-2 text-white rounded-lg">
                Database and SQL
              </div>
            </div>
            <div className="flex justify-center items-center text-center text-[#085464] py-1">
              Structured q uery language ( S QL ) is a programming language for
              storing and processing information in a relational database. A
              relational database stores information in tabular form , with rows
              and columns representing different data attributes and the various
              relationships between the data values.
            </div>{" "}
            <div className="pt-4 flex justify-center items-center ">
              <div className="getstarted  gt xl:text-[20px] lg:text-[18px] text-[#fff]  py-2 px-8  rounded-md text-center">
                <button className="font-medium">Read full Article</button>
              </div>
            </div>
          </div>
          <div className="w-full h-auto p-4 border border-1 border-[#036c81] rounded-xl">
            <div className="flex justify-center items-center">
              <Image src={dbms} width={400} height={200} />
            </div>
            <div className="py-3">
              <div className="flex justify-center items-center bg-[#085464] py-2 text-white rounded-lg">
                Web development
              </div>
            </div>
            <div className="flex justify-center items-center text-center text-[#085464] py-1">
              Web developers create and maintain websites. They are also
              responsible for the site ' s technical aspects , such as its
              performance and capacity , which are measures of a website ' s
              speed and how much traffic the site can handle. In addition , web
              developers may create content for the site.
            </div>
            <div className="pt-4 flex justify-center items-center ">
              <div className="getstarted  gt xl:text-[20px] lg:text-[18px] text-[#fff]  py-2 px-8  rounded-md text-center">
                <button className="font-medium">Read full Article</button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="prepare"
          className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] "
        >
          DESIGN
        </div>
        <div className="py-7 px-4 xl:text-[30px] lg:text-[30px] sm:text-[28px] text-[18px] flex items-center justify-center text-center ">
          <span>
            In the Design section, you'll find a collection of commonly asked
            interview questions in the field of programming and design. These
            questions will help you prepare well for your job interviews. We
            also have video courses on design and user experience (UX) that will
            help you improve your design skills and create better user
            experiences.
          </span>
        </div>
        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
          Popular Interview Questions
        </div>

        <div className="p-4 ">
          <div className="py-4">
            <DropdownComponent
              name="Give a brief introduction of yourself.. IAS Interview Questions with Answer PDF"
              content={[
                "This is one of the prime questions with which an IAS interview questions and answers session generally begins. Not only an IAS interview, but almost every interview across the globe starts with this basic question. The whole idea behind asking this question is to see how well you can present yourself. . IAS Interview Questions with Answer PDF",
                "How to answer: While answering this question in an IAS interview, one should mention all the details, which include personal details, educational qualifications, professional life, etc., confidently. The answer should be precise and in resonance with the resume that you’ve provided to the panel. You can achieve proficiency in answering such questions with confidence by taking some IAS mock interviews before going for an actual interview.. IAS Interview Questions with Answer PDF",
              ]}
            />
          </div>
          <div className="py-4">
            <DropdownComponent
              name="Give a brief introduction of yourself.. IAS Interview Questions with Answer PDF"
              content={[
                "This is one of the prime questions with which an IAS interview questions and answers session generally begins. Not only an IAS interview, but almost every interview across the globe starts with this basic question. The whole idea behind asking this question is to see how well you can present yourself. . IAS Interview Questions with Answer PDF",
                "How to answer: While answering this question in an IAS interview, one should mention all the details, which include personal details, educational qualifications, professional life, etc., confidently. The answer should be precise and in resonance with the resume that you’ve provided to the panel. You can achieve proficiency in answering such questions with confidence by taking some IAS mock interviews before going for an actual interview.. IAS Interview Questions with Answer PDF",
              ]}
            />
          </div>
          <div className="py-4">
            <DropdownComponent
              name="Give a brief introduction of yourself.. IAS Interview Questions with Answer PDF"
              content={[
                "This is one of the prime questions with which an IAS interview questions and answers session generally begins. Not only an IAS interview, but almost every interview across the globe starts with this basic question. The whole idea behind asking this question is to see how well you can present yourself. . IAS Interview Questions with Answer PDF",
                "How to answer: While answering this question in an IAS interview, one should mention all the details, which include personal details, educational qualifications, professional life, etc., confidently. The answer should be precise and in resonance with the resume that you’ve provided to the panel. You can achieve proficiency in answering such questions with confidence by taking some IAS mock interviews before going for an actual interview.. IAS Interview Questions with Answer PDF",
              ]}
            />
          </div>
        </div>
        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
          Interview Questions with Answer PDF
        </div>
        <div className="p-4 lg:px-7 xl:px-7 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-black">
          IAS Interview Questions with Answer PDF (2021) -{" "}
          <span className="text-[#c47993] cursor-pointer">
            Click here to Download
          </span>
        </div>
        <div className="p-4 lg:px-7 xl:px-7 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-black">
          IAS Interview Questions with Answer PDF (2021) -{" "}
          <span className="text-[#c47993] cursor-pointer">
            Click here to Download
          </span>
        </div>
        <div className="p-4 lg:px-7 xl:px-7 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-black">
          IAS Interview Questions with Answer PDF (2021) -{" "}
          <span className="text-[#c47993] cursor-pointer">
            Click here to Download
          </span>
        </div>
        <div className="p-4 lg:px-7 xl:px-7 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-black">
          IAS Interview Questions with Answer PDF (2021) -{" "}
          <span className="text-[#c47993] cursor-pointer">
            Click here to Download
          </span>
        </div>
        <div className="p-4 lg:px-7 xl:px-7 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-black">
          IAS Interview Questions with Answer PDF (2021) -{" "}
          <span className="text-[#c47993] cursor-pointer">
            Click here to Download
          </span>
        </div>

        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
          Interview Preparation Courses
        </div>
        <div className="p-4 w-full flex flex-wrap">
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
        <div
          id="practice"
          className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] "
        >
          PRACTICE
        </div>
        <div className="py-7 px-4 xl:text-[30px] lg:text-[30px] sm:text-[28px] text-[18px] flex items-center justify-center text-center ">
          <span>
            In the Practice section, you'll find a collection of mock interviews
            that will help you practice and improve your interviewing skills. We
            also have a collection of practice exercises that will help you
            improve your programming and design skills.
          </span>
        </div>
        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
          Mock Interviews
        </div>
        <div className=" py-7 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8">
          {isBreakpoint ? (
            <div className="flex justify-center items-center pt-9">
              <YouTube videoId="RJRa57xGmQI" opts={opts2} />
            </div>
          ) : (
            <div className="flex justify-center items-center ">
              <YouTube videoId="RJRa57xGmQI" opts={opts} />
            </div>
          )}
          {isBreakpoint ? (
            <div className="flex justify-center items-center pt-9">
              <YouTube videoId="RJRa57xGmQI" opts={opts2} />
            </div>
          ) : (
            <div className="flex justify-center items-center ">
              <YouTube videoId="RJRa57xGmQI" opts={opts} />
            </div>
          )}
        </div>
        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
          Practice Exercises
        </div>
        <div className="p-4 lg:px-7 xl:px-7 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-black">
          IAS Interview Practice Exercise - 1 Questions PDF (2021) -{" "}
          <span className="text-[#c47993] cursor-pointer">
            Click here to Download
          </span>
        </div>
        <div className="p-4 lg:px-7 xl:px-7 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-black">
          IAS Interview Practice Exercise -2 Questions PDF (2021) -{" "}
          <span className="text-[#c47993] cursor-pointer">
            Click here to Download
          </span>
        </div>
        <div className="p-4 lg:px-7 xl:px-7 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-black">
          IAS Interview Practice Exercise -3 Questions PDF (2021) -{" "}
          <span className="text-[#c47993] cursor-pointer">
            Click here to Download
          </span>
        </div>
        <div className="p-4 lg:px-7 xl:px-7 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-black">
          IAS Interview Practice Exercise -4 Questions PDF (2021) -{" "}
          <span className="text-[#c47993] cursor-pointer">
            Click here to Download
          </span>
        </div>
        <div
          id="succed"
          className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] "
        >
          SUCCED
        </div>
        <div className="py-7 px-4 xl:text-[30px] lg:text-[30px] sm:text-[28px] text-[18px] flex items-center justify-center text-center ">
          <span>
            In the Succeed section, you'll find a collection of success stories
            of people who have successfully landed a job in the field of
            programming and design. You'll also find career resources such as
            resume templates, job search tips, and networking advice that will
            help you succeed in your job search and career development.
          </span>
        </div>
        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
          Success Stories
        </div>
        <div className="py-7 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
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
                <span className="pl-1">FullStack Web Developer</span>
              </div>
              <div className="px-3 py-3 text-[17px]  flex justify-center items-center pb-3">
                <span className="text-center leading-relaxed">
                  "I used to think coding was boring, but this program made it
                  so much fun! I love being able to bring my ideas to life with
                  code. I can't wait to show my friends and family all the cool
                  things I've made
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
                <span className="pl-1">Android Developer</span>
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
                <span className="pl-1">Devops Engineer</span>
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
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-0 lg:gap-8 sm:gap-4 lg:px-10 md:px-10 px-3 py-7">
          <div className="flex justify-start sm:ml-[1rem] ml-[0rem] aboutQuote pl-2">
            <Image
              src={startq}
              className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[40px] xl:h-[40px]"
            />
          </div>
          <div className="p-4  xl:text-[28px] lg:text-[26px] sm:text-[22px] text-[20px] text-center text-[#085464]">
            Don't read success stories, you will only get a message. Read
            failure stories, you will get some ideas to get success.-{" "}
            <span className="text-[#c47993] cursor-pointer">
              Dr APJ Abdul Kalam.
            </span>
          </div>
          <div className="flex justify-end aboutQuote sm:mr-[1rem] mr-[0rem] pr-2">
            <Image
              src={endq}
              className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[40px] xl:h-[40px]"
            />
          </div>
        </div>

        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
          Resources
        </div>
        <div className="py-9 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:mx-4 mx-1">
          <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
            <div className="flex justify-center items-center cursor-pointer">
              <Image src={linkedin} />
            </div>
          </div>
          <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
            <div className="flex justify-center items-center cursor-pointer">
              <Image src={naukri} />
            </div>
          </div>
          <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
            <div className="flex justify-center items-center cursor-pointer">
              <Image src={indeed} />
            </div>
          </div>
          <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-2xl">
            <div className="flex justify-center items-center cursor-pointer">
              <Image src={quikr} />
            </div>
          </div>
        </div>
        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[35px] lg:text-[35px] sm:text-[35px] text-[20px] ">
          CONTACT
        </div>
        <div className=" p-4 rounded-md flex items-center justify-center pb-9">
          <div className="newloginContainer bg-white drop-shadow-2xl">
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
                <label className="text-lg font-medium ">Phone No.</label>
              </div>
              <input
                className={classes}
                type="number"
                name="entry.1166974658"
                placeholder="Enter your Mobile Number"
              />
              <div className="flex justify-between pr-[1.5rem] pb-1">
                <label className="text-lg font-medium ">Interest</label>
              </div>
              <input
                className={classes}
                type="text"
                name="entry.1166974658"
                placeholder="Type Your Interest"
              />

              <div className=" flex justify-center items-center pt-7 pb-3  ">
                <div className="getstarted gt text-[18px] text-white py-2 px-7 rounded-md flex justify-center items-center">
                  <button type="submit" className="font-medium">
                    Get In Touch With Us !
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Professional;
