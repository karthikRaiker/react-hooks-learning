import React from "react";
import UseContextB from "./UseContextB";

function UseContextA() {
  return (
    <div className="Container flex-column">
      <div className="center">UseContextA</div>
      <UseContextB />
    </div>
  );
}

export default UseContextA;
