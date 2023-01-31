import React from "react";
import Navbar from "../components/navbar";
import about from "../public/aboutus.svg";
import Image from "next/image";
import Uparrow from "../components/uparrow";
import mission from "../public/mission.svg";
import vission from "../public/vission.svg";
import Footer from "../components/footer";
import refund from "../public/refund.png";
import team from "../public/team.png";
import Contact from "../components/contact";
import Career from "../components/career";
import values from "../public/values.png";
import bullet from "../public/bullet.svg";
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
      <Uparrow url="about" />
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
                    Experience quality and affordable education with
                    LearningWays. Our interactive platform caters to learners of
                    all levels, from class 5th to higher education and even
                    helps to ace most prestigious exam of UPSC. Our
                    multimedia-rich courses, designed by industry experts, keep
                    learners engaged and motivated.
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
                <div className=" rounded-md flex items-center justify-start xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 lg:text-center md:text-center text-center md:pb-10">
                  Welcome to the future of education! At LearningWays, our
                  mission is to provide personalized and effective learning
                  experiences for students that improve their knowledge and
                  skills, and help them succeed. We believe that technology,
                  such as artificial intelligence, adaptive learning, and
                  gamification, is key to creating engaging and interactive
                  content that keeps students motivated and focused. That's why
                  we're committed to using the latest technology to develop
                  innovative solutions that make learning fun and effective.
                </div>
              </div>
            </div>
            <div className=" rounded-md flex items-center justify-center px-8">
              <div className="">
                <Image src={vission} width={400} height={400} />
              </div>
            </div>
          </div>
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
                <div className=" rounded-md flex items-center  justify-center xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 lg:text-center md:text-center text-center md:pb-10">
                  We envision a world where every student, regardless of their
                  background or location, has access to personalized and
                  effective learning experiences that empower them to reach
                  their full potential. At LearningWays, we're committed to
                  bridge the gap between access to education and student
                  outcomes. Join us in creating a future where technology is
                  seamlessly integrated into education and where students are
                  able to learn at their own pace, and have the ability to
                  succeed in their chosen paths.
                </div>
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
                <div className=" rounded-md flex items-center justify-center xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] font-normal md:leading-[197%] sm:leading-[197%] leading-[197%]  text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 lg:text-left  md:text-center text-center md:pb-10">
                  <div>
                    <div>
                      <span className="font-bold">Innovation: </span>Finding new
                      ways to enhance the learning experience and improve
                      results.
                    </div>
                    <div>
                      <span className="font-bold">Understanding: </span>
                      Empathizing with learners to better meet their needs and
                      expectations.
                    </div>
                    <div>
                      <span className="font-bold">Flexibility: </span>Being
                      adaptable to the different learning styles and needs of
                      students.
                    </div>
                    <div>
                      <span className="font-bold">Team-orientation: </span>
                      Encouraging collaboration among students and teachers for
                      better learning outcomes.
                    </div>
                    <div>
                      <span className="font-bold">Ownership: </span>Giving
                      students a sense of responsibility and accountability for
                      their own learning.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-10 lg:py-14 md:py-14 py-8 pt-10"
            id="teams"
          >
            <div className=" rounded-md flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className=" rounded-md flex items-center justify-center">
                  <h1 className="text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px] text-[#c47993] font-semibold pb-5 lg:pr-20 ">
                    TEAM
                  </h1>
                </div>
                <div className=" rounded-md flex items-center justify-center xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 lg:text-center md:text-center text-center md:pb-10">
                  Our team is a group of passionate professionals with diverse
                  skills and expertise in product management, strategy,
                  instructional design, e-learning development, educational
                  psychology and data analysis. We are dedicated to creating
                  innovative and engaging learning experiences and providing
                  exceptional customer service and support. Committed to making
                  a positive impact on education and empowering learners of all
                  ages to reach their full potential.
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
      <div className="py-9 " id="career">
        <div className="min-h-[100vh] bg-[#085464] flex justify-center items-center ">
          <Career />
        </div>
      </div>
      <div className="pb-9">
        <div className="missionpage ">
          <div
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-10 lg:py-14 md:py-14 py-8 pt-10"
            id="refund"
          >
            <div className=" rounded-md flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                <div className=" rounded-md flex items-center justify-center">
                  <h1 className="text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px] text-[#c47993] font-semibold pb-5 lg:pr-20 ">
                    Refund Policy
                  </h1>
                </div>
                <div className=" rounded-md flex items-center justify-center xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 lg:text-center md:text-center text-center md:pb-10">
                  We have a strict 7 days refund policy for all our products and
                  services, we do not issue refunds for completed courses or
                  fully rendered services. Any refund requests must be made
                  within 7 days of purchase by contacting customer support at
                  [email/phone], and will be processed on a case-by-case basis.
                </div>
              </div>
            </div>
            <div className=" rounded-md flex items-center justify-center px-8">
              <div className="">
                <Image src={refund} width={400} height={400} />
              </div>
            </div>
          </div>
          <div
            className=" rounded-md flex items-center justify-center"
            id="terms"
          >
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
              <div className=" rounded-md flex items-center justify-center">
                <h1 className="text-center xl:text-4xl lg:text-3xl md:text-3xl text-[26px] text-[#c47993] font-semibold pb-5 lg:pr-20 ">
                  Terms and Conditions
                </h1>
              </div>
              <div className=" rounded-md flex items-center  xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 text-left md:pb-10">
                <Image src={bullet} width={30} height={30} className="mr-3" />
                By using our website, products and services, you agree to our
                terms and conditions.
              </div>
              <div className=" rounded-md flex items-center  xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 text-left md:pb-10">
                <Image src={bullet} width={30} height={30} className="mr-3" />
                We reserve the right to make changes to these terms and
                conditions at any time.
              </div>
              <div className=" rounded-md flex items-center  xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 text-left md:pb-10">
                <Image src={bullet} width={30} height={30} className="mr-3" />
                All content on our website, products and services is the
                property of our company or its licensors and is protected by
                copyright laws.
              </div>
              <div className=" rounded-md flex items-center  xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 text-left md:pb-10">
                <Image src={bullet} width={30} height={30} className="mr-3" />
                Our website, products and services are provided on an "as is"
                basis and we make no warranties, express or implied.
              </div>
              <div className=" rounded-md flex items-center  xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 text-left md:pb-10">
                <Image src={bullet} width={30} height={30} className="mr-3" />
                We will not be liable for any damages arising from the use of
                our website, products and services.
              </div>
              <div className=" rounded-md flex items-center  xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 text-left md:pb-10">
                <Image src={bullet} width={30} height={30} className="mr-3" />
                You agree to indemnify and hold us harmless from any loss,
                liability, or demand.
              </div>
              <div className=" rounded-md flex items-center  xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 text-left md:pb-10">
                <Image src={bullet} width={30} height={30} className="mr-3" />
                These terms and conditions shall be governed by the laws of our
                company's jurisdiction.
              </div>
              <div className=" rounded-md flex items-center  xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 text-left md:pb-10">
                <Image src={bullet} width={30} height={30} className="mr-3" />
                If any provision of these terms and conditions shall be deemed
                unlawful, void or unenforceable, it shall be deemed severable.
              </div>
              <div className=" rounded-md flex items-center  xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 xl:px-28 lg:px-12 md:px-28 px-10 text-left md:pb-10">
                <Image src={bullet} width={30} height={30} className="mr-3" />
                These terms and conditions constitute the entire agreement
                between you and us{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
