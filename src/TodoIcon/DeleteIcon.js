import React from 'react';
import { TodoIcon } from './';
import { useTodos } from '../App/useTodos';

function DeleteIcon(props) {
	const { deleteTodo }= useTodos()
  return (
    <TodoIcon
      type="delete"
      onClick={()=>deleteTodo(props.text)}
    />
  );
}

export { DeleteIcon };