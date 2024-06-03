import React, { useState } from 'react';
import './AddTodo.css';

export const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add a task"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};