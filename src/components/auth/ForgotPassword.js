import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../../styles/theme.css';
const ForgotPassword = ({ onSubmit, onCancel }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
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
        }
        catch (err) {
            setError('Não foi possível enviar o e-mail de recuperação. Tente novamente.');
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsx("div", { className: "forgot-password-container", children: _jsxs("div", { className: "forgot-password-card card", children: [_jsxs("div", { className: "forgot-password-header", children: [_jsx("h2", { children: "Recupera\u00E7\u00E3o de Senha" }), _jsx("p", { children: "Informe seu e-mail para receber instru\u00E7\u00F5es de recupera\u00E7\u00E3o" })] }), error && (_jsx("div", { className: "error-message", children: error })), success ? (_jsxs("div", { className: "success-message", children: [_jsx("p", { children: "E-mail de recupera\u00E7\u00E3o enviado com sucesso!" }), _jsx("p", { children: "Verifique sua caixa de entrada e siga as instru\u00E7\u00F5es." }), _jsx("button", { onClick: onCancel, className: "btn btn-primary", children: "Voltar para o Login" })] })) : (_jsxs("form", { onSubmit: handleSubmit, className: "forgot-password-form", children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "email", children: "E-mail" }), _jsx("input", { type: "email", id: "email", className: "input", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "seu@email.com", required: true })] }), _jsxs("div", { className: "form-actions", children: [_jsx("button", { type: "button", className: "btn btn-ghost", onClick: onCancel, disabled: isLoading, children: "Cancelar" }), _jsx("button", { type: "submit", className: "btn btn-primary", disabled: isLoading, children: isLoading ? 'Enviando...' : 'Enviar' })] })] }))] }) }));
};
export default ForgotPassword;
