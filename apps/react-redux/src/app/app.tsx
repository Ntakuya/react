import React from 'react';
import Footer from './components/footer/footer';
import AddTodo from './containers/add-todo';
import VisibleTodoList from './containers/visible-todo-list';
import Counter from './containers/counter';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Counter />
  </div>
);

export default App;
