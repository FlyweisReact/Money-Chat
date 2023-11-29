/** @format */

import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

const NeedHelp = () => {
  return (
    <>
      <div className="Login_screen">
        <form className="Login_Container ">
          <img src={logo} alt="" className="logo" />

          <div className="description">
            <h6>Need Help? </h6>
            <p>
              Please Select your topic in which you might require our
              assistance!
            </p>
          </div>

          <div className="input_container">
            <div className="input_group mt-5">
              <img src="./Image/1.png" alt="" />
              <input type="text" placeholder="USER ID" />
            </div>

            <div className="input_group mt-4">
              <img src="./Image/2.png" alt="" style={{ width: "30px" }} />
              <input type="password" placeholder="PASSWORD" />
            </div>
          </div>

          <div
            className="button_container "
            style={{ justifyContent: "center" }}
          >
            <div
              className="cancel"
              style={{ maxWidth: "100%", justifyContent: "center" }}
            >
              <img src="./Image/9.png" alt="" />
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NeedHelp;
