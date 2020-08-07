import React from 'react';
import Accesibility from './accessibility/accessibility';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AdvancedGuideProps {}

const StyledAdvancedGuide = styled.div`
  color: pink;
`;

export const AdvancedGuide = (props: AdvancedGuideProps) => {
  return (
    <StyledAdvancedGuide>
      <h1>Welcome to advanced-guide!</h1>
      <Accesibility />
    </StyledAdvancedGuide>
  );
};

export default AdvancedGuide;
