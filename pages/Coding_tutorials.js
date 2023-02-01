import React from "react";
import { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Uparrow from "../components/uparrow";
import Coding from "../components/Coding";
import Footer from "../components/footer";
const CodingTutorials = () => {
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div>
      <Navbar />
      <Uparrow url="Coding_tutorials" />
      <header class="relative flex items-center justify-center h-screen vid  overflow-hidden">
        <div class="relative z-30  text-white pb-8">
          <div className="xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] py-5 flex justify-center items-center text-center">
            Master the Art of Coding with Our Tutorials
          </div>
          <div className="flex justify-center items-center py-8">
            <div className="p-5 xl:text-[28px] lg:text-[26px] sm:text-[20px] text-[18px] bg-[#085464] opacity-[0.8]  rounded-xl cursor-pointer">
              Explore Now !
            </div>
          </div>
        </div>
        <video
          autoplay
          loop
          muted
          ref={vidRef}
          class="absolute vid w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>

      <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] ">
        Learn and Explore
      </div>
      <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 py-9 gap-6 ">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] focus:bg-[#085464] focus:text-white rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            Web Development
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            Data Science
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            Mobile Development
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            Game Development
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            Cloud Computing
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            CyberSecurity
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            DevOps
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            Aritificial Intelligence
          </div>
        </div>
      </div>

      <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] ">
        Web Development
      </div>
      <div className="p-1 md:p-4 lg:p-4 xl:p-4 w-full flex flex-wrap">
        <Coding
          tittle="Build a Responsive Website "
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
          tittle="Get Started with React "
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
      </div>
      <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] ">
        Data Science
      </div>
      <div className=" p-1 md:p-4 lg:p-4 xl:p-4 w-full flex flex-wrap">
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
          tittle="Data Visualization with Matplotlib"
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
      <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] ">
        Mobile Development
      </div>
      <div className="p-1 md:p-4 lg:p-4 xl:p-4 w-full flex flex-wrap">
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
      <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] ">
        Game Development
      </div>
      <div className="p-1 md:p-4 lg:p-4 xl:p-4 w-full flex flex-wrap">
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
      <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] ">
        Cloud Computing
      </div>
      <div className="p-1 md:p-4 lg:p-4 xl:p-4 w-full flex flex-wrap">
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
      <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] ">
        CyberSecurity
      </div>
      <div className="p-1 md:p-4 lg:p-4 xl:p-4 w-full flex flex-wrap">
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
      <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] ">
        Devops
      </div>
      <div className="p-1 md:p-4 lg:p-4 xl:p-4 w-full flex flex-wrap">
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
      <div className="text-[#085464] p-4 pt-9 font-medium flex justify-center  items-center text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] ">
        Artificial Intelligence
      </div>
      <div className="p-1 md:p-4 lg:p-4 xl:p-4 w-full flex flex-wrap">
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
      <Footer />
    </div>
  );
};

export default CodingTutorials;
