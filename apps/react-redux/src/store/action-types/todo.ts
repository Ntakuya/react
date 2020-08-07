const TodoActionTypes = {
  add: 'todo/ADD_TODO',
  toggle: 'todo/TOGGLE_TODO',
} as const;

type TodoActionTypes = typeof TodoActionTypes[keyof typeof TodoActionTypes];

export default TodoActionTypes;
