import './App.css';
import React, { useState } from 'react';
import { TodoWrapper } from './components/TodoWrapper';
import { AddTodo } from './components/AddTodo';
import { CompleteTodo } from './components/CompleteTodo';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', isCompleted: false },
    { id: 2, text: 'Learn JavaScript', isCompleted: false },
  ]);

  const addTodo = text => {
    setTodos([...todos, { id: Math.random(), text, isCompleted: false }]);
  };

  const completeTodo = id => {
    setTodos(todos.map(todo => (todo.id === id? {...todo, isCompleted: true } : todo)));
  };
  return (
    <div className="App">
      <TodoWrapper  />
    </div>
  );
}

export default App;