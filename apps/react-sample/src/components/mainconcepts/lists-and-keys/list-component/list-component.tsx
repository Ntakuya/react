import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ListComponentProps {}

const StyledListComponent = styled.div`
  color: pink;
`;

const numbers = [1, 2, 3, 4, 5];

export const ListComponent = (props: ListComponentProps) => {
  const renderItem = () => {
    return numbers.map((num) => <li key={num.toString()}>{num}</li>);
  };
  return <>{renderItem()}</>;
};

export default ListComponent;
