'use client';

import { useState, useEffect } from 'react';

export function Clock() {
  const [date, setDate] = useState(null); 
  useEffect(() => {
   
    setDate(new Date());
    
    const timer = setInterval(() => setDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  if (!date) return null; 


  const timeFormatter = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <div className="text-center mb-8">
      
      <h2 className="text-6xl font-extrabold text-purple-800 dark:text-purple-300">
        {timeFormatter.format(date)}
      </h2>
      
      <p className="text-gray-500 dark:text-gray-400 capitalize mt-2">
        {dateFormatter.format(date)}
      </p>
    </div>
  );
}