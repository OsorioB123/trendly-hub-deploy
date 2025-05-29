import React from 'react';
import '../../styles/theme.css';

interface MobileNavProps {
  userType: 'admin' | 'client';
}

const MobileNav: React.FC<MobileNavProps> = ({ userType: _userType }) => {
  return (
    <nav className="mobile-nav">
      <ul className="mobile-nav-list">
        <li className="mobile-nav-item">
          <a href="/education" className="mobile-nav-link">
            <span className="mobile-nav-icon">📚</span>
            <span className="mobile-nav-text">Educação</span>
          </a>
        </li>
        <li className="mobile-nav-item">
          <a href="/calendar" className="mobile-nav-link">
            <span className="mobile-nav-icon">📅</span>
            <span className="mobile-nav-text">Calendário</span>
          </a>
        </li>
        <li className="mobile-nav-item">
          <a href="/todos" className="mobile-nav-link">
            <span className="mobile-nav-icon">✓</span>
            <span className="mobile-nav-text">To-Dos</span>
          </a>
        </li>
        <li className="mobile-nav-item">
          <a href="/invoices" className="mobile-nav-link">
            <span className="mobile-nav-icon">💰</span>
            <span className="mobile-nav-text">Faturas</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
