import CounterActionTypes from '../action-types/couter';

export interface CounterState {
  loading: boolean;
  loaded: boolean;
  value: number;
}

export const initialState = {
  loading: false,
  loaded: false,
  value: 0,
};

export const couterState = (
  state: CounterState = initialState,
  action: {
    type: CounterActionTypes;
    payload?: any;
  }
) => {
  const { type } = action;
  switch (type) {
    case CounterActionTypes.load:
      return {
        ...state,
        loaded: true,
        value: 0,
      };
    case CounterActionTypes.reset:
      return {
        ...state,
        loading: false,
        value: 0,
      };
    case CounterActionTypes.increment:
      return {
        ...state,
        loading: false,
        value: state.value + 1,
      };
    case CounterActionTypes.decrement:
      return {
        ...state,
        loaing: false,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default couterState;
