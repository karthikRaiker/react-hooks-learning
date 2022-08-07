import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import FetchData from "../components/useEffect/FetchData";

function FetchingDataUseEffect() {
  return (
    <>
      <div className="UseStateCounter">
        <Link to="/">
          <span className="BackArrow">
            <FiArrowLeft />
          </span>
        </Link>
        <div className="Page-Heading">Fetching Data Using useEffect Hooks</div>
        <FetchData />
      </div>
    </>
  );
}

export default FetchingDataUseEffect;
