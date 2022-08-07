import React, { useReducer } from "react";

const initialState = 0;
const reduce = (currentState, action) => {
  switch (action) {
    case "Increment":
      return currentState + 1;
    case "Reset":
      return initialState;
    case "Decrement":
      return currentState - 1;
    default:
      return currentState;
  }
};

function CounterMultipleReducer() {
  const [count, dispatch] = useReducer(reduce, initialState);
  const [count2, dispatch2] = useReducer(reduce, initialState);
  return (
    <div className="Container flex-column border">
      <div className="center">CountUseReducer</div>
      <div className="center">{count}</div>
      <div className="Container">
        <button className="btn btn-width" onClick={() => dispatch("Increment")}>
          Increment
        </button>
        <button className="btn btn-width" onClick={() => dispatch("Reset")}>
          Reset
        </button>
        <button className="btn btn-width" onClick={() => dispatch("Decrement")}>
          Decrement
        </button>
      </div>

      <div className="center">{count2}</div>
      <div className="Container">
        <button
          className="btn btn-width"
          onClick={() => dispatch2("Increment")}
        >
          Increment
        </button>
        <button className="btn btn-width" onClick={() => dispatch2("Reset")}>
          Reset
        </button>
        <button
          className="btn btn-width"
          onClick={() => dispatch2("Decrement")}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterMultipleReducer;
