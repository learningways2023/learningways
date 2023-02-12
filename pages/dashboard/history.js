import React from "react";
import SideNavbar from "../../components/sidebar";
import cc from "../../public/cc.png";
import Image from "next/image";
import medal from "../../public/medal.png";
import bullet from "../../public/bulletblack.svg";
import face from "../../public/facebook.png";
import insta from "../../public/insta.png";
import linked from "../../public/linkedin.png";
import twitter from "../../public/twitter.png";
const History = () => {
  return (
    <div className="md:flex">
      <SideNavbar />
      <div className=" min-h-[120vh] m-0 mt-4  md:m-4 bg-gradient-to-r from-blue-500 to-cyan-500  w-[100vw]   rounded-sm">
        <div className="text-black  font-semibold  text-center xl:text-[34px] lg:text-[30px] sm:text-[30px] text-[20px] mt-5">
          Completed Courses
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-5 gap-6">
          <div className="flex justify-center items-center">
            <div className="w-[310px] h-[220px] bg-white flex flex-col justify-between py-5  rounded-md">
              <div className="flex justify-center items-center">
                <Image src={cc} weight={60} height={60} />
                <div className="pl-3 text-xl text-black font-semibold">
                  Programming in Python
                </div>
              </div>
              <div className="text-lg text-black flex justify-center items-center font-normal">
                Staus : Completed
              </div>
              <div className="text-lg text-black flex justify-center items-center font-normal">
                Time Spent : 10 Hours
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[310px] h-[220px] bg-white flex flex-col justify-between py-5  rounded-md">
              <div className="flex justify-center items-center">
                <Image src={cc} weight={60} height={60} />
                <div className="pl-3 text-xl text-black font-semibold">
                  Programming in Python
                </div>
              </div>
              <div className="text-lg text-black flex justify-center items-center font-normal">
                Staus : Completed
              </div>
              <div className="text-lg text-black flex justify-center items-center font-normal">
                Time Spent : 10 Hours
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[310px] h-[220px] bg-white flex flex-col justify-between py-5  rounded-md">
              <div className="flex justify-center items-center">
                <Image src={cc} weight={60} height={60} />
                <div className="pl-3 text-xl text-black font-semibold">
                  Programming in Python
                </div>
              </div>
              <div className="text-lg text-black flex justify-center items-center font-normal">
                Staus : Completed
              </div>
              <div className="text-lg text-black flex justify-center items-center font-normal">
                Time Spent : 10 Hours
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[310px] h-[220px] bg-white flex flex-col justify-between py-5  rounded-md">
              <div className="flex justify-center items-center">
                <Image src={cc} weight={60} height={60} />
                <div className="pl-3 text-xl text-black font-semibold">
                  Programming in Python
                </div>
              </div>
              <div className="text-lg text-black flex justify-center items-center font-normal">
                Staus : Completed
              </div>
              <div className="text-lg text-black flex justify-center items-center font-normal">
                Time Spent : 10 Hours
              </div>
            </div>
          </div>
        </div>
        <div className="text-black  font-semibold  text-center xl:text-[34px] lg:text-[30px] sm:text-[30px] text-[20px] mt-5">
          Performance on Quizzes
        </div>
        <div className="flex justify-center py-2">
          <div className="min-h-[10vh] w-[95%] px-4 flex justify-between items-center  text-center rounded-md  bg-white">
            <div className="text-xl flex justify-center items-center font-semibold">
              <Image src={medal} width={30} height={30} />
              70%
            </div>
            <div className="text-xl font-semibold">
              {" "}
              Quiz on JAVA Programming
            </div>
            <div className="text-xl font-semibold text-blue-500">Top 5000</div>
          </div>
        </div>

        <div className="flex justify-center py-2">
          <div className="min-h-[10vh] w-[95%] px-4 flex justify-between items-center  text-center rounded-md  bg-white">
            <div className="text-xl flex justify-center items-center font-semibold">
              <Image src={medal} width={30} height={30} />
              70%
            </div>
            <div className="text-xl font-semibold">
              {" "}
              Quiz on JAVA Programming
            </div>
            <div className="text-xl font-semibold text-blue-500">Top 5000</div>
          </div>
        </div>
        <div className="flex justify-center py-2">
          <div className="min-h-[10vh] w-[95%] px-4 flex justify-between items-center  text-center rounded-md  bg-white">
            <div className="text-xl flex justify-center items-center font-semibold">
              <Image src={medal} width={30} height={30} />
              70%
            </div>
            <div className="text-xl font-semibold">
              {" "}
              Quiz on JAVA Programming
            </div>
            <div className="text-xl font-semibold text-blue-500">Top 5000</div>
          </div>
        </div>
        <div className="text-black  font-semibold  text-center xl:text-[34px] lg:text-[30px] sm:text-[30px] text-[20px] mt-5">
          Download Your Certificates
        </div>
        <div className=" p-2 py-2    flex  items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
          <Image src={bullet} width={40} height={40} className="mr-3" />
          <div className=" xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-white">
            MERN Stack Web Development (Begineer Level) -{" "}
            <span className="text-black cursor-pointer">
              Download E-certificate
            </span>
          </div>
        </div>
        <div className=" p-2 py-2    flex  items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
          <Image src={bullet} width={40} height={40} className="mr-3" />
          <div className=" xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-white">
            MERN Stack Web Development (Begineer Level) -{" "}
            <span className="text-black cursor-pointer">
              Download E-certificate
            </span>
          </div>
        </div>
        <div className=" p-2 py-2    flex  items-center text-center xl:text-[28px] lg:text-[28px] sm:text-[23px] text-[18px] ">
          <Image src={bullet} width={40} height={40} className="mr-3" />
          <div className=" xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] text-left text-white">
            MERN Stack Web Development (Begineer Level) -{" "}
            <span className="text-black cursor-pointer">
              Download E-certificate
            </span>
          </div>
        </div>
        <div className="text-black  font-semibold  text-center xl:text-[34px] lg:text-[30px] sm:text-[30px] text-[20px] mt-5">
          Share Achivements
        </div>
        <div className=" xl:text-[22px] lg:text-[20px] px-4 text-center sm:text-[18px] text-[16px]  text-white">
          Share Your Achivements via Social Media
        </div>
        <div className="flex justify-center pb-9">
          <div className="flex justify-between max-w-[500px] space-x-5 items-center">
            <div>
              <Image width={50} height={50} src={face} />
            </div>
            <div>
              <Image width={50} height={50} src={insta} />
            </div>
            <div>
              <Image width={50} height={50} src={linked} />
            </div>
            <div>
              <Image width={50} height={50} src={twitter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
