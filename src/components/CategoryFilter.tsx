type CategoryFilterProps = {
  categories: string[];
  selected: string;
  onChange: (value: string) => void;
};

export default function CategoryFilter({
  categories,
  selected,
  onChange
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <label htmlFor="category" className="text-sm font-medium text-muted">
        Filter by category
      </label>
      <select
        id="category"
        value={selected}
        onChange={(event) => onChange(event.target.value)}
        className="input max-w-[200px]"
      >
        <option value="All">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
