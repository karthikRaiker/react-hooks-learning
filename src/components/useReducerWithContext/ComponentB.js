import React from "react";
import ComponentD from "./ComponentD";

function ComponentB() {
  return (
    <div
      className="Container flex-column border"
      style={{ backgroundColor: "orange" }}
    >
      ComponentB
      <ComponentD />
    </div>
  );
}

export default ComponentB;
