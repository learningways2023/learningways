import React from "react";
import Image from "next/image";
import ment from "../public/john.png";

import { useRouter } from "next/router";
import { useState, useCallback, useEffect } from "react";
import PremiumCourseCard from "../components/premiumCourseCard";
import YouTube from "react-youtube";
import dbms from "../public/dbms.png";
import Uparrow from "../components/uparrow";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const UPSCCurrentAffairs = () => {
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
      autoplay: 1,
    },
  };
  const opts2 = {
    height: 150,
    width: 310,
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div>
      <Navbar />
      <Uparrow url="UPSC_Current_Affairs" />
      <div>
        <div className=" lg:h-[70vh]">
          <div className="lg:flex justify-center items-center lg:pt-9 sm:pt-10 p-4">
            <div className="lg:flex lg:justify-between lg:items-center sm:p-5 py-5 px-0">
              <div className="w-auto h-auto p-1 ">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:gap-6 lg:gap-5 sm:gap-4 gap-4">
                  <div className="  rounded-md flex items-center justify-center leading-10">
                    <span className="xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-medium text-center md:text-left xl:text-left">
                      Ace the UPSC Exam
                    </span>
                  </div>
                  <div className="xl:text-[32px] lg:text-[32px] sm:text-[25px] text-[18px] flex items-center justify-center text-center ">
                    <span>
                      Join the Best Coaching Institutes and Achieve Success in
                      the Civil Services Examination
                    </span>
                  </div>
                </div>
              </div>

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
        </div>
        <div className="text-[#085464] p-4 py-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] lg:text-left xl:text-left">
          Categories
        </div>
        <div className="py-7 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              UPSC MAINS
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              UPSC PRELIMS
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              MAINS ANSWER WRITING
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              UPSC OPTIONAL{" "}
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              UPSC INTERVIEW
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              UPSC PYQ QUIZ
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              DAILY CURRENT AFFAIRS
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              MENTORSHIP
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              STUDY MATERIAL
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              TOPPERS TALK
            </div>
          </div>
        </div>
        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] lg:text-left xl:text-left">
          UPSC MAINS
        </div>
        <div className="text-[#c47993] p-4 pb-9 font-medium flex  items-center justify-center xl:text-[35px] lg:text-[25px] sm:text-[25px] text-[20px] text-center lg:text-left xl:text-left">
          Announcements
        </div>
        <div className="min-h-[50vh] flex flex-wrap justify-center items-center pb-9">
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
                        Current Affairs
                      </td>
                      <td className="px-2 py-4 text-lg text-gray-800 w-4/12">
                        Jan 26 2023
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
                        Jan 26 2023
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
                        Jan 26 2023
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
        <div className="py-7 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              COURSES
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              MAINS ANSWER WRITING
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              OPTIONALS{" "}
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              SYLLABUS
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              STRATEGY
            </div>
          </div>
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
        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] lg:text-left xl:text-left">
          UPSC PRELIMS{" "}
        </div>
        <div className="py-7 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              COURSES
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              PREVIOUS YEARS QUESTION SOLVED
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              PRACTICE TESTS{" "}
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              SYLLABUS
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              STRATEGY
            </div>
          </div>
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
        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] lg:text-left xl:text-left">
          UPSC OPTIONALS
        </div>
        <div className="py-7 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              GEOGRAPHY
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              SOCIOLOGY
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              ANTHROLOGY
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              HISTORY{" "}
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              POLITICAL SCIENCE & INTERNATIONAL RELATIONS
            </div>
          </div>
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
        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] lg:text-left xl:text-left">
          MAINS ANSWER WRITING
        </div>
        <div className="py-7 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              COURSES
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              STRATEGY
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              TOPPERS ANSWERS
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              PRACTICE
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              TEST SERIES
            </div>
          </div>
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
        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] lg:text-left xl:text-left">
          PREVIOUS YEAR QUESTIONS
        </div>
        <div className="py-7 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              SCIENCE & TECHNOLOGY
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              GEOGRAPHY
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              POLITY
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              ENVIRONMENT
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              ECONOMY
            </div>
          </div>

          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              ANCIENT & MEDIEVAL INDIA
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              MODERN INDIA
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              ART & CULTURE
            </div>
          </div>
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
        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] lg:text-left xl:text-left">
          UPSC INTERVIEW
        </div>
        <div className=" lg:min-h-[70vh]">
          <div className="lg:flex justify-center items-center lg:pt-9 sm:pt-10 p-4">
            <div className="lg:flex lg:justify-between lg:items-center sm:p-5 py-5 px-0">
              <div className="w-auto h-auto p-1 px-3">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:gap-6 lg:gap-5 sm:gap-4 gap-4">
                  <div className="xl:text-[28px] lg:text-[28px] sm:text-[21px] text-[16px] flex items-center justify-center text-center ">
                    <span>
                      Our UPSC Interview Preparation course and get ready to ace
                      your interview with confidence. Our program covers
                      everything you need to know, including tips and strategies
                      for answering questions, common interview mistakes to
                      avoid, and how to make a great impression.
                    </span>
                  </div>
                  <div className="flex justify-end items-center text-lg text-[#085464] pr-9 cursor-pointer">
                    Know More
                  </div>
                </div>
              </div>

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
        </div>
        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] lg:text-left xl:text-left">
          UPSC MATERIALS
        </div>
        <div className="py-7 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              MAINS PAPER
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              PRELIMS PAPER
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
                router.push("/classFivetoTen");
              }}
            >
              OPTIONAL PAPER
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
                router.push("/classFivetoTen");
              }}
            >
              NCERT SOLUTION
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              BOOKS
            </div>
          </div>

          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              PRELIMS NOTES
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              MAINS NOTES
            </div>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]     border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleClick() {
                router.push("/classFivetoTen");
              }}
            >
              OPTIONAL NOTES
            </div>
          </div>
        </div>
        <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] lg:text-left xl:text-left">
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
        <div className="py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:mx-4 mx-1">
          <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div className="rounded-md flex items-center justify-center">
                <div className="w-auto h-auto bg-[#085464] flex justify-center items-center high1">
                  <span className="text-white font-medium lg:text-xl md:text-lg text-sm text-center">
                    "John helped me improve my coding skills and gave me
                    valuable insights on how to advance in my career." - Jane
                    Smith, Junior Developer
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
                  <span className="text-white font-medium lg:text-xl md:text-lg text-sm text-center">
                    "John helped me improve my coding skills and gave me
                    valuable insights on how to advance in my career." - Jane
                    Smith, Junior Developer
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
                  <span className="text-white font-medium lg:text-xl md:text-lg text-sm text-center">
                    "John helped me improve my coding skills and gave me
                    valuable insights on how to advance in my career." - Jane
                    Smith, Junior Developer
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
        <div className="text-[#c47993] p-4  font-medium  xl:text-[35px] lg:text-[25px] sm:text-[25px] text-[20px] text-center ">
          Unable to think of the choice Get connected to us
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

export default UPSCCurrentAffairs;
