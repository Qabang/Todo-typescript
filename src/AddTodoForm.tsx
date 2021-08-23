import React, {useState} from 'react';
import { Plus } from 'react-bootstrap-icons';

interface Props {
 addTodo: AddTodo 
}
export const AddTodoForm: React.FC<Props> = ({addTodo}) => {
  const [text, setText] = useState('');

  return (
    <form>
      <input type="text"
      className='todo-item-input'
      value={text}
      onChange={e=> {setText(e.target.value)}} />
      <button type="submit"
      aria-label="Add todo item"
      onClick={e=> {e.preventDefault();
      addTodo(text);
      setText('')}
      }><Plus size={35}/></button>

    </form>
  );
};
