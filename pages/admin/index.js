import React from "react";

import Image from "next/image";
import { getCookie, setCookies, removeCookies, setCookie } from "cookies-next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Link from "next/link";
import Axios from "axios";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import { useRouter } from "next/router";
import { useState, useCallback, useEffect } from "react";
import { set } from "mongoose";

function Login() {
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

      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
  };
  const isBreakpoint = useMediaQuery(450);
  const [email, setEmail] = useState(false);
  const [pass, setPass] = useState("password");

  const router = useRouter();
  const toastifySuccess = () => {
    toast.success("Successfully LogedIn !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const toastifyFailure = () => {
    toast.error("Invail Email or Password !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const loginSubmitHandler = async (e) => {
    // console.log("e");
    e.preventDefault();
    if (email == "info.learningways@gmail.com" && pass == "Admin@learn1729") {
      setCookie("add", email + email + email, { maxAge: 10000 });

      toastifySuccess();

      router.push("/admin/update");
    } else {
      toastifyFailure();
    }
  };

  return (
    <div className="w-full h-full">
      <ToastContainer />
      <div className="my-10 flex items-center justify-center">
        <div className="w-[880px] h-[500px] lg:drop-shadow-2xl border-2 border-gray-200 flex items-center lg:justify-between justify-center bg-white rounded-xl">
          <div className="lg:flex hidden">
            <div className=" rounded-md flex items-center justify-center px-8">
              <Player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_9iugpxgj.json"
                className="  xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
              ></Player>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center lg:mr-20">
            <form className="" onSubmit={loginSubmitHandler}>
              <p className="text-2xl font-bold mb-10">Admin Login !</p>
              <div className="flex flex-col mb-3">
                <label className="  font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter the email"
                  className="border-2 border-slate-300 px-4 py-2 outline-none sm:w-[320px] w-auto"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex flex-col mb-7">
                <label className="  font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Enter the password"
                  className="border-2 border-slate-300 px-4 py-2 outline-none"
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="border-2 border-black bg-black text-white px-4 py-2 mb-3 sm:w-[320px] w-[260px] font-medium"
                >
                  Log in as Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
