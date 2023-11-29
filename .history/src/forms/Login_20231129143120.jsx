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
      <div className="Login_screen">
        <form className="Login_Container ">
          <img src={logo} alt="" className="logo" />

          <div className="description">
            <h6>Welcome Back! </h6>
            <p>Please Enter you credentials to Sign In</p>
          </div>

          <div className="input_group mt-5">
            <img src="./Image/1.png" alt="" />
            <input type="text" placeholder="USER ID" />
          </div>

          <div className="input_group mt-4">
            <img src="./Image/2.png" alt="" style={{ width: "30px" }} />
            <input type="password" placeholder="PASSWORD" />
          </div>

          <button className="login_btn">SIGN IN</button>

        <div className="create_new">
        <div className="item">
          <img src="./Image/3.png" alt='' />
        </div>

        </div>

        </form>
      </div>
    </>
  );
};

export default Login;
