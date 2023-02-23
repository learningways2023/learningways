import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Newhero from "../components/hero";
import Goals from "../components/goals";
import Ment from "../components/ment";
import Ongoing from "../components/ongoing";
import Categories from "../components/categories";
import Upcoming from "../components/upcoming";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import ApptitudeSlide from "../components/apptitudeSlide";

import Access from "../components/access";
import Uparrow from "../components/uparrow";
const Index = () => {
  return (
    <div className="bg-white">
      <Uparrow url="/" />
      <Navbar />
      <Newhero />
      <div className="mx-4 my-10 min-h-[70vh] bg-gradient-to-r from-blue-500 to-cyan-500 ">
        <div className="grid grid-cols-1 md:grid-col-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center items-center p-4">
            <div className="xl:text-[26px]  lg:text-[25px] sm:text-[25px] text-[18px] font-semibold flex items-center justify-start text-center text-white">
              Join our community groups to connect with like-minded individuals,
              engage in meaningful conversations, and learn from others. Our
              experienced community managers ensure respectful and constructive
              discussions. Expand your network and make new friends today!
            </div>
            <div className="pt-10">
              <div className="border-2 text-black rounded px-4 md:px-20 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150">
                <button>Join our community club !</button>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_yzvjus7g.json"
              className=" w-[300px] h-[500px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
            ></Player>
          </div>
        </div>
      </div>
      <div className="py-9 grid grid-cols-1 cardbg1 rounded-md md:grid-cols-2  lg:grid-cols-3 gap-6 sm:mx-4 mx-1">
        <div className="sm:p-6 p-4 mx-4 rounded-lg flex border border-[#d3d2d2]  items-center justify-center card-col infPic drop-shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#fff] flex justify-center items-center high1">
                <span className="text-black font-semibold lg:text-3xl md:text-lg text-sm text-center p-4">
                  Health & Fitness
                </span>
              </div>
            </div>

            <div className="py-7 flex justify-center items-center pb-4">
              <div
                className=" border-2 text-black rounded px-5 py-1 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                onClick={function showModal() {
                  setModal(true);
                }}
              >
                Join Now
              </div>
            </div>
          </div>
        </div>
        <div className="sm:p-6 p-4 mx-4 rounded-lg flex border border-[#d3d2d2]  items-center justify-center card-col infPic drop-shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#fff] flex justify-center items-center high1">
                <span className="text-black font-semibold lg:text-3xl md:text-lg text-sm text-center p-4">
                  Digital Marketing
                </span>
              </div>
            </div>

            <div className="py-7 flex justify-center items-center pb-4">
              <div
                className=" border-2 text-black rounded px-5 py-1 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                onClick={function showModal() {
                  setModal(true);
                }}
              >
                Join Now
              </div>
            </div>
          </div>
        </div>
        <div className="sm:p-6 p-4 mx-4 rounded-lg flex border border-[#d3d2d2]  items-center justify-center card-col infPic drop-shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#fff] flex justify-center items-center high1">
                <span className="text-black font-semibold lg:text-3xl md:text-lg text-sm text-center p-4">
                  School Science
                </span>
              </div>
            </div>

            <div className="py-7 flex justify-center items-center pb-4">
              <div
                className=" border-2 text-black rounded px-5 py-1 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                onClick={function showModal() {
                  setModal(true);
                }}
              >
                Join Now
              </div>
            </div>
          </div>
        </div>
      </div>
      <Categories />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        <Ongoing />
        <Upcoming />
      </div>

      <ApptitudeSlide />
      <Access />
      <Goals />
      <Ment />

      <Footer />
    </div>
  );
};

export default Index;
// https://assets4.lottiefiles.com/packages/lf20_ikvz7qhc.json
