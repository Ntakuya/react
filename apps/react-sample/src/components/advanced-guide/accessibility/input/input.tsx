import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface InputProps {}

const StyledInput = styled.div`
  color: pink;
`;

export const Input = (props: InputProps) => {
  const labelText = 'input';
  const [inputValue, setInputValue] = React.useState('');
  const onchangeHandler = ($event) => {
    setInputValue($event.target.value);
  };
  return (
    <input
      type="text"
      aria-label={labelText}
      aria-required="true"
      onChange={onchangeHandler}
      value={inputValue}
      name="name"
    />
  );
};

export default Input;
