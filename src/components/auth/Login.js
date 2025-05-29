import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../../styles/theme.css';
const Login = ({ onLogin, onForgotPassword }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Por favor, preencha todos os campos');
            return;
        }
        setError('');
        setIsLoading(true);
        try {
            // Simulação de autenticação
            await new Promise(resolve => setTimeout(resolve, 1000));
            onLogin(email, password);
        }
        catch (err) {
            setError('Falha na autenticação. Verifique suas credenciais.');
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsx("div", { className: "login-container", children: _jsxs("div", { className: "login-card card", children: [_jsxs("div", { className: "login-header", children: [_jsx("h2", { children: "Trendly Hub" }), _jsx("p", { children: "Fa\u00E7a login para acessar sua conta" })] }), error && (_jsx("div", { className: "error-message", children: error })), _jsxs("form", { onSubmit: handleSubmit, className: "login-form", children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "email", children: "E-mail" }), _jsx("input", { type: "email", id: "email", className: "input", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "seu@email.com", required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "password", children: "Senha" }), _jsx("input", { type: "password", id: "password", className: "input", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Sua senha", required: true })] }), _jsx("button", { type: "submit", className: "btn btn-primary login-btn", disabled: isLoading, children: isLoading ? 'Entrando...' : 'Entrar' })] }), _jsx("div", { className: "login-footer", children: _jsx("button", { onClick: onForgotPassword, className: "forgot-password-link", children: "Esqueceu sua senha?" }) })] }) }));
};
export default Login;
