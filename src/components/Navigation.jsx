// src/components/Navigation.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">Cloyd Inoc</div>

      {/* Burger Icon */}
      <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/scheduling" onClick={closeMenu}>Scheduling</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}
