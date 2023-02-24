import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Newhero from "../components/hero";
import Goals from "../components/goals";
import Ment from "../components/ment";
import Ongoing from "../components/ongoing";
import Categories from "../components/categories";
import Upcoming from "../components/upcoming";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { getCookies, getCookie, setCookies, removeCookies } from "cookies-next";
import close from "../public/close.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import ApptitudeSlide from "../components/apptitudeSlide";
import Logincomp from "../components/loginComp";
import Access from "../components/access";
import Uparrow from "../components/uparrow";
const Index = () => {
  const router = useRouter();
  const [needloging, setNeed] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
      getCookie("user") ? setNeed(false) : setNeed(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white">
      {needloging ? (
        <>
          <div className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none cursor-pointer">
            <div className="relative mx-auto w-11/12 lg:w-9/12 sm:px-1 px-0  my-20 ">
              {/*content*/}
              <div className="bg-white px-4 rounded-md drop-shadow-md">
                <div className="p-4">
                  <div
                    className="flex justify-end items-end cursor-pointer pb-4"
                    onClick={function handleModal() {
                      setNeed(false);
                    }}
                  >
                    <Image src={close} width={20} height={20} />
                  </div>
                  <Logincomp />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
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
              <div
                className="border-2 text-black rounded px-4 md:px-20 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                onClick={function handlePaage() {
                  router.push("/community");
                }}
              >
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
      <div className="py-9 grid grid-cols-1 cardbg1 rounded-md md:grid-cols-2  lg:grid-cols-4 gap-6 sm:mx-4 mx-1">
        <div className=" rounded-lg flex  items-center justify-center  infPic card-col  ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#ffff] mt-2 mx-2 flex justify-center items-center high1">
                <span className="text-black   lg:text-2xl md:text-xl px-4 py-2  text-lg text-center">
                  Health & Fitness
                </span>
              </div>
            </div>

            <div className="w-full h-full flex justify-center items-center">
              <Player
                autoplay
                loop
                src="https://assets7.lottiefiles.com/packages/lf20_l13zwx3i.json"
                className=" w-[250px] h-[200px]"
              ></Player>
            </div>
            <div className="pb-7 flex justify-center items-center">
              <div
                className="border-2 text-black rounded px-4 md:px-12 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                onClick={function handlePaage() {
                  router.push("/community");
                }}
              >
                <button>Join our community club !</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-lg flex  items-center justify-center  infPic card-col  ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#ffff] mt-2 mx-2 flex justify-center items-center high1">
                <span className="text-black   lg:text-2xl md:text-xl px-4 py-2  text-lg text-center">
                  Digital Marketing
                </span>
              </div>
            </div>

            <div className="w-full h-full flex justify-center items-center">
              <Player
                autoplay
                loop
                src="https://assets4.lottiefiles.com/private_files/lf30_e9t04qcb.json"
                className=" w-[250px] h-[200px]"
              ></Player>
            </div>
            <div className="pb-7 flex justify-center items-center">
              <div
                className="border-2 text-black rounded px-4 md:px-12 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                onClick={function handlePaage() {
                  router.push("/community");
                }}
              >
                <button>Join our community club !</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-lg flex  items-center justify-center  infPic card-col  ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#ffff] mt-2 mx-2 flex justify-center items-center high1">
                <span className="text-black   lg:text-2xl md:text-xl px-4 py-2  text-lg text-center">
                  School Science
                </span>
              </div>
            </div>

            <div className="w-full h-full flex justify-center items-center">
              <Player
                autoplay
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_dT1E1P.json"
                className=" w-[250px] h-[200px]"
              ></Player>
            </div>
            <div className="pb-7 flex justify-center items-center">
              <div
                className="border-2 text-black rounded px-4 md:px-12 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                onClick={function handlePaage() {
                  router.push("/community");
                }}
              >
                <button>Join our community club !</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-lg flex  items-center justify-center  infPic card-col  ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#ffff] mt-2 mx-2 flex justify-center items-center high1">
                <span className="text-black   lg:text-2xl md:text-xl px-4 py-2  text-lg text-center">
                  Data Science 
                </span>
              </div>
            </div>

            <div className="w-full h-full flex justify-center items-center">
              <Player
                autoplay
                loop
                src="https://assets5.lottiefiles.com/packages/lf20_qp1q7mct.json"
                className=" w-[250px] h-[200px]"
              ></Player>
            </div>
            <div className="pb-7 flex justify-center items-center">
              <div
                className="border-2 text-black rounded px-4 md:px-12 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                onClick={function handlePaage() {
                  router.push("/community");
                }}
              >
                <button>Join our community club !</button>
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
// "https://assets7.lottiefiles.com/packages/lf20_l13zwx3i.json"
// https://assets9.lottiefiles.com/packages/lf20_1rsb3quq.json
// https://assets10.lottiefiles.com/packages/lf20_qrtp2d9r.json
