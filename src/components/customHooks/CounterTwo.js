import React from "react";
import useCounter from "../../customHooks/useCounter";

function CounterTwo() {
  const [count, incrementCount, decrementCount, resetCount] = useCounter(0, 5);

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

export default CounterTwo;
