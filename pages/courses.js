import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import chero from "../public/chero.jpg";
import endq from "../public/endq.svg";
import { useState } from "react";
import ment from "../public/john.png";
import wd from "../public/wd.jpg"
import dsa from "../public/dsa.jpg";
import dbms from "../public/dbms.png"
import startq from "../public/startq.svg";
import kc3 from "../public/kc3.jpg";

import Image from "next/image";
const Courses = () => {
  const [free, setFree] = useState(false);
  const [premium, setPre] = useState(false);
  function handleFree() {
    setFree(true);
  }
  function handlePre() {
    setPre(true);
  }
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  voluptatem minima ex delectus deserunt vitae aperiam,
                  explicabo soluta accusantium saepe quos deleniti alias
                  reprehenderit, autem laborum aut sed quia earum.
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
        <div className="py-7 flex justify-center items-center text-[#085464] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
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
        </div>
        <div className="py-7 flex justify-center items-center text-[#085464] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
          Career Goal
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="py-7 flex justify-center items-center text-[#c47993] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
            LEARNING
          </div>
          <div className="py-7 flex justify-center items-center text-[#c47993] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
            CHANGING JOB
          </div>
        </div>
        <div className="py-7 flex justify-center items-center text-[#085464] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
          Explore
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 pt-9 gap-6 ">
          <div className="w-full h-full">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              NCERT
            </div>
          </div>
          <div className="w-full h-full">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              NCERT
            </div>
          </div>
          <div className="w-full h-full">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              Coding
            </div>
          </div>
          <div className="w-full h-full">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              Skill Test
            </div>
          </div>
          <div className="w-full h-full">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              UPSC General Studies
            </div>
          </div>
        </div>
        <div className="py-7 flex justify-center items-center text-[#085464] text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px]">
          Free Courses
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 pt-9 gap-6 ">
          <div className="w-full h-full">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={handleFree}
            >
              {" "}
              NCERT
            </div>
          </div>
          <div className="w-full h-full">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              NCERT
            </div>
          </div>
          <div className="w-full h-full">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              Coding
            </div>
          </div>
          <div className="w-full h-full">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              Skill Test
            </div>
          </div>
          <div className="w-full h-full">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              UPSC General Studies
            </div>
          </div>
        </div>
        {free ? (
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
          Premium Courses
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 pt-9 gap-6 ">
          <div className="w-full h-full">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal"
              onClick={handlePre}
            >
              {" "}
              NCERT
            </div>
          </div>
          <div className="w-full h-full">
            <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              NCERT
            </div>
          </div>
          <div className="w-full h-full">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              Coding
            </div>
          </div>
          <div className="w-full h-full">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              Skill Test
            </div>
          </div>
          <div className="w-full h-full">
            <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
              {" "}
              UPSC General Studies
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
                  <button className="font-medium">Show more roles</button>
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
                  <button className="font-medium">Show more roles</button>
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
                  <button className="font-medium">Show more roles</button>
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
              <Image src={dsa} width={400} height={200} />
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
