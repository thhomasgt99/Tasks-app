import React from 'react';
import { TodoIcon } from './';
// import { useTodos } from '../App/useTodos';
// { completed, onComplete }
function Edit(props) {
	// const { deleteTodo }= useTodos()
	// console.log('desde deleteIcon: ' + props.text)
  return (
    <TodoIcon
      type="edit"
      // onClick={()=>deleteTodo(props.text)}
    />
  );
}

export { Edit };