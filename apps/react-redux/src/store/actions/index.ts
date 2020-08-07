import TodoActionTypes from '../action-types/todo';
import VisibilityFilter from '../action-types/visibility-fiter';

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: TodoActionTypes.add,
  payload: {
    id: nextTodoId++,
    text,
  },
});

export const setVisibilityFilter = (filter) => {
  return {
    type: VisibilityFilter.setFilter,
    payload: {
      filter,
    },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TodoActionTypes.toggle,
    payload: {
      id,
    },
  };
};

export const VisilibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
