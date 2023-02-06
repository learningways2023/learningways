import React from "react";

import Image from "next/image";
import { useState } from "react";
import close from "../public/close.svg";
import bullet from "../public/bulletblack.svg";

const Exams = (props) => {
  const [modal, setModal] = useState(false);
  console.log(props);
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/2  xl:w-4/12  p-4 ">
        <div className="card-col p-4 flex flex-col items-center justify-between min-h-[70vh] infPic py-16">
          <div>
            <h2 className="mt-2 mb-2 p-4 rounded-md text-xl bg-white opacity-[0.7]  font-bold text-black text-center">
              {props.tittle}
            </h2>
          </div>
          <div>
            <div className="text-md  py-1 flex  items-center text-black font-semibold">
              <Image src={bullet} width={20} height={20} className="mr-1" />
              {props.s1}
            </div>
            <div className="text-md py-1 flex  items-center text-black font-semibold">
              <Image src={bullet} width={20} height={20} className="mr-1" />
              {props.s2}
            </div>
          </div>
          <div className="pt-3 flex items-center justify-between space-x-3 md:space-x-7 lg:space-x-10 xl:space-x-10">
            <div
              className=" border-2 text-white rounded px-2 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
              onClick={function showModal() {
                setModal(true);
              }}
            >
              View Syllabus
            </div>
            <div
              className=" border-2 text-white rounded px-2 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
              onClick={function showModal() {
                setModal(true);
              }}
            >
              LearingWays Guidelines
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exams;
