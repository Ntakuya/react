import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HelloWorldProps {}

const StyledHelloWorld = styled.div`
  color: pink;
`;

export const HelloWorld = (props: HelloWorldProps) => {
  return (
    <StyledHelloWorld>
      <h1>Welcome to hello-world!</h1>
    </StyledHelloWorld>
  );
};

export default HelloWorld;
