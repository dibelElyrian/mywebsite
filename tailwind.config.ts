import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"]
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "72ch",
            color: "#0f172a",
            lineHeight: "1.7",
            p: { marginTop: "1.25em", marginBottom: "1.25em" },
            h2: { marginTop: "2.2em", marginBottom: "0.85em" },
            h3: { marginTop: "1.85em", marginBottom: "0.75em" },
            ul: { marginTop: "1.25em", marginBottom: "1.25em" },
            ol: { marginTop: "1.25em", marginBottom: "1.25em" },
            li: { marginTop: "0.6em", marginBottom: "0.6em" },
            hr: { marginTop: "2em", marginBottom: "2em" }
          }
        },
        invert: {
          css: {
            color: "#e2e8f0",
            a: { color: "#a7f3d0" },
            strong: { color: "#f8fafc" },
            h1: { color: "#f8fafc" },
            h2: { color: "#f8fafc" },
            h3: { color: "#f8fafc" },
            h4: { color: "#f8fafc" }
          }
        }
      }
    }
  },
  plugins: [typography]
} satisfies Config;
