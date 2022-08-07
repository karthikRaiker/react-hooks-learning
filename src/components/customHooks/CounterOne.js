import React from "react";
import useCounter from "../../customHooks/useCounter";

function CounterOne() {
  const [count, incrementCount, decrementCount, resetCount] = useCounter(
    25,
    15
  );
  return (
    <div className="Container">
      Count Value : {count}
      <button className="btn btn-width" onClick={incrementCount}>
        Increment
      </button>
      <button className="btn btn-width" onClick={decrementCount}>
        Decrement
      </button>
      <button className="btn btn-width" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}

export default CounterOne;
