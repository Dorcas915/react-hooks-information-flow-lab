import React from "react";

function Filter({ onCategoryChange }) {
  function handleChange(event) {
    
    if (onCategoryChange) {
      onCategoryChange(event);
    }
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
      </select>
    </div>
  );
}

export default Filter;