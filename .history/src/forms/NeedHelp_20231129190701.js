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


            <div className="Drop_Links">

                <div>
                    <span>Forgot Password</span>
                    <i class="fa-solid fa-caret-right"></i>
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
