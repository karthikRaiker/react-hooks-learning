import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import UseContextA from "../components/useContext/UseContextA";

export const UserContext = React.createContext();
export const LastNameContext = React.createContext();

function UseContext() {
  return (
    <>
      <div className="UseContext">
        <Link to="/">
          <span className="BackArrow">
            <FiArrowLeft />
          </span>
        </Link>
        <div className="Page-Heading">React useContext Hooks</div>
        <div style={{ marginTop: "3rem" }} className="White">
          Component Looks Like this
        </div>
        <div className="White">
          UseContext(Parent) {"=>"} UseContextA {"=>"} UseContextB {"=>"}{" "}
          UseContextC
        </div>
        <UserContext.Provider value={"Karthik"}>
          <LastNameContext.Provider value={"Raikar"}>
            <UseContextA />
          </LastNameContext.Provider>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default UseContext;
