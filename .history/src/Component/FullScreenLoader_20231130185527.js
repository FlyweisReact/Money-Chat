/** @format */

import React from "react";

const FullScreenLoader = ({show , handleClose}) => {
  return (
    <Offcanvas show={show} onHide={handleClose} style={{ width: "100%" }}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default FullScreenLoader;
