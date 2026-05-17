import { useState } from "react";

export default function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now().toString(), // ✅ MUST be string
      name,
      category,
    };

    onItemFormSubmit(newItem);

    setName("");
    setCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* NAME FIELD */}
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      {/* CATEGORY FIELD */}
      <label>
        Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      {/* BUTTON (IMPORTANT TEXT MATCH) */}
      <button type="submit">Add to List</button>
    </form>
  );
}