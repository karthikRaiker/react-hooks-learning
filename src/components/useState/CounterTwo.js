import React, { useState } from "react";

function CounterTwo() {
  const initialState = 0;
  const [count, setCount] = useState(0);

  const incrementFiveTimes = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };

  return (
    <>
      <div className="Container flex-column">
        <div style={{ textAlign: "center" }} className="White">
          Count value {count}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0.6rem",
          }}
        >
          <button
            className="btn "
            onClick={() => setCount((prevState) => prevState + 1)}
          >
            Increment
          </button>
          <button className="btn " onClick={() => setCount(initialState)}>
            Reset
          </button>
          <button
            className="btn "
            onClick={() => setCount((prevState) => prevState - 1)}
          >
            Decrement
          </button>
          <button className="btn " onClick={incrementFiveTimes}>
            Increment 5 times
          </button>
        </div>
      </div>
    </>
  );
}

export default CounterTwo;
