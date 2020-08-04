import React from 'react';
import ListComponent from './list-component/list-component';
import TodoItems from './todo-items/todo-items';
import Blog from './blog/blog';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ListsAndKeysProps {}

const StyledListsAndKeys = styled.div`
  color: pink;
`;

export const ListsAndKeys = (props: ListsAndKeysProps) => {
  return (
    <StyledListsAndKeys>
      <ListComponent />
      <TodoItems />
      <Blog />
    </StyledListsAndKeys>
  );
};

export default ListsAndKeys;
