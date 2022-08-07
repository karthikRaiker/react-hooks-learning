import React, { useMemo, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

function UseMemo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 990000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <>
      <div className="UseMemo">
        <Link to="/">
          <span className="BackArrow">
            <FiArrowLeft />
          </span>
        </Link>
        <div className="Page-Heading">
          UseMemo Hook Demo (used for performance optimization)
        </div>
        <div>
          <button className="btn btn-width" onClick={incrementOne}>
            IncrementOne - {counterOne}
          </button>
          <span className="White">{isEven ? "Even" : "Odd"}</span>
        </div>
        <div>
          <button className="btn btn-width" onClick={incrementTwo}>
            IncrementTwo - {counterTwo}
          </button>
        </div>
      </div>
    </>
  );
}

export default React.memo(UseMemo);
