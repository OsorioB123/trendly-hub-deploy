import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../../styles/theme.css';
const InvoicePanel = ({ invoices, nextInvoice, userType }) => {
    // Formata valor para moeda brasileira
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };
    // Formata data para formato brasileiro
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('pt-BR');
    };
    // Retorna classe CSS com base no status da fatura
    const getStatusClass = (status) => {
        switch (status) {
            case 'paid': return 'status-paid';
            case 'pending': return 'status-pending';
            case 'overdue': return 'status-overdue';
            default: return '';
        }
    };
    // Retorna texto do status em português
    const getStatusText = (status) => {
        switch (status) {
            case 'paid': return 'Pago';
            case 'pending': return 'Pendente';
            case 'overdue': return 'Atrasado';
            default: return '';
        }
    };
    return (_jsxs("div", { className: "invoice-panel", children: [_jsx("div", { className: "invoice-panel-header", children: _jsx("h2", { children: "Painel de Faturas" }) }), _jsxs("div", { className: "next-invoice-card card", children: [_jsx("h3", { children: "Pr\u00F3xima Fatura" }), _jsxs("div", { className: "next-invoice-details", children: [_jsxs("div", { className: "invoice-amount", children: [_jsx("span", { className: "label", children: "Valor:" }), _jsx("span", { className: "value", children: formatCurrency(nextInvoice.amount) })] }), _jsxs("div", { className: "invoice-due-date", children: [_jsx("span", { className: "label", children: "Data de Vencimento:" }), _jsx("span", { className: "value", children: formatDate(nextInvoice.dueDate) })] }), _jsxs("div", { className: "invoice-description", children: [_jsx("span", { className: "label", children: "Descri\u00E7\u00E3o:" }), _jsx("span", { className: "value", children: nextInvoice.description })] })] }), _jsx("a", { href: nextInvoice.paymentLink, className: "btn btn-primary payment-btn", target: "_blank", rel: "noopener noreferrer", children: "Realizar Pagamento" })] }), _jsxs("div", { className: "invoice-history", children: [_jsx("h3", { children: "Hist\u00F3rico de Faturas" }), _jsx("div", { className: "invoice-list", children: invoices.length === 0 ? (_jsx("p", { className: "no-invoices", children: "Nenhuma fatura encontrada" })) : (_jsxs("table", { className: "invoice-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Descri\u00E7\u00E3o" }), _jsx("th", { children: "Per\u00EDodo" }), _jsx("th", { children: "Valor" }), _jsx("th", { children: "Vencimento" }), _jsx("th", { children: "Status" }), userType === 'admin' && _jsx("th", { children: "A\u00E7\u00F5es" })] }) }), _jsx("tbody", { children: invoices.map(invoice => (_jsxs("tr", { children: [_jsx("td", { children: invoice.description }), _jsx("td", { children: invoice.period }), _jsx("td", { children: formatCurrency(invoice.amount) }), _jsx("td", { children: formatDate(invoice.dueDate) }), _jsx("td", { children: _jsx("span", { className: `status-badge ${getStatusClass(invoice.status)}`, children: getStatusText(invoice.status) }) }), userType === 'admin' && (_jsxs("td", { className: "invoice-actions", children: [_jsx("button", { className: "btn btn-ghost", children: "Editar" }), _jsx("button", { className: "btn btn-ghost", children: "Detalhes" })] }))] }, invoice.id))) })] })) })] })] }));
};
export default InvoicePanel;
