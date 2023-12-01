/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";

const FullScreenLoader = ({ show, handleClose }) => {
  return (

      <Offcanvas show={show} onHide={handleClose} className="LoadingCanvas">
        <Offcanvas.Body className="Loading_Body">
          <div>
            <img src="./Image/Loading.gif" alt="" />
            <p>Loading your Interface...Please Wait!</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

  );
};

export default FullScreenLoader;
