import React from "react";

import Image from "next/image";
import dbms from "../public/dbms.png";

const EngineeringCourse = (props) => {
  console.log(props);
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/2  xl:w-4/12  p-4 ">
        <div className="card-col p-4 flex flex-col items-center justify-between min-h-[30vh] cursor-pointer infPic py-16">
          <div className="w-full h-full p-4 ">
            <Image
              width={450}
              height={200}
              className="h-[200px] rounded-md"
              src={dbms}
              alt=""
            />
          </div>
          <div>
            <h2 className="mt-2 mb-2 p-4 rounded-md text-xl bg-white opacity-[0.7]  font-bold text-black text-center">
              {props.tittle}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default EngineeringCourse;
