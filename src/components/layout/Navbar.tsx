import React from 'react';
import '../../styles/theme.css';

interface NavbarProps {
  userType: 'admin' | 'client';
}

const Navbar: React.FC<NavbarProps> = ({ userType }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Trendly Hub</h1>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-links">
            <li className="navbar-item">
              <a href="/education" className="navbar-link">Educação</a>
            </li>
            <li className="navbar-item">
              <a href="/calendar" className="navbar-link">Calendário</a>
            </li>
            <li className="navbar-item">
              <a href="/todos" className="navbar-link">To-Dos</a>
            </li>
            <li className="navbar-item">
              <a href="/invoices" className="navbar-link">Faturas</a>
            </li>
          </ul>
        </div>
        <div className="navbar-profile">
          <span className="profile-badge">{userType === 'admin' ? 'Admin' : 'Cliente'}</span>
          <div className="profile-avatar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
