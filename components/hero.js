import React from "react";
import { useState, useCallback, useEffect } from "react";

import Link from "next/link";

import { getCookie } from "cookies-next";

import { Player } from "@lottiefiles/react-lottie-player";

function Newhero() {
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
  };
  const isBreakpoint = useMediaQuery(639);
  return (
    <div>
      <div className=" min-h-[80vh] mx-4 my-5 bg-[#040f25] rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          <div className="flex flex-col items-center justify-between py-4">
            <div className="mt-[1rem] rounded-md flex items-center justify-center font-semibold xl:text-[42px] text-white  text-center lg:text-[34px] sm:text-[32px] text-[24px] ">
              <span className="text-[#fff]  ">
                Education is the most powerful weapon which you can use to
                change the world -{" "}
                <span className="text-white">Nelson Mandela</span>
              </span>
            </div>
            <div className="xl:text-[26px] pt-10 pl-4 lg:text-[25px] sm:text-[25px] text-[18px] font-semibold flex items-center text-white justify-center text-center pb-10">
              <span>
                Welcome to LearningWays, the premier online destination for
                skill development courses for children and professionals
              </span>
            </div>
            <div className="border-2 text-white rounded px-3 py-3 text-lg  cursor-pointer font-semibold bg-black border-black duration-150 ">
              <button>Explore Now !</button>
            </div>
          </div>
          <div className="w-auto h-auto  pt-9">
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_g2es3iti.json"
              className=" xl:w-[400px] xl:h-[400px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
            ></Player>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newhero;
