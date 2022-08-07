import React from "react";
import ComponentF from "./ComponentF";

function ComponentE() {
  return (
    <div
      className="Container flex-column border"
      style={{ backgroundColor: "white", color: "#333" }}
    >
      ComponentE <ComponentF />
    </div>
  );
}

export default ComponentE;
