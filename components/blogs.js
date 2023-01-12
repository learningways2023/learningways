import React from "react";

const Blogs = () => {
  return (
    <div className="p-4">
      <div class=" p-5 bg-white border border-[#085464] rounded-md ">
        <div className="flex justify-center items-center xl:text-[35px] lg:text-[27px] sm:text-[27px] text-[13px] text-[#c47993] font-bold text-center">
          Entrance exam for career in Design
        </div>
        <div className="px-4 flex justify-center items-center pb-4">
          <span className="xl:text-[25px] lg:text-[15px] sm:text-[15px] text-[5px] text-[#333] font-medium text-center">
            Looking to make your career in Design? Know these 5 entrance exam
            options for you with the help of this article by Learning Ways
          </span>
        </div>
        <div className=" rounded-md flex items-center justify-center pt-3 pb-4">
          <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-[#fff] py-2 px-8  rounded-md text-center">
            <button className="font-medium">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
