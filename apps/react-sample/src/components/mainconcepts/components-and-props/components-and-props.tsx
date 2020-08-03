import React from 'react';

/* eslint-disable-next-line */
export interface ComponentsAndPropsProps {
  name: string;
}

export const ComponentsAndProps = (props: ComponentsAndPropsProps) => {
  return <h1>Hello, {props.name}</h1>;
};

export default ComponentsAndProps;
