import React from "react";
import Link from "next/link";
import mail from "../public/mail.png";
import call from "../public/call.png";
import face from "../public/facebook.png";
import insta from "../public/insta.png";
import linked from "../public/linkedin.png";
import twitter from "../public/twitter.png";
import Image from "next/image";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  return (
    <div className="bg-[#085464] text-white">
      <div className="sm:pt-10  pb-4 footer">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-2 lg:gap-4 px-5">
          <div className="p-2 rounded-md flex sm:justify-start justify-center sm:text-left text-center">
            <div>
              <span className="heading">Solutions</span>
              <br />
              <ul>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">8th - 9th</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">10th - 12th</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="">College Graduates</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">Working</Link>
                </li>

                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">Professionals</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-2 rounded-md flex sm:justify-start justify-center sm:text-left text-center">
            <div>
              <span className="heading">Partnerships</span>
              <br />
              <ul>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">SKIDO for Schools</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">SKIDO for Corporates</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">SKIDO for Counsellors</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-2 rounded-md flex sm:justify-start justify-center sm:text-left text-center">
            <div>
              <span className="heading">Knowledge Gateway</span>
              <br />
              <ul>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">Career library</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">SKIDO blog</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">Career webinars</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-2  rounded-md flex sm:justify-start justify-center mb-5 sm:text-left text-center">
            <div>
              <span className="heading">About us</span>
              <br />
              <ul>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/teams#bod">Who we are?</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">Team SKIDO</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">Work with us</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">Refund & cancellation</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">Privacy & policy</Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4]">
                  <Link href="/">Terms & conditions</Link>
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
              <ul>
                <li className="py-1 foottext hover:text-[#79c5d4] flex  items-center justify-center md:justify-start lg:justify-start xl:justify-start">
                  <Image src={call} width={20} height={20} />
                  <Link href="/" className="ml-3">
                    +91 812345678
                  </Link>
                </li>
                <li className="py-1 foottext hover:text-[#79c5d4] flex  items-center justify-center md:justify-start lg:justify-start xl:justify-start">
                  <Image src={mail} width={20} height={20} />
                  <Link href="/" className="ml-3">
                    info@skido.com
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
