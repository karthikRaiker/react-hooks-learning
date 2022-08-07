import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import UseEffectAfterRender from "../components/useEffect/UseEffectAfterRender";

function UseEffectExample() {
  return (
    <>
      <div className="UseEffectExample">
        <Link to="/">
          <span className="BackArrow">
            <FiArrowLeft />
          </span>
        </Link>
        <div className="Page-Heading">React useEffect Hooks (After Render)</div>
        <UseEffectAfterRender />
      </div>
    </>
  );
}

export default UseEffectExample;
