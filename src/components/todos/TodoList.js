import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../../styles/theme.css';
const TodoList = ({ todos, userType }) => {
    const [filter, setFilter] = useState('all');
    const [sortBy, setSortBy] = useState('dueDate');
    // Filtra tarefas com base no filtro selecionado
    const filteredTodos = todos.filter(todo => {
        if (filter === 'all')
            return true;
        if (filter === 'active')
            return !todo.completed;
        if (filter === 'completed')
            return todo.completed;
        return true;
    });
    // Ordena tarefas com base no critério selecionado
    const sortedTodos = [...filteredTodos].sort((a, b) => {
        if (sortBy === 'dueDate') {
            return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        }
        else {
            const priorityValues = { high: 3, medium: 2, low: 1 };
            return priorityValues[b.priority] - priorityValues[a.priority];
        }
    });
    // Manipula a marcação de conclusão de uma tarefa
    const handleToggleComplete = (id) => {
        // Aqui seria implementada a lógica para atualizar o estado da tarefa
        console.log(`Tarefa ${id} marcada como concluída`);
    };
    return (_jsxs("div", { className: "todo-list", children: [_jsxs("div", { className: "todo-list-header", children: [_jsx("h2", { children: "Lista de Tarefas" }), userType === 'admin' && (_jsx("button", { className: "btn btn-primary", children: "Adicionar Tarefa" }))] }), _jsxs("div", { className: "todo-controls", children: [_jsxs("div", { className: "filter-controls", children: [_jsx("button", { className: `filter-btn ${filter === 'all' ? 'active' : ''}`, onClick: () => setFilter('all'), children: "Todas" }), _jsx("button", { className: `filter-btn ${filter === 'active' ? 'active' : ''}`, onClick: () => setFilter('active'), children: "Ativas" }), _jsx("button", { className: `filter-btn ${filter === 'completed' ? 'active' : ''}`, onClick: () => setFilter('completed'), children: "Conclu\u00EDdas" })] }), _jsxs("div", { className: "sort-controls", children: [_jsx("span", { children: "Ordenar por: " }), _jsxs("select", { className: "sort-select", value: sortBy, onChange: (e) => setSortBy(e.target.value), children: [_jsx("option", { value: "dueDate", children: "Data" }), _jsx("option", { value: "priority", children: "Prioridade" })] })] })] }), _jsx("div", { className: "todos-container", children: sortedTodos.length === 0 ? (_jsx("p", { className: "no-todos", children: "Nenhuma tarefa encontrada" })) : (sortedTodos.map(todo => (_jsxs("div", { className: `todo-item ${todo.completed ? 'completed' : ''}`, children: [_jsxs("div", { className: "todo-checkbox", children: [_jsx("input", { type: "checkbox", checked: todo.completed, onChange: () => handleToggleComplete(todo.id), id: `todo-${todo.id}` }), _jsx("label", { htmlFor: `todo-${todo.id}` })] }), _jsxs("div", { className: "todo-content", children: [_jsxs("div", { className: "todo-header", children: [_jsx("h3", { className: "todo-title", children: todo.title }), _jsx("span", { className: `todo-priority priority-${todo.priority}`, children: todo.priority === 'high' ? 'Alta' : todo.priority === 'medium' ? 'Média' : 'Baixa' })] }), _jsx("p", { className: "todo-description", children: todo.description }), _jsxs("div", { className: "todo-footer", children: [_jsxs("span", { className: "todo-due-date", children: ["Prazo: ", new Date(todo.dueDate).toLocaleDateString('pt-BR')] }), todo.relatedEvent && (_jsxs("span", { className: "todo-related-event", children: ["Evento: ", todo.relatedEvent] }))] })] }), userType === 'admin' && (_jsxs("div", { className: "todo-actions", children: [_jsx("button", { className: "btn btn-ghost", children: "Editar" }), _jsx("button", { className: "btn btn-ghost", children: "Excluir" })] }))] }, todo.id)))) })] }));
};
export default TodoList;
