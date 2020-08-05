import React from 'react';
import { Todo } from '../../../interfacees/Todo';
import TodoElm from '../todo/todo';

/* eslint-disable-next-line */
export interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoElm key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  );
};

export default TodoList;
