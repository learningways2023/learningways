import React from "react";
import SideNavbar from "../../components/sidebar";
import { Doughnut } from "react-chartjs-2";
import Recomend from "../../components/recomendCourse";
import bullet from "../../public/bulletblack.svg";
import site from "../../public/site.png";

import Image from "next/image";
const Recomendations = () => {
  return (
    <div className="md:flex">
      <SideNavbar />
      <div className=" min-h-[107vh] m-0 mt-4  md:m-4   w-[100vw] flex justify-center items-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-sm">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          <div className="w-full h-full flex  justify-center items-center">
            <Doughnut data={data} width={400} height={400} />
          </div>
          <div className="w-full h-full flex  justify-center items-center">
            <Doughnut data={data} width={400} height={400} />
          </div>
        </div> */}
        <div className="flex flex-wrap py-5">
          <div className="p-0 md:p-4 ">
            <div className="text-black  font-semibold  text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] ">
              Recomended Materials:
            </div>
            <div className=" p-2 py-2    flex  items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              <div className=" xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-white">
                Mathematics: Algebra, Trigonometry, Analytical Geometry,
                Differential Calculus, Integral Calculus, Vectors and more -{" "}
                <span className="text-black cursor-pointer">
                  Click here to Download
                </span>
              </div>
            </div>
            <div className=" p-2 py-2    flex  items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              <div className=" xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-white">
                Mathematics: Algebra, Trigonometry, Analytical Geometry,
                Differential Calculus, Integral Calculus, Vectors and more -{" "}
                <span className="text-black cursor-pointer">
                  Click here to Download
                </span>
              </div>
            </div>
          </div>

          <div className="p-0 md:p-4 w-full">
            <div className="text-black  font-semibold  text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] ">
              Recomended Courses:
            </div>
            <div className="flex flex-wrap">
              <Recomend
                tittle="Indian National Olympiad (INO)"
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
              <Recomend
                tittle="Indian National Olympiad (INO)"
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
          <div className="">
            <div className="text-black  font-semibold flex justify-center  text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] ">
              Additional Resources
            </div>
            <div className="text-black  font-semibold p-4  text-left xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] ">
              Books:
            </div>
            <div className=" p-2 py-2    flex  items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
              <Image src={bullet} width={40} height={40} className="mr-3" />
              <div className=" xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-white">
                Mathematics: Algebra, Trigonometry, Analytical Geometry,
                Differential Calculus, Integral Calculus, Vectors and more -{" "}
                <span className="text-black cursor-pointer">
                  Get it form Amazon
                </span>
              </div>
            </div>
            <div className="text-black  font-semibold p-4  text-left xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] ">
              Blogs:
            </div>
            <div className=" p-2 py-2    flex  items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
              <Image src={site} width={40} height={40} className="mr-3" />
              <div className=" xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-white cursor-pointer">
                Mathematics: Algebra, Trigonometry, Analytical Geometry,
                Differential Calculus, Integral Calculus, Vectors and more.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomendations;
