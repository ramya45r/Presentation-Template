import React from 'react';
import './Header.css';

const Header = ({ toggleTheme }) => (
  <header className="header">
    <h1>Presentation Template</h1>
    <button onClick={toggleTheme}>
        Toggle Theme
      </button>
  </header>
);

export default Header;
