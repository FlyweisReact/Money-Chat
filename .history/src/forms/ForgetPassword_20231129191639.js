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
              <input type="text" placeholder="USER ID" name='userId' />
            </div>
          </div>

          <button className="login_btn">SEND LINK</button>

          <div className="create_new">
            <div className="item">
              <img src="./Image/3.png" alt="" />
              <Link to="/need_help">
                <span>Need Help?</span>
              </Link>
            </div>
            <div className="item">
              <img src="./Image/4.png" alt="" />
              <Link to="/register">
                <span>Create New Account</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
