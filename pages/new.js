import React from "react";
import { useState } from "react";
import Image from "next/image";
import dbms from "../public/dbms.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const New = () => {
  return (
    <div className="cardbg1">
      <div class="maincontainer rounded-md card-col">
        <div class="thecard">
          <div class="thefront cursor-pointer flex flex-col justify-between">
            <div>
              <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_4djadzzo.json"
                className=" w-[300px] h-[200px] "
              ></Player>
            </div>
            <div className="flex justify-center items-center ">
              <div className="min-h-[5vh] bg-white w-full mx-4 rounded-md">
                <div className="text-xl font-semibold flex justify-center items-center py-1">
                  Introduction to Coding
                </div>
              </div>
            </div>
            <div className="flex justify-between text-white px-2">
              <div className="text-lg font-semibold">Beginner</div>
              <div className="text-lg font-semibold"> 8-12 years</div>
            </div>
            <div className="flex justify-center text-white px-2">
              <div className="text-lg font-semibold">
                4 weeks, 1 hour per week
              </div>
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
            <div className="flex flex-col justify-between items-center">
              <div className="text-black px-2 py-1 text-lg font-semibold text-center">
                In this course, students will learn the basics of coding,
                including problem-solving, logical thinking, and creativity.
                They will use different online tools and platforms, such as
                Code.org, Scratch, and Tynker, to create simple programs, games,
                and animations. They will also learn about different careers in
                tech and how coding can be used in real-life situations.
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
    </div>
  );
};

export default New;
