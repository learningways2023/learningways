import React from "react";
import SideNavbar from "../../components/sidebar";
const Feedback = () => {
  const classes =
    " text-black border-b-2  text-base bg-inherit placeholder-[#333]  w-full h-full   block py-2.5 lg:px-9 xl:px-9 px-9 outline-0 focus:outline-0 ";

  return (
    <div className="md:flex">
      <SideNavbar />
      <div className=" min-h-[107vh] m-0 mt-4  md:m-4   w-[100vw]   rounded-sm">
        <div className="text-black p-4 font-semibold flex justify-center  items-center text-center xl:text-[38px] lg:text-[30px] sm:text-[30px] text-[20px] ">
          Feel Free to Send Your Feed back
        </div>
        <div>
          <div className=" p-4 rounded-md flex items-center justify-center pb-9">
            <div className="newloginContainer bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md drop-shadow-2xl">
              <div className="card-col">
                <form
                  className="newLoginForm m-4 py-7"
                  action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_QJ0517TP7rdLkVNpYs49aiK3qiH__gMYL8MdvoFop15jEw/formResponse"
                >
                  <label className="text-lg font-medium pb-1">Name</label>
                  <input
                    className={classes}
                    type="text"
                    name="entry.2005620554"
                    placeholder="Enter your Name"
                  />

                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg font-medium ">Email</label>
                  </div>
                  <input
                    className={classes}
                    type="email"
                    name="entry.1045781291"
                    placeholder="Enter your Email"
                  />
                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg font-medium ">Phone No.</label>
                  </div>
                  <input
                    className={classes}
                    type="number"
                    name="entry.1166974658"
                    placeholder="Enter your Mobile Number"
                  />
                  <div className="flex justify-between pr-[1.5rem] pb-1">
                    <label className="text-lg font-medium ">Interest</label>
                  </div>
                  <input
                    className={classes}
                    type="text"
                    name="entry.1166974658"
                    placeholder="Type Your Interest"
                  />

                  <div className=" flex justify-center items-center pt-7 pb-3  ">
                    <div
                      className=" border-2 text-white rounded px-2 py-1 text-base  cursor-pointer font-semibold bg-black border-black duration-150"
                      onClick={function showModal() {
                        setModal(true);
                      }}
                    >
                      Get In Touch With Us !
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
