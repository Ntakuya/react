import React, { useReducer } from 'react';

/* eslint-disable-next-line */
interface ReservationState {
  isGoing: boolean;
  numberOfGuests: number;
}

const initialState: ReservationState = {
  isGoing: false,
  numberOfGuests: 0,
};

const ActionTypes = {
  change: 'change',
} as const;

type ActionTypes = typeof ActionTypes[keyof typeof ActionTypes];

type Action = {
  type: ActionTypes;
  payload: Partial<ReservationState>;
};

function reducer(state: ReservationState, action: Action) {
  switch (action.type) {
    case ActionTypes.change:
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}

/* eslint-disable-next-line */
export interface ReservationProps {}

export const Reservation = (props: ReservationProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = ($event) => {
    const target = $event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    dispatch({
      type: ActionTypes.change,
      payload: {
        [name]: value,
      },
    });
  };

  return (
    <form>
      <label>
        Is going:
        <input
          name="isGoing"
          type="checkbox"
          checked={state.isGoing}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Number of guests:
        <input
          name="numberOfGuests"
          type="number"
          value={state.numberOfGuests}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
};

export default Reservation;
