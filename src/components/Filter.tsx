import { Search } from "lucide-react";

function Filter({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="filter-container">
      <Search className="search-icon" size={20} />
      <input
        type="text"
        className="filter-input"
        placeholder="Escribe el nombre de la unidad..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Filter;
