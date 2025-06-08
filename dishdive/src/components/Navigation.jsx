import React from 'react';

const Navigation = ({ searchTerm, onSearchChange }) => {
  return (
    <nav className="navigation">
      <div className="nav-content">
        <div className="nav-brand">
          <span className="nav-logo">🍽️</span>
          <span className="nav-title">Dish Dive</span>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        <div className="nav-links">
          <a href="#recipes" className="nav-link">Recipes</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
