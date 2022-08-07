import React, { useContext } from "react";
import { CounterContext } from "../../routes/UseReducerWithContext";

function ComponentD() {
  const counterContext = useContext(CounterContext);
  return (
    <div
      className="Container flex-column border"
      style={{ backgroundColor: "green" }}
    >
      ComponentD
      <div>count value in D : {counterContext.countStateD.countValue}</div>
      <button
        className="btn"
        onClick={() =>
          counterContext.countDispatchD({ type: "Increment", value: 1 })
        }
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => counterContext.countDispatchD({ type: "Reset" })}
      >
        Reset
      </button>
      <button
        className="btn"
        onClick={() =>
          counterContext.countDispatchD({ type: "Decrement", value: 1 })
        }
      >
        Decrement
      </button>
      {/* <div> */}
      <button
        className="btn"
        onClick={() =>
          counterContext.countDispatchD({ type: "Increment", value: 15 })
        }
      >
        Increment15
      </button>
      <button
        className="btn"
        onClick={() =>
          counterContext.countDispatchD({ type: "Decrement", value: 15 })
        }
      >
        Decrement15
      </button>
      {/* </div> */}
    </div>
  );
}

export default ComponentD;
