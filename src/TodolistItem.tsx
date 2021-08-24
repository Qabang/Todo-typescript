import React from 'react';
import { TodolistItemProps } from './interfaces';


export const TodolistItem: React.FC<TodolistItemProps> = ({todo, toggleTodo}) => {
  return(
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input type="checkbox" checked={todo.complete} 
        readOnly
        onClick={() => {
            toggleTodo(todo);
          }}/> {todo.text}
      </label>
    </li>
    )
};
