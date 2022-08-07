import React, { useState } from "react";
import "../../css/component.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="Container">
        <button className="btn" onClick={() => setCount(count + 1)}>
          Count value {count}
        </button>
      </div>
    </>
  );
}

export default Counter;
