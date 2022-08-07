import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 5,
};
const reduce = (currentState, action) => {
  switch (action.type) {
    case "Increment":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    case "Reset":
      return initialState;
    case "Decrement":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value,
      };
    case "IncrementSecond":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "DecrementSecond":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };
    default:
      return currentState;
  }
};

function CountComplexStateReducer() {
  const [count, dispatch] = useReducer(reduce, initialState);
  return (
    <div className="Container flex-column border">
      {/* <div className="center">CountUseReducer Complex State Management</div> */}
      <div>First Counter - {count.firstCounter}</div>
      <div className="Container flex-column">
        <button
          className="btn btn-width"
          onClick={() => dispatch({ type: "Increment", value: 1 })}
        >
          Increment
        </button>
        <button
          className="btn btn-width"
          onClick={() => dispatch({ type: "Reset" })}
        >
          Reset
        </button>
        <button
          className="btn btn-width"
          onClick={() => dispatch({ type: "Decrement", value: 1 })}
        >
          Decrement
        </button>
        <button
          className="btn btn-width"
          onClick={() => dispatch({ type: "Increment", value: 5 })}
        >
          IncrementFive
        </button>
        <button
          className="btn btn-width"
          onClick={() => dispatch({ type: "Decrement", value: 5 })}
        >
          DecrementFive
        </button>
      </div>
      <div className="Container flex-column">
        <div>Second Counter - {count.secondCounter}</div>
        <button
          className="btn btn-width"
          onClick={() => dispatch({ type: "IncrementSecond", value: 1 })}
        >
          IncrementSecondCounter
        </button>

        <button
          className="btn btn-width"
          onClick={() => dispatch({ type: "DecrementSecond", value: 1 })}
        >
          DecrementSecondCounter
        </button>
      </div>
    </div>
  );
}

export default CountComplexStateReducer;
