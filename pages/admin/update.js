import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Axios from "axios";
import { getCookie, setCookies, removeCookies, setCookie } from "cookies-next";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Update = () => {
  const [category, setCategory] = useState("");
  const [domain, setDomain] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const classes =
    " text-black border-b-2  text-base bg-inherit placeholder-[#333]  w-full h-full   block py-2.5 lg:px-9 xl:px-9 px-9 outline-0 focus:outline-0 ";
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
  const handleUpdate = async (e) => {
    e.preventDefault();
    const description = desc.split(".");
    await console.log(category, domain, name, image, description);
    await Axios.post(`/api/admin/update${domain}`, {
      category,
      domain,
      name,
      image,
      description,
    });
    toastifySuccess();
  };

  return (
    <div>
      {getCookie("add") ? (
        <div>
          <ToastContainer />
          <div className="mx-4  min-h-[90vh] mt-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
            <form className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              <div className="p-4 rounded-md flex items-center justify-center">
                <div className="newloginContainer ">
                  <div className="pt-8">
                    <form className="newLoginForm">
                      <div className="flex justify-between pr-[1.5rem] pt-1 pb-3">
                        <label className="text-xl text-white font-semibold">
                          Choose the Category
                        </label>
                      </div>
                      <select
                        className={classes}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="free">Free Courses</option>
                        <option value="free">Premium Courses</option>
                        {/* <option value="certification">Certification Courses</option>
                   <option value="testskills">Test Your Skills</option>
                   <option value="mentoring">Mentoring</option>
                   <option value="readlearn">Read & Learn</option> */}
                      </select>

                      <div className="flex justify-between pr-[1.5rem] pt-1 pb-3">
                        <label className="text-xl text-white font-semibold">
                          Choose Course Domain
                        </label>
                      </div>
                      <select
                        className={classes}
                        onChange={(e) => setDomain(e.target.value)}
                      >
                        <option value="Digital">Digital Marketing</option>
                        <option value="Data">Data Science</option>
                        <option value="Product">Product Management</option>
                        <option value="Buissness">Business Analytics</option>
                        <option value="Coding">Coding</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-md flex items-center justify-center">
                <div className="newloginContainer ">
                  <div className="pt-8">
                    <div className="newLoginForm">
                      <div className="flex justify-between pr-[1.5rem] pb-1">
                        <label className="text-xl text-white font-semibold ">
                          Course Name
                        </label>
                      </div>
                      <input
                        className={classes}
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Course Name"
                      />
                      <div className="flex justify-between pr-[1.5rem] pb-1">
                        <label className="text-xl text-white font-semibold ">
                          Banner Image
                        </label>
                      </div>
                      <input
                        className={classes}
                        type="text"
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="Enter Image URL"
                      />
                      <div className="flex justify-between pr-[1.5rem] pb-1">
                        <label className="text-xl text-white font-semibold ">
                          Description
                        </label>
                      </div>
                      <input
                        className={classes}
                        type="text"
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Enter Course Description"
                      />
                      <div className=" flex justify-center items-center pt-12 pb-3  ">
                        <div className=" border-2 text-white rounded px-2 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150">
                          <button type="submit" onClick={handleUpdate}>
                            Update Data
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center p-4">
          <div className="w-[400px] h-[400px]">
            <Player
              autoplay
              loop
              src="https://assets4.lottiefiles.com/private_files/lf30_17bvu2tk.json"
              className="h-[200px]"
            ></Player>
          </div>
        </div>
      )}
    </div>
  );
};

export default Update;
