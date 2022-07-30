import React from 'react';
import './EditForm.css';

function EditForm({ setOpenEdit, editTodo, index, miArray}) {
  const [newTodoValue, setNewTodoValue] = React.useState(miArray[index].text);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenEdit(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    editTodo( index, newTodoValue );
    setOpenEdit(false);
  };

  return (
    <form className='formEdit' onSubmit={onSubmit}>
      <label>TODO actual</label>
      <textarea
			target
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="EditForm-buttonContainer">
        <button
          type="button"
          className="EditForm-button EditForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="EditForm-button EditForm-button--add"
        >
          Actualizar
        </button>
      </div>
    </form>
  );
}

export { EditForm };