import React from "react";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import close from "../public/close.svg";
import bullet from "../public/bulletblack.svg";
const UpcommingCard = (props) => {
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
        <div className="card-col block  infp overflow-hidden">
          <div className="w-full h-full p-4 ">
            <Image
              width={450}
              height={200}
              className="h-[200px] rounded-md"
              src={props.img}
              alt=""
            />
          </div>
          <div className="p-4">
            <h2 className="mt-2 mb-2 py-2 text-xl  font-bold text-black bg-white rounded-md opacity-[0.7]   text-center">
              {props.tittle}
            </h2>
            <div className="text-md py-1 flex  items-center">
              <Image src={bullet} width={20} height={20} className="mr-1" />
              {props.s1}
            </div>
            <div className="text-md py-1 flex  items-center">
              <Image src={bullet} width={20} height={20} className="mr-1" />
              {props.s2}
            </div>
            <div
              className="flex justify-center items-center px-4 text-[#ffff] pt-1 cursor-pointer"
              onClick={function showModal() {
                setModal(true);
              }}
            >
              view full description
            </div>
          </div>
          <div className="p-4 border-t border-b text-xs text-black">
            <div className="mt-1 flex items-center justify-center">
              <span className="text-sm font-semibold">
                Saturday | 23 January, 2023
              </span>
            </div>
          </div>
          <div className="p-4 border-t border-b text-xs text-black">
            <div className="mt-1 flex items-center justify-center">
              <span className="text-sm font-semibold">7.00 AM - 5 PM</span>
            </div>
          </div>

          <div className="p-4 flex items-center justify-center    cursor-pointer">
            <div
              className=" border-2 text-white rounded px-2 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
              onClick={function showModal() {
                setModal(true);
              }}
            >
              Register Now !
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcommingCard;
