import React from 'react';

import styled from 'styled-components';
import Calculator from './calculator/calculator';

/* eslint-disable-next-line */
export interface LiftingStateUpProps {}

const StyledLiftingStateUp = styled.div`
  color: pink;
`;

export const LiftingStateUp = (props: LiftingStateUpProps) => {
  return (
    <StyledLiftingStateUp>
      <Calculator />
    </StyledLiftingStateUp>
  );
};

export default LiftingStateUp;
