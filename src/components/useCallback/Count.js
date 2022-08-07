import React from "react";

function Count({ text, count }) {
  console.log(`Count component ${text}`);
  return (
    <div className="center White">
      {text} is {count}
    </div>
  );
}

export default React.memo(Count);
