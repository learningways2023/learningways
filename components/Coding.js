import React from "react";

import Image from "next/image";
import { useState } from "react";
import close from "../public/close.svg";
import bullet from "../public/bulletblack.svg";

const Coding = (props) => {
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
      <div className="w-full sm:w-1/2 md:w-1/2  xl:w-4/12  p-4 ">
        <div className="card-col p-4 flex flex-col items-center justify-between min-h-[70vh] py-16">
          <div>
            <h2 className="mt-2 mb-2 text-xl  font-bold text-black text-center">
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
              className=" border-2 text-white rounded px-2 py-1 text-base  cursor-pointer font-semibold hover:bg-black hover:border-black duration-150"
              onClick={function showModal() {
                setModal(true);
              }}
            >
              Read More
            </div>
            <div
              className=" border-2 text-white rounded px-2 py-1 text-base  cursor-pointer font-semibold hover:bg-black hover:border-black duration-150"
              onClick={function showModal() {
                setModal(true);
              }}
            >
              Start Now !
            </div>
          </div>

          {/* <div className="p-4 flex items-center justify-center text-lg text-[#085464]   cursor-pointer">
              Start Now !
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Coding;
