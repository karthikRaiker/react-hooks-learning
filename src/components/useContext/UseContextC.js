import React from "react";
import { UserContext, LastNameContext } from "../../routes/UseContext";

function UseContextC() {
  return (
    <div className="Container flex-column">
      <div className="center">UseContextC</div>
      <div className="center">
        Implemented{" "}
        <span style={{ fontWeight: "bold", color: "yellow" }}>without</span>{" "}
        using useContext hooks make use of ContextApi
      </div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <LastNameContext.Consumer>
              {(lastName) => {
                return (
                  <>
                    <div className="center">My Name is :{user}</div>
                    <div className="center">My Last Name is :{lastName}</div>
                  </>
                );
              }}
            </LastNameContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default UseContextC;
