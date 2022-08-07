import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import FetchUseReducer from "../components/useReducerWithFetch/FetchUseReducer";
import NormalFetch from "../components/useReducerWithFetch/NormalFetch";

function FetchDataUseReducer() {
  return (
    <>
      <div className="UseStateCounter">
        <Link to="/">
          <span className="BackArrow">
            <FiArrowLeft />
          </span>
        </Link>
        <div className="Page-Heading">Fetching Data Using useReducer Hooks</div>
        {/* <NormalFetch /> */}
        <FetchUseReducer />
      </div>
    </>
  );
}

export default FetchDataUseReducer;
