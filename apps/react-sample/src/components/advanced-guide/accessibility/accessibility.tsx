import React from 'react';

import styled from 'styled-components';
import Input from './input/input';
import SemanticHtml from './semantic-html/semantic-html';
import OuterClickExample from './outer-click-example/outer-click-example';

/* eslint-disable-next-line */
export interface AccessibilityProps {}

const StyledAccessibility = styled.div`
  color: pink;
`;

const ActionTypes = {
  toggle: 'open/toggle',
} as const;

type ActionTypes = typeof ActionTypes[keyof typeof ActionTypes];

interface AccessibilityState {
  isOpen: boolean;
}

const initialState: AccessibilityState = {
  isOpen: false,
};

function reducer(
  state: AccessibilityState,
  action: {
    type: ActionTypes;
    payload?: Partial<AccessibilityState>;
  }
) {
  switch (action.type) {
    case ActionTypes.toggle:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}

export const Accessibility = (props: AccessibilityProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const toggleOpen = () => {
    dispatch({ type: ActionTypes.toggle });
  };
  return (
    <StyledAccessibility>
      <h1>Welcome to accessibility!</h1>
      <Input />
      <SemanticHtml />
      <OuterClickExample isOpen={state.isOpen} toggleOpen={toggleOpen} />
    </StyledAccessibility>
  );
};

export default Accessibility;
