/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";

const FullScreenLoader = ({ show, handleClose }) => {
  return (
    <div
      className={`Loading_canvas_container ${
        show ? "offcanvas-backdrop-show" : ""
      }`}
      style={{ background: "#fff", opacity: show ? 0.8 : 1 }}
    >
      <p>Hello This is Canvas</p>
      <Offcanvas show={show} onHide={handleClose} className="LoadingCanvas">
        <Offcanvas.Body className="Loading_Body">
          <div>
            <img src="./Image/Loading.gif" alt="" />
            <p>Loading your Interface...Please Wait!</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default FullScreenLoader;
