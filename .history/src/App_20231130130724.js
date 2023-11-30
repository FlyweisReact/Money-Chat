/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./CSS/style.css";
import ForgetPassword from "./forms/ForgetPassword";

import Login from "./forms/Login";
import NeedHelp from "./forms/NeedHelp";
import Regestration from "./forms/Regestration";
import Verify from "./forms/Verify";

function App() {
  return (
    <>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Regestration />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/need_help" element={<NeedHelp />} />
        <Route path="/forget_password" element={<ForgetPassword />} />


        <Route path="/transaction" element={<Trasan}
      </Routes> 
    </>
  );
}

export default App;
