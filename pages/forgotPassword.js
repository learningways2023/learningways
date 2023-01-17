import React from "react";
import Navbar from "../components/navbar";

import login from "../public/signup.png";
import Image from "next/image";
import eyeoff from "../public/eyeoff.svg";
import Footer from "../components/footer";
import eyeon from "../public/eyeon.svg";
import { getCookie, setCookies, removeCookies, setCookie } from "cookies-next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Link from "next/link";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import Axios from "axios";
import { useRouter } from "next/router";
import { useReducer, useEffect, useState, useRef } from "react";

function ForgotPassword() {
  const FormHeader = (props) => (
    <h2 className="font-[500] text-[#085464] xl:text-[40px] lg:text-[32px] sm:text-[32px] text-[20px]">
      {props.title}
    </h2>
  );
  console.log(getCookie("test"));
  const classes =
    "border-2 border-[#085464] text-gray-900 text-base font-medium rounded-md focus:ring-[#085464] focus:border-[#085464]  block p-2.5 ";
  const emailRef = useRef();
  const passRef = useRef();
  const [formValid, setFormValid] = useState(false);
  const [pass, setPass] = useState("password");
  const [update, setUpdate] = useState(false);
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

  const emailReducer = (state, action) => {
    switch (action.type) {
      case "input":
        return {
          value: action.val,
          isValid: action.val.includes("@"),
          // isValid: true,
        };
      case "validate":
        return {
          value: state.value,
          isValid: state.value.includes("@"),
          // isValid: true,
        };
      default:
        return { value: "", isValid: false };
    }
  };
  const passReducer = (state, action) => {
    switch (action.type) {
      case "input":
        return { value: action.val, isValid: action.val.length > 5 };
      case "validate":
        return { value: state.value, isValid: state.value.length > 5 };
      default:
        return { value: "", isValid: false };
    }
  };
  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: true,
  });
  const [password, dispatchPass] = useReducer(passReducer, {
    value: "",
    isValid: true,
  });
  const { isValid: emailValid } = email;
  const { isValid: passValid } = password;
  useEffect(() => {
    const loginCheck = setTimeout(() => {
      setFormValid(emailValid && passValid);
    }, 500);
    return () => {
      clearTimeout(loginCheck);
    };
  }, [emailValid, passValid]);
  const loginSubmitHandler = async (e) => {
    console.log("e");
    // e.preventDefault();
    // if (formValid) {

    //   await Axios.post("/api/UserCredit/Login", {
    //     Email: email.value,
    //     Password: password.value,
    //   }).then((data) => {
    //     setUpdate(data.data);

    //     if (data.data === null) {
    //       console.log(data.data);
    //       toastifyFailure();
    //     } else {
    //       console.log(data.data);
    //       setCookie("user", data.data.User_Id, { maxAge: 10000 });
    //       toastifySuccess();
    //       router.push(`/dashboard/${data.data.User_Id}`);
    //     }
    //   });
    // }
    // if (!emailValid) {
    //   emailRef.current.focus();
    //   return;
    // }
    // if (!passValid) {
    //   passRef.current.focus();
    // }
  };
  const emailChangeHandler = (e) => {
    dispatchEmail({ type: "input", val: e.target.value });
  };
  const passwordChangeHandler = (e) => {
    dispatchPass({ type: "input", val: e.target.value });
  };
  const emailBlurHandler = () => {
    dispatchEmail({ type: "validate" });
  };
  const passBlurHandler = () => {
    dispatchPass({ type: "validate" });
  };
  const emailClass = `${
    emailValid ? " " : "focus:ring-red-500 focus:border-red-500"
  }`;
  const passClass = `${
    passValid ? " " : "focus:ring-red-500 focus:border-red-500"
  }`;
  return (
    <div>
      <Navbar isLogedIn={false} />
      <div className="about_hero1 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div className=" rounded-md flex items-center justify-center px-8">
            <Player
              autoplay
              loop
              src="https://assets5.lottiefiles.com/packages/lf20_dneo0c5x.json"
              className="  xl:pt-0 xl:pb-0 lg:pt-0 lg:pb-0 sm:pt-5 sm:pb-10"
            ></Player>
          </div>
          <div className=" p-4 rounded-md flex items-center justify-center">
            <div className="pt-7 newloginContainer">
              <div className="newLoginTop flex items-center justify-center">
                <FormHeader title="Forgot Password" />
              </div>
              <ToastContainer />
              <form className="newLoginForm" onSubmit={loginSubmitHandler}>
                <label className="text-lg font-medium pb-3">Email</label>
                <input
                  className={classes + emailClass}
                  type="email"
                  placeholder="Enter your email"
                  onChange={emailChangeHandler}
                  ref={emailRef}
                  onBlur={emailBlurHandler}
                  required={true}
                />
                {!emailValid && (
                  <p
                    style={{
                      fontSize: "16px",
                      position: "relative",
                      bottom: "10px",
                      left: "10px",
                      color: "red",
                    }}
                  >
                    Enter a valid email
                  </p>
                )}
                <div className="flex justify-between pr-[1.5rem]">
                  <label className="text-lg font-medium ">New Password</label>
                  <p
                    style={{ position: "relative", top: "2.9rem" }}
                    className="cursor-pointer"
                    onClick={function handlePass() {
                      pass === "password"
                        ? setPass("text")
                        : setPass("password");
                    }}
                  >
                    {pass === "password" ? (
                      <Image src={eyeoff} />
                    ) : (
                      <Image src={eyeon} />
                    )}
                  </p>
                </div>
                <input
                  className={classes + passClass}
                  type={pass}
                  placeholder="Enter your New password"
                  onChange={passwordChangeHandler}
                  ref={passRef}
                  onBlur={passBlurHandler}
                  required={true}
                />
                {!passValid && (
                  <p
                    style={{
                      fontSize: "16px",
                      position: "relative",
                      bottom: "10px",
                      left: "10px",
                      color: "red",
                    }}
                  >
                    Enter atleast 6 characters
                  </p>
                )}
                <div className="flex justify-between pr-[1.5rem]">
                  <label className="text-lg font-medium ">
                    Confirm New Password
                  </label>
                  <p
                    style={{ position: "relative", top: "2.9rem" }}
                    className="cursor-pointer"
                    onClick={function handlePass() {
                      pass === "password"
                        ? setPass("text")
                        : setPass("password");
                    }}
                  >
                    {pass === "password" ? (
                      <Image src={eyeoff} />
                    ) : (
                      <Image src={eyeon} />
                    )}
                  </p>
                </div>
                <input
                  className={classes + passClass}
                  type={pass}
                  placeholder="Confirm your New password"
                  onChange={passwordChangeHandler}
                  ref={passRef}
                  onBlur={passBlurHandler}
                  required={true}
                />
                {!passValid && (
                  <p
                    style={{
                      fontSize: "16px",
                      position: "relative",
                      bottom: "10px",
                      left: "10px",
                      color: "red",
                    }}
                  >
                    Enter atleast 6 characters
                  </p>
                )}

                <div className=" flex justify-center items-center pt-9 ">
                  <div className="getstarted gt text-[18px] text-white py-2 px-9 rounded-md flex justify-center items-center">
                    <button type="submit" className="font-medium">
                      Reset Password
                    </button>
                  </div>
                </div>

                
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ForgotPassword;
