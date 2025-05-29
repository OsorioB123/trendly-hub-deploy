import React, { useState } from 'react';
import '../../styles/theme.css';

interface TodoListProps {
  todos: {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    completed: boolean;
    priority: 'high' | 'medium' | 'low';
    relatedEvent?: string;
  }[];
  userType: 'admin' | 'client';
}

const TodoList: React.FC<TodoListProps> = ({ todos, userType }) => {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [sortBy, setSortBy] = useState<'dueDate' | 'priority'>('dueDate');
  
  // Filtra tarefas com base no filtro selecionado
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });
  
  // Ordena tarefas com base no critério selecionado
  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sortBy === 'dueDate') {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    } else {
      const priorityValues = { high: 3, medium: 2, low: 1 };
      return priorityValues[b.priority] - priorityValues[a.priority];
    }
  });
  
  // Manipula a marcação de conclusão de uma tarefa
  const handleToggleComplete = (id: string) => {
    // Aqui seria implementada a lógica para atualizar o estado da tarefa
    console.log(`Tarefa ${id} marcada como concluída`);
  };
  
  return (
    <div className="todo-list">
      <div className="todo-list-header">
        <h2>Lista de Tarefas</h2>
        
        {userType === 'admin' && (
          <button className="btn btn-primary">
            Adicionar Tarefa
          </button>
        )}
      </div>
      
      <div className="todo-controls">
        <div className="filter-controls">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todas
          </button>
          <button 
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Ativas
          </button>
          <button 
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Concluídas
          </button>
        </div>
        
        <div className="sort-controls">
          <span>Ordenar por: </span>
          <select 
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'dueDate' | 'priority')}
          >
            <option value="dueDate">Data</option>
            <option value="priority">Prioridade</option>
          </select>
        </div>
      </div>
      
      <div className="todos-container">
        {sortedTodos.length === 0 ? (
          <p className="no-todos">Nenhuma tarefa encontrada</p>
        ) : (
          sortedTodos.map(todo => (
            <div 
              key={todo.id} 
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
            >
              <div className="todo-checkbox">
                <input 
                  type="checkbox" 
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                  id={`todo-${todo.id}`}
                />
                <label htmlFor={`todo-${todo.id}`}></label>
              </div>
              
              <div className="todo-content">
                <div className="todo-header">
                  <h3 className="todo-title">{todo.title}</h3>
                  <span className={`todo-priority priority-${todo.priority}`}>
                    {todo.priority === 'high' ? 'Alta' : todo.priority === 'medium' ? 'Média' : 'Baixa'}
                  </span>
                </div>
                
                <p className="todo-description">{todo.description}</p>
                
                <div className="todo-footer">
                  <span className="todo-due-date">
                    Prazo: {new Date(todo.dueDate).toLocaleDateString('pt-BR')}
                  </span>
                  
                  {todo.relatedEvent && (
                    <span className="todo-related-event">
                      Evento: {todo.relatedEvent}
                    </span>
                  )}
                </div>
              </div>
              
              {userType === 'admin' && (
                <div className="todo-actions">
                  <button className="btn btn-ghost">Editar</button>
                  <button className="btn btn-ghost">Excluir</button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
