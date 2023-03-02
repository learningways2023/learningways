import React from "react";
import Link from "next/link";
import mail from "../public/mail.png";
import call from "../public/call.png";
import face from "../public/facebook.png";
import insta from "../public/insta.png";
import linked from "../public/linkedin.png";
import android from "../public/android.png";
import twitter from "../public/twitter.png";
import Image from "next/image";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  return (
    <div className="grid bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
      <div className="sm:pt-10  pb-4 footer">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-2 lg:gap-4 px-5">
          <div className="p-2 rounded-md flex sm:justify-start justify-center sm:text-left text-center">
            <div>
              <span className="heading">
                Download LearningWays App from Playstore
              </span>
              <br />
              <br />
              <ul className="flex justify-center md:justify-start items-center">
                <li className="py-1 foottext hover:text-[#79c5d4] cursor-pointer" onClick={function handleAndroid(){
                  router.push("/")
                }}>
                  <Image src={android} width={200} height={100} />
                </li>
              </ul>
            </div>
          </div>
          <div className="p-2 rounded-md flex sm:justify-start justify-center sm:text-left text-center">
            <div>
              <span className="heading">Resourses</span>
              <br />
              <br />
              <ul>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">NCERT </Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">UPSC Material</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="">Skill Development Material </Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">Coding Tutorials</Link>
                </li>

                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">NCERT Solutions</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-2 rounded-md flex sm:justify-start justify-center sm:text-left text-center">
            <div>
              <span className="heading">Partnerships</span>
              <br />
              <br />
              <ul>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">LearningWays for Schools</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">LearningWays for Competetive exam</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">LearningWays for Upskilling</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">LearningWays for College</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-2 rounded-md flex sm:justify-start justify-center sm:text-left text-center">
            <div>
              <span className="heading">Library</span>
              <br />
              <br />
              <ul>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">Career Arena</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">Blogs</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">Webinars</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-2  rounded-md flex sm:justify-start justify-center mb-5 sm:text-left text-center">
            <div>
              <span className="heading">About us</span>
              <br />
              <br />
              <ul>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/about#what_we_do">Who we are?</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/about#teams">Teams</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/about#career">Work with us</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/about#refund">Refund & cancellation</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/about#refund">Privacy & policy</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/about#terms">Terms & conditions</Link>
                </li>
                {/* <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/teams#bod">Advisors</Link>
                </li>
                <li className="py-2 foottext hover:text-[#79c5d4]"></li>
                <li className="py-3 foottext"> </li> */}
              </ul>
            </div>
          </div>
          <div className="p-2  rounded-md flex sm:justify-start justify-center mb-9 sm:text-left text-center">
            <div>
              <span className="heading">Contact us</span>
              <br />
              <br />
              <ul>
                {/* <li className="py-1 foottext hover:text-[#79c5d4] flex  items-center justify-center md:justify-start lg:justify-start xl:justify-start">
                  <Image src={call} width={20} height={20} />
                  <Link href="/" className="ml-3">
                    +91 812345678
                  </Link>
                </li> */}
                <li className="py-1 foottext hover:text-[#79c5d4] flex  items-center justify-center md:justify-start lg:justify-start xl:justify-start">
                  <Image src={mail} width={20} height={20} />
                  <Link
                    href="https://mail.google.com/mail/u/0/?fs=1&to=info.learningways@gmail.com&su=Regarding+LearningWays&body=&tf=cm"
                    target="_blank"
                    className="ml-3"
                  >
                    info.learningways@gmail.com
                  </Link>
                </li>
                <li className="py-4 foottext flex  items-center justify-center md:justify-start lg:justify-start xl:justify-start">
                  <div className="grid grid-cols-4 gap-1">
                    <div className="flex  items-center cursor-pointer ">
                      <Image src={face} />{" "}
                    </div>
                    <div className="flex  items-center cursor-pointer">
                      <Image src={insta} />
                    </div>
                    <div className="flex  items-center cursor-pointer">
                      <Image src={linked} />
                    </div>
                    <div className="flex  items-center cursor-pointer">
                      <Image src={twitter} />
                    </div>
                  </div>
                </li>
                {/* <li className="py-3 foottext"></li>
                <li className="py-3 foottext"></li>
                <li className="py-3 foottext"></li>
                <li className="py-3 foottext"> </li> */}
              </ul>
            </div>
          </div>
        </div>
        <hr className="hru mx-9 mb-5" />
        <div className="flex items-center justify-between">
          <div className="foottext pl-8">
            <Link href="/about">©️ Learningways - 2023</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
