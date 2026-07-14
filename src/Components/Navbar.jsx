import { useState } from "react";
import logo from "../assets/images/logo.png";



export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="navbar">
      <div className="logo-box">
        <img src="/logo.png" alt="MZ Logo" /> <h2>Mahsa Zargandeh</h2>
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <button onClick={toggleTheme}>{dark ? "☀️" : "🌙"}</button>
    </nav>
  );
}
