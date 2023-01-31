import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import test1 from "../public/test1.png";
import test2 from "../public/test2.png";
import search from "../public/search.png";
import filter from "../public/filter.png";
import Uparrow from "../components/uparrow";
import test3 from "../public/test3.png";
const Assesment = () => {
  const classes =
    "border-2 pl-9 border-[#085464] text-gray-900 text-base font-medium rounded-md focus:ring-[#085464] focus:border-[#085464] placeholder-3  block p-2.5 ";

  return (
    <div>
      <Navbar />
      <div className="p-4 min-h-[100vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="w-full h-full">
            <div className="flex justify-center items-center"></div>
            <div className="rounded-md flex items-center justify-start">
              <span className="  text-[#085464] font-medium text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] lg:text-left xl:text-left">
                Select your Exam Category
              </span>
            </div>

            <div className="grid grid-cols-2 pt-9 gap-5">
              <div className="w-full h-full">
                <div className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  NCERT
                </div>
              </div>
              <div className="w-full h-full">
                <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  Coding
                </div>
              </div>
              <div className="w-full h-full">
                <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  Skill Test
                </div>
              </div>
              <div className="w-full h-full">
                <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  UPSC General Studies
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="flex justify-center items-center pt-9">
                <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  UPSC Current Affairs
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <Image src={test1} />
          </div>
        </div>
      </div>
      <div className="p-4 min-h-[50vh]">
        <div className="text-[#085464] font-medium text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] lg:text-left xl:text-left">
          Choose your stream
        </div>
        <div className="py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="w-full h-full">
            <div className="flex justify-center items-center">
              <div>
                <i className="absolute ml-4 -mt-2">
                  <Image src={search} width={20} height={20} />
                </i>
              </div>
              <input
                className={classes}
                type="text"
                required
                placeholder="Search for your Stream"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-[150px] h-[50px] bg-[#085464] rounded-xl flex justify-center items-center cursor-pointer">
              <div>
                <Image src={filter} width={20} height={20} />
              </div>
              <div className="pl-3 text-[20px] text-white">Filters</div>
            </div>
          </div>
        </div>
        <div className="lg:px-8 xl:px-8 px-0 flex justify-between w-[100%] space-x-4  lg:w-[50%] xl:w-[50%]">
          <div className="  w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            NCERT Class 7th History
          </div>

          <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
            {" "}
            NCERT Class 7th History
          </div>
        </div>
      </div>
      <div className="p-4 min-h-[100vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="flex justify-center items-center ">
            <Image src={test2} />
          </div>
          <div className="w-full h-full">
            <div className="flex justify-center items-center"></div>
            <div className="rounded-md flex items-center justify-start">
              <span className="  text-[#085464] font-medium text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] lg:text-left xl:text-left">
                Most popular Tests
              </span>
            </div>

            <div className="grid grid-cols-2 pt-9 gap-5">
              <div className="w-full h-full">
                <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  NCERT Class 7th History
                </div>
              </div>
              <div className="w-full h-full">
                <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  NCERT Class 9th History
                </div>
              </div>
              <div className="w-full h-full">
                <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  Product Management
                </div>
              </div>
              <div className="w-full h-full">
                <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  Digital Marketing Basic Level
                </div>
              </div>
              <div className="w-full h-full">
                <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  UPSC General Studies
                </div>
              </div>
              <div className="w-full h-full">
                <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  Fun Coding
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 min-h-[100vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="w-full h-full">
            <div className="flex justify-center items-center"></div>
            <div className="rounded-md flex items-center justify-start">
              <span className="  text-[#085464] font-medium text-center xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] lg:text-left xl:text-left">
                Learn through our courses & access yourself
              </span>
            </div>

            <div className="grid grid-cols-2 pt-9 gap-5">
              <div className="w-full h-full">
                <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]  text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  UPSC courses
                </div>
              </div>
              <div className="w-full h-full">
                <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  Coding
                </div>
              </div>
              <div className="w-full h-full">
                <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  NCERT Summary Class
                </div>
              </div>
              <div className="w-full h-full">
                {/* <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  Skill Test
                </div> */}
              </div>
              <div className="w-full h-full">
                <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  Product Management
                </div>
              </div>
              <div className="w-full h-full">
                <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] border border-1 hover:text-white border-[#085464] rounded-lg bg-white hover:bg-[#085464]   text-[#085464] cursor-pointer text-center flex justify-center items-center font-normal">
                  {" "}
                  Digital Marketing
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <Image src={test3} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Assesment;

{
  /* <div className="">
  <div className="rounded-md flex items-center justify-start">
    <span className="  text-[#085464] font-medium text-center lg:text-left xl:text-left">
      Select your Exam Category
    </span>
  </div>
  <div className="grid grid-cols-2">
    <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] rounded-lg bg-white hover:bg-[#085464] cursor-pointer"></div>
    <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] rounded-lg bg-white hover:bg-[#085464] cursor-pointer"></div>
    <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] rounded-lg bg-white hover:bg-[#085464] cursor-pointer"></div>
    <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] rounded-lg bg-white hover:bg-[#085464] cursor-pointer"></div>
  </div>
  <div className="flex justify-center items-center">
    <div className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px] rounded-lg bg-white hover:bg-[#085464] cursor-pointer"></div>
  </div>
</div>; */
}
