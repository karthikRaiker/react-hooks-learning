import React, { useContext } from "react";
import { CounterContext } from "../../routes/UseReducerWithContext";

function ComponentF() {
  const counterContext = useContext(CounterContext);
  return (
    <div
      className="Container flex-column border"
      style={{ backgroundColor: "green" }}
    >
      ComponentF
      <div>count value in F : {counterContext.countStateF.countValue}</div>
      <button
        className="btn"
        onClick={() =>
          counterContext.countDispatchF({ type: "Increment", value: 1 })
        }
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => counterContext.countDispatchF({ type: "Reset" })}
      >
        Reset
      </button>
      <button
        className="btn"
        onClick={() =>
          counterContext.countDispatchF({ type: "Decrement", value: 1 })
        }
      >
        Decrement
      </button>
    </div>
  );
}

export default ComponentF;
