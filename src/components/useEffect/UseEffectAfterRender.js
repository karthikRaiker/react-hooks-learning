import React, { useEffect, useState } from "react";

function UseEffectAfterRender() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]); //based on the count condition console will log

  return (
    <>
      <button
        className="btn btn-width"
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        Count {count}
      </button>
      <div className="White">Conditionally Run Effect</div>
      <input
        className="btn-width"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
    </>
  );
}

export default UseEffectAfterRender;
