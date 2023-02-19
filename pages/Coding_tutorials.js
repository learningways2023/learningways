import React from "react";
import { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Uparrow from "../components/uparrow";
import Coding from "../components/Coding";
import Footer from "../components/footer";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import { useRouter } from "next/router";
const CodingTutorials = () => {
  const router = useRouter();
  const vidRef = useRef();
  // useEffect(() => {
  //   vidRef.current.play();
  // }, []);
  return (
    <div className="">
      {/* https://assets7.lottiefiles.com/packages/lf20_tno6cg2w.json */}
      <Navbar />
      <div className="py-5 px-4 ">
        <div className="bg-[#040f25]  rounded-xl w-[100%] min-h-[80vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            <div className="flex flex-col pt-20 items-center justify-between min-h-[50vh]">
              <div className="xl:text-[42px] text-white lg:text-[34px] sm:text-[32px] text-[24px] py-2 sm:px-10 px-5 flex justify-center items-center text-center font-semibold">
                Master the Art of Coding with Our Tutorials
              </div>
              <div className="flex justify-center items-center pb-12">
                <div className="px-5 py-3 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] card-col rounded-xl cursor-pointer font-semibold">
                  Explore now
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

        {/* <header class="bg-gradient-to-r from-cyan-500 to-blue-500 w-[100%]  relative flex items-center justify-center h-screen vid  overflow-hidden">
          <div class="relative   text-white pb-8">
            <div className="flex justify-center items-center py-8"></div>
          </div>

          <video
          autoplay
          loop
          muted
          ref={vidRef}
          class="absolute vid p-4  w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        </header> */}
      </div>
      <Uparrow url="Coding_tutorials" />

      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Learn and Explore
      </div>
      <div className="px-4 py-8 mx-1 md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-[#040f25] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            Web Development
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
            Data Science
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
            Mobile Development
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
            Game Development
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
            Cloud Computing
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
            CyberSecurity
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
            DevOps
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
            Aritificial Intelligence
          </div>
        </div>
      </div>

      <div
        id="web_development"
        className="text-black p-4 flex justify-center  items-center text-center xl:text-[42px] lg:text-[34px] sm:text-[32px] text-[22px] font-semibold mt-10"
      >
        Web Development
      </div>
      <div className="px-4 py-8">
        <div className="cardbg1 w-full flex flex-wrap">
          <Coding
            tittle="Get Started with React - A Beginner's Guide"
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
          <Coding
            tittle="Build a RESTful API with Express.js"
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
          <Coding
            tittle="Developing a Progressive Web App (PWA)"
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
          <Coding
            tittle="Developing a Progressive Web App (PWA)"
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
      <div
        id="data_science"
        className="text-black p-4 pt-9  flex justify-center font-semibold  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] "
      >
        Data Science
      </div>
      <div className="px-4 py-8">
        <div className="cardbg1 w-full flex flex-wrap">
          <Coding
            tittle="Introduction to Python for Data Science"
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
          <Coding
            tittle="Data Visualization with Matplotlib and Seaborn"
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
          <Coding
            tittle="Machine Learning with scikit-learn"
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
          <Coding
            tittle="Exploring and Cleaning Data with Pandas"
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

      <div
        id="mobile_development"
        className="text-black p-4 pt-9 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] "
      >
        Mobile Development
      </div>
      <div className="px-4 py-8">
        <div className="cardbg1 w-full flex flex-wrap">
          <Coding
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
          <Coding
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
          <Coding
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
          <Coding
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
        </div>
      </div>

      <div
        id="game_development"
        className="text-black p-4 pt-9 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] "
      >
        Game Development
      </div>
      <div className="px-4 py-8">
        <div className="cardbg1 w-full flex flex-wrap">
          <Coding
            tittle="Getting Started with Unity - Create Your First Game"
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
          <Coding
            tittle="Building a 3D Platformer in Unity"
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
          <Coding
            tittle="Introduction to Unreal Engine 4 for Game Development"
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
          <Coding
            tittle="2D Game Development with Godot Engine"
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

      <div
        id="cloud_computing"
        className="text-black p-4 pt-9 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] "
      >
        Cloud Computing
      </div>
      <div className="px-4 py-8">
        <div className="cardbg1 w-full flex flex-wrap">
          <Coding
            tittle="Getting Started with Amazon Web Services (AWS)"
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
          <Coding
            tittle="Microsoft Azure Fundamentals"
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
          <Coding
            tittle="Building a Serverless Application with AWS Lambda"
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
          <Coding
            tittle="basics of Google Cloud Platform (GCP)"
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
      <div
        id="cyberSecurity"
        className="text-black p-4 pt-9 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] "
      >
        CyberSecurity
      </div>
      <div className="px-4 py-8">
        <div className=" cardbg1 w-full flex flex-wrap">
          <Coding
            tittle="Introduction to Cybersecurity Awareness"
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
          <Coding
            tittle="Understanding the Different Types of Malwares"
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
          <Coding
            tittle="How to Use Strong Passwords and Two-Factor Authentication"
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
          <Coding
            tittle="Safe Browsing Practices and Avoiding Phishing Scams"
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
      <div
        id="devops"
        className="text-black p-4 pt-9 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] "
      >
        Devops
      </div>
      <div className="px-4 py-8">
        <div className="cardbg1 w-full flex flex-wrap">
          <Coding
            tittle="Introduction to DevOps"
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
          <Coding
            tittle="Automating Deployments with Shell Script"
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
          <Coding
            tittle="Getting Started with Git for Version Control"
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
          <Coding
            tittle="Managing Infrastructure with Ansible"
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
      <div
        id="ai"
        className="text-black p-4 pt-9 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] "
      >
        Artificial Intelligence
      </div>
      <div className="px-4 py-8">
        <div className="cardbg1  w-full flex flex-wrap">
          <Coding
            tittle="An Introduction to Artificial Intelligence"
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
          <Coding
            tittle="A Beginner's Guide to Artificial Intelligence"
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
          <Coding
            tittle="Artificial Intelligence for Humans"
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
          <Coding
            tittle="The Fundamentals of Artificial Intelligence"
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
      <Footer />
    </div>
  );
};

export default CodingTutorials;
