/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

const Regestration = () => {
    const [ step , setStep ] = useState(1)

  return (
    <div className="Login_screen">
      <form className="Login_Container ">
        <img src={logo} alt="" className="logo" />

        <div className="progress_bar">
            <div className="colored"></div>
        </div>

        <div className="description">
          <h6>New Registration! </h6>
          <p>Please provide the following Information to Continue!</p>
        </div>

        <div className="input_container special">
          <div className="input_group mt-5">
            <img src="./Image/1.png" alt="" />
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="input_group mt-3">
            <img src="./Image/5.png" alt="" />
            <input type="text" placeholder="Contact Number" />
          </div>
          <div className="input_group mt-3">
            <img src="./Image/6.png" alt="" />
            <input type="text" placeholder="Email Address" />
          </div>
          <div className="input_group mt-3">
            <img src="./Image/7.png" alt="" />
            <input type="text" placeholder="New  Password" />
          </div>
          <div className="input_group mt-3">
            <img src="./Image/8.png" alt="" />
            <input type="text" placeholder="Re - Enter Password" />
          </div>
        </div>

        <div className="button_container">
          <button>CONTINUE</button>
          <div className="cancel">
            <img src="./Image/9.png" alt="" />
            <Link to="/">Cancel</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Regestration;
