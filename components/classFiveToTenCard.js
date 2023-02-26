import React from "react";
import { useState } from "react";
import Image from "next/image";
import dbms from "../public/dbms.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
const ClassFiveToTenCard = (props) => {
  return (
    <div class="maincontainer rounded-md card-col">
      <div class="thecard cursor-pointer">
        <div class="thefront cursor-pointer flex flex-col justify-between">
          <div>
            <Player
              autoplay
              loop
              src={props.img}
              className=" w-[280px] h-[200px] -z-50"
            ></Player>
          </div>
          <div className="flex justify-center items-center ">
            <div className="min-h-[5vh] bg-white w-full mx-4 rounded-md">
              <div className="text-xl font-semibold flex px-2 justify-center text-center items-center py-1">
                {props.tittle}
              </div>
            </div>
          </div>
          <div className="flex justify-between text-white px-2">
            <div className="text-lg font-semibold">{props.level}</div>
            <div className="text-lg font-semibold"> {props.age}</div>
          </div>
          <div className="flex justify-center text-white px-2">
            <div className="text-lg font-semibold">{props.duration}</div>
          </div>
          <div className="flex justify-center items-center pb-2">
            <div
              className="border-2 text-black rounded px-4 md:px-9 py-1 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
              onClick={function handlePaage() {
                router.push("/community");
              }}
            >
              <button>Start Now !</button>
            </div>
          </div>
        </div>
        <div class="theback ">
          <div className="flex flex-col justify-between ">
            <div className="text-black px-2 py-1 text-lg font-semibold text-center">
             {props.desc}
            </div>

            <div className="flex justify-center items-center pb-2">
              <div
                className="border-2 text-black rounded px-4 md:px-9 py-1 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                onClick={function handlePaage() {
                  router.push("/community");
                }}
              >
                <button>Start Now !</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassFiveToTenCard;
