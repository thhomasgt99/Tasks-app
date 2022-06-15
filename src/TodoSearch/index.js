import React from 'react';
import './TodoSearch.css';
import { Lupa } from '../TodoIcon/Lupa';

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className='search'>
      <Lupa  />
      <input
        className="TodoSearch"
        placeholder="Search"
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}/>
    </div>
  );
}

export { TodoSearch };
