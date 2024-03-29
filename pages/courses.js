import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import chero from "../public/chero.jpg";
import endq from "../public/endq.svg";
import { useState, useEffect } from "react";
import ment from "../public/john.png";
import wd from "../public/wd.jpg";
import FreeCourseCard from "../components/freeCourseCard";
import dbms from "../public/dbms.png";
import Uparrow from "../components/uparrow";
import ArticleCard from "../components/ArticleCard";
import startq from "../public/startq.svg";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import kc3 from "../public/kc3.jpg";
import Axios from "axios";
import Image from "next/image";
const Courses = () => {
  const [digital, setDigital] = useState(null);
  const [dataScience, setDataSci] = useState(null);
  const [buisness, setBuisness] = useState(null);
  const [product, setProduct] = useState(null);
  const [coding, setCoding] = useState(null);
  useEffect(() => {
    const fetchDigital = async () => {
      const result = await Axios.post("/api/acess/getDigital");

      setDigital(result.data);
    };

    fetchDigital();
    console.log(digital);
  }, []);
  useEffect(() => {
    const fetchDigital = async () => {
      const result = await Axios.post("/api/acess/getData");

      setDataSci(result.data);
    };

    fetchDigital();
    console.log(dataScience);
  }, []);
  useEffect(() => {
    const fetchDigital = async () => {
      const result = await Axios.post("/api/acess/getBuissness");

      setBuisness(result.data);
    };

    fetchDigital();
    console.log(buisness);
  }, []);
  useEffect(() => {
    const fetchDigital = async () => {
      const result = await Axios.post("/api/acess/getProduct");

      setProduct(result.data);
    };

    fetchDigital();
    console.log(product);
  }, []);
  useEffect(() => {
    const fetchDigital = async () => {
      const result = await Axios.post("/api/acess/getCoding");

      setCoding(result.data);
    };

    fetchDigital();
    console.log(coding);
  }, []);
  const [free, setFree] = useState(1);
  const [premium, setPre] = useState(false);
  const classes =
    " text-black border-b-2  text-base bg-inherit placeholder-[#333]  w-full h-full   block py-2.5 lg:px-9 xl:px-9 px-9 outline-0 focus:outline-0 ";

  // console.log(free);
  return (
    <div>
      {digital && dataScience && buisness && product && coding ? (
        <div>
          {console.log(digital)}
          {console.log(dataScience)}
          {console.log(buisness)}
          {console.log(product)}
          {console.log(coding)}
          <Navbar />
          <Uparrow url="courses" />
          <div className="p-4">
            <div className="min-h-[90vh] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md mb-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
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
                      Welcome to our comprehensive skill development platform.
                      Discover a wide range of courses and resources to help you
                      learn new skills, improve existing ones and advance your
                      career. With our expert-led training, interactive practice
                      exercises and real-world examples, you'll have everything
                      you need to succeed in your professional and personal
                      life.
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

            <div className="min-h-[97vh] p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
              <div className="-m-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  gap-0">
                <div className="w-full h-full flex justify-center items-center   drop-shadow-2xl text-white">
                  <div className="">
                    <div className="py-7 flex justify-center items-center font-semibold text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px] leading-10">
                      Hey, welcome to the world of infinite possibilities.
                    </div>
                    <div className="py-7 flex justify-center items-center font-semibold text-center xl:text-3xl lg:text-2xl md:text-2xl text-[24px] leading-10">
                      Discover yourself, learn the skills and ace the
                      opportunities
                    </div>
                  </div>
                </div>
                <div className=" p-4 rounded-md flex items-center justify-center">
                  <div className="newloginContainer ">
                    <div className="pt-8">
                      <form
                        className="newLoginForm"
                        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_QJ0517TP7rdLkVNpYs49aiK3qiH__gMYL8MdvoFop15jEw/formResponse"
                      >
                        <label className="text-xl text-white font-semibold pb-1">
                          Name
                        </label>
                        <input
                          className={classes}
                          type="text"
                          name="entry.2005620554"
                          placeholder="Enter your Name"
                        />

                        <div className="flex justify-between pr-[1.5rem] pb-1">
                          <label className="text-xl text-white font-semibold ">
                            Email
                          </label>
                        </div>
                        <input
                          className={classes}
                          type="email"
                          name="entry.1045781291"
                          placeholder="Enter your Email"
                        />
                        <div className="flex justify-between pr-[1.5rem] pb-1">
                          <label className="text-xl text-white font-semibold ">
                            Phone No.
                          </label>
                        </div>
                        <input
                          className={classes}
                          type="number"
                          name="entry.1166974658"
                          placeholder="Enter your Mobile Number"
                        />
                        <div className="flex justify-between pr-[1.5rem] pt-1 pb-3">
                          <label className="text-xl text-white font-semibold">
                            Choose your Experience Level
                          </label>
                        </div>
                        <select
                          className={classes}
                          name="entry.337514865_sentine"
                        >
                          <option value="BEGINEER">BEGINEER</option>
                          <option value="INTERMEDIATE">INTERMEDIATE</option>
                          <option value="ADVANCED">ADVANCED</option>
                        </select>
                        <div className="flex justify-between pr-[1.5rem] py-3">
                          <label className="text-xl text-white font-semibold ">
                            Choose Your Career Goal
                          </label>
                        </div>
                        <select
                          className={classes}
                          name="entry.680783309_sentinel"
                        >
                          <option value="LEARNING">LEARNING</option>
                          <option value="CHANGING JOB">CHANGING JOB</option>
                        </select>
                        <div className=" flex justify-center items-center pt-12 pb-3  ">
                          <div
                            className=" border-2 text-white rounded px-2 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                            onClick={function showModal() {
                              setModal(true);
                            }}
                          >
                            SCHEDULE A CALL FOR ASSISTANCE
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
              Explore
            </div>
            <div className="px-4 py-8 mx-1 md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
              <div className="w-full h-full flex justify-center items-center">
                <div
                  className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
                  onClick={function handleNavigate() {
                    router.push("/Coding_tutorials#web_development");
                  }}
                >
                  {" "}
                  Free Courses
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
                  Certification Courses
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
                  Test Your Skills
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
                  Mentoring
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
                  Read. Learn
                </div>
              </div>
            </div>

            <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
              Free Courses
            </div>
            <div className="px-4 py-8 mx-1 md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
              <div className="w-full h-full flex justify-center items-center">
                <div
                  className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
                  onClick={function handleNavigate() {
                    setFree(1);
                  }}
                >
                  {" "}
                  Digital Marketing
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <div
                  className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
                  onClick={function handleNavigate() {
                    setFree(2);
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
                    setFree(3);
                  }}
                >
                  {" "}
                  Product Management
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <div
                  className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
                  onClick={function handleNavigate() {
                    setFree(4);
                  }}
                >
                  {" "}
                  Business Analytics
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <div
                  className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
                  onClick={function handleNavigate() {
                    setFree(5);
                  }}
                >
                  {" "}
                  Coding
                </div>
              </div>
            </div>

            {free === 1 ? (
              <div className="mx-4 my-8 mt-10 cardbg1 rounded-md">
                <div className=" w-full py-9  flex flex-wrap">
                  {digital.map((val) => (
                    <FreeCourseCard
                      img={val.image}
                      tittle={val.name}
                      s1={val.desc[0]}
                      s2={val.desc[1]}
                      array={val.desc}
                    />
                  ))}
                  {/* <FreeCourseCard
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
                  /> */}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {free === 2 ? (
              <div className="mx-4 my-8 mt-10 cardbg1 rounded-md">
                <div className=" w-full py-9  flex flex-wrap">
                  {dataScience.map((val) => (
                    <FreeCourseCard
                      img={val.image}
                      tittle={val.name}
                      s1={val.desc[0]}
                      s2={val.desc[1]}
                      array={val.desc}
                    />
                  ))}
                  {/* <FreeCourseCard
                    img={dbms}
                    tittle="Introduction to Data Science "
                    s1="Learn the basics of data science, including data exploration, visualization, and modeling."
                    s2="Understand the role of data science in today's business environment"
                    array={[
                      "Understand the role of data science in today's business environment",
                      "Learn the different stages of the data science process",
                      "Discover how to collect and clean data",
                      "Learn the basics of data exploration and visualization",
                      "Understand the role of statistical modeling in data science",
                      "Learn how to use Python and R for data science",
                      "Discover how to use machine learning algorithms",
                      "Learn how to evaluate and communicate the results of your data science projects",
                      "Understand how to stay up-to-date with the latest data science trends and best practices",
                    ]}
                  />
                  <FreeCourseCard
                    img={dbms}
                    tittle="Data Exploration and Visualization "
                    s1="Learn how to explore and visualize data to gain insights and communicate your findings."
                    s2="Understand the importance of data exploration and visualization in data science"
                    array={[
                      "Understand the importance of data exploration and visualization in data science",
                      "Learn how to use Python and R for data visualization",
                      "Discover the most popular data visualization libraries and tools",
                      "Learn the basics of data exploration and visualization",
                      "Understand the role of data visualization in data storytelling",
                      "Learn how to use interactive visualizations",
                      "Discover how to use data visualization for data exploration",
                      "Learn how to evaluate the effectiveness of your data visualizations",
                      "Understand how to stay up-to-date with the latest data visualization trends and best practices",
                    ]}
                  />
                  <FreeCourseCard
                    img={dbms}
                    tittle="Machine Learning "
                    s1="Learn how to use machine learning algorithms to build predictive models and solve real-world problems."
                    s2="Understand the basics of machine learning"
                    array={[
                      "Understand the basics of machine learning",
                      "Learn how to use Python and R for machine learning",
                      "Discover the most popular machine learning algorithms",
                      "Learn how to use supervised and unsupervised learning",
                      "Understand the role of deep learning in machine learning",
                      "Learn how to evaluate and improve the performance of your machine learning models",
                      "Discover how to use machine learning for natural language processing (NLP) and computer vision",
                      "Learn how to use machine learning for time series forecasting",
                      "Understand how to stay up-to-date with the latest machine learning trends and best practices",
                    ]}
                  />
                  <FreeCourseCard
                    img={dbms}
                    tittle="Big Data and Cloud Computing "
                    s1="Learn how to process and analyze large datasets using big data and cloud computing technologies."
                    s2="Understand the basics of big data and cloud computing"
                    array={[
                      "Understand the basics of big data and cloud computing",
                      "Learn how to use Hadoop and Spark for big data processing",
                      "Discover the most popular cloud computing platforms, such as AWS, Azure, and GCP",
                      "Learn how to use big data tools, such as Hive and Pig",
                      "Understand the role of NoSQL databases in big data",
                      "Learn how to use cloud computing for machine learning and data visualization",
                      "Discover how to use cloud computing for data warehousing and data lakes",
                      "Learn how to evaluate the costs and benefits of different big data and cloud computing solutions",
                      "Understand how to stay up-to-date with the latest big data and cloud computing trends and best practices",
                    ]}
                  /> */}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {free === 3 ? (
              <div className="mx-4 my-8 mt-10 cardbg1 rounded-md">
                <div className=" w-full py-9  flex flex-wrap">
                  {buisness.map((val) => (
                    <FreeCourseCard
                      img={val.image}
                      tittle={val.name}
                      s1={val.desc[0]}
                      s2={val.desc[1]}
                      array={val.desc}
                    />
                  ))}
                  {/* <FreeCourseCard
                    img={dbms}
                    tittle="Introduction to Product Management "
                    s1="Learn the basics of product management, including product strategy, development, and launch."
                    s2="Understand the role of product management in a company"
                    array={[
                      "Understand the role of product management in a company",
                      "Learn the different stages of the product management process",
                      "Discover how to conduct market research and identify customer needs",
                      "Learn the basics of product strategy and planning",
                      "Understand the role of product development and design",
                      "Learn how to use agile methodologies for product development",
                      "Discover how to launch and market a new product",
                      "Learn how to measure and analyze the performance of a product",
                      "Understand how to stay up-to-date with the latest product management trends and best practices",
                    ]}
                  />
                  <FreeCourseCard
                    img={dbms}
                    tittle="Product Strategy and Planning "
                    s1="Learn how to develop a product strategy and plan that aligns with your company's goals and meets customer needs."
                    s2="Understand the importance of product strategy and planning"
                    array={[
                      "Understand the importance of product strategy and planning",
                      "Learn how to conduct market research and analyze competitors",
                      "Discover how to identify customer needs and pain points",
                      "Learn how to use customer feedback to inform product development",
                      "Understand the role of product roadmaps and backlogs",
                      "Learn how to use business models and metrics to measure success",
                      "Discover how to create a product vision and mission statement",
                      "Learn how to use the Lean Startup method for product development",
                      "Understand how to stay up-to-date with the latest product strategy and planning trends and best practices",
                    ]}
                  />
                  <FreeCourseCard
                    img={dbms}
                    tittle=" Product Development and Design "
                    s1="Learn how to design and develop a product that is user-friendly, visually appealing and meets customer needs."
                    s2="Understand the basics of product development and design"
                    array={[
                      "Understand the basics of product development and design",
                      "Learn how to use user-centered design methodologies",
                      "Discover the most popular design tools and software",
                      "Learn how to create wireframes, prototypes and mock-ups",
                      "Understand the role of user testing in product development",
                      "Learn how to use design thinking for problem-solving",
                      "Discover how to use design sprints for product development",
                      "Learn how to evaluate the usability of a product",
                      "Understand how to stay up-to-date with the latest product development and design trends and best practices",
                    ]}
                  />
                  <FreeCourseCard
                    img={dbms}
                    tittle="Product Launch and Marketing"
                    s1="Learn how to launch and market a new product to reach the right audience and achieve success."
                    s2="Understand the basics of product launch and marketing"
                    array={[
                      "Understand the basics of product launch and marketing",
                      "Learn how to create a product launch plan",
                      "Discover how to create a product positioning statement",
                      "Learn how to use content marketing to promote a new product",
                      "Understand the role of PR in product launch",
                      "Learn how to use social media to promote a new product",
                      "Discover how to use influencer marketing to promote a new product",
                      "Learn how to measure and analyze the performance of a product launch",
                      "Understand how to stay up-to-date with the latest product launch and marketing trends and best practices.",
                    ]}
                  /> */}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {free === 4 ? (
              <div className="mx-4 my-8 mt-10 cardbg1 rounded-md">
                <div className=" w-full py-9  flex flex-wrap">
                  {/* <FreeCourseCard
                    img={dbms}
                    tittle="Introduction to Business Analytics "
                    s1="Learn the basics of business analytics, including data analysis, modeling, and decision-making."
                    s2="Understand the role of business analytics in today's business environment"
                    array={[
                      "Learn the different stages of the business analytics process",
                      "Discover how to collect and clean data",
                      "Learn the basics of data analysis and visualization",
                      "Understand the role of statistical modeling in business analytics",
                      "Learn how to use Excel and other tools for business analytics",
                      "Discover how to use machine learning algorithms for business analytics",
                      "Learn how to evaluate and communicate the results of your business analytics projects",
                      "Understand how to stay up-to-date with the latest business analytics trends and best practices",
                    ]}
                  />
                  <FreeCourseCard
                    img={dbms}
                    tittle="Data Analysis and Visualization "
                    s1="Learn how to analyze and visualize data to gain insights and communicate your findings in business."
                    s2="Understand the importance of data analysis and visualization in business analytics"
                    array={[
                      "Understand the importance of data analysis and visualization in business analytics",
                      "Learn how to use Excel and other tools for data visualization",
                      "Discover the most popular data visualization libraries and tools",
                      "Learn how to create effective data visualizations",
                      "Understand the role of data visualization in data storytelling",
                      "Learn how to use interactive visualizations for business",
                      "Discover how to use data visualization for data exploration",
                      "Learn how to evaluate the effectiveness of your data visualizations",
                      "Understand how to stay up-to-date with the latest data visualization trends and best practices",
                    ]}
                  />
                  <FreeCourseCard
                    img={dbms}
                    tittle="Predictive Modeling"
                    s1=" Learn how to use predictive modeling techniques to build models that can forecast future outcomes and make data-driven decisions."
                    s2="Understand the basics of predictive modeling"
                    array={[
                      "Understand the basics of predictive modeling",
                      "Learn how to use Excel and other tools for predictive modeling",
                      "Discover the most popular predictive modeling algorithms and techniques",
                      "Learn how to use supervised and unsupervised learning for predictive modeling",
                      "Understand the role of data preparation and feature engineering in predictive modeling",
                      "Learn how to evaluate and improve the performance of your predictive models",
                      "Discover how to use predictive modeling for forecasting and optimization in business",
                      "Learn how to use predictive modeling for anomaly detection and fraud detection",
                      "Understand how to stay up-to-date with the latest predictive modeling trends and best practices  ",
                    ]}
                  />
                  <FreeCourseCard
                    img={dbms}
                    tittle="Business Intelligence and Dashboarding"
                    s1="Learn how to use Business Intelligence (BI) tools and dashboarding to turn data into actionable insights for decision-making."
                    s2="Understand the basics of Business Intelligence and dashboarding"
                    array={[
                      "Understand the basics of Business Intelligence and dashboarding",
                      "Learn how to use popular BI tools such as Tableau and Power BI",
                      "Discover how to create interactive dashboards and reports",
                      "Learn how to use data visualization best practices to create effective dashboards",
                      "Understand the role of data governance in BI",
                      "Learn how to use BI for data-driven decision making",
                      "Discover how to use BI for performance monitoring and reporting",
                      "Learn how to evaluate the effectiveness of your BI and dashboarding",
                      "Understand how to stay up-to-date with the latest BI and dashboarding trends and best practices.",
                    ]}
                  /> */}
                  {product.map((val) => (
                    <FreeCourseCard
                      img={val.image}
                      tittle={val.name}
                      s1={val.desc[0]}
                      s2={val.desc[1]}
                      array={val.desc}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {free === 5 ? (
              <div className="mx-4 my-8 mt-10 cardbg1 rounded-md">
                <div className=" w-full py-9  flex flex-wrap">
                  {/* <FreeCourseCard
                    img={dbms}
                    tittle="Introduction to Programming "
                    s1="Learn the basics of programming, including data types, variables, control structures, and functions."
                    s2="Understand the fundamentals of programming and its importance in today's digital world"
                    array={[
                      "Understand the fundamentals of programming and its importance in today's digital world",
                      "Learn the basics of different programming languages such as Python, Java and JavaScript",
                      "Discover how to write basic code using different data types, variables, and control structures",
                      "Learn how to use functions, loops and conditional statements",
                      "Understand the role of debugging and testing in the programming process",
                      "Learn how to use code libraries and modules",
                      "Discover how to work with data structures such as lists, arrays and dictionaries",
                      "Learn how to design and implement simple programs",
                      "Understand the best practices for coding and how to stay up-to-date with the latest trends.",
                    ]}
                  />
                  <FreeCourseCard
                    img={dbms}
                    tittle="Web Development "
                    s1="Learn how to create and design websites using HTML, CSS, and JavaScript."
                    s2="Understand the basics of web development and its importance in today's digital world"
                    array={[
                      "Understand the basics of web development and its importance in today's digital world",
                      "Learn how to use HTML, CSS, and JavaScript to create and design websites",

                      "Discover how to use responsive design techniques and frameworks such as Bootstrap",
                      "Learn how to use JavaScript to add interactivity and dynamic functionality to websites",
                      "Understand the role of web development in website optimization and user experience",
                      "Learn how to use web development tools such as Chrome DevTools",
                      "Discover how to use web development best practices such as accessibility and security",
                      "Learn how to use libraries and frameworks such as React and AngularJS",
                      "Understand the best practices for web development and how to stay up-to-date with the latest trends.",
                    ]}
                  />
                  <FreeCourseCard
                    img={dbms}
                    tittle="Object-Oriented Programming (OOP) "
                    s1="Learn how to use OOP concepts and principles to create efficient, reusable, and scalable code."
                    s2="Understand the basics of OOP and its importance in programming"
                    array={[
                      "Understand the basics of OOP and its importance in programming",
                      "Learn how to use OOP concepts such as classes, objects, inheritance, and polymorphism",
                      "Discover how to use design patterns and principles such as SOLID and DRY",
                      "Learn how to use OOP in different programming languages such as Python, Java, and C++",
                      "Understand the role of OOP in software design and development",
                      "Learn how to use OOP best practices such as encapsulation and abstraction",
                      "Discover how to use OOP libraries and frameworks such as Java Spring and .NET",
                      "Learn how to use OOP for Object Relational Mapping (ORM)",
                      "Understand the best practices for OOP and how to stay up-to-date with the latest trends.",
                    ]}
                  />
                  <FreeCourseCard
                    img={dbms}
                    tittle="Database and SQL "
                    s1="Learn how to use SQL to interact with databases, create tables, retrieve data, and run queries."
                    s2="Understand the basics of databases and SQL"
                    array={[
                      "Understand the basics of databases and SQL",
                      "Learn how to use SQL to interact with databases",
                      "Discover how to create tables and define relationships",
                      "Learn how to use SQL to retrieve, insert, update, and delete data",
                      "Understand the role of SQL in data analysis and reporting",
                      "Learn how to use SQL to run queries and join tables",
                      "Discover how to use database best practices such as indexing and normalization",
                      "Learn how to use SQL with different database management systems such as MySQL, PostgreSQL, and SQL Server",
                      "Understand the best practices for databases and SQL and how to stay up-to-date with the latest trends.",
                    ]}
                  /> */}
                  {coding.map((val) => (
                    <FreeCourseCard
                      img={val.image}
                      tittle={val.name}
                      s1={val.desc[0]}
                      s2={val.desc[1]}
                      array={val.desc}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
              Premium Courses
            </div>
            <div className="px-4 py-8 mx-1 md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
              <div className="w-full h-full flex justify-center items-center">
                <div
                  className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
                  onClick={function handleNavigate() {
                    router.push("/Coding_tutorials#data_science");
                  }}
                >
                  {" "}
                  Digital marketing
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
                  Data Science
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
                  Business Analytics
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
                  Product Management
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
                      Description: The A dvanced Social M edia Strategy course
                      (A S M S ) is for managers , strategists , and leaders who
                      want to gain a comprehensive understanding of how to build
                      and scale social media in comple x organi z ations.
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
                      Description: The A dvanced Social M edia Strategy course
                      (A S M S ) is for managers , strategists , and leaders who
                      want to gain a comprehensive understanding of how to build
                      and scale social media in comple x organi z ations.
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
                      Description: The A dvanced Social M edia Strategy course
                      (A S M S ) is for managers , strategists , and leaders who
                      want to gain a comprehensive understanding of how to build
                      and scale social media in comple x organi z ations.
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
            <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
              Test Your Skills
            </div>

            <div className="py-9 grid grid-cols-1 cardbg1 rounded-md md:grid-cols-2  lg:grid-cols-3 gap-6 sm:mx-4 mx-1">
              <div className="sm:p-6 p-4 mx-4 rounded-lg flex border border-[#d3d2d2]  items-center justify-center card-col infPic drop-shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                  <div className="rounded-md flex items-center justify-center">
                    <div className="w-auto h-auto bg-[#fff] flex justify-center items-center high1">
                      <span className="text-black font-semibold lg:text-3xl md:text-lg text-sm text-center p-4">
                        Digital Marketting
                      </span>
                    </div>
                  </div>
                  <div className="rounded-md flex items-center justify-center">
                    <div className="w-auto h-auto flex justify-center items-center">
                      <span className=" text-[#ffff] lg:text-2xl md:text-xl text-xl text-center font-medium py-4">
                        10 Test Available
                      </span>
                    </div>
                  </div>

                  <div className="py-7 flex justify-center items-center pb-4">
                    <div
                      className=" border-2 text-white rounded px-2 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                      onClick={function showModal() {
                        setModal(true);
                      }}
                    >
                      Explore more test
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:p-6 p-4 mx-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center card-col infPic drop-shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                  <div className="rounded-md flex items-center justify-center">
                    <div className="w-auto h-auto bg-[#fff] flex justify-center items-center high1">
                      <span className="text-black font-semibold lg:text-3xl md:text-lg text-sm text-center p-4">
                        Data Science
                      </span>
                    </div>
                  </div>
                  <div className="rounded-md flex items-center justify-center">
                    <div className="w-auto h-auto flex justify-center items-center">
                      <span className=" text-[#ffff] lg:text-2xl md:text-xl text-xl text-center font-medium py-4">
                        10 Test Available
                      </span>
                    </div>
                  </div>

                  <div className="py-7 flex justify-center items-center pb-4">
                    <div
                      className=" border-2 text-white rounded px-2 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                      onClick={function showModal() {
                        setModal(true);
                      }}
                    >
                      Explore more test
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:p-6 p-4 mx-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center card-col infPic drop-shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                  <div className="rounded-md flex items-center justify-center">
                    <div className="w-auto h-auto bg-[#fff] flex justify-center items-center high1">
                      <span className="text-black font-semibold lg:text-3xl md:text-lg text-sm text-center p-4">
                        Product Management
                      </span>
                    </div>
                  </div>
                  <div className="rounded-md flex items-center justify-center">
                    <div className="w-auto h-auto flex justify-center items-center">
                      <span className=" text-[#ffff] lg:text-2xl md:text-xl text-xl text-center font-medium py-4">
                        10 Test Available
                      </span>
                    </div>
                  </div>

                  <div className="py-7 flex justify-center items-center pb-4">
                    <div
                      className=" border-2 text-white rounded px-2 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                      onClick={function showModal() {
                        setModal(true);
                      }}
                    >
                      Explore more test
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
              Meet our Mentors
            </div>

            <div className="py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:mx-4 mx-1">
              <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 infPic drop-shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                  <div className="flex justify-center items-center">
                    <Image src={ment} width={100} height={100} />
                  </div>
                  <div className="flex justify-center items-center text-center text-black font-semibold lg:text-3xl md:text-lg text-sm">
                    Emma Hardy
                  </div>
                  <div className="py-4  flex justify-center items-center text-center text-[#ffff] lg:text-2xl md:text-lg text-[14px]">
                    CEO , BioCell Company
                  </div>
                </div>
              </div>
              <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 infPic drop-shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                  <div className="flex justify-center items-center">
                    <Image src={ment} width={100} height={100} />
                  </div>
                  <div className="flex justify-center items-center text-center text-black font-semibold lg:text-3xl md:text-lg text-sm">
                    Emma Hardy
                  </div>
                  <div className="py-4  flex justify-center items-center text-center text-[#ffff] lg:text-2xl md:text-lg text-[14px]">
                    CEO , BioCell Company
                  </div>
                </div>
              </div>
              <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 infPic drop-shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                  <div className="flex justify-center items-center">
                    <Image src={ment} width={100} height={100} />
                  </div>
                  <div className="flex justify-center items-center text-center text-black font-semibold lg:text-3xl md:text-lg text-sm">
                    Emma Hardy
                  </div>
                  <div className="py-4  flex justify-center items-center text-center text-[#ffff] lg:text-2xl md:text-lg text-[14px]">
                    CEO , BioCell Company
                  </div>
                </div>
              </div>
              <div className="sm:p-6 p-4 rounded-lg flex border border-[#d3d2d2] items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 infPic drop-shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                  <div className="flex justify-center items-center">
                    <Image src={ment} width={100} height={100} />
                  </div>
                  <div className="flex justify-center items-center text-center text-black font-semibold lg:text-3xl md:text-lg text-sm">
                    Emma Hardy
                  </div>
                  <div className="py-4  flex justify-center items-center text-center text-[#ffff] lg:text-2xl md:text-lg text-[14px]">
                    CEO , BioCell Company
                  </div>
                </div>
              </div>
            </div>
            <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
              Skill Blogs
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
          </div>

          <Footer />
        </div>
      ) : (
        <div className="h-[90vh] w-screen flex justify-center items-center p-4">
          <div className="">
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/private_files/lf30_atgq6whw.json"
              className="h-[200px]"
            ></Player>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
