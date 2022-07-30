import React, {useState} from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [options, setOptions ] = useState(true);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const editTodo = (id,textnew)=>{
    const newTodos = [...todos];
    newTodos[id].text = textnew;
    saveTodos(newTodos);
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
    window.location. reload()
  };

  const openOptions = (id)=>{
    setOptions(!options)
    if(options === true){
      const nodo = document.getElementById(id)
      nodo.style.display = 'flex'
    }else {
      const nodo = document.getElementById(id)
      nodo.style.display = 'none'
    }
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    window.location. reload()
  };

  const miArray = [...todos]
  
  return {
    miArray,
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    openEdit, 
    setOpenEdit,
    setOpenModal,
    sincronizeTodos,
    openOptions,
    editTodo,
  };
}

export { useTodos };
