import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
const ProtectedRoute = ({ children, requireAdmin = false }) => {
    const { isAuthenticated, userType } = useAuth();
    const location = useLocation();
    // Se não estiver autenticado, redireciona para login
    if (!isAuthenticated) {
        return _jsx(Navigate, { to: "/login", state: { from: location }, replace: true });
    }
    // Se a rota requer admin e o usuário não é admin, redireciona para dashboard
    if (requireAdmin && userType !== 'admin') {
        return _jsx(Navigate, { to: "/dashboard", replace: true });
    }
    // Se passou pelas verificações, renderiza o conteúdo
    return _jsx(_Fragment, { children: children });
};
export default ProtectedRoute;
