import CounterActionTypes from '../action-types/couter';

export const load = () => ({
  type: CounterActionTypes.load,
});

export const increment = () => ({
  type: CounterActionTypes.increment,
});

export const decrement = () => ({
  type: CounterActionTypes.decrement,
});

export const reset = () => ({
  type: CounterActionTypes.reset,
});
