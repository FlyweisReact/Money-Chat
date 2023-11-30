/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";

const FullScreenLoader = ({ show, handleClose }) => {
  return (
    <div className="Loading_canvas_container" style={{ background: "#fff" }}>
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
