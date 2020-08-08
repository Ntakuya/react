const CounterActionTypes = {
  load: 'couter/load',
  increment: 'couter/increment',
  decrement: 'couter/decrement',
  reset: 'couter/reset',
} as const;

type CounterActionTypes = typeof CounterActionTypes[keyof typeof CounterActionTypes];

export default CounterActionTypes;
