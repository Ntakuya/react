import { connect } from 'react-redux';
import { toggleTodo } from '../../store/actions';
import TodoList from '../components/todo-list/todo-list';
import { VisilibilityFilters } from '../../store/actions';
import { Todo } from 'apps/react-redux/src/interfacees/Todo';

const getVisibleTodos = (todos: Todo[], filter) => {
  switch (filter) {
    case VisilibilityFilters.SHOW_ALL:
      return todos;
    case VisilibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisilibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchProps)(TodoList);
