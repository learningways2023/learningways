import React from "react";
import Navbar from "../components/navbar";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import Image from "next/image";
import eyeoff from "../public/eyeoff.svg";
import Footer from "../components/footer";
import eyeon from "../public/eyeon.svg";
import { getCookie, setCookies, removeCookies, setCookie } from "cookies-next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Link from "next/link";
import Axios from "axios";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import { useRouter } from "next/router";
import { useReducer, useEffect, useState, useRef } from "react";

function Signup() {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
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
    toast.error("Invail Email or Invite Code !", {
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

  const auth = getAuth();
  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );

      const user = userCredentials.user;
      await Axios.post("/api/auth/SignUp", {
        user,
      });
      toastifySuccess();

      router.push("/login");

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  // https://assets2.lottiefiles.com/packages/lf20_nc1bp7st.json
  return (
    <div className="w-full h-full">
      <Navbar />
      <ToastContainer />
      <div className="my-10 flex items-center justify-center">
        <div className="w-[880px] h-[540px] lg:drop-shadow-2xl drop-shadow-2xl flex items-center lg:justify-between justify-center bg-white rounded-xl">
          <div className="lg:flex hidden">
            <div className=" rounded-md flex items-center justify-center px-8">
              <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_nc1bp7st.json"
                className="  xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
              ></Player>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center lg:mr-20 lg:px-0 px-5">
            <form className="" onSubmit={loginSubmitHandler}>
              <p className="text-2xl font-bold mb-10">
                Create Account For Free!
              </p>
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
              <div className="flex flex-col mb-3">
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
              <button
                type="submit"
                className="border-2 border-black bg-black text-white px-4 py-2 mb-3 mt-4 sm:w-[320px] w-[260px] font-medium"
              >
                Sign up
              </button>
            </form>
            <div className="">
              <p className="font-medium">
                Already have an account?{" "}
                <Link className="font-bold underline" href="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Signup;
