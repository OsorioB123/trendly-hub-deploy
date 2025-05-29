import React, { useState } from 'react';
import '../../styles/theme.css';

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
  totalPages: number;
  initialProgress?: number;
  onProgressUpdate?: (progress: number) => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ 
  pdfUrl, 
  title, 
  totalPages, 
  initialProgress = 0,
  onProgressUpdate 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesRead, setPagesRead] = useState(initialProgress);
  
  // Simula a mudança de página e atualiza o progresso
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    
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
  
  return (
    <div className="pdf-viewer">
      <div className="pdf-viewer-header">
        <h2 className="pdf-title">{title}</h2>
        <div className="pdf-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <span className="progress-text">{progressPercentage}% lido</span>
        </div>
      </div>
      
      <div className="pdf-container">
        {/* Aqui seria integrado o visualizador de PDF real */}
        <div className="pdf-placeholder">
          <p>Visualizador de PDF - Página {currentPage} de {totalPages}</p>
          <p>URL do PDF: {pdfUrl}</p>
        </div>
      </div>
      
      <div className="pdf-controls">
        <button 
          className="btn btn-secondary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span className="page-indicator">
          Página {currentPage} de {totalPages}
        </span>
        <button 
          className="btn btn-primary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;
