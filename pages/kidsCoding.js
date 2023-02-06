import React from "react";
import Image from "next/image";
import startq from "../public/startq.svg";
import sq from "../public/sq.svg";
import eq from "../public/eq.svg";
import kid1 from "../public/kid1.png";
import Uparrow from "../components/uparrow";
import chero from "../public/chero.jpg";
import dbms from "../public/dbms.png";
import ment from "../public/john.png";
import medal from "../public/medal.png";
import CodingQuiz from "../components/codingQuiz";
import endq from "../public/endq.svg";
import FreeCourseCard from "../components/freeCourseCard";
import wb from "../public/wb.jpg";
import robot from "../public/robot.jpg";
import ag from "../public/ag.jpg";
import Footer from "../components/footer.js";
import kid2 from "../public/kid2.png";
import star from "../public/start.png";
import kc1 from "../public/kc1.jpg";
import cap from "../public/cap.png";
import graph from "../public/graph.png";
import kc2 from "../public/kc2.jpg";
import kc3 from "../public/kc3.jpg";
import CourseCard from "../components/courseCard";
import kids1 from "../public/kids1.png";
import Navbar from "../components/navbar";
const KidsCoding = () => {
  return (
    <div className="">
      <Navbar />
      <Uparrow url="kidsCoding" />
      <div className="min-h-[90vh] mx-4 my-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md mb-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        <div className=" p-4 rounded-md flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-0 lg:gap-8 sm:gap-4 lg:px-10 md:px-10 px-3">
            <div className="flex justify-start sm:ml-[1rem] ml-[0rem] aboutQuote pl-2">
              <Image
                src={startq}
                className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]"
              />
            </div>
            <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] text-center ">
              <span className="text-[#fff]  ">
                Unlock a world of endless possibilities with our fun and
                engaging website for kids. Learn to code and discover the magic
                of programming in a way that's both exciting and interactive
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
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Coding quizzes for kids
      </div>
      <div className="mx-4 my-8 mt-10 cardbg1 rounded-md">
        <div className=" w-full py-9  flex flex-wrap">
          <CodingQuiz img={kc1} tittle=" Programming Playground" />
          <CodingQuiz img={kc2} tittle="Coding for Fun" />
          <CodingQuiz img={kc3} tittle="Code Creation" />
        </div>
      </div>
      {/* <div className="">
        <div className=" cardbg1 mx-4 flex justify-center items-center">
          <div className="py-9 w-[93%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:mx-4 mx-1">
            <div className="max-h-[97vh] card-col sm:p-6 p-4 rounded-lg flex border border-[#085464] items-center justify-center   ">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                <div className="w-full rounded-md flex items-center justify-center">
                  <Image src={kc1} height={300} className="rounded-lg" />
                </div>
                <div className="flex justify-between space-x-3 ">
                  <div className="pl-9 -mt-6">
                    <div className="bg-white  border border-1 border-[#085464] flex justify-center items-center w-[100px] h-[30px] rounded-md text-black lg:text-lg md:text-lg text-[14px]">
                      Que . 10
                    </div>
                  </div>
                  <div className="pr-9 -mt-6">
                    <div className="bg-white  border border-1 border-[#085464] flex justify-center items-center w-[100px] h-[30px] rounded-md text-black lg:text-lg md:text-lg text-[14px]">
                      Plays: 13k
                    </div>
                  </div>
                </div>
                <div className="text-center text-black font-semibold lg:text-lg md:text-lg text-[14px]">
                  Programming Playground
                </div>
                <div className="p-4">
                  <div className=" bg-black flex justify-center items-center w-[100px] h-[30px] rounded-lg text-white lg:text-lg md:text-lg text-[14px]">
                    Scratch
                  </div>
                </div>
                <div className="px-4 py-1">
                  <div className=" flex items-center   text-left  rounded-lg text-black lg:text-lg md:text-lg text-[14px]">
                    <Image src={cap} className="pr-2" />
                    Grade: 1-8
                  </div>
                </div>
                <div className="px-4 py-1">
                  <div className=" flex items-center   text-left  rounded-lg text-black lg:text-lg md:text-lg text-[14px]">
                    <Image src={graph} className="pr-2" />
                    Beginner Level
                  </div>
                </div>

                <div className="pt-7 flex justify-center items-start ">
                  <div
                    className=" border-2 text-white rounded px-4 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                    onClick={function showModal() {
                      setModal(true);
                    }}
                  >
                    Play Now !
                  </div>
                </div>
              </div>
            </div>
            <div className="max-h-[97vh] card-col sm:p-6 p-4 rounded-lg flex border border-[#085464] items-center justify-center   ">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                <div className="w-full rounded-md flex items-center justify-center">
                  <Image src={kc2} height={300} className="rounded-lg" />
                </div>
                <div className="flex justify-between space-x-3 ">
                  <div className="pl-9 -mt-6">
                    <div className="bg-white  border border-1 border-[#085464] flex justify-center items-center w-[100px] h-[30px] rounded-md text-black lg:text-lg md:text-lg text-[14px]">
                      Que . 10
                    </div>
                  </div>
                  <div className="pr-9 -mt-6">
                    <div className="bg-white  border border-1 border-[#085464] flex justify-center items-center w-[100px] h-[30px] rounded-md text-black lg:text-lg md:text-lg text-[14px]">
                      Plays: 13k
                    </div>
                  </div>
                </div>
                <div className="text-center text-black font-semibold lg:text-lg md:text-lg text-[14px]">
                  Coding for Fun
                </div>
                <div className="p-4">
                  <div className=" bg-black flex justify-center items-center w-[100px] h-[30px] rounded-lg text-white lg:text-lg md:text-lg text-[14px]">
                    Scratch
                  </div>
                </div>
                <div className="px-4 py-1">
                  <div className=" flex items-center   text-left  rounded-lg text-black lg:text-lg md:text-lg text-[14px]">
                    <Image src={cap} className="pr-2" />
                    Grade: 1-8
                  </div>
                </div>
                <div className="px-4 py-1">
                  <div className=" flex items-center   text-left  rounded-lg text-black lg:text-lg md:text-lg text-[14px]">
                    <Image src={graph} className="pr-2" />
                    Beginner Level
                  </div>
                </div>

                <div className="pt-7 flex justify-center items-center pb-4">
                  <div
                    className=" border-2 text-white rounded px-4 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                    onClick={function showModal() {
                      setModal(true);
                    }}
                  >
                    Play Now !
                  </div>
                </div>
              </div>
            </div>
            <CodingQuiz img={kc3} tittle="Code Creation" />
            <div className="max-h-[97vh] card-col sm:p-6 p-4 rounded-lg flex border border-[#085464] items-center justify-center   ">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                <div className="w-full rounded-md flex items-center justify-center">
                  <Image src={kc3} height={300} className="rounded-lg" />
                </div>
                <div className="flex justify-between space-x-3 ">
                  <div className="pl-9 -mt-6">
                    <div className="bg-white  border border-1 border-[#085464] flex justify-center items-center w-[100px] h-[30px] rounded-md text-black lg:text-lg md:text-lg text-[14px]">
                      Que . 10
                    </div>
                  </div>
                  <div className="pr-9 -mt-6">
                    <div className="bg-white  border border-1 border-[#085464] flex justify-center items-center w-[100px] h-[30px] rounded-md text-black lg:text-lg md:text-lg text-[14px]">
                      Plays: 13k
                    </div>
                  </div>
                </div>
                <div className="text-center text-black font-semibold lg:text-lg md:text-lg text-[14px]">
                  Code Creation
                </div>
                <div className="p-4">
                  <div className=" bg-black flex justify-center items-center w-[100px] h-[30px] rounded-lg text-white lg:text-lg md:text-lg text-[14px]">
                    Scratch
                  </div>
                </div>
                <div className="px-4 py-1">
                  <div className=" flex items-center   text-left  rounded-lg text-black lg:text-lg md:text-lg text-[14px]">
                    <Image src={cap} className="pr-2" />
                    Grade: 1-8
                  </div>
                </div>
                <div className="px-4 py-1">
                  <div className=" flex items-center   text-left  rounded-lg text-black lg:text-lg md:text-lg text-[14px]">
                    <Image src={graph} className="pr-2" />
                    Beginner Level
                  </div>
                </div>

                <div className="pt-7 flex justify-center items-center pb-4">
                  <div
                    className=" border-2 text-white rounded px-4 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                    onClick={function showModal() {
                      setModal(true);
                    }}
                  >
                    Play Now !
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Featured Courses
      </div>
      <div className="mx-4 my-8 mt-10 cardbg1 rounded-md">
        <div className=" w-full py-9  flex flex-wrap">
          <FreeCourseCard
            img={ag}
            tittle="Code Your Own Adventure Game"
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
            img={robot}
            tittle="Robotics for Kids "
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
            img={wb}
            tittle="Make Your Own Website"
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
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Fun and Interactive Learning Resources for Kids{" "}
      </div>

      <div className="p-4 grid grid-cols-1 mx-4 my-5  bg-gradient-to-r from-blue-500 to-cyan-500 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[300px] h-[200px] bg-white rounded-lg drop-shadow-2xl cursor-pointer text-black hover:bg-gradient-to-r from-blue-500 to-cyan-500 flex px-3 hover:text-white wwd1 justify-center items-center text-center text-xl">
            Coding for Beginners: A Step-by-Step Guide
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[300px] h-[200px] bg-white rounded-lg drop-shadow-2xl cursor-pointer text-black hover:bg-gradient-to-r from-blue-500 to-cyan-500 flex px-3 hover:text-white wwd1 justify-center items-center text-center text-xl">
            Fun Coding Projects for Kids
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[300px] h-[200px] bg-white rounded-lg drop-shadow-2xl cursor-pointer text-black hover:bg-gradient-to-r from-blue-500 to-cyan-500 flex px-3 hover:text-white wwd1 justify-center items-center text-center text-xl">
            Coding Games and Challenges
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[300px] h-[200px] bg-white rounded-lg drop-shadow-2xl cursor-pointer text-black hover:bg-gradient-to-r from-blue-500 to-cyan-500 flex px-3 hover:text-white wwd1 justify-center items-center text-center text-xl">
            Recommended Tools and Resources for Learning to Code
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Cool FACTS About Programming and Coding You NEED to Know
      </div>
      <div className="flex flex-col items-center justify-between bg-gradient-to-r from-blue-500 to-cyan-500 mx-4  my-5 rounded-md min-h-[80vh]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-0 lg:gap-8 sm:gap-4 lg:px-10 md:px-10 px-3">
          <div className="flex justify-start sm:ml-[1rem] pt-3 ml-[0rem] aboutQuote pl-2">
            <Image
              src={startq}
              className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]"
            />
          </div>
          <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] text-center ">
            <span className="text-black  ">
              The term "bug" in programming comes from an actual bug that got
              stuck in the early computer called Harvard Mark II, causing it to
              malfunction.
            </span>
          </div>
          <div className="flex justify-end aboutQuote sm:mr-[1rem] mr-[0rem] pr-2">
            <Image
              src={endq}
              className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-0 lg:gap-8 sm:gap-4 lg:px-10 md:px-10 px-3">
          <div className="flex justify-start sm:ml-[1rem] pt-3 ml-[0rem] aboutQuote pl-2">
            <Image
              src={startq}
              className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]"
            />
          </div>
          <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] text-center ">
            <span className="text-black  ">
              The first computer game ever created was called "Tic-Tac-Toe" and
              was written in 1952 by A.S. Douglas on an EDSAC vacuum tube
              computer.
            </span>
          </div>
          <div className="flex justify-end aboutQuote sm:mr-[1rem] mr-[0rem] pr-2">
            <Image
              src={endq}
              className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-0 lg:gap-8 sm:gap-4 lg:px-10 md:px-10 px-3">
          <div className="flex justify-start sm:ml-[1rem] pt-3 ml-[0rem] aboutQuote pl-2">
            <Image
              src={startq}
              className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]"
            />
          </div>
          <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] text-center ">
            <span className="text-black  ">
              The first computer virus was called "Creeper" and was created in
              1971.
            </span>
          </div>
          <div className="flex justify-end aboutQuote sm:mr-[1rem] mr-[0rem] pr-2 pb-3">
            <Image
              src={endq}
              className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]"
            />
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

      <Footer />
    </div>
  );
};

export default KidsCoding;
