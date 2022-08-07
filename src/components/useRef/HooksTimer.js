import React, { useState, useEffect, useRef } from "react";

function HooksTimer() {
  const [timer, setTimer] = useState(0);
  const interval = useRef();

  useEffect(() => {
    console.log("Hooks timer start");
    interval.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="Container">
      <div className="center White">Hooks Timer</div>
      <div className="center White">{timer}</div>
      <button
        className="btn btn-width"
        onClick={() => clearInterval(interval.current)}
      >
        Stop
      </button>
    </div>
  );
}

export default HooksTimer;
