import * as React from "react";

interface CounterProps {
  counter: number;
  counter2: number;
  setCounter(count: number): void;
  setCounter2(count: number): void;
}

const Counter: React.FC<CounterProps> = ({ counter, counter2, setCounter, setCounter2 }) => {
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const increaseCounter2 = () => {
    setCounter2(counter2 + 1);
  };

  return (
    <div>
      <div>{counter}</div>
      <div>{counter2}</div>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={increaseCounter2}>Increase2</button>
    </div>
  )
};

export default Counter;
