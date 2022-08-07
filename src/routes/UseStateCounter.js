import React from "react";
import Counter from "../components/useState/Counter";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import CounterTwo from "../components/useState/CounterTwo";
import UseHooksWithObject from "../components/useState/UseHooksWithObject";
import UseHooksWithArray from "../components/useState/UseHooksWithArray";

function UseStateCounter() {
  return (
    <>
      <div className="UseStateCounter">
        <Link to="/">
          <span className="BackArrow">
            <FiArrowLeft />
          </span>
        </Link>
        <div className="Page-Heading">Counter App Using React Hooks</div>
        <Counter />
        <div className="Page-Heading border-top">
          React Hooks Using Previous State
        </div>
        <CounterTwo />
        <div className="Page-Heading border-top">
          React Hooks Handling Object
        </div>
        <UseHooksWithObject />
        <div className="Page-Heading border-top">
          React Hooks Handling Array
        </div>
        <UseHooksWithArray />
      </div>
    </>
  );
}

export default UseStateCounter;
