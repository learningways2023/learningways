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
    width: 290,
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div>
      <Navbar />
      <Uparrow url="UPSC_Current_Affairs" />
      <div>
        <div className=" lg:h-[80vh] mx-2 md:mx-4 lg:mx-4 xl:mx-4 my-5 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500">
          <div className="lg:flex justify-center items-center lg:pt-9 sm:pt-10 p-4">
            <div className="lg:flex lg:justify-between lg:items-center sm:p-5 py-5 px-0">
              <div className="w-auto h-auto p-1 ">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:gap-6 lg:gap-5 sm:gap-4 gap-4">
                  <div className="  rounded-md flex items-center justify-center leading-10">
                    <span className="xl:text-[42px] text-white font-semibold lg:text-[34px] sm:text-[32px] text-[24px] text-center md:text-left xl:text-left">
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
                  <YouTube videoId="EpFNhgLmBJE" opts={opts2} />
                </div>
              ) : (
                <div className="flex justify-center items-center ">
                  <YouTube videoId="EpFNhgLmBJE" opts={opts} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
          Categories
        </div>
        <div className="px-4 py-8 mx-1 rounded-md md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleNavigate() {
                router.push("/Coding_tutorials#web_development");
              }}
            >
              {" "}
              UPSC MAINS
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
              UPSC PRELIMS
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
              MAINS ANSWER WRITING
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
              UPSC OPTIONAL
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
              UPSC INTERVIEW
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
              UPSC PYQ QUIZ
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
              DAILY CURRENT AFFAIRS
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
              TUDY MATERIAL
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
        <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
          UPSC MAINS
        </div>

        <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
          Announcements
        </div>

        <div className="min-h-[50vh] pt-20   flex justify-center items-center ">
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
        <div className="px-4 py-8 mx-1 rounded-md md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleNavigate() {
                router.push("/Coding_tutorials#web_development");
              }}
            >
              {" "}
              COURSES
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
              onClick={function handleNavigate() {
                router.push("/Coding_tutorials#data_science");
              }}
            >
              MAINS ANSWER WRITING
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
              MAINS ANSWER WRITING
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
              OPTIONALS
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
              STRATEGY
            </div>
          </div>
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
          UPSC PRELIMS
        </div>
        <div className="px-4 py-8 mx-1 rounded-md md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleNavigate() {
                router.push("/Coding_tutorials#web_development");
              }}
            >
              {" "}
              COURSES
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
              onClick={function handleNavigate() {
                router.push("/Coding_tutorials#data_science");
              }}
            >
              PREVIOUS YEARS QUESTION SOLVED
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
              PRACTICE TESTS
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
              SYLLABUS
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
              STRATEGY
            </div>
          </div>
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
          UPSC OPTIONALS
        </div>
        <div className="px-4 py-8 mx-1 rounded-md md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleNavigate() {
                router.push("/Coding_tutorials#web_development");
              }}
            >
              {" "}
              GEOGRAPHY
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
              onClick={function handleNavigate() {
                router.push("/Coding_tutorials#data_science");
              }}
            >
              SOCIOLOGY
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
              ANTHROLOGY
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
              HISTORY
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
              POLITICAL SCIENCE & INTERNATIONAL RELATIONS
            </div>
          </div>
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
          MAINS ANSWER WRITING
        </div>
        <div className="px-4 py-8 mx-1 rounded-md md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleNavigate() {
                router.push("/Coding_tutorials#web_development");
              }}
            >
              {" "}
              COURSES
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
              onClick={function handleNavigate() {
                router.push("/Coding_tutorials#data_science");
              }}
            >
              STRATEGY
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
              TOPPERS ANSWERS
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
              PRACTICE
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
              TEST SERIES
            </div>
          </div>
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
          PREVIOUS YEAR QUESTIONS
        </div>
        <div className="px-4 py-8 mx-1 rounded-md md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleNavigate() {
                router.push("/Coding_tutorials#web_development");
              }}
            >
              {" "}
              SCIENCE & TECHNOLOGY
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
              onClick={function handleNavigate() {
                router.push("/Coding_tutorials#data_science");
              }}
            >
              GEOGRAPHY
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
              POLITY
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
              ENVIRONMENT
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
              ECONOMY
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
              ANCIENT & MEDIEVAL INDIA
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
              MODERN INDIA
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
              ART & CULTURE
            </div>
          </div>
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
          UPSC INTERVIEW
        </div>

        <div className=" lg:min-h-[70vh] mx-4 my-5 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500">
          <div className="lg:flex justify-center items-center lg:pt-9 sm:pt-10 p-4">
            <div className="lg:flex lg:justify-between lg:items-center sm:p-5 py-5 px-0">
              <div className="w-auto h-auto p-1 px-3">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:gap-6 lg:gap-5 sm:gap-4 gap-4">
                  <div className="xl:text-[28px] lg:text-[28px] sm:text-[21px] text-white font-semibold text-[16px] flex items-center justify-center text-center ">
                    <span>
                      Our UPSC Interview Preparation course and get ready to ace
                      your interview with confidence. Our program covers
                      everything you need to know, including tips and strategies
                      for answering questions, common interview mistakes to
                      avoid, and how to make a great impression.
                    </span>
                  </div>
                  <div className="flex justify-end items-center text-lg text-black pr-9 cursor-pointer">
                    Know More
                  </div>
                </div>
              </div>

              {isBreakpoint ? (
                <div className="flex justify-center items-center pt-9">
                  <YouTube videoId="EpFNhgLmBJE" opts={opts2} />
                </div>
              ) : (
                <div className="flex justify-center items-center ">
                  <YouTube videoId="EpFNhgLmBJE" opts={opts} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
          UPSC MATERIAS
        </div>
        <div className="px-4 py-8 mx-1 rounded-md md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleNavigate() {
                router.push("/Coding_tutorials#web_development");
              }}
            >
              {" "}
              MAINS PAPER
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
              onClick={function handleNavigate() {
                router.push("/Coding_tutorials#data_science");
              }}
            >
              PRELIMS PAPER
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
              NCERT
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
              OPTIONAL PAPER
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
              NCERT
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
              NCERT SOLUTIONS
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
              BOOKS
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
              PRELIMS NOTES
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
              MAINS NOTES
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
              OPTIONALS NOTES
            </div>
          </div>
        </div>
        <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
          Mentorship
        </div>

        <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
          <div className="text-[#fff]     text-center ">
            Meet our mentors to get personalised Feedback, strategies and
            approach {"  "}{" "}
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
                    "John helped me improve my coding skills and gave me
                    valuable insights on how to advance in my career." - Jane
                    Smith, Junior Developer
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
                    "John helped me improve my coding skills and gave me
                    valuable insights on how to advance in my career." - Jane
                    Smith, Junior Developer
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
                    "John helped me improve my coding skills and gave me
                    valuable insights on how to advance in my career." - Jane
                    Smith, Junior Developer
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
          Unable to think of the choice Get connected to us
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
      </div>
      <Footer />
    </div>
  );
};

export default UPSCCurrentAffairs;
