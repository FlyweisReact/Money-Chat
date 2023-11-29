/** @format */

import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

const Regestration = () => {
  return (
    <div className="Login_screen">
      <form className="Login_Container ">
        <img src={logo} alt="" className="logo" />

        <div className="description">
          <h6>New Registration! </h6>
          <p>Please provide the following Information to Continue!</p>
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

        <button className="login_btn">SIGN IN</button>

        <div className="create_new">
          <div className="item">
            <img src="./Image/3.png" alt="" />
            <span>Need Help?</span>
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
  );
};

export default Regestration;
