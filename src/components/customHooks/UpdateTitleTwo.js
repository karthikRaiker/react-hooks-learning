import React, { useState } from "react";
import useDocumentTitle from "../../customHooks/useDocumentTitle";

function UpdateTitleTwo() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div className="Container">
      <button onClick={() => setCount(count + 1)} className="btn btn-width">
        Count : {count}
      </button>
    </div>
  );
}

export default UpdateTitleTwo;
