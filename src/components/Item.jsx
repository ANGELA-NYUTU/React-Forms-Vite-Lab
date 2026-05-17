export default function Item({ item }) {
  return (
    <li>
      {item.name} - {item.category}
    </li>
  );
}