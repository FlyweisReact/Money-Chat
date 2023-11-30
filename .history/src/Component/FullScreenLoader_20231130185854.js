/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";

const FullScreenLoader = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} className="LoadingCanvas">
 
      <Offcanvas.Body>
 
        
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default FullScreenLoader;
