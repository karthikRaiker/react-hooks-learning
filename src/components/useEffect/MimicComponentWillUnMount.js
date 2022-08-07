import React, { useState } from "react";
import MimicComponentDidMount from "./MimicComponentDidMount";

function MimicComponentWillUnMount() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="Container flex-column White">
        Mimic componentDidMount and ComponentWillUnMount
      </div>
      <button className="btn btn-width" onClick={() => setToggle(!toggle)}>
        Toggle Event Listener
      </button>
      {toggle && <MimicComponentDidMount />}
    </>
  );
}

export default MimicComponentWillUnMount;
