import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <input
        className="TodoSearch"
        placeholder="Search"
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}/>
        {/* <i style="color: #cac7c0;"  class="fa-solid fa-magnifying-glass"/> */}
    </div>
  );
}

export { TodoSearch };
