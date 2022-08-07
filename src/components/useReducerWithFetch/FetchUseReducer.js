import React, { useReducer, useEffect } from "react";
import axios from "axios";
import NormalFetch from "./NormalFetch";

const initialState = {
  post: {},
  error: "",
  loading: true,
  toggle: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { ...state, post: action.payload, error: "", loading: false };
    case "FAILURE":
      return {
        ...state,
        post: {},
        error: "Something went wrong!!",
        loading: false,
      };
    case "TOGGLE":
      return { ...state, toggle: !state.toggle };
    default:
      return state;
  }
};

function FetchUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FAILURE" });
      });
  }, []);

  return (
    <div>
      <button className="btn" onClick={() => dispatch({ type: "TOGGLE" })}>
        {state.toggle ? "useReducer Fetch" : "useState Fetch"}
      </button>
      {state.toggle ? (
        <NormalFetch />
      ) : (
        <div className="Container flex-column">
          <div className="White center bold">useReducer Fetch</div>
          {state.loading ? "Loading" : state.post.title}
          {state.error ? state.error : null}
        </div>
      )}
    </div>
  );
}

export default FetchUseReducer;
