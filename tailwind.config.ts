import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        "accent-2": "var(--color-accent-2)",
        link: "var(--color-link)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"]
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "66ch",
            color: "var(--color-text)",
            fontSize: "1.05rem",
            lineHeight: "1.75",
            a: { color: "var(--color-link)", textUnderlineOffset: "4px" },
            strong: { color: "var(--color-text)" },
            h1: { marginTop: "1.4em", marginBottom: "0.6em", color: "var(--color-text)" },
            p: { marginTop: "1.2em", marginBottom: "1.2em" },
            h2: { marginTop: "2.2em", marginBottom: "0.85em", color: "var(--color-text)" },
            h3: { marginTop: "1.9em", marginBottom: "0.75em", color: "var(--color-text)" },
            ul: { marginTop: "1.2em", marginBottom: "1.2em" },
            ol: { marginTop: "1.2em", marginBottom: "1.2em" },
            li: { marginTop: "0.5em", marginBottom: "0.5em" },
            hr: { marginTop: "2em", marginBottom: "2em" }
          }
        },
        invert: {
          css: {
            color: "var(--color-text)",
            a: { color: "var(--color-link)", textUnderlineOffset: "4px" },
            strong: { color: "var(--color-text)" },
            h1: { color: "var(--color-text)" },
            h2: { color: "var(--color-text)" },
            h3: { color: "var(--color-text)" },
            h4: { color: "var(--color-text)" }
          }
        }
      }
    }
  },
  plugins: [typography]
} satisfies Config;
