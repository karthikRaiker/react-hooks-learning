import React, { useState } from "react";

function UseHooksWithArray() {
  const [items, setItems] = useState([]);
  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10 + 1),
      },
    ]);
  };
  const clearItems = () => {
    setItems([]);
  };
  return (
    <div className="Container flex-column">
      <div className="Container">
        <button className="btn" onClick={addItems}>
          Add Random Value
        </button>
        <button className="btn" onClick={clearItems}>
          Clear Array Item
        </button>
      </div>
      <ul
        className="flex-column"
        style={{ display: "flex", alignItems: "center" }}
      >
        {items.map((item) => (
          <li className="White" key={item.id}>
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseHooksWithArray;
