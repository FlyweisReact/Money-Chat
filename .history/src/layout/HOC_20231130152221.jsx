/** @format */

import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const HOC = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(false);
    return (
      <>
        <div style={{ backgroundColor: "#f2f3f8" }}>
          <Navbar hamb={hamb} setHamb={setHamb} />
        </div>

        <section className="component_style">
          <Sidebar hamb={hamb} setHamb={setHamb} />
          <div
            className="h-[87%] child_component"
            style={{ overflowY: "auto" }}
          >
            {" "}
            <Wcomponenet />
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
