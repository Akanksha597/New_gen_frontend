"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-bs-theme", savedTheme);
  }, []);

  // Toggle between light and dark
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button className="btn btn-outline-secondary d-flex align-items-center gap-2" onClick={toggleTheme}>
      {theme === "light" ? (
        <i className="bi bi-moon-fill"></i>  // 🌙 Moon Icon
      ) : (
        <i className="bi bi-sun-fill"></i>   // ☀️ Sun Icon
      )}
    </button>
  );
}
