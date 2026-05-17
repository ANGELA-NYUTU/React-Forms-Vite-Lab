export default function ShoppingList({
  items = [],
  search = "",
  category,
}) {
  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item.id}>
          {item.name} - {item.category}
        </li>
      ))}
    </ul>
  );
}