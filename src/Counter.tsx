import * as React from "react";

interface CounterProps {
  counter: number;
  setCounter(count: number): void;
}

const Counter: React.FC<CounterProps> = ({ counter, setCounter }) => {
  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  )
};

export default Counter;
