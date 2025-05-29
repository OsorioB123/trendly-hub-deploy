import React from 'react';
import '../../styles/theme.css';

interface InvoicePanelProps {
  invoices: {
    id: string;
    amount: number;
    dueDate: string;
    status: 'paid' | 'pending' | 'overdue';
    paymentLink: string;
    description: string;
    period: string;
  }[];
  nextInvoice: {
    amount: number;
    dueDate: string;
    paymentLink: string;
    description: string;
  };
  userType: 'admin' | 'client';
}

const InvoicePanel: React.FC<InvoicePanelProps> = ({ invoices, nextInvoice, userType }) => {
  // Formata valor para moeda brasileira
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };
  
  // Formata data para formato brasileiro
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };
  
  // Retorna classe CSS com base no status da fatura
  const getStatusClass = (status: 'paid' | 'pending' | 'overdue') => {
    switch (status) {
      case 'paid': return 'status-paid';
      case 'pending': return 'status-pending';
      case 'overdue': return 'status-overdue';
      default: return '';
    }
  };
  
  // Retorna texto do status em português
  const getStatusText = (status: 'paid' | 'pending' | 'overdue') => {
    switch (status) {
      case 'paid': return 'Pago';
      case 'pending': return 'Pendente';
      case 'overdue': return 'Atrasado';
      default: return '';
    }
  };
  
  return (
    <div className="invoice-panel">
      <div className="invoice-panel-header">
        <h2>Painel de Faturas</h2>
      </div>
      
      <div className="next-invoice-card card">
        <h3>Próxima Fatura</h3>
        <div className="next-invoice-details">
          <div className="invoice-amount">
            <span className="label">Valor:</span>
            <span className="value">{formatCurrency(nextInvoice.amount)}</span>
          </div>
          <div className="invoice-due-date">
            <span className="label">Data de Vencimento:</span>
            <span className="value">{formatDate(nextInvoice.dueDate)}</span>
          </div>
          <div className="invoice-description">
            <span className="label">Descrição:</span>
            <span className="value">{nextInvoice.description}</span>
          </div>
        </div>
        <a href={nextInvoice.paymentLink} className="btn btn-primary payment-btn" target="_blank" rel="noopener noreferrer">
          Realizar Pagamento
        </a>
      </div>
      
      <div className="invoice-history">
        <h3>Histórico de Faturas</h3>
        
        <div className="invoice-list">
          {invoices.length === 0 ? (
            <p className="no-invoices">Nenhuma fatura encontrada</p>
          ) : (
            <table className="invoice-table">
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Período</th>
                  <th>Valor</th>
                  <th>Vencimento</th>
                  <th>Status</th>
                  {userType === 'admin' && <th>Ações</th>}
                </tr>
              </thead>
              <tbody>
                {invoices.map(invoice => (
                  <tr key={invoice.id}>
                    <td>{invoice.description}</td>
                    <td>{invoice.period}</td>
                    <td>{formatCurrency(invoice.amount)}</td>
                    <td>{formatDate(invoice.dueDate)}</td>
                    <td>
                      <span className={`status-badge ${getStatusClass(invoice.status)}`}>
                        {getStatusText(invoice.status)}
                      </span>
                    </td>
                    {userType === 'admin' && (
                      <td className="invoice-actions">
                        <button className="btn btn-ghost">Editar</button>
                        <button className="btn btn-ghost">Detalhes</button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvoicePanel;
