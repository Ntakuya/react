import React, { useEffect } from 'react';
import { CounterState } from '../../../store/reducers/couter';

export interface CounterProps {
  counter: CounterState;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  load: () => void;
}

export const Counter: React.FC<CounterProps> = ({
  load,
  counter,
  increment,
  decrement,
  reset,
}) => {
  useEffect(() => {
    load();
    return () => reset();
  }, []);
  return (
    <>
      <button onClick={() => decrement()}>decrement</button>
      <span>{counter.value}</span>
      <button onClick={() => increment()}>increment</button>
      <div>
        <button onClick={() => reset()}>reset</button>
      </div>
    </>
  );
};

export default Counter;
