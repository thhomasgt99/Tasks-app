import React from 'react';
import { EditForm } from '../EditForm';
import { Modal } from '../Modal'
import { TodoIcon } from './';

function Edit(props) {

  return (
    <React.Fragment>
      <TodoIcon
        type="edit"
        onClick={() => props.setOpenEdit(true)}
      />

      {!!props.openEdit && (
          <Modal>
            <EditForm
            text={props.text}
            setOpenEdit={props.setOpenEdit}
            editTodo={props.editTodo}
            index={props.index}
            miArray={props.miArray}
          />
          </Modal>
      )}
    </React.Fragment>
  );
}

export { Edit };