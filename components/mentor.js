import React from "react";
import Image from "next/image";
import Link from "next/link";
import code from "../public/john.png";
const Mentor = () => {
  return (
    <div>
      <div class=" bg-[#085464] border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center items-center py-9">
          <Link href="#">
            <Image
              class="rounded-full"
              src={code}
              alt=""
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div class="p-5">
          <a href="#">
            <h5 class="pb-5 xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] font-bold tracking-tight text-white text-center">
              John Doe, Senior Software Engineer
            </h5>
          </a>
          <p class="py-5 font-normal xl:text-[26px] lg:text-[25px] sm:text-[25px] text-[18px] text-white text-center">
            John is a Senior Software Engineer with over 10 years of experience
            in the tech industry. He specializes in Agile development
            methodologies and has a proven track record of successfully
            mentoring junior developers.
          </p>
          <div className="py-7 flex justify-center items-center pb-4">
            <div className="bg-white gt xl:text-[20px] lg:text-[18px] text-[#085464] hover:text-black py-2 px-8  rounded-md text-center">
              <button className="font-medium">Schedule a session with John</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
