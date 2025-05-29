import React from 'react';
import '../../styles/theme.css';

interface SidebarProps {
  userType: 'admin' | 'client';
}

const Sidebar: React.FC<SidebarProps> = ({ userType }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Trendly Hub</h2>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <a href="/dashboard" className="sidebar-link">
              <span className="sidebar-icon">📊</span>
              <span className="sidebar-text">Dashboard</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="/education" className="sidebar-link">
              <span className="sidebar-icon">📚</span>
              <span className="sidebar-text">Educação</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="/calendar" className="sidebar-link">
              <span className="sidebar-icon">📅</span>
              <span className="sidebar-text">Calendário</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="/todos" className="sidebar-link">
              <span className="sidebar-icon">✓</span>
              <span className="sidebar-text">To-Dos</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="/invoices" className="sidebar-link">
              <span className="sidebar-icon">💰</span>
              <span className="sidebar-text">Faturas</span>
            </a>
          </li>
        </ul>
      </nav>
      
      {userType === 'admin' && (
        <div className="sidebar-admin-section">
          <h3 className="sidebar-section-title">Administração</h3>
          <ul className="sidebar-menu">
            <li className="sidebar-item">
              <a href="/admin/users" className="sidebar-link">
                <span className="sidebar-icon">👥</span>
                <span className="sidebar-text">Usuários</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="/admin/content" className="sidebar-link">
                <span className="sidebar-icon">📝</span>
                <span className="sidebar-text">Conteúdo</span>
              </a>
            </li>
          </ul>
        </div>
      )}
      
      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar"></div>
          <div className="user-info">
            <p className="user-name">Usuário Trendly</p>
            <p className="user-role">{userType === 'admin' ? 'Administrador' : 'Cliente'}</p>
          </div>
        </div>
        <a href="/logout" className="logout-button">Sair</a>
      </div>
    </aside>
  );
};

export default Sidebar;
