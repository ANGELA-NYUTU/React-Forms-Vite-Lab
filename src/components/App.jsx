import { useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import ShoppingList from "./ShoppingList";

const INITIAL_ITEMS = [
  { id: 1, name: "Apple", category: "Produce" },
  { id: 2, name: "Milk", category: "Dairy" },
  { id: 3, name: "Bread", category: "Bakery" }
];

export default function App() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div>
      <Header />

      <Filter
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
      />

      <ItemForm onItemFormSubmit={handleItemFormSubmit} />

      <ShoppingList
        items={items}
        search={search}
        category={category}
      />
    </div>
  );
}