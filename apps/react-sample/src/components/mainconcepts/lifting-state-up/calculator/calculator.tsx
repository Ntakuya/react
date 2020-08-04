import React, { useReducer } from 'react';
import BoilingVerdict from './boling-vardict';

/* eslint-disable-next-line */
export interface CalculatorProps {}

const ActionTypes = {
  formChange: 'change',
} as const;

type ActionTypes = typeof ActionTypes[keyof typeof ActionTypes];

interface CalculatorState {
  temperature: number;
}

const initialState: CalculatorState = {
  temperature: 0,
};

type Action = {
  type: ActionTypes;
  payload: Partial<CalculatorState>;
};

function reducer(state: CalculatorState, action: Action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}

export const Calculator = (props: CalculatorProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = ($event) => {
    dispatch({
      type: ActionTypes.formChange,
      payload: {
        temperature: $event.target.value,
      },
    });
  };

  return (
    <fieldset>
      <legend>Enter temperature in Celsius:</legend>
      <input value={state.temperature} onChange={handleChange} />
      <BoilingVerdict celsius={parseFloat(state.temperature.toString())} />
    </fieldset>
  );
};

export default Calculator;
