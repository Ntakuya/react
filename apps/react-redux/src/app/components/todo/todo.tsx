import React from 'react';

/* eslint-disable-next-line */
export interface TodoProps {
  onClick: () => void;
  completed: boolean;
  text: string;
}

export const Todo: React.FC<TodoProps> = ({ onClick, text, completed }) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </li>
  );
};

export default Todo;
