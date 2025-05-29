import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
// Componentes de layout
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import MobileNav from './components/layout/MobileNav';
// Componentes de autenticação
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
// import ProtectedRoute from './components/auth/ProtectedRoute';
// Componentes de páginas
import PDFList from './components/education/PDFList';
import PDFViewer from './components/education/PDFViewer';
import Calendar from './components/calendar/Calendar';
import TodoList from './components/todos/TodoList';
import InvoicePanel from './components/invoices/InvoicePanel';
import PWAInstallPrompt from './components/pwa/PWAInstallPrompt';
// Dados
import { calendarData, generateTodos, invoiceData, educationMaterials } from './data/calendarData';
// Estilos
import './styles/theme.css';
import './App.css';
const App = () => {
    const [showInstallPrompt, setShowInstallPrompt] = React.useState(false);
    const [userType, setUserType] = React.useState('client');
    // Simulação de detecção de PWA
    React.useEffect(() => {
        // Em um app real, verificaria se o app já está instalado
        setTimeout(() => {
            setShowInstallPrompt(true);
        }, 3000);
    }, []);
    const handleLogin = (email, _password) => {
        // Simulação de login
        const isAdmin = email.includes('admin');
        setUserType(isAdmin ? 'admin' : 'client');
        // Redirecionaria para dashboard
    };
    const handleInstall = () => {
        // Em um app real, usaria a API de instalação de PWA
        setShowInstallPrompt(false);
    };
    const handleDismissInstall = () => {
        setShowInstallPrompt(false);
    };
    // Gera tarefas a partir do calendário
    const todos = generateTodos().map(todo => ({
        ...todo,
        priority: todo.priority
    }));
    // Tipagem correta para invoices
    const typedInvoices = invoiceData.invoices.map(invoice => ({
        ...invoice,
        status: invoice.status
    }));
    return (_jsx(AuthProvider, { children: _jsx(Router, { children: _jsxs("div", { className: "app", children: [_jsx(Navbar, { userType: userType }), _jsxs("div", { className: "app-container", children: [_jsx(Sidebar, { userType: userType }), _jsx("main", { className: "content", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/education", replace: true }) }), _jsx(Route, { path: "/login", element: _jsx(Login, { onLogin: handleLogin, onForgotPassword: () => { } }) }), _jsx(Route, { path: "/forgot-password", element: _jsx(ForgotPassword, { onSubmit: () => { }, onCancel: () => { } }) }), _jsx(Route, { path: "/education", element: _jsx(PDFList, { materials: educationMaterials, userType: userType }) }), _jsx(Route, { path: "/education/:id", element: _jsx(PDFViewer, { pdfUrl: "/sample.pdf", title: "Documento de Exemplo", totalPages: 10, initialProgress: 3, onProgressUpdate: () => { } }) }), _jsx(Route, { path: "/calendar", element: _jsx(Calendar, { events: calendarData, userType: userType }) }), _jsx(Route, { path: "/todos", element: _jsx(TodoList, { todos: todos, userType: userType }) }), _jsx(Route, { path: "/invoices", element: _jsx(InvoicePanel, { invoices: typedInvoices, nextInvoice: invoiceData.nextInvoice, userType: userType }) })] }) })] }), _jsx(MobileNav, { userType: userType }), showInstallPrompt && (_jsx(PWAInstallPrompt, { onInstall: handleInstall, onDismiss: handleDismissInstall }))] }) }) }));
};
export default App;
