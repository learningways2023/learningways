import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import dbms from "../public/dbms.png";
import ArticleCard from "../components/ArticleCard";
import YouTube from "react-youtube";
import { useRouter } from "next/router";
import bullet from "../public/bulletblack.svg";

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
    " text-black border-b-2  text-base bg-inherit placeholder-[#333]  w-full h-full   block py-2.5 lg:px-9 xl:px-9 px-9 outline-0 focus:outline-0 ";

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
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 py-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md mt-10 mx-4">
        <div className="px-4 py-9 lg:px-7 xl:px-7">
          <div className=" p-2 py-2    flex text-white items-center text-center font-semibold xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            Welcome to our Skill Development Webpage, where you can learn and
            improve your programming and design skills. We offer a variety of
            resources to help you succeed in your job search and career
            development.
          </div>
        </div>
        <div className="w-auto h-auto flex justify-center items-center ">
          <Image src={prof} width={310} height={800} />
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Learn
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 py-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md mt-10 mx-4">
        <div className="w-auto h-auto flex justify-center items-center ">
          <Image src={prof} width={310} height={800} />
        </div>
        <div className="px-4 py-9 lg:px-7 xl:px-7">
          <div className=" p-2 py-2    flex text-white items-center text-center font-semibold xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            In the Programming section, you'll find video tutorials on
            programming languages such as Python, Java, C++, etc. These
            tutorials will help you understand the basics and advanced concepts
            of programming. We also have a collection of programming-related
            blogs that will keep you updated with the latest trends, best
            practices and new technologies in the programming world.
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Video Tutorials
      </div>
      <div className="mx-4 my-8 mt-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
        <div className="grid py-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8">
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
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Programming Blogs
      </div>
      <div className="mx-4 my-8 mt-10 cardbg1 rounded-md">
        <div className=" w-full py-9  flex flex-wrap">
          <ArticleCard
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
          <ArticleCard
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
          <ArticleCard
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
        Design
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 py-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md mt-10 mx-4">
        <div className="w-auto h-auto flex justify-center items-center ">
          <Image src={prof} width={310} height={800} />
        </div>
        <div className="px-4 py-9 lg:px-7 xl:px-7">
          <div className=" p-2 py-2    flex text-white items-center text-center font-semibold xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            In the Design section, you'll find a collection of commonly asked
            interview questions in the field of programming and design. These
            questions will help you prepare well for your job interviews. We
            also have video courses on design and user experience (UX) that will
            help you improve your design skills and create better user
            experiences.
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Popular Interview Questions
      </div>
      <div className="mx-4 my-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
        <div className="py-4 px-4">
          <DropdownComponent
            name="Give a brief introduction of yourself.. IAS Interview Questions with Answer PDF"
            content={[
              "This is one of the prime questions with which an IAS interview questions and answers session generally begins. Not only an IAS interview, but almost every interview across the globe starts with this basic question. The whole idea behind asking this question is to see how well you can present yourself. . IAS Interview Questions with Answer PDF",
              "How to answer: While answering this question in an IAS interview, one should mention all the details, which include personal details, educational qualifications, professional life, etc., confidently. The answer should be precise and in resonance with the resume that you’ve provided to the panel. You can achieve proficiency in answering such questions with confidence by taking some IAS mock interviews before going for an actual interview.. IAS Interview Questions with Answer PDF",
            ]}
          />
        </div>
        <div className="py-4 px-4">
          <DropdownComponent
            name="Give a brief introduction of yourself.. IAS Interview Questions with Answer PDF"
            content={[
              "This is one of the prime questions with which an IAS interview questions and answers session generally begins. Not only an IAS interview, but almost every interview across the globe starts with this basic question. The whole idea behind asking this question is to see how well you can present yourself. . IAS Interview Questions with Answer PDF",
              "How to answer: While answering this question in an IAS interview, one should mention all the details, which include personal details, educational qualifications, professional life, etc., confidently. The answer should be precise and in resonance with the resume that you’ve provided to the panel. You can achieve proficiency in answering such questions with confidence by taking some IAS mock interviews before going for an actual interview.. IAS Interview Questions with Answer PDF",
            ]}
          />
        </div>
        <div className="py-4 px-4">
          <DropdownComponent
            name="Give a brief introduction of yourself.. IAS Interview Questions with Answer PDF"
            content={[
              "This is one of the prime questions with which an IAS interview questions and answers session generally begins. Not only an IAS interview, but almost every interview across the globe starts with this basic question. The whole idea behind asking this question is to see how well you can present yourself. . IAS Interview Questions with Answer PDF",
              "How to answer: While answering this question in an IAS interview, one should mention all the details, which include personal details, educational qualifications, professional life, etc., confidently. The answer should be precise and in resonance with the resume that you’ve provided to the panel. You can achieve proficiency in answering such questions with confidence by taking some IAS mock interviews before going for an actual interview.. IAS Interview Questions with Answer PDF",
            ]}
          />
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Interview Questions with Answer PDF
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
        Interview Preparation Courses
      </div>
      <div className="mx-4 my-8 mt-10 cardbg1 rounded-md">
        <div className=" w-full py-9  flex flex-wrap">
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
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Practice
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 py-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md mt-10 mx-4">
        <div className="w-auto h-auto flex justify-center items-center ">
          <Image src={prof} width={310} height={800} />
        </div>
        <div className="px-4 py-9 lg:px-7 xl:px-7">
          <div className=" p-2 py-2    flex text-white items-center text-center font-semibold xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            In the Practice section, you'll find a collection of mock interviews
            that will help you practice and improve your interviewing skills. We
            also have a collection of practice exercises that will help you
            improve your programming and design skills.
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Mock Interviews
      </div>
      <div className="mx-4 my-8 mt-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
        <div className="grid py-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8">
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
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Practice Exercises
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
        Succed
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 py-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md mt-10 mx-4">
        <div className="w-auto h-auto flex justify-center items-center ">
          <Image src={prof} width={310} height={800} />
        </div>
        <div className="px-4 py-9 lg:px-7 xl:px-7">
          <div className=" p-2 py-2    flex text-white items-center text-center font-semibold xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
            In the Succeed section, you'll find a collection of success stories
            of people who have successfully landed a job in the field of
            programming and design. You'll also find career resources such as
            resume templates, job search tips, and networking advice that will
            help you succeed in your job search and career development.
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
              <span className="pl-1">Pen Tester</span>
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
              <span className="pl-1">Full Stack Developer</span>
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
              <span className="pl-1">Android Developer</span>
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
      <div className="grid grid-cols-1 md:grid-cols-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-4 rounded-md mt-10 lg:grid-cols-1 gap-0  lg:gap-8 sm:gap-4 lg:px-10 md:px-10 px-3 py-7">
        <div className="flex justify-start sm:ml-[1rem] ml-[0rem] aboutQuote pl-2">
          <Image
            src={startq}
            className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[40px] xl:h-[40px]"
          />
        </div>
        <div className="p-4  xl:text-[28px] lg:text-[26px] sm:text-[22px] text-[20px] text-center text-[#fff]">
          Don't read success stories, you will only get a message. Read failure
          stories, you will get some ideas to get success-{" "}
          <span className="text-black cursor-pointer">Dr APJ Abdul Kalam.</span>
        </div>
        <div className="flex justify-end aboutQuote sm:mr-[1rem] mr-[0rem] pr-2">
          <Image
            src={endq}
            className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[40px] xl:h-[40px]"
          />
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Resources
      </div>
      <div className="py-9 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 bg-gradient-to-r from-blue-500 to-cyan-500 mt-10 rounded-md sm:mx-4 mx-1">
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
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Contact
      </div>
      <div>
        <div className=" p-4 rounded-md flex items-center justify-center pb-9">
          <div className="newloginContainer bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md drop-shadow-2xl">
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
                  <div
                    className=" border-2 text-white rounded px-2 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                    onClick={function showModal() {
                      setModal(true);
                    }}
                  >
                    Get In Touch With Us !
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

export default Professional;
