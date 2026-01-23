type CategoryFilterProps = {
  categories: string[];
  selected: string;
  onChange: (value: string) => void;
  className?: string;
};

export default function CategoryFilter({
  categories,
  selected,
  onChange,
  className
}: CategoryFilterProps) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      <label htmlFor="category" className="text-sm font-medium text-muted">
        Filter by category
      </label>
      <select
        id="category"
        value={selected}
        onChange={(event) => onChange(event.target.value)}
        className="input w-full sm:max-w-[220px]"
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
