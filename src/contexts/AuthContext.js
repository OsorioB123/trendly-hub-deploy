import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useContext } from 'react';
// Valor padrão do contexto
const defaultAuthContext = {
    isAuthenticated: false,
    userType: null,
    login: async () => { },
    logout: () => { },
};
// Criação do contexto
const AuthContext = createContext(defaultAuthContext);
// Hook personalizado para usar o contexto
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userType, setUserType] = useState(null);
    // Função de login simulada
    const login = async (email, _password) => {
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
    return (_jsx(AuthContext.Provider, { value: { isAuthenticated, userType, login, logout }, children: children }));
};
export default AuthContext;
