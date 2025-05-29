import React from 'react';
import '../../styles/theme.css';

interface PWAInstallPromptProps {
  onInstall: () => void;
  onDismiss: () => void;
}

const PWAInstallPrompt: React.FC<PWAInstallPromptProps> = ({ onInstall, onDismiss }) => {
  return (
    <div className="pwa-install-prompt">
      <div className="prompt-content">
        <div className="prompt-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="prompt-text">
          <h3>Instale o Trendly Hub</h3>
          <p>Adicione à tela inicial para acesso rápido e recursos offline</p>
        </div>
        <div className="prompt-actions">
          <button className="btn btn-ghost" onClick={onDismiss}>
            Agora não
          </button>
          <button className="btn btn-primary" onClick={onInstall}>
            Instalar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
