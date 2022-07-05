import React from 'react';
import './EditForm.css';

function EditForm({ setOpenEdit, text, editTodo}) {
  const [newTodoValue, setNewTodoValue] = React.useState(text);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenEdit(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    // addTodo(newTodoValue);
    editTodo(text, newTodoValue);
    setOpenEdit(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>TODO actual</label>
      <textarea
			target
        value={newTodoValue}
        onChange={onChange}
        placeholder="Etida tu todo"
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