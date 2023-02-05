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
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] my-5">
        Select Your Exam Category
      </div>
      <div className="p-4 mx-4  min-h-[80vh] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className=" grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
            <div className="w-full h-full flex justify-center items-center">
              <div
                className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
                onClick={function handleNavigate() {
                  router.push("/Coding_tutorials#web_development");
                }}
              >
                {" "}
                NCERT COURSES
              </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <div
                className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
                onClick={function handleNavigate() {
                  router.push("/Coding_tutorials#data_science");
                }}
              >
                {" "}
                NCERT
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
                NCERT MCQ
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
                NCERT SOLUTION
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
                NCERT SUMMARY
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <Image src={test1} />
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Choose your stream
      </div>
      <div className="px-4 py-8 mx-1 md:mx-4 lg:mx-4 xl:mx-4 my-8 grid bg-gradient-to-r from-blue-500 to-cyan-500 grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#web_development");
            }}
          >
            {" "}
            NCERT COURSES
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
            onClick={function handleNavigate() {
              router.push("/Coding_tutorials#data_science");
            }}
          >
            {" "}
            NCERT
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Most popular Tests
      </div>
      <div className="p-4 mx-4 mt-10 min-h-[80vh] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="flex justify-center items-center ">
            <Image src={test1} />
          </div>
          <div className=" grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
            <div className="w-full h-full flex justify-center items-center">
              <div
                className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
                onClick={function handleNavigate() {
                  router.push("/Coding_tutorials#web_development");
                }}
              >
                {" "}
                NCERT Class 7th History
              </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <div
                className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
                onClick={function handleNavigate() {
                  router.push("/Coding_tutorials#data_science");
                }}
              >
                {" "}
                NCERT Class 9th History
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
                Product Management
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
                Digital Marketing Basic Level
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
                UPSC General Studies
              </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <div
                className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
                onClick={function handleNavigate() {
                  router.push("/Coding_tutorials#cyberSecurity");
                }}
              >
                {" "}
                Fun Coding
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] mt-10">
        Learn through our courses & access yourself
      </div>
      <div className="p-4 mx-4 my-10 min-h-[80vh] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:text-xl sm:text-lg text-base font-semibold">
            <div className="w-full h-full flex justify-center items-center">
              <div
                className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
                onClick={function handleNavigate() {
                  router.push("/Coding_tutorials#web_development");
                }}
              >
                {" "}
                UPSC courses
              </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <div
                className="w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]   card-col  text-black cursor-pointer text-center flex justify-center items-center infPic px-4 "
                onClick={function handleNavigate() {
                  router.push("/Coding_tutorials#data_science");
                }}
              >
                {" "}
                Coding
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
                NCERT Summary Class
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
                NCERT SOLUTION
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
                Product Management
              </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <div
                className=" w-[150px] min-h-[70px] lg:w-[200px] xl:h-[90px]  card-col   text-black cursor-pointer text-center flex justify-center items-center infPic px-4"
                onClick={function handleNavigate() {
                  router.push("/Coding_tutorials#cyberSecurity");
                }}
              >
                {" "}
                Digital Marketing
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
