/** @format */

import React, { useState } from "react";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import logo from "../Images/logo.png";

const Login = () => {
  const [pass, setPass] = useState(false);
  const [inputpass, setInputpass] = useState(false);
  return (
    <>
      <div
        className="w-full h-screen flex flex-col justify-center items-center  Login_screen"
       >
        <form className="shadow-2xl w-96 mx-3 sm:mx-0 sm:w-4/5 md:w-4/6 lg:w-4/5 xl:w-1/2 flex flex-col items-center bg-white p-5 md:py-10">
          <img src={logo} alt="" className="logo" />
          <section className="py-2">
            <div className="shadow-2xl sm:w-96 border border-[rgb(241,146,46)] space-x-4 flex items-center w-64  p-2 rounded-md">
              <input
                type="email"
                placeholder="admin@gmail.com"
                required
                className="outline-none px-0.5  bg-transparent tracking-wider w-full"
              />
              <AiOutlineMail className="text-xl " />
            </div>
            <div className="shadow-2xl sm:w-96 border border-[rgb(241,146,46)] space-x-4 flex items-center w-64  p-2 rounded-md mt-3">
              <input
                type={inputpass ? "text" : "password"}
                placeholder="password"
                name="password"
                required
                className="outline-none px-0.5  bg-transparent tracking-wider w-full  "
              />

              <span
                onClick={() => {
                  setPass(!pass);
                  setInputpass(!inputpass);
                }}
                className="text-xl cursor-pointer hover:scale-90 "
              >
                {pass ? <VscEyeClosed /> : <VscEye />}
              </span>
            </div>

            <button type="submit" className="EcommerceAdminLogin">
              Log In
            </button>
          </section>
        </form>
      </div>
    </>
  );
};

export default Login;
