import React from 'react';
import { Props } from './interfaces';
import { TodolistItem } from './TodolistItem';

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodolistItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};
