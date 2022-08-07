import React from "react";

function Text() {
  console.log("useCallback Text");
  return <div className="center White bold">useCallback</div>;
}

export default React.memo(Text);
