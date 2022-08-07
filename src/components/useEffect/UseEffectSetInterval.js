import React, { useState, useEffect } from "react";

function UseEffectSetInterval() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevState) => prevState + 1);
  };

  useEffect(() => {
    console.log("setInterval Called");
    const interval = setInterval(tick, 1000);

    return () => {
      console.log("clearInterval Called");
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="Container flex-column">
      <div className="White" style={{ textAlign: "center" }}>
        Mimic componentDidMount wih setInterval
      </div>
      <div
        className="White"
        style={{ textAlign: "center", fontSize: "1.2rem", fontWeight: "bold" }}
      >
        {count}
      </div>
    </div>
  );
}

export default UseEffectSetInterval;
