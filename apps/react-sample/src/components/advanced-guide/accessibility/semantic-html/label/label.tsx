import React from 'react';


/* eslint-disable-next-line */
export interface LabelProps {}

const Label: React.FC<LabelProps> = () =>  {
  const id = "namedInput"
  return (
    <>
      <label htmlFor={id}>Name</label>
      <input type="text" name="name" id={id} />
    </>
  )
}

export default Label;
