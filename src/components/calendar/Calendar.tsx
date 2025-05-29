import React, { useState } from 'react';
import '../../styles/theme.css';

interface CalendarProps {
  events: {
    id: string;
    title: string;
    description: string;
    date: string;
    format: string;
    objective: string;
    cta?: string;
    indicator?: string;
  }[];
  userType: 'admin' | 'client';
}

const Calendar: React.FC<CalendarProps> = ({ events, userType }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');
  
  // Função para obter eventos de uma data específica
  const getEventsForDate = (date: Date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };
  
  // Renderiza o grid do calendário mensal
  const renderMonthView = () => {
    const monthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const monthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    const startDate = new Date(monthStart);
    const endDate = new Date(monthEnd);
    
    // Ajusta para começar na semana
    const startDay = startDate.getDay();
    startDate.setDate(startDate.getDate() - startDay);
    
    // Ajusta para terminar na semana
    const endDay = endDate.getDay();
    endDate.setDate(endDate.getDate() + (6 - endDay));
    
    const rows = [];
    let days = [];
    let day = new Date(startDate);
    
    // Gera as semanas do mês
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = new Date(day);
        const dayEvents = getEventsForDate(cloneDay);
        const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
        const isToday = day.toDateString() === new Date().toDateString();
        const isSelected = selectedDate && day.toDateString() === selectedDate.toDateString();
        
        days.push(
          <div 
            key={day.toISOString()} 
            className={`calendar-day ${isCurrentMonth ? 'current-month' : 'other-month'} ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${dayEvents.length > 0 ? 'has-events' : ''}`}
            onClick={() => setSelectedDate(new Date(cloneDay))}
          >
            <div className="day-header">
              <span className="day-number">{day.getDate()}</span>
            </div>
            <div className="day-events">
              {dayEvents.slice(0, 2).map(event => (
                <div key={event.id} className="day-event-indicator">
                  <span className="event-title">{event.title}</span>
                </div>
              ))}
              {dayEvents.length > 2 && (
                <div className="more-events">+{dayEvents.length - 2} mais</div>
              )}
            </div>
          </div>
        );
        
        day.setDate(day.getDate() + 1);
      }
      
      rows.push(
        <div key={day.toISOString()} className="calendar-week">
          {days}
        </div>
      );
      days = [];
    }
    
    return <div className="calendar-month">{rows}</div>;
  };
  
  // Renderiza a visualização de eventos do dia selecionado
  const renderDayEvents = () => {
    if (!selectedDate) return null;
    
    const dayEvents = getEventsForDate(selectedDate);
    
    return (
      <div className="day-events-list">
        <h3 className="day-title">
          {selectedDate.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
        </h3>
        
        {dayEvents.length === 0 ? (
          <p className="no-events">Nenhum evento para esta data</p>
        ) : (
          <div className="events-container">
            {dayEvents.map(event => (
              <div key={event.id} className="event-card card">
                <div className="event-header">
                  <h4 className="event-title">{event.title}</h4>
                  <span className="event-format">{event.format}</span>
                </div>
                <p className="event-description">{event.description}</p>
                <div className="event-details">
                  <div className="event-detail">
                    <span className="detail-label">Objetivo:</span>
                    <span className="detail-value">{event.objective}</span>
                  </div>
                  {event.cta && (
                    <div className="event-detail">
                      <span className="detail-label">CTA:</span>
                      <span className="detail-value">{event.cta}</span>
                    </div>
                  )}
                  {event.indicator && (
                    <div className="event-detail">
                      <span className="detail-label">Indicador:</span>
                      <span className="detail-value">{event.indicator}</span>
                    </div>
                  )}
                </div>
                
                {userType === 'admin' && (
                  <div className="admin-controls">
                    <button className="btn btn-ghost">Editar</button>
                    <button className="btn btn-ghost">Remover</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {userType === 'admin' && (
          <button className="btn btn-primary add-event-btn">
            Adicionar Evento
          </button>
        )}
      </div>
    );
  };
  
  // Navega para o mês anterior
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  // Navega para o próximo mês
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  // Retorna ao mês atual
  const goToToday = () => {
    setCurrentMonth(new Date());
    setSelectedDate(new Date());
  };
  
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>Calendário de Conteúdo</h2>
        
        <div className="calendar-controls">
          <div className="view-controls">
            <button 
              className={`view-btn ${viewMode === 'month' ? 'active' : ''}`}
              onClick={() => setViewMode('month')}
            >
              Mês
            </button>
            <button 
              className={`view-btn ${viewMode === 'week' ? 'active' : ''}`}
              onClick={() => setViewMode('week')}
            >
              Semana
            </button>
            <button 
              className={`view-btn ${viewMode === 'day' ? 'active' : ''}`}
              onClick={() => setViewMode('day')}
            >
              Dia
            </button>
          </div>
          
          <div className="navigation-controls">
            <button className="nav-btn" onClick={prevMonth}>
              &lt;
            </button>
            <h3 className="current-month-title">
              {currentMonth.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
            </h3>
            <button className="nav-btn" onClick={nextMonth}>
              &gt;
            </button>
            <button className="today-btn" onClick={goToToday}>
              Hoje
            </button>
          </div>
        </div>
      </div>
      
      <div className="calendar-body">
        <div className="weekdays">
          <div className="weekday">Dom</div>
          <div className="weekday">Seg</div>
          <div className="weekday">Ter</div>
          <div className="weekday">Qua</div>
          <div className="weekday">Qui</div>
          <div className="weekday">Sex</div>
          <div className="weekday">Sáb</div>
        </div>
        
        {renderMonthView()}
      </div>
      
      {selectedDate && renderDayEvents()}
    </div>
  );
};

export default Calendar;
