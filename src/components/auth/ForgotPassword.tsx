import React, { useState } from 'react';
import '../../styles/theme.css';

interface ForgotPasswordProps {
  onSubmit: (email: string) => void;
  onCancel: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onSubmit, onCancel }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Por favor, informe seu e-mail');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    try {
      // Simulação de envio de e-mail
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSubmit(email);
      setSuccess(true);
    } catch (err) {
      setError('Não foi possível enviar o e-mail de recuperação. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card card">
        <div className="forgot-password-header">
          <h2>Recuperação de Senha</h2>
          <p>Informe seu e-mail para receber instruções de recuperação</p>
        </div>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        {success ? (
          <div className="success-message">
            <p>E-mail de recuperação enviado com sucesso!</p>
            <p>Verifique sua caixa de entrada e siga as instruções.</p>
            <button 
              onClick={onCancel}
              className="btn btn-primary"
            >
              Voltar para o Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="forgot-password-form">
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
              />
            </div>
            
            <div className="form-actions">
              <button 
                type="button" 
                className="btn btn-ghost"
                onClick={onCancel}
                disabled={isLoading}
              >
                Cancelar
              </button>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
