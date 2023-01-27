import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-left">
        <div className="title">My Website</div>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Farms</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
      </div>
    </div>
  );
}

export default Header