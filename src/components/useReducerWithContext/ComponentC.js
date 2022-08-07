import React from "react";
import ComponentE from "./ComponentE";

function ComponentC() {
  return (
    <div
      className="Container flex-column border"
      style={{ backgroundColor: "orange" }}
    >
      ComponentC
      <ComponentE />
    </div>
  );
}

export default ComponentC;
