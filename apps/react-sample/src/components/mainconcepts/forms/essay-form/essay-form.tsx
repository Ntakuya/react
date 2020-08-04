import React from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface EssayFormProps {}

const StyledEssayForm = styled.div`
  color: pink;
`;

export const EssayForm = (props: EssayFormProps) => {
  const [val, setVal] = React.useState('');
  const handleChange = ($event) => {
    setVal($event.target.value);
  };
  const handleSubmit = ($event) => {
    console.log(val);
    $event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Essay:
        <textarea value={val} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default EssayForm;
