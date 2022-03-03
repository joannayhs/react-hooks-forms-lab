import React from "react";

function Filter({ onCategoryChange , onSearchChange, search }) {

  function handleCategoryChange(event) {
    onCategoryChange(event.target.value);
  }

  function handleInputChange(e) {
    onSearchChange(e.target.value)

  }
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={handleInputChange} value={search}/>
      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
