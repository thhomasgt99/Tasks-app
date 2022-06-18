import React from 'react';
import { useTodos } from '../App/useTodos';
import { TodoIcon } from './';

function Menu({id}) { //borre  onDelete
  const { openOptions } = useTodos()
  return (
    <TodoIcon
      type="menu"
      onClick={()=>openOptions(`id-${id}`)}
      id={id}
    />
  );
}

export { Menu };
