import React from 'react';
import './CompleteTodo.css';

export const CompleteTodo = ({ completeTodo, todo }) => {
  return (
    <div
      className="Todo"
      onClick={() => completeTodo(todo.id)}
    >
      <p className={`${todo.isCompleted ? 'completed' : 'incompleted'}`}>
        {todo.text}
      </p>
    </div>
  );
};