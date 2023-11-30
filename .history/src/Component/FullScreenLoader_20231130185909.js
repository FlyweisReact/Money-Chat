/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";

const FullScreenLoader = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} className="LoadingCanvas">
      <Offcanvas.Body>
        <img src="./Image/Loading.gif" alt="" />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default FullScreenLoader;
