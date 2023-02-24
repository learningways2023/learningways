import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import community from "../public/community.png";
import blog from "../public/blog.png";
import forum from "../public/forum.png";
import group from "../public/group.png";
import member from "../public/members.png";
import ment from "../public/john.png";
import Uparrow from "../components/uparrow";
import Image from "next/image";
const Community = () => {
  return (
    <div>
      <Navbar />
      <Uparrow url="community" />
      <div className="mx-4 mt-5 min-h-[70vh] bg-gradient-to-r from-blue-500 to-cyan-500">
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
      <Footer />
    </div>
  );
};

export default Community;
