import React from "react";
import Navbar from "../components/navbar";

import Footer from "../components/footer";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import Image from "next/image";
import { getCookie, setCookies, removeCookies, setCookie } from "cookies-next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Link from "next/link";
import Axios from "axios";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import logo from "../public/Google.png";
import { useRouter } from "next/router";
import { useReducer, useEffect, useState, useRef } from "react";

function Forgot() {
  const [email, setEmail] = useState(false);
  const [pass, setPass] = useState("password");

  const router = useRouter();
  const toastifySuccess = () => {
    toast.success("Check your inbox for further instructions !", {
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
    try {
      const userCredentials = await sendPasswordResetEmail(auth, email);

      toastifySuccess();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full">
      <Navbar />
      <ToastContainer />
      <div className="my-10 flex items-center justify-center">
        <div className="w-[880px] h-[540px] lg:shadow-2xl flex items-center lg:justify-between justify-center bg-white rounded-xl">
          <div className="lg:flex hidden">
            <div className=" rounded-md flex items-center justify-center px-8">
              <Player
                autoplay
                loop
                src="https://assets5.lottiefiles.com/packages/lf20_dneo0c5x.json"
                className="  xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
              ></Player>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center lg:mr-20">
            <form className="" onSubmit={loginSubmitHandler}>
              <p className="text-2xl font-bold mb-10">Reset Your Password</p>
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

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="border-2 border-black bg-black text-white px-4 py-2 mb-3 sm:w-[320px] w-[260px] font-medium"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Forgot;
