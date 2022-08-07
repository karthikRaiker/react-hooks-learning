import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import CountComplexStateReducer from "../components/useReducer/CountComplexStateReducer";
import CounterMultipleReducer from "../components/useReducer/CounterMultipleReducer";
import CountUseReducer from "../components/useReducer/CountUseReducer";

function UseReducerExample() {
  return (
    <>
      <div className="UseReducerExample">
        <Link to="/">
          <span className="BackArrow">
            <FiArrowLeft />
          </span>
        </Link>
        <div className="Page-Heading">React useReducer Hook</div>
        <CountUseReducer />
        <div className="Page-Heading">
          CountUseReducer Complex State Management
        </div>
        <CountComplexStateReducer />
        <div className="Page-Heading">Counter Multiple useReducer</div>
        <CounterMultipleReducer />
      </div>
    </>
  );
}

export default UseReducerExample;
