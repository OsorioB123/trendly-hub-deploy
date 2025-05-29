import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../../styles/theme.css';
const PDFList = ({ materials, userType }) => {
    const [filter, setFilter] = useState('all');
    // Filtra materiais por categoria
    const filteredMaterials = filter === 'all'
        ? materials
        : materials.filter(material => material.category === filter);
    // Extrai categorias únicas para o filtro
    const categories = ['all', ...new Set(materials.map(m => m.category).filter(Boolean))];
    return (_jsxs("div", { className: "pdf-list", children: [_jsxs("div", { className: "pdf-list-header", children: [_jsx("h2", { children: "Materiais Educativos" }), userType === 'admin' && (_jsx("button", { className: "btn btn-primary", children: "Adicionar Material" }))] }), _jsxs("div", { className: "filter-controls", children: [_jsxs("div", { className: "category-filter", children: [_jsx("span", { children: "Filtrar por: " }), _jsx("div", { className: "filter-options", children: categories.map(category => (_jsx("button", { className: `filter-btn ${filter === category ? 'active' : ''}`, onClick: () => setFilter(category), children: category === 'all' ? 'Todos' : category }, category))) })] }), _jsx("div", { className: "search-filter", children: _jsx("input", { type: "text", placeholder: "Buscar material...", className: "input search-input" }) })] }), _jsx("div", { className: "materials-grid", children: filteredMaterials.map(material => (_jsxs("div", { className: "material-card card", children: [_jsxs("div", { className: "material-header", children: [_jsx("h3", { className: "material-title", children: material.title }), _jsx("span", { className: "material-date", children: material.date })] }), _jsx("p", { className: "material-description", children: material.description }), _jsxs("div", { className: "material-progress", children: [_jsx("div", { className: "progress-bar", children: _jsx("div", { className: "progress-fill", style: { width: `${Math.round((material.progress / material.totalPages) * 100)}%` } }) }), _jsxs("span", { className: "progress-text", children: [Math.round((material.progress / material.totalPages) * 100), "% lido"] })] }), _jsxs("div", { className: "material-footer", children: [_jsx("a", { href: `/education/${material.id}`, className: "btn btn-primary", children: material.progress > 0 ? 'Continuar Leitura' : 'Iniciar Leitura' }), userType === 'admin' && (_jsxs("div", { className: "admin-controls", children: [_jsx("button", { className: "btn btn-ghost", children: "Editar" }), _jsx("button", { className: "btn btn-ghost", children: "Remover" })] }))] })] }, material.id))) })] }));
};
export default PDFList;
