import React, { useContext } from "react";
import { CounterContext } from "../../routes/UseReducerWithContext";

function ComponentA() {
  const counterContext = useContext(CounterContext);

  return (
    <div
      className="Container flex-column border"
      style={{ backgroundColor: "orange" }}
    >
      ComponentA
      <div>count value in A : {counterContext.countStateParent.countValue}</div>
      <button
        className="btn"
        onClick={() =>
          counterContext.countDispatchParent({ type: "Increment", value: 1 })
        }
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => counterContext.countDispatchParent({ type: "Reset" })}
      >
        Reset
      </button>
      <button
        className="btn"
        onClick={() =>
          counterContext.countDispatchParent({ type: "Decrement", value: 1 })
        }
      >
        Decrement
      </button>
    </div>
  );
}

export default ComponentA;
