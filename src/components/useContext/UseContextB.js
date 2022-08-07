import React, { useContext } from "react";
import UseContextC from "./UseContextC";
import { UserContext, LastNameContext } from "../../routes/UseContext";

function UseContextB() {
  const userName = useContext(UserContext);
  const lastName = useContext(LastNameContext);
  return (
    <div style={{ margin: "2rem" }} className="Container flex-column ">
      <div className="center">UseContextB</div>
      <div className="center">
        Implemented{" "}
        <span style={{ fontWeight: "bold", color: "yellow" }}>
          using useContext
        </span>{" "}
        hooks make use of ContextApi
      </div>
      <div className="center">
        FistName:{userName} and LastName:{lastName}
      </div>
      <UseContextC />
    </div>
  );
}

export default UseContextB;
