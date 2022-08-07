import React, { useEffect, useState } from "react";

function MimicComponentDidMount() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("event listener is added (componentDidMount)");
    window.addEventListener("mousemove", handleMouseMove);

    //in useEffect return with anonymous arrow function means componentWillUnmount
    return () => {
      console.log("componentWillUnmount Code");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); //in useEffect second parameter [] means componentDidMount

  return (
    <div className="Container flex-column">
      <div className="White">
        Mouse Move Event listener and achieving componentDidMount
      </div>
      <div className="White">
        X-Coordinate : {x} and Y-Coordinate : {y}
      </div>
    </div>
  );
}

export default MimicComponentDidMount;
