import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../../styles/theme.css';
const Calendar = ({ events, userType }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [viewMode, setViewMode] = useState('month');
    // Função para obter eventos de uma data específica
    const getEventsForDate = (date) => {
        return events.filter(event => {
            const eventDate = new Date(event.date);
            return (eventDate.getDate() === date.getDate() &&
                eventDate.getMonth() === date.getMonth() &&
                eventDate.getFullYear() === date.getFullYear());
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
                days.push(_jsxs("div", { className: `calendar-day ${isCurrentMonth ? 'current-month' : 'other-month'} ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${dayEvents.length > 0 ? 'has-events' : ''}`, onClick: () => setSelectedDate(new Date(cloneDay)), children: [_jsx("div", { className: "day-header", children: _jsx("span", { className: "day-number", children: day.getDate() }) }), _jsxs("div", { className: "day-events", children: [dayEvents.slice(0, 2).map(event => (_jsx("div", { className: "day-event-indicator", children: _jsx("span", { className: "event-title", children: event.title }) }, event.id))), dayEvents.length > 2 && (_jsxs("div", { className: "more-events", children: ["+", dayEvents.length - 2, " mais"] }))] })] }, day.toISOString()));
                day.setDate(day.getDate() + 1);
            }
            rows.push(_jsx("div", { className: "calendar-week", children: days }, day.toISOString()));
            days = [];
        }
        return _jsx("div", { className: "calendar-month", children: rows });
    };
    // Renderiza a visualização de eventos do dia selecionado
    const renderDayEvents = () => {
        if (!selectedDate)
            return null;
        const dayEvents = getEventsForDate(selectedDate);
        return (_jsxs("div", { className: "day-events-list", children: [_jsx("h3", { className: "day-title", children: selectedDate.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }) }), dayEvents.length === 0 ? (_jsx("p", { className: "no-events", children: "Nenhum evento para esta data" })) : (_jsx("div", { className: "events-container", children: dayEvents.map(event => (_jsxs("div", { className: "event-card card", children: [_jsxs("div", { className: "event-header", children: [_jsx("h4", { className: "event-title", children: event.title }), _jsx("span", { className: "event-format", children: event.format })] }), _jsx("p", { className: "event-description", children: event.description }), _jsxs("div", { className: "event-details", children: [_jsxs("div", { className: "event-detail", children: [_jsx("span", { className: "detail-label", children: "Objetivo:" }), _jsx("span", { className: "detail-value", children: event.objective })] }), event.cta && (_jsxs("div", { className: "event-detail", children: [_jsx("span", { className: "detail-label", children: "CTA:" }), _jsx("span", { className: "detail-value", children: event.cta })] })), event.indicator && (_jsxs("div", { className: "event-detail", children: [_jsx("span", { className: "detail-label", children: "Indicador:" }), _jsx("span", { className: "detail-value", children: event.indicator })] }))] }), userType === 'admin' && (_jsxs("div", { className: "admin-controls", children: [_jsx("button", { className: "btn btn-ghost", children: "Editar" }), _jsx("button", { className: "btn btn-ghost", children: "Remover" })] }))] }, event.id))) })), userType === 'admin' && (_jsx("button", { className: "btn btn-primary add-event-btn", children: "Adicionar Evento" }))] }));
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
    return (_jsxs("div", { className: "calendar-container", children: [_jsxs("div", { className: "calendar-header", children: [_jsx("h2", { children: "Calend\u00E1rio de Conte\u00FAdo" }), _jsxs("div", { className: "calendar-controls", children: [_jsxs("div", { className: "view-controls", children: [_jsx("button", { className: `view-btn ${viewMode === 'month' ? 'active' : ''}`, onClick: () => setViewMode('month'), children: "M\u00EAs" }), _jsx("button", { className: `view-btn ${viewMode === 'week' ? 'active' : ''}`, onClick: () => setViewMode('week'), children: "Semana" }), _jsx("button", { className: `view-btn ${viewMode === 'day' ? 'active' : ''}`, onClick: () => setViewMode('day'), children: "Dia" })] }), _jsxs("div", { className: "navigation-controls", children: [_jsx("button", { className: "nav-btn", onClick: prevMonth, children: "<" }), _jsx("h3", { className: "current-month-title", children: currentMonth.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }) }), _jsx("button", { className: "nav-btn", onClick: nextMonth, children: ">" }), _jsx("button", { className: "today-btn", onClick: goToToday, children: "Hoje" })] })] })] }), _jsxs("div", { className: "calendar-body", children: [_jsxs("div", { className: "weekdays", children: [_jsx("div", { className: "weekday", children: "Dom" }), _jsx("div", { className: "weekday", children: "Seg" }), _jsx("div", { className: "weekday", children: "Ter" }), _jsx("div", { className: "weekday", children: "Qua" }), _jsx("div", { className: "weekday", children: "Qui" }), _jsx("div", { className: "weekday", children: "Sex" }), _jsx("div", { className: "weekday", children: "S\u00E1b" })] }), renderMonthView()] }), selectedDate && renderDayEvents()] }));
};
export default Calendar;
