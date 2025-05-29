import React, { useState } from 'react';
import '../../styles/theme.css';

interface PDFListProps {
  materials: {
    id: string;
    title: string;
    description: string;
    totalPages: number;
    progress: number;
    url: string;
    date: string;
    category?: string;
  }[];
  userType: 'admin' | 'client';
}

const PDFList: React.FC<PDFListProps> = ({ materials, userType }) => {
  const [filter, setFilter] = useState('all');
  
  // Filtra materiais por categoria
  const filteredMaterials = filter === 'all' 
    ? materials 
    : materials.filter(material => material.category === filter);
  
  // Extrai categorias únicas para o filtro
  const categories = ['all', ...new Set(materials.map(m => m.category).filter(Boolean) as string[])];
  
  return (
    <div className="pdf-list">
      <div className="pdf-list-header">
        <h2>Materiais Educativos</h2>
        
        {userType === 'admin' && (
          <button className="btn btn-primary">
            Adicionar Material
          </button>
        )}
      </div>
      
      <div className="filter-controls">
        <div className="category-filter">
          <span>Filtrar por: </span>
          <div className="filter-options">
            {categories.map(category => (
              <button 
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category === 'all' ? 'Todos' : category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="search-filter">
          <input 
            type="text" 
            placeholder="Buscar material..." 
            className="input search-input" 
          />
        </div>
      </div>
      
      <div className="materials-grid">
        {filteredMaterials.map(material => (
          <div key={material.id} className="material-card card">
            <div className="material-header">
              <h3 className="material-title">{material.title}</h3>
              <span className="material-date">{material.date}</span>
            </div>
            
            <p className="material-description">{material.description}</p>
            
            <div className="material-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${Math.round((material.progress / material.totalPages) * 100)}%` }}
                ></div>
              </div>
              <span className="progress-text">
                {Math.round((material.progress / material.totalPages) * 100)}% lido
              </span>
            </div>
            
            <div className="material-footer">
              <a href={`/education/${material.id}`} className="btn btn-primary">
                {material.progress > 0 ? 'Continuar Leitura' : 'Iniciar Leitura'}
              </a>
              
              {userType === 'admin' && (
                <div className="admin-controls">
                  <button className="btn btn-ghost">Editar</button>
                  <button className="btn btn-ghost">Remover</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PDFList;
