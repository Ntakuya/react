import { combineReducers } from 'redux';
import todos from './reducers/todo';
import visibilityFilter from './reducers/visibilityFilter';
import counter from './reducers/couter';

export const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  counter,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
