import React from "react";

import Image from "next/image";
import { useState } from "react";
import cap from "../public/cap.png";
import graph from "../public/graph.png";

import Link from "next/link";
import close from "../public/close.svg";
import bullet from "../public/bulletblack.svg";
const CodingQuiz = (props) => {
  console.log(props);
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-4/12  p-4 ">
        <div className="card-col block  min-h-[80vh] infp overflow-hidden">
          <div className="w-full h-full p-4 ">
            <Image
              width={450}
              height={200}
              className="h-[200px] rounded-md"
              src={props.img}
              alt=""
            />
          </div>
          <div className="px-4">
            <h2 className="mt-2 mb-2 py-2 text-xl  font-bold text-black bg-white rounded-md opacity-[0.7]   text-center">
              {props.tittle}
            </h2>
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
    </>
  );
};

export default CodingQuiz;
