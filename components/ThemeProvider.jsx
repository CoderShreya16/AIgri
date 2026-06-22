"use client";

import { createContext, useContext, useEffect, useState } from "react";

// ─── Context ───────────────────────────────────────────────────────────────
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// ─── Hook ──────────────────────────────────────────────────────────────────
export function useTheme() {
  return useContext(ThemeContext);
}

// ─── Provider ──────────────────────────────────────────────────────────────
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // On mount: read saved preference from localStorage and apply
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      if (next === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}