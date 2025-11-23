'use client';

import { useState } from 'react';
import { CustomCalendar } from '../../components/CustomCalendarToferias';

export default function FeriasPage() {
  
 
  const [history, setHistory] = useState([
    { ano: '2024', periodo: '10/jan - 24/jan', dias: 14, status: 'Tiradas' },
    { ano: '2023', periodo: '05/ago - 19/ago', dias: 14, status: 'Tiradas' },
  ]);

  
  const [selectedRange, setSelectedRange] = useState({ start: null, end: null });

  
  const handleSolicitarFerias = () => {
    const { start, end } = selectedRange;

    
    if (!start || !end) {
      alert("Por favor, selecione uma data de início e fim no calendário.");
      return;
    }

    
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; 

    
    const options = { day: '2-digit', month: 'short' };
    const startStr = start.toLocaleDateString('pt-BR', options).replace('.', '');
    const endStr = end.toLocaleDateString('pt-BR', options).replace('.', '');
    const yearStr = start.getFullYear().toString();

   
    const newEntry = {
      ano: yearStr,
      periodo: `${startStr} - ${endStr}`,
      dias: diffDays,
      status: 'Em análise' 
    };

    
    setHistory([newEntry, ...history]);

    
    alert(`Férias solicitadas com sucesso! (${diffDays} dias)`);
  };

  
  const getStatusColor = (status) => {
    if (status === 'Em análise') return 'text-red-400 font-medium';
    if (status === 'Tiradas') return 'text-green-500 font-medium';
    return 'text-gray-500';
  };

  return (
    <div className="max-w-5xl mx-auto pb-10">
      
      
      <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-sm mb-10 border border-gray-200 dark:border-gray-700">
        <h2 className="font-bold text-lg text-black dark:text-white mb-2">Saldo de férias</h2>
        <p className="text-center text-xl text-gray-700 dark:text-gray-300">
            Você possui <span className="font-bold text-black dark:text-white">18 dias</span> disponíveis para férias
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start mb-12">
        
        <div className="flex-1 w-full flex justify-center lg:justify-start">
           
            <CustomCalendar onRangeSelect={setSelectedRange} />
        </div>

        <div className="flex-1 w-full pt-4">
            <h3 className="text-xl font-serif font-bold text-center lg:text-left text-black dark:text-white mb-8">
                Marque os dias do calendário
            </h3>

            <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
                <button className="w-full py-3 rounded-full bg-purple-200 hover:bg-purple-300 text-purple-700 font-bold text-lg transition-colors shadow-sm">
                    Vender férias
                </button>

                
                <button 
                  onClick={handleSolicitarFerias}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-md"
                >
                    Solicitar férias
                </button>
            </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-black dark:text-white mb-4 pl-1">Histórico</h2>
      
      <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-8 shadow-sm">
        <div className="grid grid-cols-4 mb-6 text-lg font-bold text-black dark:text-white text-center">
            <div>Ano</div>
            <div>Período</div>
            <div>Dias</div>
            <div>Status</div>
        </div>

        <div className="space-y-6">
            {history.map((item, index) => (
                <div key={index} className="grid grid-cols-4 text-center items-center text-gray-700 dark:text-gray-300 text-sm md:text-base animate-fade-in">
                    <div className="font-medium">{item.ano}</div>
                    <div>{item.periodo}</div>
                    <div>{item.dias}</div>
                    <div className={getStatusColor(item.status)}>
                        {item.status}
                    </div>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
}