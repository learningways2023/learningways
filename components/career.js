import React from "react";
import { useEffect, useRef, useState } from "react";
import contact from "../public/career.png";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Career = () => {
  const [user, setUser] = useState(null);
  const [email_Id, setEmail_Id] = useState(null);
  const [message, setMessage] = useState(null);
  const [name, setName] = useState(null);
  const toastifySuccess = () => {
    toast.success("Mail Sent !", {
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
  const classes =
    "border border-white text-gray-900 text-white bg-[#085464] text-lg font-normal rounded-md focus:ring-white focus:border-white block p-2.5 ";
  const form = useRef();

  const FormHeader = (props) => (
    <h2
      id="headerTitle"
      className="font-[500] text-[#fff] xl:text-[40px] lg:text-[32px] sm:text-[32px] text-[20px]"
    >
      {props.title}
    </h2>
  );
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      <div className="py-9 w-full rounded-md flex items-center justify-center">
        <ToastContainer />
        <div className="newloginContainer px-6 pb-2">
          <div className="newLoginTop flex items-center justify-center pb-4">
            <FormHeader title="WORK WITH US" />
          </div>
          <form
            className="newLoginForm text-white"
            ref={form}
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdC8fyByD40L1JY1TK0KRuJOkG597BrkF-yJ2jY46RVN5-sfA/formResponse"
            method="POST"
          >
            <label className="text-lg font-medium py-3">Name</label>
            <input
              className={classes}
              type="text"
              name="entry.2005620554"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="text-lg font-medium py-3">Email</label>
            <input
              className={classes}
              type="email"
              name="entry.2005620554"
              value={email_Id}
              placeholder="Enter your email"
              onChange={(e) => setEmail_Id(e.target.value)}
            />
            <label className="text-lg font-medium py-3">
              Upload Your Resume
            </label>
            <input
              className={classes}
              type="file"
              name="entry.1045781291"
              value={email_Id}
              placeholder="Select file"
            />

            <div id="button" className="pt-5 flex justify-center items-center">
              <div className="log px-7 py-2">
                <button type="submit" onClick={toastifySuccess}>
                  Connect With Us !
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image src={contact} />
      </div>
    </div>
  );
};

export default Career;
