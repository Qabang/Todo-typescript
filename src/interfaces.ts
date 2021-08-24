export interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export interface TodolistItemProps {
  toggleTodo: ToggleTodo;
  todo: Todo;
}
