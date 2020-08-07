import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CustomTextInputProps {}

const StyledCustomTextInput = styled.div`
  color: pink;
`;

export const CustomTextInput = (props: CustomTextInputProps) => {
  return (
    <StyledCustomTextInput>
      <h1>Welcome to custom-text-input!</h1>
    </StyledCustomTextInput>
  );
};

export default CustomTextInput;
