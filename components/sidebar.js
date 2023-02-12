import React from "react";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import logo from "../public/logo2.png";
import home from "../public/home.png";
import dash from "../public/dash.png";
import enroll from "../public/enroll.png";
import profile from "../public/profile.png";
import people from "../public/people.png";
import points from "../public/points.png";
import goals from "../public/goals.png";
import history from "../public/history.png";
import feed from "../public/feed.png";

import logout from "../public/logout.png";
import { useRouter } from "next/router";
import { userAgentFromString } from "next/server";
function SideNavbar(props) {
  const router = useRouter();
  return (
    <div>
      <Disclosure as="nav" className="h-10 ">
        <Disclosure.Button className="md:hidden absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-600    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </Disclosure.Button>
        <div className=" p-2 w-full min-h-[120vh]  bg-gradient-to-r from-blue-500 to-cyan-500 z-20 relative  md:top-0  -left-[500px] md:left-0 md:w-80  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex justify-between items-center py-4 px-4 w-full">
            <div>
              <Image src={logo} height={70} width={250} />
            </div>
            <div className="md:hidden flex justify-end items-center pl-9">
              <svg
                width="20"
                height="20"
                bullet
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2803 1.78033C19.5732 1.48744 19.5732 1.01256 19.2803 0.71967C18.9875 0.426777 18.5126 0.426777 18.2197 0.71967L19.2803 1.78033ZM0.71967 18.2197C0.426777 18.5126 0.426777 18.9875 0.71967 19.2803C1.01256 19.5732 1.48744 19.5732 1.78033 19.2803L0.71967 18.2197ZM1.78037 0.71967C1.48747 0.426777 1.0126 0.426777 0.719707 0.71967C0.426813 1.01256 0.426813 1.48744 0.719707 1.78033L1.78037 0.71967ZM18.2197 19.2803C18.5126 19.5732 18.9875 19.5732 19.2804 19.2803C19.5733 18.9875 19.5733 18.5126 19.2804 18.2197L18.2197 19.2803ZM18.2197 0.71967L0.71967 18.2197L1.78033 19.2803L19.2803 1.78033L18.2197 0.71967ZM0.719707 1.78033L18.2197 19.2803L19.2804 18.2197L1.78037 0.71967L0.719707 1.78033Z"
                  fill="#ffff"
                  fill-opacity="1"
                />
              </svg>
            </div>
          </div>
          <div className="pt-4">
            <div className="flex flex-col items-center justify-between space-y-7 ">
              <div
                className="text-xl text-black flex w-full  justify-start items-center  font-semibold   cursor-pointer "
                onClick={function handleLinkl() {
                  router.push("/");
                }}
              >
                <Image src={home} width={40} height={30} />
                <div className="pl-4">Landing Page</div>
              </div>

              <div
                className="text-xl text-black flex w-full  justify-start items-center    border-y-1 font-semibold   cursor-pointer "
                onClick={function handleLinkl() {
                  router.push("/dashboard/recomendations");
                }}
              >
                <Image src={enroll} width={40} height={30} />
                <div className="pl-2">Recomendations</div>
              </div>
              <div
                className="text-xl text-black flex w-full  justify-start items-center    border-y-1 font-semibold   cursor-pointer "
                onClick={function handleLinkl() {
                  router.push("/dashboard/history");
                }}
              >
                <Image src={history} width={30} height={30} />
                <div className="pl-2">Learning History</div>
              </div>

              <div
                className="text-xl text-black flex w-full  justify-start items-center    border-y-1 font-semibold   cursor-pointer "
                onClick={function handleLinkl() {
                  router.push("/dashboard/points");
                }}
              >
                <Image src={points} width={40} height={30} />
                <div className="pl-2">Gamification</div>
              </div>
              <div
                className="text-xl text-black flex w-full  justify-start items-center    border-y-1 font-semibold   cursor-pointer "
                onClick={function handleLinkl() {
                  router.push("/dashboard/community");
                }}
              >
                <Image src={people} width={40} height={30} />
                <div className="pl-2">Collaboration</div>
              </div>

              <div
                className="text-xl text-black flex w-full  justify-start items-center    border-y-1 font-semibold  cursor-pointer  "
                onClick={function handleLinkl() {
                  router.push("/dashboard");
                }}
              >
                <Image src={dash} width={30} height={30} />
                <div className="pl-4">Activity</div>
              </div>
              <div
                className="text-xl text-black flex w-full  justify-start items-center    border-y-1 font-semibold   cursor-pointer "
                onClick={function handleLinkl() {
                  router.push("/dashboard/feedback");
                }}
              >
                <Image src={feed} width={40} height={30} />
                <div className="pl-2">Feedback</div>
              </div>
              <div
                className="text-xl text-black flex w-full  justify-start items-center    border-y-1 font-semibold   cursor-pointer "
                onClick={function handleLinkl() {
                  router.push("/dashboard/goals");
                }}
              >
                <Image src={goals} width={30} height={30} />
                <div className="pl-2">Goals</div>
              </div>
              <div
                className="text-xl text-black flex w-full   justify-start items-center     font-semibold   cursor-pointer "
                onClick={function handleLinkl() {
                  router.push("/dashboard/profile");
                }}
              >
                <Image src={profile} width={40} height={30} />
                <div className="pl-2"> Profile</div>
              </div>
              <div className="pb-7">
                <div className="border-2 text-white rounded items-center flex justify-center w-[300px] py-1    text-base  cursor-pointer font-semibold bg-black border-black duration-150">
                  <button className="pr-5">Logout</button>
                  <Image src={logout} width={30} height={30} />
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col justify-between items-center  pt-10 space-y-10">
              <div className="text-xl text-black flex w-full   justify-center items-center font-semibold   cursor-pointer ">
                <Image src={profile} width={40} height={30} />
                <div className="pl-2"> Profile</div>
              </div>

              <div className="">
                <div className="border-2 text-white rounded items-center flex justify-center w-[300px]    text-base  cursor-pointer font-semibold bg-black border-black duration-150">
                  <button className="pr-5">Logout</button>
                  <Image src={logout} width={30} height={30} />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
