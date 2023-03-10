import React from "react";

import Image from "next/image";
import dbms from "../public/dbms.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import bullet from "../public/bulletwhite.svg";
const UpCommingSlider = (props) => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-blue-500 to-cyan-500  p-4 rounded-lg">
        <div className="flex flex-col items-center justify-between min-h-[90vh] md:min-h-[70vh] lg:min-h-[70vh] xl:min-h-[70vh]  ">
          <div className="w-full h-full flex justify-center items-center p-2 ">
            <Player
              autoplay
              loop
              src="https://assets8.lottiefiles.com/packages/lf20_ytg7s6tx.json"
              className=" w-[320px] h-[200px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
            ></Player>
            {/* <Image
              width={450}
              height={200}
              className="h-[200px] rounded-md"
              src={dbms}
              alt=""
            /> */}
          </div>
          <div>
            <h2 className="mt-2 mb-2 p-4 rounded-md text-xl bg-white  font-bold text-black text-center">
              {props.head}
            </h2>
          </div>
          <div>
            <div className="text-md  py-1 flex  items-center text-white font-semibold">
              <Image src={bullet} width={20} height={20} className="mr-1" />
              {props.content}
            </div>
          </div>
          <div className="pt-3 flex items-center justify-center ">
            <div className="border-2 text-black rounded px-3 py-1 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150">
              Register Now !
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpCommingSlider;
