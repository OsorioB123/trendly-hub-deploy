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

const App: React.FC = () => {
  const [showInstallPrompt, setShowInstallPrompt] = React.useState(false);
  const [userType, setUserType] = React.useState<'admin' | 'client'>('client');

  // Simulação de detecção de PWA
  React.useEffect(() => {
    // Em um app real, verificaria se o app já está instalado
    setTimeout(() => {
      setShowInstallPrompt(true);
    }, 3000);
  }, []);

  const handleLogin = (email: string, _password: string) => {
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
    priority: todo.priority as 'high' | 'medium' | 'low'
  }));

  // Tipagem correta para invoices
  const typedInvoices = invoiceData.invoices.map(invoice => ({
    ...invoice,
    status: invoice.status as 'paid' | 'pending' | 'overdue'
  }));

  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar userType={userType} />
          
          <div className="app-container">
            <Sidebar userType={userType} />
            
            <main className="content">
              <Routes>
                <Route path="/" element={<Navigate to="/education" replace />} />
                
                <Route path="/login" element={
                  <Login 
                    onLogin={handleLogin} 
                    onForgotPassword={() => {}} 
                  />
                } />
                
                <Route path="/forgot-password" element={
                  <ForgotPassword 
                    onSubmit={() => {}} 
                    onCancel={() => {}} 
                  />
                } />
                
                <Route path="/education" element={
                  <PDFList 
                    materials={educationMaterials} 
                    userType={userType} 
                  />
                } />
                
                <Route path="/education/:id" element={
                  <PDFViewer 
                    pdfUrl="/sample.pdf" 
                    title="Documento de Exemplo" 
                    totalPages={10} 
                    initialProgress={3} 
                    onProgressUpdate={() => {}} 
                  />
                } />
                
                <Route path="/calendar" element={
                  <Calendar 
                    events={calendarData} 
                    userType={userType} 
                  />
                } />
                
                <Route path="/todos" element={
                  <TodoList 
                    todos={todos} 
                    userType={userType} 
                  />
                } />
                
                <Route path="/invoices" element={
                  <InvoicePanel 
                    invoices={typedInvoices} 
                    nextInvoice={invoiceData.nextInvoice} 
                    userType={userType} 
                  />
                } />
              </Routes>
            </main>
          </div>
          
          <MobileNav userType={userType} />
          
          {showInstallPrompt && (
            <PWAInstallPrompt 
              onInstall={handleInstall} 
              onDismiss={handleDismissInstall} 
            />
          )}
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
