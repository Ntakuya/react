import TodoActionTypes from '../action-types/todo';
import { Todo } from '../../interfacees/Todo';

interface TodoState {
  list: Todo[];
  selectedId: null;
  loading: boolean;
  loaded: boolean;
}

const initaliState: TodoState = {
  loading: false,
  loaded: false,
  list: [],
  selectedId: null,
};

const todos = (
  state = initaliState,
  action: {
    type: TodoActionTypes;
    payload?: Partial<Todo>;
  }
) => {
  const { payload, type } = action;
  switch (type) {
    case TodoActionTypes.add:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: payload.id,
            completed: false,
            text: payload.text,
          },
        ],
      };
    case TodoActionTypes.toggle:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todos;
