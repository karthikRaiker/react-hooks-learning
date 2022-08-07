import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import ClassTimer from "../components/useRef/ClassTimer";
import HighlightInput from "../components/useRef/HightlightInput";
import HooksTimer from "../components/useRef/HooksTimer";

function UseRef() {
  return (
    <>
      <div className="UseRef">
        <Link to="/">
          <span className="BackArrow">
            <FiArrowLeft />
          </span>
        </Link>
        <div className="Page-Heading">UseRef Hook Demo</div>
        <HighlightInput />
        <ClassTimer />
        <HooksTimer />
      </div>
    </>
  );
}

export default UseRef;
