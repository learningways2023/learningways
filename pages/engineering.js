import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import startq from "../public/startq.svg";
import endq from "../public/endq.svg";
import expand from "../public/expand.png";
import ArticleCard from "../components/ArticleCard";
import dbms from "../public/dbms.png";
import ment from "../public/john.png";
import EngineeringCourse from "../components/engineeringCourse";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";
const Engineering = () => {
  const classes =
    " text-black border-b-2  text-base bg-inherit placeholder-[#333]  w-full h-full   block py-2.5 lg:px-9 xl:px-9 px-9 outline-0 focus:outline-0 ";

  return (
    <div>
      <Navbar />
      <div className="min-h-[80vh] mx-4 my-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md mb-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        <div className=" p-4 rounded-md flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-0 lg:gap-8 sm:gap-4 lg:px-10 md:px-10 px-3">
            <div className="flex justify-start sm:ml-[1rem] ml-[0rem] aboutQuote pl-2">
              <Image
                src={startq}
                className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[60px] xl:h-[60px]"
              />
            </div>
            <div className="mt-[1rem] rounded-md flex items-center justify-center text-center font-semibold xl:text-[42px] text-white  lg:text-[34px] sm:text-[32px] text-[24px] ">
              <span className="xl:text-[42px] text-black  lg:text-[34px] sm:text-[32px] text-[24px]  mx-3">
                LEARN AN ART BE AN ARTIST
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
        Explore
      </div>
      <div className="px-4 py-8 mx-1 md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Begineer Level
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Intermediate Level
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
            Advanced Level
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Tell us more about yourself
      </div>
      <div className="px-4 py-9 lg:px-7 xl:px-7 my-8 mx-4 min-h-[90vh] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className=" p-4 rounded-md flex items-center justify-center pb-9">
            <div className="newloginContainer cardbg1  rounded-md drop-shadow-2xl">
              <div className="card-col">
                <form
                  className="newLoginForm m-4 py-7"
                  action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_QJ0517TP7rdLkVNpYs49aiK3qiH__gMYL8MdvoFop15jEw/formResponse"
                >
                  <label className="text-lg   pb-1">Name</label>
                  <input
                    className={classes}
                    type="text"
                    name="entry.2005620554"
                    placeholder="Enter your Name"
                  />
                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg   ">Stream </label>
                  </div>
                  <input
                    className={classes}
                    type="text"
                    name="entry.1045781291"
                    placeholder="Enter your Stream"
                  />
                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg   ">Domain </label>
                  </div>
                  <input
                    className={classes}
                    type="text"
                    name="entry.1045781291"
                    placeholder="Information Technology"
                  />
                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg   ">Grade your Skills</label>
                  </div>
                  <input
                    className={classes}
                    type="text"
                    name="entry.1166974658"
                    placeholder="Advanced Level"
                  />

                  <div className=" flex justify-center items-center pt-7 pb-3  ">
                    <div
                      className=" border-2 text-white rounded px-2 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                      onClick={function showModal() {
                        setModal(true);
                      }}
                    >
                      Submit
                    </div>
                  </div>
                </form>
              </div>
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
      </div>
      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
        FOCUSING ON UPSKILLING & UPGRADING IS IMPORTANT
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Fields of Engineering
      </div>
      <div className="px-4 py-8 mx-1 md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Aeronautical Engineering
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Chemical Engineering
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Civil Engineering
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Electronic Engineering
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Mechanical Engineering
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
            Engineering Management
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Courses of Aeronautical Engineering
      </div>
      <div className="mx-4 my-8 mt-10 cardbg1 rounded-md">
        <div className=" w-full py-9  flex flex-wrap">
          <EngineeringCourse tittle="Automotive & Aeronautics Design Program" />
          <EngineeringCourse tittle="A.A.S" />
          <EngineeringCourse tittle="Diploma in Avionics Technology" />
          <EngineeringCourse tittle="FdEng in Aircraft Engineering" />
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Basic tools to upgrade your engineering skills
      </div>
      <div className="px-4 py-8 mx-1 md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Mathcad
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Mathcad
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Computer - Aided Design ( CAD ) Software
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Visual Basic for Applications
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Python
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
            Rhino
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Blogs that may interests you
      </div>
      <div className="px-4 py-8 mx-1 md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Aeronautical Engineering
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Chemical Engineering
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Civil Engineering
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Electronic Engineering
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Mechanical Engineering
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
            Engineering Management
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Featured Blogs
      </div>
      <div className="px-4 py-8 mx-1 md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
        <div className="w-full h-full flex justify-center text-white items-center">
          <div className="dropdown ">
            <button className="dropbtn1  flex items-center justify-center cursor-pointer">
              Categories{" "}
              <div className="mt-2 ml-2 mb-1">
                <Image src={expand} width={20} height={20} />
              </div>
            </button>
            <div className="dropdown-content1 bg-gradient-to-r from-blue-500 to-cyan-500">
              <div
                className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                onClick={function handleLogo() {
                  router.push("/NCERT_Solutions");
                  setNavbar(false);
                }}
              >
                Chemical Engineering
              </div>
              <div
                className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                onClick={function handleLogo() {
                  router.push("/assesment");
                  setNavbar(false);
                }}
              >
                Assessment
              </div>
              <div
                className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                onClick={function handleLogo() {
                  router.push("/courses");
                  setNavbar(false);
                }}
              >
                Skill Development
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center text-white items-center">
          <div className="dropdown ">
            <button className="dropbtn1  flex items-center justify-center cursor-pointer">
              Topics{" "}
              <div className="mt-2 ml-2 mb-1">
                <Image src={expand} width={20} height={20} />
              </div>
            </button>
            <div className="dropdown-content1 bg-gradient-to-r from-blue-500 to-cyan-500">
              <div
                className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                onClick={function handleLogo() {
                  router.push("/NCERT_Solutions");
                  setNavbar(false);
                }}
              >
                Chemical Engineering
              </div>
              <div
                className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                onClick={function handleLogo() {
                  router.push("/assesment");
                  setNavbar(false);
                }}
              >
                Assessment
              </div>
              <div
                className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                onClick={function handleLogo() {
                  router.push("/courses");
                  setNavbar(false);
                }}
              >
                Skill Development
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-start  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] ">
        Featured Blogs
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
        Join our growing Community & be the part of Revolution
      </div>
      <div className="mx-4 my-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md min-h-[70vh]">
        <div className="grid grid-cols-1 gap-6">
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleNavigate() {
                router.push("/Coding_tutorials#web_development");
              }}
            >
              {" "}
              Data Analysis Community
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleNavigate() {
                router.push("/Coding_tutorials#web_development");
              }}
            >
              {" "}
              AI Community
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
              onClick={function handleNavigate() {
                router.push("/Coding_tutorials#web_development");
              }}
            >
              {" "}
              Product Management Community
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-1">
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_inti4oxf.json"
            className=" xl:w-[400px] xl:h-[400px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
          ></Player>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Mentorship
      </div>

      <div className=" px-4 mx-4 py-4 lg:px-7 xl:px-7 text-[#fff] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md   flex justify-center items-center text-center   xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
        <div className="text-[#fff]     text-center ">
          Meet our mentors to get personalised Feedback, strategies and approach{" "}
          {"  "}{" "}
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
                  "John helped me improve my coding skills and gave me valuable
                  insights on how to advance in my career." - Jane Smith, Junior
                  Developer
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
                  "John helped me improve my coding skills and gave me valuable
                  insights on how to advance in my career." - Jane Smith, Junior
                  Developer
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
                  "John helped me improve my coding skills and gave me valuable
                  insights on how to advance in my career." - Jane Smith, Junior
                  Developer
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
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 mx-4  rounded-xl my-5 min-h-[80vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          <div className="flex flex-col pt-20 items-center justify-between min-h-[50vh]">
            <div className="xl:text-[42px] text-white lg:text-[34px] sm:text-[32px] text-[24px] py-2 sm:px-10 px-5 flex justify-center items-center text-center font-semibold">
              If you are a college / college representative we have a bag ful l
              of offers for you.
            </div>
            <div className="flex justify-center items-center pb-12">
              <div
                className=" border-2 text-white rounded px-4 py-2 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                onClick={function showModal() {
                  setModal(true);
                }}
              >
                Register now !
              </div>
            </div>
          </div>
          <div className="w-auto h-auto pb-7 flex justify-center">
            <Player
              autoplay
              loop
              src="https://assets7.lottiefiles.com/packages/lf20_tno6cg2w.json"
              className=" xl:w-[400px] xl:h-[400px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
            ></Player>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Engineering;
