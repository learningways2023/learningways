import React from "react";
import Navbar from "../components/navbar";

import login from "../public/login.png";
import Image from "next/image";
import eyeoff from "../public/eyeoff.svg";
import Footer from "../components/footer";
import eyeon from "../public/eyeon.svg";
import { getCookie, setCookies, removeCookies, setCookie } from "cookies-next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Link from "next/link";
import Axios from "axios";
import { useRouter } from "next/router";
import { useReducer, useEffect, useState, useRef } from "react";

function Login() {
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
      <section className="min-h-screen new flex justify-center items-center">
        <div className="px-6 h-full text-gray-800">
          <div className=" flex xl:justify-center lg:justify-center justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-8/12 md:w-9/12  new1">
              <Image src={login} />
            </div>
            <div className="newloginContainer">
              <div className="newLoginTop flex items-center justify-center">
                <FormHeader title="LOG IN" />
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
                  <label className="text-lg font-medium ">Password</label>
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
                  placeholder="Enter your password"
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
                <div className="formBottom ">
                  <label>
                    <input
                      style={{ marginRight: "6px" }}
                      className="form-check-input appearance-none h-4 w-4 border-2 border-gray-300 rounded-sm bg-white checked:bg-[#085464] checked:border-[#085464] focus-within:hidden transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <span className="text-base font-medium">Remember me</span>
                  </label>
                  <label
                    className="text-gray-500 text-base font-medium cursor-pointer"
                    onClick={function handleForgot() {
                      router.push("/forgotPassword");
                    }}
                  >
                    Forgot password
                  </label>
                </div>
                <div className=" flex justify-center items-center">
                  <div className="getstarted gt text-[18px] text-white py-2 px-7 rounded-md flex justify-center items-center">
                    <button type="submit" className="font-medium">
                      Login
                    </button>
                  </div>
                </div>

                <div className="signDesc" style={{ margin: "1.5rem auto" }}>
                  <p className="font-medium">
                    Don't have an account?{"    "}
                    <span className="text-[#085464] ml-2  font-medium">
                      <Link href="/signup">Signup here</Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Login;
