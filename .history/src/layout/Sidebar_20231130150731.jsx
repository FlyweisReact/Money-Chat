/** @format */

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation()

  console.log(location.pathname)

  const nav = [
    {
      img: "./Image/14.svg",
      link: "/dashboard ",
      name: "Transaction Monitoring",
      activeImg: "./Image/Monitoring.svg",
    },
    {
      link: "/Product",
      name: "Analytics ",
    },

    {
      link: "/service",
      name: "Documentation & Resources",
    },
    {
      link: "/gallery",
      name: "Security & Compliance",
    },
    {
      link: "/getblog",
      name: "Financial Overview",
    },
    {
      link: "/privacy-policy",
      name: "Recipient’s Management",
    },
    {
      link: "/terms",
      name: "Communication Tools",
    },
    {
      link: "/brand",
      name: "Review Interface",
    },
  ];

  const logOut = () => {
    localStorage.clear();
    navigate("/");
    toast.success("Logged Out");
  };

  function ImgFinder (link , i ) {
    if (link === location.pathname) {
      return i.img
    }

  }

  return (
    <>
      <aside className="sidebar">
        <nav className="py-6">
          <ul>
            {nav.map((nav) => {
              return (
                <Link
                  to={nav.link}
                  key={nav.name}
                  className=""
                  style={{ textDecoration: "none", textTransform: "uppercase" }}
                >
                  <li>

                    <img src={nav.img} alt="" />
                    <span className="link"> {nav.name}</span>
                  </li>
                </Link>
              );
            })}
          </ul>

          <span
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
            onClick={() => logOut()}
            style={{ color: "#FFF", textTransform: "uppercase" }}
          ></span>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
