import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAdmin = false 
}) => {
  const { isAuthenticated, userType } = useAuth();
  const location = useLocation();

  // Se não estiver autenticado, redireciona para login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Se a rota requer admin e o usuário não é admin, redireciona para dashboard
  if (requireAdmin && userType !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  // Se passou pelas verificações, renderiza o conteúdo
  return <>{children}</>;
};

export default ProtectedRoute;
