import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import chero from "../public/chero.jpg";
import endq from "../public/endq.svg";
import { useState } from "react";
import ment from "../public/john.png";
import wd from "../public/wd.jpg";
import FreeCourseCard from "../components/freeCourseCard";
import dbms from "../public/dbms.png";
import startq from "../public/startq.svg";
import kc3 from "../public/kc3.jpg";

import Image from "next/image";
const Courses = () => {
  const classes =
    "border-2 border-[#085464] text-[#085464] text-base font-medium w-full h-full rounded-md focus:ring-[#085464] focus:border-[#085464]  block py-2.5 lg:px-5 xl:px-5 px-12 ";

  const [free, setFree] = useState(1);
  const [premium, setPre] = useState(false);
  console.log(free)
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <div className="min-h-[100vh] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div className=" p-4 rounded-md flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-0 lg:gap-8 sm:gap-4 lg:px-10 md:px-10 px-3">
              <div className="flex justify-start sm:ml-[1rem] ml-[0rem] aboutQuote pl-2">
                <Image
                  src={startq}
                  className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]"
                />
              </div>
              <div className="mt-[1rem] rounded-md flex items-center justify-center xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] sm:leading-[197%] md:leading-[197%] leading-[197%] lg:text-left md:text-center text-center ">
                <span className="text-[#085464] font-medium ">
                  Welcome to our comprehensive skill development platform.
                  Discover a wide range of courses and resources to help you
                  learn new skills, improve existing ones and advance your
                  career. With our expert-led training, interactive practice
                  exercises and real-world examples, you'll have everything you
                  need to succeed in your professional and personal life.
                </span>
              </div>
              <div className="flex justify-end aboutQuote sm:mr-[1rem] mr-[0rem] pr-2">
                <Image
                  src={endq}
                  className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]"
                />
              </div>
            </div>
          </div>
          <div className=" rounded-md flex items-center justify-center w-full h-full">
            <Image src={chero} width={320} height={400} />
          </div>
        </div>
        {/* <div className="py-7 flex justify-center items-center text-[#085464] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
          Experience Level
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          <div className="py-7 flex justify-center items-center text-[#c47993] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
            BEGINEER
          </div>
          <div className="py-7 flex justify-center items-center text-[#c47993] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
            INTERMEDIATE
          </div>

          <div className="py-7 flex justify-center items-center text-[#c47993] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
            ADVANCED
          </div>
        </div> */}
        <div className="min-h-[97vh] p-4 bg-white rounded-xl drop-shadow-2xl border-1 border border-gray-300">
          <div className="-m-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  gap-0">
            <div className="w-full h-full flex justify-center items-center bg-[#085464]  drop-shadow-2xl text-white">
              <div className="">
                <div className="py-7 flex justify-center items-center fo text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px] leading-10">
                  Hey, welcome to the world of infinite possibilities.
                </div>
                <div className="py-7 flex justify-center items-center fo text-center xl:text-3xl lg:text-2xl md:text-2xl text-[24px] leading-10">
                  Discover yourself, learn the skills and ace the opportunities
                </div>
              </div>
            </div>
            <div className=" p-4 rounded-md flex items-center justify-center">
              <div className="newloginContainer">
                <form className="newLoginForm">
                  <label className="text-lg font-medium pb-1">Name</label>
                  <input
                    className={classes}
                    type="text"
                    placeholder="Enter your Name"
                  />

                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg font-medium ">Email</label>
                  </div>
                  <input
                    className={classes}
                    type="text"
                    placeholder="Enter your Email"
                  />
                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg font-medium ">Phone No.</label>
                  </div>
                  <input
                    className={classes}
                    type="number"
                    placeholder="Enter your Mobile Number"
                  />
                  <div className="flex justify-between pr-[1.5rem] pt-1 pb-3">
                    <label className="text-lg font-medium ">
                      Choose your Experience Level
                    </label>
                  </div>
                  <select className={classes}>
                    <option value="Begineer">BEGINEER</option>
                    <option value="Intermediate">INTERMEDIATE</option>
                    <option value="Advanced">ADVANCED</option>
                  </select>
                  <div className="flex justify-between pr-[1.5rem] py-3">
                    <label className="text-lg font-medium ">
                      Choose Your Career Goal
                    </label>
                  </div>
                  <select className={classes}>
                    <option value="learning">LEARNING</option>
                    <option value="changing job">CHANGING JOB</option>
                  </select>
                  <div className=" flex justify-center items-center pt-7 pb-3  ">
                    <div className="getstarted gt text-[18px] text-white py-2 px-7 rounded-md flex justify-center items-center">
                      <button type="submit" className="font-medium">
                        SCHEDULE A CALL FOR ASSISTANCE
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 min-h-[70vh] gap-4">
          <div className="w-full h-full pt-9  flex justify-center items-center">
            <div className="flex-row justify-between items-center space-y-12">
              <div className="flex justify-center items-center text-center lg:text-left xl:text-left text-[#c47993]  xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
                Hey, welcome to the world of infinite possibilities.
              </div>
              <div className="flex justify-center items-center text-center lg:text-left xl:text-left  text-[#085464]  xl:text-3xl lg:text-2xl md:text-2xl text-[24px]">
                Discover yourself, learn the skills and ace the opportunities
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center p-4">
            <form
              method="POST"
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_QJ0517TP7rdLkVNpYs49aiK3qiH__gMYL8MdvoFop15jEw/formResponse"
            >
              <table class="table-auto bg-[#085464] rounded-md">
                <tbody>
                  <tr>
                    <td className="px-12 py-2 border border-1 border-white text-xl text-white">
                      NAME
                    </td>
                    <td className="px-12 py-2 border border-1 border-white text-xl text-white">
                      <input
                        className={classes}
                        type="text"
                        name="entry.2005620554"
                        placeholder="Enter your Name"
                        required={true}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-12 py-2 border border-1 border-white text-xl text-white">
                      EMAIL
                    </td>
                    <td className="px-12 py-2 border border-1 border-white text-xl text-white">
                      <input
                        className={classes}
                        type="email"
                        name="entry.1045781291"
                        placeholder="Enter your email"
                        required={true}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-12 py-2 border border-1 border-white text-xl text-white">
                      PHONE NO.
                    </td>
                    <td className="px-12 py-2 border border-1 border-white text-xl text-white">
                      <input
                        className={classes}
                        type="number"
                        name="entry.1166974658"
                        placeholder="Enter your email"
                        required={true}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-12 py-2 border border-1 border-white text-xl text-white col-span-2">
                      SCHEDULE A CALL FOR ASSISTANCE
                    </td>
                    <td className="px-1 py-2 border border-1 border-white text-xl text-white">
                      <div className="flex justify-center">
                        <div className="log">
                          <button type="submit">Schedule Now</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div> */}
        {/* <div className="py-7 flex justify-center items-center text-[#085464] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
          Career Goal
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="py-7 flex justify-center items-center text-[#c47993] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
            LEARNING
          </div>
          <div className="py-7 flex justify-center items-center text-[#c47993] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
            CHANGING JOB
          </div>
        </div> */}
        <div className="py-7 flex justify-center items-center text-[#085464] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
          Explore
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 pt-9 gap-6 ">
          <div className="w-full h-full">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              Free Courses
            </div>
          </div>
          <div className="w-full h-full">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              Certification Courses
            </div>
          </div>
          <div className="w-full h-full">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              Test Your Skills
            </div>
          </div>
          <div className="w-full h-full">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              Mentoring
            </div>
          </div>
          <div className="w-full h-full">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              Read. Learn
            </div>
          </div>
        </div>
        <div className="py-7 flex justify-center items-center text-[#085464] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
          Free Courses
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 pt-9 gap-6 ">
          <div className="w-full h-full">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] focus:bg-[#085464] focus:text-white rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleFree() {
                setFree(1);
              }}
            >
              {" "}
              Digital Marketing
            </div>
          </div>
          <div className="w-full h-full">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleFree1() {
                setFree(2);
              }}
            >
              {" "}
              Data Science
            </div>
          </div>
          <div className="w-full h-full">
            <div
              className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleFree() {
                setFree(3);
              }}
            >
              {" "}
              Product Management
            </div>
          </div>
          <div className="w-full h-full">
            <div
              className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleFree() {
                setFree(4);
              }}
            >
              {" "}
              Business Analytics
            </div>
          </div>
          <div className="w-full h-full">
            <div
              className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={function handleFree() {
                setFree(5);
              }}
            >
              {" "}
              Coding
            </div>
          </div>
        </div>
        {free === 1 ? (
          <div className="w-full flex flex-wrap ">
            <FreeCourseCard
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
            <FreeCourseCard
              img={dbms}
              tittle="Search Engine Optimization (SEO) "
              s1="Learn how to optimize your website for search engines and drive more traffic to your site."
              s2="Understand how search engines work and how they rank websites"
              array={[
                "Understand how search engines work and how they rank websites",
                "Learn how to conduct keyword research and optimize your website's content",
                "Discover the importance of backlinks and how to acquire them",
                "Learn how to use on-page and off-page SEO techniques",
                "Understand the role of technical SEO in improving search engine rankings",
                "Learn how to measure and track your SEO performance",
                "Discover how to stay up-to-date with the latest SEO best practices",
                "Learn how to optimize your website for local search",
                "Understand the role of voice search in SEO",
                "Learn the basics of Google My Business",
              ]}
            />
            <FreeCourseCard
              img={dbms}
              tittle="Social Media Marketing "
              s1="Learn how to use social media to promote your business and connect with customers."
              s2="Understand the different social media platforms and their unique features"
              array={[
                "Understand the different social media platforms and their unique features",
                "Learn how to create a social media marketing strategy",
                "Discover how to use social media to build brand awareness",
                "Learn how to use social media to generate leads and sales",
                "Understand the role of social media in customer service",
                "Learn how to use social media to create and share engaging content",
                "Discover how to use social media advertising",
                "Learn how to measure and analyze the effectiveness of your social media efforts",
                "Understand how to stay up-to-date with the latest social media trends and best practices",
              ]}
            />
            <FreeCourseCard
              img={dbms}
              tittle="Email Marketing "
              s1="Learn how to use email marketing to build relationships with customers and drive sales."
              s2="Understand the basics of email marketing"
              array={[
                "Understand the basics of email marketing",
                "Learn how to create and manage an email marketing list",
                "Discover how to use email marketing to build relationships with customers",
                "Learn how to use email marketing to generate leads and sales",
                "Understand the role of email marketing in customer retention",
                "Learn how to create and design effective email marketing campaigns",
                "Discover how to use email marketing automation",
                "Learn how to measure and analyze the effectiveness of your email marketing efforts",
                "Understand how to stay up-to-date with the latest email marketing trends and best practices",
                "Learn the basics of GDPR and Email marketing.",
              ]}
            />
          </div>
        ) : (
          <div></div>
        )}
        {free === 2 ? (
          <div className="w-full flex flex-wrap">
            <FreeCourseCard
              img={dbms}
              tittle="Email Marketing "
              s1="Learn how to use email marketing to build relationships with customers and drive sales."
              s2="Understand the basics of email marketing"
              array={[
                "Understand the basics of email marketing",
                "Learn how to create and manage an email marketing list",
                "Discover how to use email marketing to build relationships with customers",
                "Learn how to use email marketing to generate leads and sales",
                "Understand the role of email marketing in customer retention",
                "Learn how to create and design effective email marketing campaigns",
                "Discover how to use email marketing automation",
                "Learn how to measure and analyze the effectiveness of your email marketing efforts",
                "Understand how to stay up-to-date with the latest email marketing trends and best practices",
                "Learn the basics of GDPR and Email marketing.",
              ]}
            />
          </div>
        ) : (
          <div></div>
        )}
        {free === 3 ? (
          <div className="w-full flex justify-center items-center"></div>
        ) : (
          <div></div>
        )}
        {free === 4 ? (
          <div className="w-full flex justify-center items-center"></div>
        ) : (
          <div></div>
        )}
        {free === 5 ? (
          <div className="w-full flex justify-center items-center"></div>
        ) : (
          <div></div>
        )}
        <div className="py-7 flex justify-center items-center text-[#085464] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
          Premium Courses
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 pt-9 gap-6 ">
          <div className="w-full h-full">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              Digital marketing
            </div>
          </div>
          <div className="w-full h-full">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              Data Science
            </div>
          </div>
          <div className="w-full h-full">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              Product Management
            </div>
          </div>
          <div className="w-full h-full">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              Business Analytics
            </div>
          </div>
        </div>
        {premium ? (
          <div className="w-full flex justify-center items-center">
            <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:mx-4 mx-1">
              <div className="min-h-[97vh]   rounded-xl flex-row border border-[#085464] items-center justify-center bg-[#085464] text-white  drop-shadow-lg">
                <div className="flex justify-center items-center rounded-lg">
                  <Image
                    src={kc3}
                    width={411}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex justify-center items-center pt-3 pb-1 px-2 text-white text-left">
                  Course Name : Advaned Social Media Program
                </div>
                <hr className="hru " />
                <div className="flex justify-center items-center pt-3 pb-1 px-2 text-white text-left">
                  Description: The A dvanced Social M edia Strategy course (A S
                  M S ) is for managers , strategists , and leaders who want to
                  gain a comprehensive understanding of how to build and scale
                  social media in comple x organi z ations.
                </div>
                <hr className="hru " />
                <div className="flex justify-between">
                  <div className="flex justify-center items-center pt-3 pb-1 px-2 text-white text-left">
                    Duration: 49Hrs
                  </div>
                  <div className="flex justify-center items-center pt-3 pb-1 px-2 text-white text-left">
                    Price: Rs. 49999/-
                  </div>
                </div>
                <hr className="hru " />
                <div className="grid grid-cols-2 py-5">
                  <div className="flex justify-center items-center">
                    <div className="log1">
                      <button>View Content </button>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="log1">
                      <button>Take the Course</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-h-[97vh]   rounded-xl flex-row border border-[#085464] items-center justify-center bg-[#085464] text-white  drop-shadow-lg">
                <div className="flex justify-center items-center rounded-lg">
                  <Image
                    src={kc3}
                    width={411}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex justify-center items-center pt-3 pb-1 px-2 text-white text-left">
                  Course Name : Advaned Social Media Program
                </div>
                <hr className="hru " />
                <div className="flex justify-center items-center pt-3 pb-1 px-2 text-white text-left">
                  Description: The A dvanced Social M edia Strategy course (A S
                  M S ) is for managers , strategists , and leaders who want to
                  gain a comprehensive understanding of how to build and scale
                  social media in comple x organi z ations.
                </div>
                <hr className="hru " />
                <div className="flex justify-between">
                  <div className="flex justify-center items-center pt-3 pb-1 px-2 text-white text-left">
                    Duration: 49Hrs
                  </div>
                  <div className="flex justify-center items-center pt-3 pb-1 px-2 text-white text-left">
                    Price: Rs. 49999/-
                  </div>
                </div>
                <hr className="hru " />
                <div className="grid grid-cols-2 py-5">
                  <div className="flex justify-center items-center">
                    <div className="log1">
                      <button>View Content </button>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="log1">
                      <button>Take the Course</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-h-[97vh]   rounded-xl flex-row border border-[#085464] items-center justify-center bg-[#085464] text-white  drop-shadow-lg">
                <div className="flex justify-center items-center rounded-lg">
                  <Image
                    src={kc3}
                    width={411}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex justify-center items-center pt-3 pb-1 px-2 text-white text-left">
                  Course Name : Advaned Social Media Program
                </div>
                <hr className="hru " />
                <div className="flex justify-center items-center pt-3 pb-1 px-2 text-white text-left">
                  Description: The A dvanced Social M edia Strategy course (A S
                  M S ) is for managers , strategists , and leaders who want to
                  gain a comprehensive understanding of how to build and scale
                  social media in comple x organi z ations.
                </div>
                <hr className="hru " />
                <div className="flex justify-between">
                  <div className="flex justify-center items-center pt-3 pb-1 px-2 text-white text-left">
                    Duration: 49Hrs
                  </div>
                  <div className="flex justify-center items-center pt-3 pb-1 px-2 text-white text-left">
                    Price: Rs. 49999/-
                  </div>
                </div>
                <hr className="hru " />
                <div className="grid grid-cols-2 py-5">
                  <div className="flex justify-center items-center">
                    <div className="log1">
                      <button>View Content </button>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="log1">
                      <button>Take the Course</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <div className="py-7 flex justify-center items-center text-[#085464] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
          Test Your Skills
        </div>
        <div className="py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:mx-4 mx-1">
          <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div className="rounded-md flex items-center justify-center">
                <div className="w-auto h-auto bg-[#085464] flex justify-center items-center high1">
                  <span className="text-white font-medium lg:text-4xl md:text-lg text-sm text-center p-4">
                    Digital Marketting
                  </span>
                </div>
              </div>
              <div className="rounded-md flex items-center justify-center">
                <div className="w-auto h-auto flex justify-center items-center">
                  <span className=" text-[#085464] lg:text-2xl md:text-xl text-xl text-center font-medium py-4">
                    10 Test Available
                  </span>
                </div>
              </div>

              <div className="py-7 flex justify-center items-center pb-4">
                <div className="getstarted  gt xl:text-[20px] lg:text-[18px] text-[#fff]  py-2 px-8  rounded-md text-center">
                  <button className="font-medium">Explore more test </button>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div className="rounded-md flex items-center justify-center">
                <div className="w-auto h-auto bg-[#085464] flex justify-center items-center high1">
                  <span className="text-white font-medium lg:text-4xl md:text-lg text-sm text-center p-4">
                    Data Science
                  </span>
                </div>
              </div>
              <div className="rounded-md flex items-center justify-center">
                <div className="w-auto h-auto flex justify-center items-center">
                  <span className=" text-[#085464] lg:text-2xl md:text-xl text-xl text-center font-medium py-4">
                    10 Test Available
                  </span>
                </div>
              </div>

              <div className="py-7 flex justify-center items-center pb-4">
                <div className="getstarted  gt xl:text-[20px] lg:text-[18px] text-[#fff]  py-2 px-8  rounded-md text-center">
                  <button className="font-medium">Explore more test </button>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div className="rounded-md flex items-center justify-center">
                <div className="w-auto h-auto bg-[#085464] flex justify-center items-center high1">
                  <span className="text-white font-medium lg:text-4xl md:text-lg text-sm text-center p-4">
                    Product Management
                  </span>
                </div>
              </div>
              <div className="rounded-md flex items-center justify-center">
                <div className="w-auto h-auto flex justify-center items-center">
                  <span className=" text-[#085464] lg:text-2xl md:text-xl text-xl text-center font-medium py-4">
                    10 Test Available
                  </span>
                </div>
              </div>

              <div className="py-7 flex justify-center items-center pb-4">
                <div className="getstarted  gt xl:text-[20px] lg:text-[18px] text-[#fff]  py-2 px-8  rounded-md text-center">
                  <button className="font-medium">Explore more test </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-7 flex justify-center items-center text-[#085464] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
          Meet our Mentors
        </div>
        <div className="py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:mx-4 mx-1">
          <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div className="flex justify-center items-center">
                <Image src={ment} width={100} height={100} />
              </div>
              <div className="flex justify-center items-center text-center text-[#085464] lg:text-4xl md:text-lg text-sm">
                Emma Hardy
              </div>
              <div className="py-4  flex justify-center items-center text-center text-[#085464] lg:text-3xl md:text-lg text-[14px]">
                CEO , BioCell Company
              </div>
            </div>
          </div>
          <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div className="flex justify-center items-center">
                <Image src={ment} width={100} height={100} />
              </div>
              <div className="flex justify-center items-center text-center text-[#085464] lg:text-4xl md:text-lg text-sm">
                Emma Hardy
              </div>
              <div className="py-4  flex justify-center items-center text-center text-[#085464] lg:text-3xl md:text-lg text-[14px]">
                CEO , BioCell Company
              </div>
            </div>
          </div>
          <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div className="flex justify-center items-center">
                <Image src={ment} width={100} height={100} />
              </div>
              <div className="flex justify-center items-center text-center text-[#085464] lg:text-4xl md:text-lg text-sm">
                Emma Hardy
              </div>
              <div className="py-4  flex justify-center items-center text-center text-[#085464] lg:text-3xl md:text-lg text-[14px]">
                CEO , BioCell Company
              </div>
            </div>
          </div>
          <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-[#fff] infPic drop-shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
              <div className="flex justify-center items-center">
                <Image src={ment} width={100} height={100} />
              </div>
              <div className="flex justify-center items-center text-center text-[#085464] lg:text-4xl md:text-lg text-sm">
                Emma Hardy
              </div>
              <div className="py-4  flex justify-center items-center text-center text-[#085464] lg:text-3xl md:text-lg text-[14px]">
                CEO , BioCell Company
              </div>
            </div>
          </div>
        </div>
        <div className="py-7 flex justify-center items-center text-[#085464] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
          Skill Blogs
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
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
            </div>
            <div className="pt-4 flex justify-center items-center ">
              <div className="getstarted  gt xl:text-[20px] lg:text-[18px] text-[#fff]  py-2 px-8  rounded-md text-center">
                <button className="font-medium">Read full Article</button>
              </div>
            </div>
          </div>
          <div className="w-full h-auto p-4 border border-1 border-[#036c81] rounded-xl">
            <div className="flex justify-center items-center">
              <Image src={wd} width={400} height={200} />
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
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
