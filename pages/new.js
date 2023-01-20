//
import bullet from "../public/bullet.svg";

import React from "react";
import Image from "next/image";
import Link from "next/link";
const New = () => {
  return (
    <div className="p-4">
      <div class="max-w-sm w-full lg:max-w-full lg:flex min-h-[40vh] drop-shadow-2xl">
        <div
          class="h-48 lg:h-auto lg:w-4/12 flex-none bg-cover rounded-t lg:rounded-t-none cbg lg:rounded-l text-center overflow-hidden"
          title="Woman holding a mug"
        ></div>
        <div class=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 px-5 pb-5 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <div class="text-[#085464] text-center font-bold text-xl mb-5">
              Introduction to Digital Marketing
            </div>
            <div className=" rounded-md flex items-center  xl:text-xl lg:text-lg md:text-lg  font-medium text-gray-700  text-left py-1">
              <Image src={bullet} width={20} height={20} className="mr-3" />
              Learn the basics of digital marketing, including web design,
              search engine optimization, social media, and online advertising.
            </div>
            
          </div>
          <div class="flex items-center justify-center">
            <div className="getstarted gt text-lg text-white py-2 px-4 rounded-md ">
              <button className="font-medium">View Content</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
