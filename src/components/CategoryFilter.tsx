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
      <label htmlFor="category" className="text-sm font-medium text-slate-600 dark:text-slate-300">
        Filter by category
      </label>
      <select
        id="category"
        value={selected}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-emerald-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
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
