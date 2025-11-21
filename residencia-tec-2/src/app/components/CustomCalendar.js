'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function CustomCalendar() {
  // Estado para a data atual (para saber qual mês mostrar)
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Estado para o dia selecionado (começa com o dia de hoje)
  const [selectedDate, setSelectedDate] = useState(new Date());

  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  // Funções auxiliares de Data
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Variáveis para renderização
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0 a 11
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayIndex = getFirstDayOfMonth(currentDate); // 0 (Domingo) a 6 (Sábado)

  // Formatador de Mês (ex: "Novembro")
  const monthName = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(currentDate);
  // Capitalizar a primeira letra (pt-BR retorna minúsculo)
  const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);

  // Array de dias vazios (padding) para alinhar o dia 1
  const emptyDays = Array.from({ length: firstDayIndex });
  
  // Array de dias do mês
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Função para verificar se o dia renderizado é o dia selecionado
  const isSelected = (day) => {
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  // Função para selecionar um dia
  const handleDayClick = (day) => {
    setSelectedDate(new Date(year, month, day));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 w-full max-w-sm mx-auto border border-gray-100 dark:border-gray-700">
      {/* Cabeçalho: Navegação de Mês */}
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={handlePrevMonth}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
        >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
        
        <span className="font-bold text-gray-800 dark:text-white text-lg">
          {capitalizedMonth} - {year}
        </span>
        
        <button 
          onClick={handleNextMonth}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
        >
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Dias da Semana */}
      <div className="grid grid-cols-7 mb-2">
        {weekDays.map((day, index) => (
          <div key={index} className="text-center text-xs font-bold text-gray-400 dark:text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Grade de Dias */}
      <div className="grid grid-cols-7 gap-1">
        {/* Espaços vazios antes do dia 1 */}
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} className="p-2"></div> 
        ))}

        {/* Dias Reais */}
        {days.map((day) => {
          const active = isSelected(day);
          return (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              className={`
                w-10 h-10 flex items-center justify-center rounded-full text-sm transition-all duration-200
                ${active 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-200 font-bold transform scale-105' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 hover:text-purple-600'}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}