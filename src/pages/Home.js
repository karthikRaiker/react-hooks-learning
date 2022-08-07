import React from "react";
import "../css/pages.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <div className="Home">
        <div className="Home-Heading">Welcome To React Hooks</div>
        <div className="Home-SubHeading">Hooks Links</div>
        <div className="Home-Container">
          <Link to="/useState-counter">
            <button className="btn">UseStateHooksCounter</button>
          </Link>
          <Link to="/useEffect">
            <button className="btn">UseEffect Hooks</button>
          </Link>
          <Link to="/useEffect-didMount">
            <button className="btn">UseEffect Mimic Component Did Mount</button>
          </Link>
          <Link to="/fetch-data">
            <button className="btn">Fetch Data UseEffect</button>
          </Link>
          <Link to="/useContext">
            <button className="btn">useContext Hooks</button>
          </Link>
          <Link to="/useReducer">
            <button className="btn">useReducer Hooks</button>
          </Link>
          <Link to="/useReducerWithContext">
            <button className="btn">useReducer with useContext</button>
          </Link>
          <Link to="/fetch-data-useReducer">
            <button className="btn">Fetch with useReducer</button>
          </Link>
          <Link to="/useCallback">
            <button className="btn">useCallback</button>
          </Link>
          <Link to="/useMemo">
            <button className="btn">useMemo</button>
          </Link>
          <Link to="/useRef">
            <button className="btn">useRef</button>
          </Link>
          <Link to="/customHooks">
            <button className="btn">customHooks</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
