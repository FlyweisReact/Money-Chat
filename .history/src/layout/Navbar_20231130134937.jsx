/** @format */
import logo from "../Images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search_bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="search" />
        </div>

        <div className="side_div">
        <img src="./Image/13.png" alt='' />

        <div>
          <img src='./Image/12.png' alt='' />
          <div>
            <p className="">Dave Smith</p>
          </div>
        </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
