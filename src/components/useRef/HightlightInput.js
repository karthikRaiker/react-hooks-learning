import React, { useEffect, useRef } from "react";

function HighlightInput() {
  const inputField = useRef();

  useEffect(() => {
    inputField.current.focus();
  }, []);

  return (
    <div className="center">
      <input type="text" ref={inputField} />
    </div>
  );
}

export default HighlightInput;
