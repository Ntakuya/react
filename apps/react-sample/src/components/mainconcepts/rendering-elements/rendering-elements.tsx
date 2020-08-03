import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RenderingElementsProps {}

const StyledRenderingElements = styled.div`
  color: pink;
`;

export const RenderingElements = (props: RenderingElementsProps) => {
  const [state, updateState] = React.useState(new Date());
  const timer = setInterval(() => {
    const date = new Date();
    updateState(date);
  }, 1000);
  return (
    <StyledRenderingElements>
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {state.toLocaleTimeString()}.</h2>
      </div>
    </StyledRenderingElements>
  );
};

export default RenderingElements;