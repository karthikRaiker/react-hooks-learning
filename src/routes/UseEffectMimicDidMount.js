import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import MimicComponentWillUnMount from "../components/useEffect/MimicComponentWillUnMount";
import UseEffectSetInterval from "../components/useEffect/UseEffectSetInterval";

function UseEffectMimicDidMount() {
  return (
    <>
      <div className="UseStateCounter">
        <Link to="/">
          <span className="BackArrow">
            <FiArrowLeft />
          </span>
        </Link>
        <div className="Page-Heading">
          UseEffect Mimic componentDidMount and componentWillUnmount
        </div>
        <MimicComponentWillUnMount />
        <UseEffectSetInterval />
      </div>
    </>
  );
}

export default UseEffectMimicDidMount;
