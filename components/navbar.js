import { useState } from "react";
import Image from "next/image";
import expand from "../public/expand.png";
import { useRouter } from "next/router";
import logo from "../public/logo2.png";

import { getCookies, getCookie, setCookies, removeCookies } from "cookies-next";
export default function Navbar() {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full  bg-[#085464] drop-shadow">
        <div className="justify-between px-4  lg:items-center lg:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1  md:py-1 lg:block">
              <div
                href="/"
                className="cursor-pointer w-40 h-15"
                onClick={function handleLogo() {
                  router.push("/");
                  setNavbar(false);
                }}
                
              >
                <Image
                  src={logo}
                  className="cursor-pointer"

                />
              </div>
              <div className="lg:hidden">
                <button
                  className="p-1 pt-3  outline-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center  pb-3 mt-8 lg:block md:pb-0 md:mt-0  ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 lg:flex md:space-x-6 lg:space-y-0">
                <li className=" flex justify-center text-white">
                  <div className="dropdown ">
                    <button className="dropbtn flex items-center justify-center cursor-pointer">
                      Product{" "}
                      <div className="mt-2 ml-2 mb-1">
                        <Image src={expand} width={20} height={20} />
                      </div>
                    </button>
                    <div className="dropdown-content">
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        NCERT Solutions
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Assessment
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Skill Development
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Coding for Kids
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Mentoring
                      </div>
                    </div>
                  </div>
                </li>
                <li className="text-white flex justify-center">
                  <div className="dropdown">
                    <button className="dropbtn flex items-center justify-center cursor-pointer">
                      Student{" "}
                      <div className="mt-2 ml-2 mb-1">
                        <Image src={expand} width={20} height={20} />
                      </div>
                    </button>
                    <div className="dropdown-content">
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464] "
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Class 5-8
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Class 9-10
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Class 11-12
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Engineering
                      </div>
                    </div>
                  </div>
                </li>
                <li className="text-white flex justify-center">
                  <div className="dropdown">
                    <button className="dropbtn flex items-center justify-center cursor-pointer">
                      Resouces{" "}
                      <div className="mt-2 ml-2 mb-1">
                        <Image src={expand} width={20} height={20} />
                      </div>
                    </button>
                    <div className="dropdown-content">
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer mt-1 hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        NCERT SOLUTIONS
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        JEE
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        GATE
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Coding Tutorials
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Interview Questions
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Practice Questions
                      </div>
                    </div>
                  </div>
                </li>
                <li className="text-white flex justify-center">
                  <div className="dropdown">
                    <button className="dropbtn flex items-center justify-center cursor-pointer">
                      Professional{" "}
                      <div className="mt-2 ml-2 mb-1">
                        <Image src={expand} width={20} height={20} />
                      </div>
                    </button>
                    <div className="dropdown-content ">
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Learn
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Prepare
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Practice
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Suceed
                      </div>
                    </div>
                  </div>
                </li>
                {getCookie("user") ? (
                  <li className="text-white flex justify-center">
                    <div className="dropdown">
                      <button className="dropbtn flex items-center justify-center cursor-pointer">
                        My Account
                        <div className="mt-2 ml-2">
                          <Image src={expand} width={20} height={20} />
                        </div>
                      </button>
                      <div className="dropdown-content ">
                        <div
                          className="flex justify-center items-center py-2 cursor-pointer"
                          onClick={function handleLogo() {
                            router.push(`/dashboard/${getCookie("user")}`);
                            setNavbar(false);
                          }}
                        >
                          Dashboard
                        </div>
                        <div
                          className="flex justify-center items-center py-2 cursor-pointer"
                          onClick={function handleLogo() {
                            router.push(`/read/${getCookie("user")}`);
                            setNavbar(false);
                          }}
                        >
                          Read Ideos
                        </div>
                        <div
                          className="flex justify-center items-center py-2 cursor-pointer "
                          onClick={function handleLogo() {
                            router.push(`/mylib/${getCookie("user")}`);
                            setNavbar(false);
                          }}
                        >
                          My Library
                        </div>
                      </div>
                    </div>
                  </li>
                ) : null}

                <li className="text-white flex justify-center">
                  <div className="dropdown">
                    <button className="dropbtn flex items-center justify-center cursor-pointer">
                      About Us{" "}
                      <div className="mt-2 ml-2 mb-1">
                        <Image src={expand} width={20} height={20} />
                      </div>
                    </button>
                    <div className="dropdown-content">
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Who we are
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Career with us
                      </div>
                      <div
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-white hover:text-[#085464]"
                        onClick={function handleLogo() {
                          router.push("/");
                          setNavbar(false);
                        }}
                      >
                        Contact us
                      </div>
                    </div>
                  </div>
                </li>

                {getCookie("user") ? (
                  <li
                    className="text-white flex justify-center cursor-pointer"
                    onClick={function handleLogout() {
                      removeCookies("user");
                      router.push("/");
                      setNavbar(false);
                    }}
                  >
                    <div className="log">
                      <button>Logout</button>
                    </div>
                  </li>
                ) : (
                  <li
                    className="text-white flex justify-center cursor-pointer"
                    onClick={function handleLogo() {
                      router.push("/");
                      setNavbar(false);
                    }}
                  >
                    <div>
                      <div className="log">
                        <button>Login / Sign up</button>
                      </div>
                    </div>
                  </li>
                )}

                {/* {getCookie("user") ? null : (
                  <li
                    className="text-white flex justify-center cursor-pointer"
                    onClick={function handleLogo() {
                      router.push("/signup");
                      setNavbar(false);
                    }}
                  >
                    <div>
                      <div className="sin">
                        <button>Signup</button>
                      </div>
                    </div>
                  </li>
                )} */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
