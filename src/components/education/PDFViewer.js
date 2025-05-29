import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../../styles/theme.css';
const PDFViewer = ({ pdfUrl, title, totalPages, initialProgress = 0, onProgressUpdate }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesRead, setPagesRead] = useState(initialProgress);
    // Simula a mudança de página e atualiza o progresso
    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > totalPages)
            return;
        setCurrentPage(newPage);
        // Atualiza páginas lidas se for uma nova página
        if (newPage > pagesRead) {
            const newPagesRead = newPage;
            setPagesRead(newPagesRead);
            onProgressUpdate && onProgressUpdate(newPagesRead);
        }
    };
    // Calcula a porcentagem de progresso
    const progressPercentage = Math.round((pagesRead / totalPages) * 100);
    return (_jsxs("div", { className: "pdf-viewer", children: [_jsxs("div", { className: "pdf-viewer-header", children: [_jsx("h2", { className: "pdf-title", children: title }), _jsxs("div", { className: "pdf-progress", children: [_jsx("div", { className: "progress-bar", children: _jsx("div", { className: "progress-fill", style: { width: `${progressPercentage}%` } }) }), _jsxs("span", { className: "progress-text", children: [progressPercentage, "% lido"] })] })] }), _jsx("div", { className: "pdf-container", children: _jsxs("div", { className: "pdf-placeholder", children: [_jsxs("p", { children: ["Visualizador de PDF - P\u00E1gina ", currentPage, " de ", totalPages] }), _jsxs("p", { children: ["URL do PDF: ", pdfUrl] })] }) }), _jsxs("div", { className: "pdf-controls", children: [_jsx("button", { className: "btn btn-secondary", onClick: () => handlePageChange(currentPage - 1), disabled: currentPage === 1, children: "Anterior" }), _jsxs("span", { className: "page-indicator", children: ["P\u00E1gina ", currentPage, " de ", totalPages] }), _jsx("button", { className: "btn btn-primary", onClick: () => handlePageChange(currentPage + 1), disabled: currentPage === totalPages, children: "Pr\u00F3xima" })] })] }));
};
export default PDFViewer;
