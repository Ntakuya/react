import React, { useState } from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ControlledComponentsProps {}

const StyledControlledComponents = styled.div`
  color: pink;
`;

export const ControlledComponents = (props: ControlledComponentsProps) => {
  const [nameVal, setNameVal] = useState('');

  const handleChange = ($event) => {
    setNameVal($event.target.value);
  };

  const handleSubmit = ($event) => {
    console.log(nameVal);
    $event.preventDefault();
  };

  return (
    <StyledControlledComponents>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={nameVal} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </StyledControlledComponents>
  );
};

export default ControlledComponents;
