import React, { useReducer } from 'react';
import styled from 'styled-components';

const ActionTypes = {
  increment: 'increment',
  decrement: 'decrement',
  reset: 'reset',
} as const;

type ActionTypes = typeof ActionTypes[keyof typeof ActionTypes];

interface State {
  value: number;
}

const initialState: State = {
  value: 0,
};

function reducer(
  state: State,
  action: {
    type: ActionTypes;
    payload?: Partial<ActionTypes>;
  }
) {
  const { type } = action;
  switch (type) {
    case ActionTypes.increment:
      return {
        ...state,
        value: state.value + 1,
      };
    case ActionTypes.decrement:
      return {
        ...state,
        value: state.value - 1,
      };
    case ActionTypes.reset:
      return {
        ...state,
        value: 0,
      };
    default:
      return state;
  }
}

/* eslint-disable-next-line */
export interface CounterProps {}

const StyledCounter = styled.div`
  color: pink;
`;

export const Counter = (props: CounterProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StyledCounter>
      <div>
        <p>{state.value}</p>
        <div>
          <button onClick={() => dispatch({ type: ActionTypes.increment })}>
            +
          </button>
          <button onClick={() => dispatch({ type: ActionTypes.decrement })}>
            -
          </button>
          <button onClick={() => dispatch({ type: ActionTypes.reset })}>
            reset
          </button>
        </div>
      </div>
    </StyledCounter>
  );
};

export default Counter;
