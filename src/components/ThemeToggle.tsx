import { useEffect, useState } from "react";
import { applyTheme, getPreferredTheme, ThemeMode } from "../lib/theme";

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const preferred = getPreferredTheme();
    setMode(preferred);
    applyTheme(preferred);
  }, []);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-md border border-slate-200 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:text-white"
      aria-label="Toggle dark mode"
    >
      {mode === "dark" ? "Light" : "Dark"}
    </button>
  );
}
