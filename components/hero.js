import React from "react";
import { useState, useCallback, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo2.png";
import { getCookies, getCookie, setCookies, removeCookies } from "cookies-next";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

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
      <div className=" lg:h-screen">
        <div className="lg:flex justify-center items-center lg:pt-9 sm:pt-10 p-4">
          <div className="lg:flex lg:justify-between lg:items-center sm:p-5 py-5 px-0">
            <div className="w-auto h-auto p-1 ">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:gap-6 lg:gap-5 sm:gap-4 gap-4">
                <div className="  rounded-md flex items-center justify-center">
                  <span className="xl:text-[42px] lg:text-[32px] sm:text-[32px] text-[20px] text-[#c47993] font-medium text-center lg:text-left xl:text-left">
                    "It's not what you achieve, it's what you overcome. That's
                    what defines your career."
                  </span>
                </div>
                <div className="xl:text-[26px] lg:text-[25px] sm:text-[25px] text-[18px] flex items-center justify-center text-center lg:text-left xl:text-left">
                  <span>
                    Welcome to LearningWays, the premier online destination for
                    skill development courses for children and professionals
                  </span>
                </div>
                <div className=" rounded-md flex items-center justify-center lg:justify-start xl:justify-start pt-4">
                  {getCookie("user") ? (
                    <Link href={`/dashboard/${getCookie("user")}`}>
                      <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-3 px-6  rounded-md ">
                        <button className="font-medium">Explore Now</button>
                      </div>
                    </Link>
                  ) : (
                    <Link href="/login">
                      <div className="getstarted gt xl:text-[20px] lg:text-[18px] text-white py-3 px-6 rounded-md ">
                        <button className="font-medium">Explore Now</button>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="w-auto h-auto -z-50">
              <Player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_g2es3iti.json"
                className=" xl:w-[500px] xl:h-[500px] lg:w-[380px] lg:h-[400px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[360px] xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
              ></Player>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newhero;
