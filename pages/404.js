import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import pnf from "../public/404.png";
const Pnf = () => {
  const router = useRouter()
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white min-h-[90vh] mx-4 mt-10 rounded-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <div className="w-10/12 h-full">
              <Image src={pnf} />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="">
              <div className="text-xl md:text-3xl lg:text-3xl xl:text-3xl  font-bold text-center  ">
                Sorry , Either you mistyped the url or we deleted that page,but
                let's agree to blame this on you.
              </div>

              <div className="pt-10 flex justify-center items-center">
                <div
                  className="border-2 text-black rounded px-4 md:px-20 py-2 text-lg  cursor-pointer font-semibold bg-[#fbcf08] border-[#fbcf08] duration-150"
                  onClick={function handlePaage() {
                    router.push("/home");
                  }}
                >
                  <button>Back to Home !</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pnf;
