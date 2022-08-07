import React, { useReducer } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import ComponentA from "../components/useReducerWithContext/ComponentA";
import ComponentB from "../components/useReducerWithContext/ComponentB";
import ComponentC from "../components/useReducerWithContext/ComponentC";

export const CounterContext = React.createContext();

const initialCount = {
  countValue: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, countValue: state.countValue + action.value };
    case "Decrement":
      return { ...state, countValue: state.countValue - action.value };
    case "Reset":
      return initialCount;
    default:
      return state;
  }
};

function UseReducerWithContext() {
  const [countParent, dispatchParent] = useReducer(reducer, initialCount);
  const [countD, dispatchD] = useReducer(reducer, initialCount);
  const [countF, dispatchF] = useReducer(reducer, initialCount);

  return (
    <>
      <div className="UseStateCounter">
        <Link to="/">
          <span className="BackArrow">
            <FiArrowLeft />
          </span>
        </Link>
        <div className="Page-Heading">useReducer With useContext Demo</div>
        <div className="center White">
          Root File Count :{countParent.countValue} {"(***Note***"} Root file
          and Component A has used same useReducer)
        </div>
        <CounterContext.Provider
          value={{
            countStateParent: countParent,
            countDispatchParent: dispatchParent,
            countStateD: countD,
            countDispatchD: dispatchD,
            countStateF: countF,
            countDispatchF: dispatchF,
          }}
        >
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </CounterContext.Provider>
      </div>
    </>
  );
}

export default UseReducerWithContext;
