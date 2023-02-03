import React from "react";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import close from "../public/close.svg";
import bullet from "../public/bullet.svg";
const PremiumCourseCard = (props) => {
  const [modal, setModal] = useState(false);
  console.log(props);
  return (
    <>
      {modal ? (
        <>
          <div
            className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none cursor-pointer"
            onClick={function handleModal() {
              setModal(!modal);
            }}
          >
            <div className="relative sm:w-auto sm:px-1 px-0 md:w-10/12  lg:w-9/12 xl:w-8/12 my-20 mx-auto">
              {/*content*/}
              <div className="bg-white rounded-md drop-shadow-md">
                <div className="p-4">
                  <div className="flex justify-end items-end cursor-pointer pb-4">
                    <Image src={close} width={20} height={20} />
                  </div>
                  <div>
                    <div className=" rounded-md flex items-center  justify-center xl:text-2xl lg:text-xl md:text-xl  font-medium text-[#085464] ">
                      {props.tittle}
                    </div>

                    {props.array.map((n) => (
                      <div className=" text-sm py-5 flex  text-center items-center">
                        {console.log(n)}
                        <Image
                          src={bullet}
                          width={30}
                          height={30}
                          className="mr-3"
                        />
                        {n}
                      </div>
                    ))}
                    <div className=" flex justify-center items-center pt-7 pb-3  ">
                      <div className="getstarted gt text-[18px] text-white py-2 px-7 rounded-md flex justify-center items-center">
                        <button type="submit" className="font-medium">
                          START NOW !
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        <div></div>
      )}
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-4/12 p-4 ">
        <div className="c-card block  infp overflow-hidden">
          <div className="w-full h-full ">
            <Image
              width={450}
              height={200}
              className="h-[200px]"
              src={props.img}
              alt=""
            />
          </div>
          <div className="p-4">
            <h2 className="mt-2 mb-2 text-xl  font-bold text-[#085464] text-center">
              {props.tittle}
            </h2>
            <div className="text-sm py-1 flex  items-center">
              <Image src={bullet} width={20} height={20} className="mr-1" />
              {props.s1}
            </div>
            <div className="text-sm py-1 flex  items-center">
              <Image src={bullet} width={20} height={20} className="mr-1" />
              {props.s2}
            </div>
            <div
              className="flex justify-center items-center px-4 text-[#085464] pt-1 cursor-pointer"
              onClick={function showModal() {
                setModal(true);
              }}
            >
              view full description
            </div>
          </div>
          <div className="p-4 border-t border-b text-xs text-[#085464]">
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center text-sm text-[#085464]">
                <span className="text-sm font-semibold pr-2 ">4.8 </span>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-current text-[#085464]"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-current text-[#085464]"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-current text-[#085464]"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-current text-[#085464]"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-current text-gray-400"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                </svg>
              </div>
              <span className="text-sm font-semibold">(2k + Enrolled)</span>
              &nbsp;
            </div>
          </div>
          <div className="mt-3 float">
            <span className="text-lg p-2 pl-4 font-normal text-[#085464] float-left">
              MRP. 599/-
            </span>
            <span className="text-lg  p-2 pr-4 font-normal text-[#085464] float-right cursor-pointer">
              Start Now !
            </span>
          </div>
          {/* <div className="p-4 flex items-center justify-center text-lg text-[#085464]   cursor-pointer">
            Start Now !
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PremiumCourseCard;
