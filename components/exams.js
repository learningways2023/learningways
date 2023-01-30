import React from "react";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import close from "../public/close.svg";
import bullet from "../public/bullet.svg";

const Exams = (props) => {
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
        <div className="c-card block border border-1 border-gray-300 drop-shadow-2xl bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
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
              View Syllabus
            </div>
          </div>
          <div className="p-4 border-t border-b  text-[#085464]">
            <div
              className="flex justify-center items-center text-[#085464]  cursor-pointer"
              onClick={function showModal() {
                setModal(true);
              }}
            >
              View Criteria
            </div>
          </div>
          
            <div
              className="flex justify-center items-center py-5  text-[#c47993]  cursor-pointer"
              onClick={function showModal() {
                setModal(true);
              }}
            >
              Learning Ways guidelines
            
          </div>
          {/* <div className="p-4 flex items-center justify-center text-lg text-[#085464]   cursor-pointer">
              Start Now !
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Exams;
