import React from "react";
import Image from "next/image";
import startq from "../public/startq.svg";
import sq from "../public/sq.svg";
import eq from "../public/eq.svg";
import endq from "../public/endq.svg";
import kid1 from "../public/kid1.png";
import Footer from "../components/footer.js";
import kid2 from "../public/kid2.png";
import star from "../public/start.png";
import kc1 from "../public/kc1.jpg";
import cap from "../public/cap.png";
import graph from "../public/graph.png";
import kc2 from "../public/kc2.jpg";
import kc3 from "../public/kc3.jpg";

import kids1 from "../public/kids1.png";
import Navbar from "../components/navbar";
const KidsCoding = () => {
  return (
    <div className="">
      <Navbar />
      <div className=" lg:h-screen">
        <div className="lg:flex justify-center items-center ">
          <div className="lg:flex lg:justify-between lg:items-center sm:p-5 py-5 px-0">
            <div className="w-auto h-auto p-1 ">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:gap-6 lg:gap-5 sm:gap-4 gap-4">
                <div className=" text-center  py-[4rem] flex items-center">
                  <div className="">
                    <div className="flex justify-start sm:ml-[1rem] ml-[0rem] aboutQuote pl-2">
                      <Image
                        src={startq}
                        className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]"
                      />
                    </div>
                    <div className="text-[#c47993] xl:text-[30px] lg:text-[30px] sm:text-[30px] text-[20px] font-medium text-center xl:px-52 lg:px-20 px-8 lg:leading-[197%] md:leading-[197%] sm:leading-[197%]">
                      Unlock a world of endless possibilities with our fun and
                      engaging website for kids. Learn to code and discover the
                      magic of programming in a way that's both exciting and
                      interactive
                    </div>
                    <div className="flex justify-end aboutQuote sm:mr-[1rem] mr-[0rem] pr-2">
                      <Image
                        src={endq}
                        className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-auto max-h-[100vh] flex justify-center items-center ">
              <Image src={kids1} height={500} />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center items-center">
          <div className="text-[#c47993] xl:text-[30px] lg:text-[30px] sm:text-[30px] text-[20px] font-medium text-center xl:px-52 lg:px-20 px-8 lg:leading-[197%] md:leading-[197%] sm:leading-[197%]">
            Coding quizzes for kids
          </div>
        </div>
        <div className="text-[#085464] pt-7 pl-4 text-center lg:text-ledt xl:text-left xl:text-[30px] lg:text-[30px] sm:text-[30px] text-[20px] font-medium lg:leading-[197%] md:leading-[197%] sm:leading-[197%]">
          All practice quizzes
        </div>

        <div>
          <div className="py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:mx-4 mx-1">
            <div className="sm:p-6 p-4 rounded-lg flex border border-[#085464] items-center justify-center bg-[#fff]  drop-shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                <div className="w-full rounded-md flex items-center justify-center">
                  <Image src={kc1} height={300} className="rounded-lg" />
                </div>
                <div className="flex justify-between ">
                  <div className="pl-9 -mt-6">
                    <div className="bg-white  border border-1 border-[#085464] flex justify-center items-center w-[100px] h-[30px] rounded-md text-[#085464] lg:text-lg md:text-lg text-[14px]">
                      Que . 10
                    </div>
                  </div>
                  <div className="pr-9 -mt-6">
                    <div className="bg-white  border border-1 border-[#085464] flex justify-center items-center w-[100px] h-[30px] rounded-md text-[#085464] lg:text-lg md:text-lg text-[14px]">
                      Plays: 13k
                    </div>
                  </div>
                </div>
                <div className="text-center text-[#085464] lg:text-lg md:text-lg text-[14px]">
                  Programming Playground
                </div>
                <div className="p-4">
                  <div className=" bg-[#085464] flex justify-center items-center w-[100px] h-[30px] rounded-lg text-white lg:text-lg md:text-lg text-[14px]">
                    Scratch
                  </div>
                </div>
                <div className="px-4 py-1">
                  <div className=" flex items-center   text-left  rounded-lg text-[#085464] lg:text-lg md:text-lg text-[14px]">
                    <Image src={cap} className="pr-2" />
                    Grade: 1-8
                  </div>
                </div>
                <div className="px-4 py-1">
                  <div className=" flex items-center   text-left  rounded-lg text-[#085464] lg:text-lg md:text-lg text-[14px]">
                    <Image src={graph} className="pr-2" />
                    Beginner Level
                  </div>
                </div>

                <div className="pt-7 flex justify-center items-center pb-4">
                  <div className="text-[#085464] hover:text-white hover:bg-[#085464] rounded-lg  border border-1 border-[#085464] ">
                    <button className="px-9 py-2 ">Play Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:p-6 p-4 rounded-lg flex border border-[#085464] items-center justify-center bg-[#fff]  drop-shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                <div className="w-full rounded-md flex items-center justify-center">
                  <Image src={kc2} height={300} className="rounded-lg" />
                </div>
                <div className="flex justify-between ">
                  <div className="pl-9 -mt-6">
                    <div className="bg-white  border border-1 border-[#085464] flex justify-center items-center w-[100px] h-[30px] rounded-md text-[#085464] lg:text-lg md:text-lg text-[14px]">
                      Que . 10
                    </div>
                  </div>
                  <div className="pr-9 -mt-6">
                    <div className="bg-white  border border-1 border-[#085464] flex justify-center items-center w-[100px] h-[30px] rounded-md text-[#085464] lg:text-lg md:text-lg text-[14px]">
                      Plays: 13k
                    </div>
                  </div>
                </div>
                <div className="text-center text-[#085464] lg:text-lg md:text-lg text-[14px]">
                  Coding for Fun
                </div>
                <div className="p-4">
                  <div className=" bg-[#085464] flex justify-center items-center w-[100px] h-[30px] rounded-lg text-white lg:text-lg md:text-lg text-[14px]">
                    Scratch
                  </div>
                </div>
                <div className="px-4 py-1">
                  <div className=" flex items-center   text-left  rounded-lg text-[#085464] lg:text-lg md:text-lg text-[14px]">
                    <Image src={cap} className="pr-2" />
                    Grade: 1-8
                  </div>
                </div>
                <div className="px-4 py-1">
                  <div className=" flex items-center   text-left  rounded-lg text-[#085464] lg:text-lg md:text-lg text-[14px]">
                    <Image src={graph} className="pr-2" />
                    Beginner Level
                  </div>
                </div>

                <div className="pt-7 flex justify-center items-center pb-4">
                  <div className="text-[#085464] hover:text-white hover:bg-[#085464] rounded-lg  border border-1 border-[#085464] ">
                    <button className="px-9 py-2 ">Play Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:p-6 p-4 rounded-lg flex border border-[#085464] items-center justify-center bg-[#fff]  drop-shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                <div className="w-full rounded-md flex items-center justify-center">
                  <Image src={kc3} height={300} className="rounded-lg" />
                </div>
                <div className="flex justify-between ">
                  <div className="pl-9 -mt-6">
                    <div className="bg-white  border border-1 border-[#085464] flex justify-center items-center w-[100px] h-[30px] rounded-md text-[#085464] lg:text-lg md:text-lg text-[14px]">
                      Que . 10
                    </div>
                  </div>
                  <div className="pr-9 -mt-6">
                    <div className="bg-white  border border-1 border-[#085464] flex justify-center items-center w-[100px] h-[30px] rounded-md text-[#085464] lg:text-lg md:text-lg text-[14px]">
                      Plays: 13k
                    </div>
                  </div>
                </div>
                <div className="text-center text-[#085464] lg:text-lg md:text-lg text-[14px]">
                  Code Creation
                </div>
                <div className="p-4">
                  <div className=" bg-[#085464] flex justify-center items-center w-[100px] h-[30px] rounded-lg text-white lg:text-lg md:text-lg text-[14px]">
                    Scratch
                  </div>
                </div>
                <div className="px-4 py-1">
                  <div className=" flex items-center   text-left  rounded-lg text-[#085464] lg:text-lg md:text-lg text-[14px]">
                    <Image src={cap} className="pr-2" />
                    Grade: 1-8
                  </div>
                </div>
                <div className="px-4 py-1">
                  <div className=" flex items-center   text-left  rounded-lg text-[#085464] lg:text-lg md:text-lg text-[14px]">
                    <Image src={graph} className="pr-2" />
                    Beginner Level
                  </div>
                </div>

                <div className="pt-7 flex justify-center items-center pb-4">
                  <div className="text-[#085464] hover:text-white hover:bg-[#085464] rounded-lg  border border-1 border-[#085464] ">
                    <button className="px-9 py-2 ">Play Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[100vh] flex-row items-center">
        <div className="p-4 pt-7 flex justify-center items-center">
          <span className="xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-semi-bold text-center">
            Cool FACTS About Programming and Coding You NEED to Know
          </span>
        </div>

        <div className="flex py-4 justify-center items-center px-6 ">
          <div className="text-[#085464] w-[80%] border rounded-lg border-[#085464] p-4  xl:text-[30px] lg:text-[30px] sm:text-[30px] text-[20px] font-medium text-center ">
            The term "bug" in programming comes from an actual bug that got
            stuck in the early computer called Harvard Mark II, causing it to
            malfunction.
          </div>
        </div>
        <div className="flex py-4 justify-center items-center px-6 ">
          <div className="text-[#085464] w-[80%] border rounded-lg border-[#085464] p-4  xl:text-[30px] lg:text-[30px] sm:text-[30px] text-[20px] font-medium text-center ">
            The first computer game ever created was called "Tic-Tac-Toe" and
            was written in 1952 by A.S. Douglas on an EDSAC vacuum tube
            computer.
          </div>
        </div>
        <div className="flex py-4 justify-center items-center px-6 ">
          <div className="text-[#085464] w-[80%] border rounded-lg border-[#085464] p-4  xl:text-[30px] lg:text-[30px] sm:text-[30px] text-[20px] font-medium text-center ">
            The first computer virus was called "Creeper" and was created in
            1971.
          </div>
        </div>
      </div>
      <div className="min-h-[100vh]">
        <div className="p-4 flex justify-center items-center">
          <span className="xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-semi-bold">
            Successor’s Testimonials
          </span>
        </div>
        <div className="py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:mx-4 mx-1">
          <div className="w-full flex justify-center items-center">
            <div className="w-[310px] lg:w-[400px] xl:w-[400px] h-auto bg-[#085464] rounded-lg infPic">
              <div className="flex justify-center items-center">
                <Image src={kid1} width={200} height={200} />
              </div>
              <div className="flex justify-center items-center text-[30px] text-white">
                <span>Naina Grover</span>
              </div>
              <div className="flex justify-center items-center text-[30px] text-white">
                <Image src={star} width={30} height={30} className="px-1" />
                <Image src={star} width={30} height={30} className="px-1" />
                <Image src={star} width={30} height={30} className="px-1" />
                <Image src={star} width={30} height={30} className="px-1" />
                <Image src={star} width={30} height={30} className="px-1" />
              </div>
              <div className="p-4">
                <div className="flex justify-start items-center p-1">
                  <Image src={sq} width={20} height={20} />
                </div>
                <div className="flex justify-center items-center text-white text-center">
                  This coding website is amazing! I love how it makes learning
                  to code so much fun. The quizzes and puzzles are so engaging
                  and it's so easy to follow along. I can't wait to learn more
                  and create my own programs.
                </div>
                <div className="flex justify-end items-center p-1">
                  <Image src={eq} width={20} height={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-[310px] lg:w-[400px] xl:w-[400px] h-auto bg-[#085464] rounded-lg infPic">
              <div className="flex justify-center items-center">
                <Image src={kid2} width={200} height={200} />
              </div>
              <div className="flex justify-center items-center text-[30px] text-white">
                <span>Divyanshu Singh</span>
              </div>
              <div className="flex justify-center items-center text-[30px] text-white">
                <Image src={star} width={30} height={30} className="px-1" />
                <Image src={star} width={30} height={30} className="px-1" />
                <Image src={star} width={30} height={30} className="px-1" />
                <Image src={star} width={30} height={30} className="px-1" />
                <Image src={star} width={30} height={30} className="px-1" />
              </div>
              <div className="p-4">
                <div className="flex justify-start items-center p-1">
                  <Image src={sq} width={20} height={20} />
                </div>
                <div className="flex justify-center items-center text-white text-center">
                  This coding website is amazing! I love how it makes learning
                  to code so much fun. The quizzes and puzzles are so engaging
                  and it's so easy to follow along. I can't wait to learn more
                  and create my own programs.
                </div>
                <div className="flex justify-end items-center p-1">
                  <Image src={eq} width={20} height={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KidsCoding;
