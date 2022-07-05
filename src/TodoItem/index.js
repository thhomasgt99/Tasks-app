import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { Menu } from '../TodoIcon/Menu';
import Options from '../Options';
import './TodoItem.css';

function TodoItem(props) {
  
  const id = ()=>(
      props.miArray.findIndex((e) => e.text === props.text)//este seria el index y se le pasa como prop a options
  )
  
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      <Menu
        id={id()}
      />

      <Options 
        completed={props.completed} 
        text={props.text}
        id={`id-${id()}`} 
        openEdit={props.openEdit}
        setOpenEdit={props.setOpenEdit}
        editTodo={props.editTodo}
      />
    </li>
  );
}

export { TodoItem };
