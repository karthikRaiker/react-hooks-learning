import React from "react";

function Button({ handleIncrement, children }) {
  console.log(`button component - ${children}`);
  return (
    <button className="btn btn-width" onClick={handleIncrement}>
      {children}
    </button>
  );
}

export default React.memo(Button);
