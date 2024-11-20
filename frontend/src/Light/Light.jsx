import React, { useState, useEffect } from "react";
import "./Light.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  // Save theme preference to local storage
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Retrieve theme preference on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <h1>Welcome to Our Website</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default App;
