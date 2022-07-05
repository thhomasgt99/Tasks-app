import React from 'react';
import { TodoIcon } from './';

function Edit(props) {
  return (
    <TodoIcon
      type="edit"
      onClick={()=>props.setOpenEdit(true)}
    />
  );
}

export { Edit };