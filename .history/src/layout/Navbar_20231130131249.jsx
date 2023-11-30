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
      </div>
    </>
  );
};

export default Navbar;
