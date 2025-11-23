'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export function CustomCalendar({ onRangeSelect }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  
  const [range, setRange] = useState({ start: null, end: null });

  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayIndex = getFirstDayOfMonth(currentDate);

  const monthName = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(currentDate);
  const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  
  const emptyDays = Array.from({ length: firstDayIndex });
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  
  const handleDayClick = (day) => {
    const clickedDate = new Date(year, month, day);
    let newRange = { ...range };

   
    if (!range.start || (range.start && range.end)) {
      newRange = { start: clickedDate, end: null };
    } 
    
    else if (clickedDate >= range.start) {
      newRange = { start: range.start, end: clickedDate };
    } 
    
    else {
      newRange = { start: clickedDate, end: range.start };
    }

    setRange(newRange);
    
    
    if (onRangeSelect) {
      onRangeSelect(newRange);
    }
  };

  
  const getDayStyle = (day) => {
    const date = new Date(year, month, day);
    const start = range.start;
    const end = range.end;

    
    const isSameDay = (d1, d2) => d1 && d2 && d1.toDateString() === d2.toDateString();
    
    if (isSameDay(date, start) || isSameDay(date, end)) {
      return 'bg-purple-600 text-white font-bold shadow-md scale-105 z-10'; 
    }
    
    if (start && end && date > start && date < end) {
      return 'bg-purple-100 text-purple-700 rounded-none'; 
    }

    return 'text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 w-full max-w-sm mx-auto border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <button onClick={handlePrevMonth} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
        <span className="font-bold text-gray-800 dark:text-white text-lg">
          {capitalizedMonth} - {year}
        </span>
        <button onClick={handleNextMonth} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-2">
        {weekDays.map((day, index) => (
          <div key={index} className="text-center text-xs font-bold text-gray-400 dark:text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {emptyDays.map((_, index) => <div key={`empty-${index}`} className="p-2"></div>)}

        {days.map((day) => (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-sm transition-all ${getDayStyle(day)}`}
            >
              {day}
            </button>
        ))}
      </div>
    </div>
  );
}