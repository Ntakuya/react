import React, { useEffect } from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RenderingElementsProps {}

const StyledRenderingElements = styled.div`
  color: pink;
`;

// https://stackoverflow.com/questions/53464595/how-to-use-componentwillmount-in-react-hooks
export const RenderingElements = (props: RenderingElementsProps) => {
  const [state, updateState] = React.useState(new Date());
  const [loaded, updateLoaded] = React.useState(false);
  let timer: any;

  if (loaded) {
    updateLoaded(true);
  }

  useEffect(() => {
    timer = setInterval(() => {
      const date = new Date();
      updateState(date);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
