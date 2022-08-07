import { useState } from "react";

function useCounter(initialCount = 0, value) {
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount((prevState) => prevState + value);
  };
  const decrementCount = () => {
    setCount((prevState) => prevState - value);
  };
  const resetCount = () => {
    setCount(initialCount);
  };

  return [count, incrementCount, decrementCount, resetCount];
}

export default useCounter;
