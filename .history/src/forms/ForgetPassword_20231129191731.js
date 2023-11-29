/** @format */

import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

const ForgetPassword = () => {
  return (
    <>
      <div className="Login_screen">
        <form className="Login_Container ">
          <img src={logo} alt="" className="logo" />

          <div className="description">
            <h6>Forgot Password </h6>
            <p>
              Please Enter your User ID here & we’ll email you a link to reset
              your password!
            </p>
          </div>

          <div className="input_container">
            <div className="input_group mt-5">
              <img src="./Image/1.png" alt="" />
              <input type="text" placeholder="USER ID" name="userId" />
            </div>
          </div>

          <button className="login_btn">SEND LINK</button>

          <div
            className="button_container "
            style={{ justifyContent: "center" }}
          >
            <div
              className="cancel"
              style={{ maxWidth: "100%", justifyContent: "center" }}
            >
              <img src="./Image/9.png" alt="" />
              <Link to="/">Go Back</Link>
            </div>
          </div>
         
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
