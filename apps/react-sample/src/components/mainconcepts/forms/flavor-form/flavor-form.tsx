import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FlavorFormProps {}

const StyledFlavorForm = styled.div`
  color: pink;
`;

export const FlavorForm = (props: FlavorFormProps) => {
  const [value, setValue] = React.useState('');
  const handleSubmit = ($event) => {
    $event.preventDefault();
    console.log(value);
  };

  const handleChange = ($event) => {
    setValue($event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select value={value} onChange={handleChange}>
          <option value="ww">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FlavorForm;
