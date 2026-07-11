import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="navbar">
      <h2>Mahsa Zargandeh</h2>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <button onClick={toggleTheme}>
        {dark ? "☀️" : "🌙"}
      </button>

    </nav>
  );
}