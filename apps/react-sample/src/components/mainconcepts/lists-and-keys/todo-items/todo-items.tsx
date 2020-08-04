import React from 'react';

import styled from 'styled-components';

type Todo = {
  text: string;
  id: number;
};

const todos = [
  {
    text: 'sample',
    id: 1,
  },
];

/* eslint-disable-next-line */
export interface TodoItemsProps {
  list: Todo[];
}

const TodoItems: React.FC<TodoItemsProps> = ({ list }) => {
  return (
    <>
      {list.map((todo) => (
        <li key={todo.id.toString()}>{todo.text}</li>
      ))}
    </>
  );
};

const StyledTodoItems = styled.div`
  color: pink;
`;

/* eslint-disable-next-line */
export interface TodoListProps {}
export const TodoList = (props: TodoListProps) => {
  return (
    <StyledTodoItems>
      <TodoItems list={todos} />
    </StyledTodoItems>
  );
};

export default TodoList;
