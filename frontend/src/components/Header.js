import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Link to="/" className="brand" aria-label="Fusion home">
          Fusion
        </Link>
        <nav className="header-actions">
          <Link to="#" className="login-link">Log in</Link>
          <Link to="/add-user" className="signup-button">Sign up</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
