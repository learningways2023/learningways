import React from "react";
import Navbar from "../components/navbar";
import about from "../public/aboutus.svg";
import Image from "next/image";
import mission from "../public/mission.svg";
import vission from "../public/vission.svg";
import Footer from "../components/footer";
import team from "../public/team.png";
import Contact from "../components/contact";
import Career from "../components/career";
import values from "../public/values.png";
import { useCallback, useEffect, useState } from "react";
const About = () => {
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
  const isBreakpoint = useMediaQuery(450);
  return (
    <div>
      <Navbar isLogedIn={false} />
      <div className="pb-9">
        <div className="about_hero1 pt-10" id="what_we_do">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            <div className=" rounded-md flex items-center justify-center px-8">
              <Image src={about} />
            </div>
            <div className=" p-4 rounded-md flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-0 lg:gap-8 sm:gap-4 lg:px-10 md:px-10 px-3">
                <div className="rounded-md flex items-center justify-center">
                  <h1 className=" xl:text-4xl lg:text-3xl md:text-3xl text-[26px] text-[#c47993] font-semibold text-center">
                    WHAT WE DO?
                  </h1>
                </div>
                <div className="mt-[1rem] rounded-md flex items-center justify-center xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] sm:leading-[197%] md:leading-[197%] leading-[197%] lg:text-left md:text-center text-center ">
                  <span className="text-gray-700 font-medium ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eius voluptatem minima ex delectus deserunt vitae aperiam,
                    explicabo soluta accusantium saepe quos deleniti alias
                    reprehenderit, autem laborum aut sed quia earum.
                    <div className="py-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eius voluptatem minima ex delectus deserunt vitae aperiam,
                      explicabo soluta accusantium saepe quos deleniti alias
                      reprehenderit, autem laborum aut sed quia earum.
                    </div>
                    <div className="py-2">
                      Ideopedia is a non-profit founded in 2005.
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="missionpage ">
          <div
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-10 lg:py-14 md:py-14 py-8"
            id="mission"
          >
            <div className=" rounded-md flex items-center justify-center px-8">
              <Image src={mission} width={400} height={400} />
            </div>
            <div className=" rounded-md flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className=" rounded-md flex items-center justify-center">
                  <h1 className="xl:text-4xl lg:text-3xl md:text-3xl text-[26px] text-[#c47993] font-semibold pb-5 lg:pr-20 text-center">
                    MISSION
                  </h1>
                </div>
                <div className=" rounded-md flex items-center text-center justify-center xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 lg:text-left md:text-center text-center md:pb-10">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  voluptatem minima ex delectus deserunt vitae aperiam,
                  explicabo soluta accusantium saepe quos deleniti alias
                  reprehenderit, autem laborum aut sed quia earum.
                </div>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-10 lg:py-14 md:py-14 py-8 pt-10"
            id="vission"
          >
            <div className=" rounded-md flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className=" rounded-md flex items-center justify-center">
                  <h1 className="xl:text-4xl lg:text-3xl text-center md:text-3xl text-[26px] text-[#c47993] font-semibold pb-5 lg:pr-20 ">
                    VISION
                  </h1>
                </div>
                <div className="text-center rounded-md flex items-center justify-center xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 lg:text-left md:text-center text-center md:pb-10">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  voluptatem minima ex delectus deserunt vitae aperiam,
                  explicabo soluta accusantium saepe quos deleniti alias
                  reprehenderit, autem laborum aut sed quia earum.
                </div>
              </div>
            </div>
            <div className=" rounded-md flex items-center justify-center px-8">
              <div className="">
                <Image src={vission} width={400} height={400} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-9">
        <div className="missionpage ">
          {/* <div
            style={{
              position: "relative",
              bottom: `${isBreakpoint ? "11rem" : "7rem"}`,
              marginBottom: "-18rem",
            }}
          >
            <Image src={flower} width={isBreakpoint ? 100 : 200} />
          </div> */}
          <div
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-10 lg:py-14 md:py-14 py-8"
            id="mission"
          >
            <div className=" rounded-md flex items-center justify-center px-8">
              <Image src={values} width={400} height={400} />
            </div>
            <div className=" rounded-md flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className=" rounded-md flex items-center justify-center">
                  <h1 className="text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px] text-[#c47993] font-semibold pb-5 lg:pr-20">
                    VALUES
                  </h1>
                </div>
                <div className="text-center rounded-md flex items-center justify-center xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 lg:text-left md:text-center text-center md:pb-10">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  voluptatem minima ex delectus deserunt vitae aperiam,
                  explicabo soluta accusantium saepe quos deleniti alias
                  reprehenderit, autem laborum aut sed quia earum.
                </div>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-10 lg:py-14 md:py-14 py-8 pt-10"
            id="vission"
          >
            <div className=" rounded-md flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className=" rounded-md flex items-center justify-center">
                  <h1 className="text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px] text-[#c47993] font-semibold pb-5 lg:pr-20 ">
                    TEAM
                  </h1>
                </div>
                <div className="text-center rounded-md flex items-center justify-center xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 lg:text-left md:text-center text-center md:pb-10">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  voluptatem minima ex delectus deserunt vitae aperiam,
                  explicabo soluta accusantium saepe quos deleniti alias
                  reprehenderit, autem laborum aut sed quia earum.
                </div>
              </div>
            </div>
            <div className=" rounded-md flex items-center justify-center px-8">
              <div className="">
                <Image src={team} width={400} height={400} />
              </div>
            </div>
          </div>
          {/* <div
            className="float-right"
            style={{
              position: "relative",
              bottom: `${isBreakpoint ? "13rem" : "9rem"}`,
              marginBottom: "-13rem",
            }}
          >
            <Image src={flower} width={isBreakpoint ? 100 : 200} />
          </div> */}
        </div>
      </div>
      <div className="py-9 pb-6 " id="contact">
        <div className="min-h-[100vh] bg-[#085464] flex justify-center items-center ">
          <Contact />
        </div>
      </div>
      <div className="py-9 "id="career">
        <div className="min-h-[100vh] bg-[#085464] flex justify-center items-center ">
          <Career />
        </div>
      </div>

      <div >
        <Footer />
      </div>
    </div>
  );
};

export default About;
