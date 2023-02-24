import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import community from "../public/community.png";
import blog from "../public/blog.png";
import forum from "../public/forum.png";
import group from "../public/group.png";
import member from "../public/members.png";
import dbms from "../public/dbms.png";

import ment from "../public/john.png";
import Uparrow from "../components/uparrow";
import Image from "next/image";
const Community = () => {
  return (
    <div>
      <Navbar />
      <Uparrow url="community" />
      <div className="mx-4 mt-5 min-h-[70vh] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          <div className="flex p-4 flex-col  justify-center">
            <div className=" rounded-md flex items-center justify-center font-semibold xl:text-[42px] text-white  text-center lg:text-[34px] sm:text-[32px] text-[24px] ">
              <span className="text-white  ">
                Welcome to Our Community Forum
              </span>
            </div>
            <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold xl:text-[42px] text-white  text-center lg:text-[34px] sm:text-[32px] text-[24px] ">
              <span className="text-[#fff]  ">
                Build Your Network, Share Your Ideas:
              </span>
            </div>
            <div className=" mt-7 grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
              <div className="bg-white w-full p-2 h-full flex justify-center rounded-lg items-center cursor-pointer">
                <Image src={community} width={100} height={100} />
              </div>
              <div className="bg-white w-full p-2 h-full flex justify-center rounded-lg items-center cursor-pointer">
                <Image src={blog} width={100} height={100} />
              </div>
              <div className="bg-white w-full p-2 h-full flex justify-center rounded-lg items-center cursor-pointer">
                <Image src={forum} width={100} height={100} />
              </div>
              <div className="bg-white w-full p-2 h-full flex justify-center rounded-lg items-center cursor-pointer">
                <Image src={group} width={100} height={100} />
              </div>
              <div className="bg-white w-full p-2 h-full flex justify-center rounded-lg items-center cursor-pointer">
                <Image src={member} width={100} height={100} />
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_4djadzzo.json"
              className=" w-[300px] h-[500px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
            ></Player>
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Popular Groups
      </div>
      <div className=" py-9 mx-4 p-4 my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 cardbg1 rounded-md gap-6 ">
        <div className=" rounded-lg flex  items-center justify-center  infPic card-col  ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="rounded-md flex items-center justify-center">
              <div className="w-auto h-auto bg-[#ffff] mt-2 mx-2 flex justify-center items-center high1">
                <span className="text-black   lg:text-2xl md:text-xl px-4 py-2  text-lg text-center">
                  Data Science Community
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
                className="border-2 text-black rounded px-4 md:px-7 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
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
                  Product Management Community
                </span>
              </div>
            </div>

            <div className="w-full h-full flex justify-center items-center">
              <Player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_my6mfqzk.json"
                className=" w-[250px] h-[200px]"
              ></Player>
            </div>
            <div className="pb-7 flex justify-center items-center">
              <div
                className="border-2 text-black rounded px-4 md:px-7 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
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
                  Digital Marketing Community
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
                className="border-2 text-black rounded px-4 md:px-7 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
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
                  Job Seekers community
                </span>
              </div>
            </div>

            <div className="w-full h-full flex justify-center items-center">
              <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_nk9kshb0.json"
                className=" w-[250px] h-[200px]"
              ></Player>
            </div>
            <div className="pb-7 flex justify-center items-center">
              <div
                className="border-2 text-black rounded px-4 md:px-7 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
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
                  Hobby community
                </span>
              </div>
            </div>

            <div className="w-full h-full flex justify-center items-center">
              <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/temp/lf20_Z3z5Bm.json"
                className=" w-[250px] h-[200px]"
              ></Player>
            </div>
            <div className="pb-7 flex justify-center items-center">
              <div
                className="border-2 text-black rounded px-4 md:px-7 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
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
                  Healthy Diet Community
                </span>
              </div>
            </div>

            <div className="w-full h-full flex justify-center items-center">
              <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_kl8ExNwnCB.json"
                className=" w-[250px] h-[200px]"
              ></Player>
            </div>
            <div className="pb-7 flex justify-center items-center">
              <div
                className="border-2 text-black rounded px-4 md:px-7 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
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
                  Engineers Community
                </span>
              </div>
            </div>

            <div className="w-full h-full flex justify-center items-center">
              <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_ic7oz9ip.json"
                className=" w-[250px] h-[200px]"
              ></Player>
            </div>
            <div className="pb-7 flex justify-center items-center">
              <div
                className="border-2 text-black rounded px-4 md:px-7 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
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
                  Management Community
                </span>
              </div>
            </div>

            <div className="w-full h-full flex justify-center items-center">
              <Player
                autoplay
                loop
                src="https://assets5.lottiefiles.com/packages/lf20_7urcggot.json"
                className=" w-[250px] h-[200px]"
              ></Player>
            </div>
            <div className="pb-7 flex justify-center items-center">
              <div
                className="border-2 text-black rounded px-4 md:px-7 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
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
                  JEE Students Community
                </span>
              </div>
            </div>

            <div className="w-full h-full flex justify-center items-center">
              <Player
                autoplay
                loop
                src="https://assets8.lottiefiles.com/packages/lf20_uMzzwhCG6N.json"
                className=" w-[250px] h-[200px]"
              ></Player>
            </div>
            <div className="pb-7 flex justify-center items-center">
              <div
                className="border-2 text-black rounded px-4 md:px-7 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
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
                  Web Developers community
                </span>
              </div>
            </div>

            <div className="w-full h-full flex justify-center items-center">
              <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_ctaacxzb.json"
                className=" w-[250px] h-[200px]"
              ></Player>
            </div>
            <div className="pb-7 flex justify-center items-center">
              <div
                className="border-2 text-black rounded px-4 md:px-7 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
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
                  App Developers Community
                </span>
              </div>
            </div>

            <div className="w-full h-full flex justify-center items-center">
              <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_fbry1ksx.json"
                className=" w-[250px] h-[200px]"
              ></Player>
            </div>
            <div className="pb-7 flex justify-center items-center">
              <div
                className="border-2 text-black rounded px-4 md:px-7 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
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
                  School Students Community
                </span>
              </div>
            </div>

            <div className="w-full h-full flex justify-center items-center">
              <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_awP420Zf8l.json"
                className=" w-[250px] h-[200px]"
              ></Player>
            </div>
            <div className="pb-7 flex justify-center items-center">
              <div
                className="border-2 text-black rounded px-4 md:px-7 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
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
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        3,600 Members and Counting ....
      </div>
      <div className="px-4 py-8 mx-1 md:mx-4 lg:mx-4 xl:mx-4 my-8 rounded-md grid bg-gradient-to-r from-blue-500 to-cyan-500 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#data_science");
            }}
          >
            {" "}
            Active
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#mobile_development");
            }}
          >
            {" "}
            Newest
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#game_development");
            }}
          >
            {" "}
            Popular
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#cloud_computing");
            }}
          >
            {" "}
            Online
          </div>
        </div>
      </div>
      <div className="mx-4 my-5">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          <div className=" rounded-md  min-h-[70vh] lg:grid-cols-2 xl:grid-cols-2 gap-6">
            <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[34px] lg:text-[28px] sm:text-[26px] text-[20px] ">
              Recent Posts
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex justify-center items-center p-4">
                <div className="w-[300px] h-auto card-col">
                  <div>
                    <Image src={dbms} width={300} height={200} />
                  </div>
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold  text-[18px] text-center ">
                    <span className="text-black  ">
                      Unlock a world of endless possibilities with our fun and
                      engaging website for kids.
                    </span>
                  </div>
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold text-[16px] text-center ">
                    <span className=" text-gray-700  ">
                      Gadgets , 6 Years ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center p-4">
                <div className="w-[300px] h-auto card-col">
                  <div>
                    <Image src={dbms} width={300} height={200} />
                  </div>
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold  text-[18px] text-center ">
                    <span className="text-black  ">
                      Unlock a world of endless possibilities with our fun and
                      engaging website for kids.
                    </span>
                  </div>
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold text-[16px] text-center ">
                    <span className=" text-gray-700  ">
                      Gadgets , 6 Years ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center p-4">
                <div className="w-[300px] h-auto card-col">
                  <div>
                    <Image src={dbms} width={300} height={200} />
                  </div>
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold  text-[18px] text-center ">
                    <span className="text-black  ">
                      Unlock a world of endless possibilities with our fun and
                      engaging website for kids.
                    </span>
                  </div>
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold text-[16px] text-center ">
                    <span className=" text-gray-700  ">
                      Gadgets , 6 Years ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center p-4">
                <div className="w-[300px] h-auto card-col">
                  <div>
                    <Image src={dbms} width={300} height={200} />
                  </div>
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold  text-[18px] text-center ">
                    <span className="text-black  ">
                      Unlock a world of endless possibilities with our fun and
                      engaging website for kids.
                    </span>
                  </div>
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold text-[16px] text-center ">
                    <span className=" text-gray-700  ">
                      Gadgets , 6 Years ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 min-h-[90vh]">
            <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[34px] lg:text-[28px] sm:text-[26px] text-[20px] ">
              On the Forums
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="m-4 p-1 h-auto bg-white rounded-md flex flex-col md:flex lg:flex xl:flex justify-center items-center">
                <div>
                  <Image src={ment} width={100} height={100} />
                </div>
                <div className="w-full min-h-[100px] rounded-md pl-4">
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold  text-[18px] text-center ">
                    <span className="text-black  ">
                      Unlock a world of endless possibilities with our fun and
                      engaging website for kids.
                    </span>
                  </div>
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold text-[16px] text-center ">
                    <span className=" text-gray-700  ">
                      Gadgets , 6 Years ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="m-4 p-1 h-auto bg-white rounded-md flex flex-col md:flex lg:flex xl:flex justify-center items-center">
                <div>
                  <Image src={ment} width={100} height={100} />
                </div>
                <div className="w-full min-h-[100px] rounded-md pl-4">
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold  text-[18px] text-center ">
                    <span className="text-black  ">
                      Unlock a world of endless possibilities with our fun and
                      engaging website for kids.
                    </span>
                  </div>
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold text-[16px] text-center ">
                    <span className=" text-gray-700  ">
                      Gadgets , 6 Years ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="m-4 p-1 h-auto bg-white rounded-md flex flex-col md:flex lg:flex xl:flex justify-center items-center">
                <div>
                  <Image src={ment} width={100} height={100} />
                </div>
                <div className="w-full min-h-[100px] rounded-md pl-4">
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold  text-[18px] text-center ">
                    <span className="text-black  ">
                      Unlock a world of endless possibilities with our fun and
                      engaging website for kids.
                    </span>
                  </div>
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold text-[16px] text-center ">
                    <span className=" text-gray-700  ">
                      Gadgets , 6 Years ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Blogs
      </div>
      <div className="mx-4 my-5">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          <div className=" rounded-md  min-h-[70vh] lg:grid-cols-2 xl:grid-cols-2 gap-6">
            <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[34px] lg:text-[28px] sm:text-[26px] text-[20px] ">
              Google release new Tesorflow Object Detection API
            </div>
            <div className="flex justify-center items-center">
              <Image src={dbms} height={300} />
            </div>
            <div className="mt-[1rem] rounded-md flex items-center justify-center   text-[18px] text-center ">
              <span className="text-black  ">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum may
                be used as a placeholder before final copy is available.In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum may
                be used as a placeholder before final copy is available.
              </span>
            </div>
            <div className="flex justify-end items-center">
              <span className="text-black text-[18px] font-semibold cursor-pointer">
               Continue Reading -{`>`}
              </span>
            </div>
          </div>
          <div className=" rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 min-h-[90vh]">
            <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[34px] lg:text-[28px] sm:text-[26px] text-[20px] ">
              On the Forums
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="m-4 p-1 h-auto bg-white rounded-md flex flex-col md:flex lg:flex xl:flex justify-center items-center">
                <div>
                  <Image src={ment} width={100} height={100} />
                </div>
                <div className="w-full min-h-[100px] rounded-md pl-4">
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold  text-[18px] text-center ">
                    <span className="text-black  ">
                      Unlock a world of endless possibilities with our fun and
                      engaging website for kids.
                    </span>
                  </div>
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold text-[16px] text-center ">
                    <span className=" text-gray-700  ">
                      Gadgets , 6 Years ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="m-4 p-1 h-auto bg-white rounded-md flex flex-col md:flex lg:flex xl:flex justify-center items-center">
                <div>
                  <Image src={ment} width={100} height={100} />
                </div>
                <div className="w-full min-h-[100px] rounded-md pl-4">
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold  text-[18px] text-center ">
                    <span className="text-black  ">
                      Unlock a world of endless possibilities with our fun and
                      engaging website for kids.
                    </span>
                  </div>
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold text-[16px] text-center ">
                    <span className=" text-gray-700  ">
                      Gadgets , 6 Years ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="m-4 p-1 h-auto bg-white rounded-md flex flex-col md:flex lg:flex xl:flex justify-center items-center">
                <div>
                  <Image src={ment} width={100} height={100} />
                </div>
                <div className="w-full min-h-[100px] rounded-md pl-4">
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold  text-[18px] text-center ">
                    <span className="text-black  ">
                      Unlock a world of endless possibilities with our fun and
                      engaging website for kids.
                    </span>
                  </div>
                  <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold text-[16px] text-center ">
                    <span className=" text-gray-700  ">
                      Gadgets , 6 Years ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
