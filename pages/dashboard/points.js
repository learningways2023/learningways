import React from "react";
import SideNavbar from "../../components/sidebar";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";
import medal from "../../public/medal.png";
import read from "../../public/readp.svg";
const Points = () => {
  return (
    <div className="md:flex">
      <SideNavbar />
      <div className=" min-h-[120vh] m-0 mt-4  md:m-4  bg-gradient-to-r from-blue-500 to-cyan-500 w-[100vw]    rounded-sm">
        <div className="text-black  font-semibold p-4 text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] ">
          Leaderboard
        </div>
        <div className="flex justify-center py-1">
          <div className="min-h-[10vh] w-[95%] px-4 flex justify-between items-center  text-center rounded-md  bg-white">
            <div className="text-xl flex justify-center items-center font-semibold">
              <Image src={medal} width={30} height={30} />
              Rank -I
            </div>
            <div className="text-xl font-semibold">Janarthanan</div>
            <div className="text-xl font-semibold text-blue-500">
              1000 points
            </div>
          </div>
        </div>
        <div className="flex justify-center py-1">
          <div className="min-h-[10vh] w-[95%] px-4 flex justify-between items-center  text-center rounded-md  bg-white">
            <div className="text-xl flex justify-center items-center font-semibold">
              <Image src={medal} width={30} height={30} />
              Rank -II
            </div>
            <div className="text-xl font-semibold">Janarthanan</div>
            <div className="text-xl font-semibold text-blue-500">
              700 points
            </div>
          </div>
        </div>
        <div className="flex justify-center py-1">
          <div className="min-h-[10vh] w-[95%] px-4 flex justify-between items-center  text-center rounded-md  bg-white">
            <div className="text-xl flex justify-center items-center font-semibold">
              <Image src={medal} width={30} height={30} />
              Rank -III
            </div>
            <div className="text-xl font-semibold">Janarthanan</div>
            <div className="text-xl font-semibold text-blue-500">
              500 points
            </div>
          </div>
        </div>
        <div className="flex justify-center py-1">
          <div className="min-h-[10vh] w-[95%] px-4 flex justify-between items-center  text-center rounded-md  bg-white">
            <div className="text-xl flex justify-center items-center font-semibold">
              <Image src={medal} width={30} height={30} />
              Rank -IV
            </div>
            <div className="text-xl font-semibold">Janarthanan</div>
            <div className="text-xl font-semibold text-blue-500">
              300 points
            </div>
          </div>
        </div>
        <div className="text-black  font-semibold p-4 text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-5">
          Your Progress
        </div>
        <div className="text-white  font-semibold p-4 text-center xl:text-[30px] lg:text-[30px] sm:text-[30px] text-[20px] ">
          Points Earned : 650 Points
        </div>
        <div className="px-4 mt-5">
          <ProgressBar
            height="5"
            completed={65}
            bgColor="black"
            customLabel=""
          />
        </div>
        <div className="text-black  font-semibold p-4 text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] ">
          How to Earn Points ?
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          <div>
            <Image src={read} />
          </div>
          <div>
            <Image src={read} />
          </div>
          <div>
            <Image src={read} />
          </div>
          <div>
            <Image src={read} />
          </div>
          <div>
            <Image src={read} />
          </div>
          <div>
            <Image src={read} />
          </div>
          <div>
            <Image src={read} />
          </div>
          <div>
            <Image src={read} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
