import React from "react";

function Filter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
}) {
  return (
    <div className="Filter">
      {/* SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* CATEGORY SELECT (LABEL IS REQUIRED FOR TESTS) */}
      <label>
        Category
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;