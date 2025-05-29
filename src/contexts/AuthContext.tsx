import React, { createContext, useState, useContext, ReactNode } from 'react';

// Definição dos tipos
type UserType = 'admin' | 'client' | null;

interface AuthContextType {
  isAuthenticated: boolean;
  userType: UserType;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Valor padrão do contexto
const defaultAuthContext: AuthContextType = {
  isAuthenticated: false,
  userType: null,
  login: async () => {},
  logout: () => {},
};

// Criação do contexto
const AuthContext = createContext<AuthContextType>(defaultAuthContext);

// Hook personalizado para usar o contexto
export const useAuth = () => useContext(AuthContext);

// Provedor do contexto
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<UserType>(null);

  // Função de login simulada
  const login = async (email: string, _password: string) => {
    // Simulação de autenticação
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Lógica simplificada para determinar o tipo de usuário
    // Em um cenário real, isso viria do backend após autenticação
    const isAdmin = email.includes('admin');
    
    setIsAuthenticated(true);
    setUserType(isAdmin ? 'admin' : 'client');
  };

  // Função de logout
  const logout = () => {
    setIsAuthenticated(false);
    setUserType(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
