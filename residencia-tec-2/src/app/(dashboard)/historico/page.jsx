'use client';

import { Filter, Pencil } from 'lucide-react';
import Image from 'next/image';

// Componente interno para o Card de Histórico (para não repetir código)
function HistoryCard({ date, start, end, duration, hasExtra, hasAvatar }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-3xl mb-6 relative">
      
      {/* Cabeçalho do Card */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-black dark:text-white">{date}</h3>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <Pencil className="w-4 h-4" />
        </button>
      </div>

      {/* Informações de Texto */}
      <div className="flex gap-8 text-xs font-bold text-black dark:text-white mb-6">
        <div>
            <span>Início da jornada: </span>
            <span>{start}</span>
        </div>
        <div>
            <span>Fim da jornada: </span>
            <span>{end}</span>
        </div>
        <div>
            <span>Duração: </span>
            <span>{duration}</span>
        </div>
      </div>

      {/* LINHA DO TEMPO (Timeline) */}
      <div className="relative pt-5"> 
        
        {/* Rótulos de Hora (Posicionados "na mão" para bater com a imagem) */}
        <div className="absolute top-0 w-full flex text-[10px] font-bold text-black dark:text-gray-300">
            <span className="absolute left-0">09:00</span>
            <span className="absolute left-[28%]">11:00</span>
            <span className="absolute left-[45%]">13:00</span>
            <span className="absolute left-[65%]">15:00</span>
            <span className="absolute left-[82%]">17:00</span>
            {hasExtra && <span className="absolute left-[92%]">20:00</span>}
            <span className="absolute right-0">23:59</span>
        </div>

        {/* Barras Coloridas */}
        <div className="flex h-8 w-full rounded-lg overflow-hidden mt-1 text-[10px] font-bold text-white text-center leading-8">
            
            {/* 1. Trabalho (Roxo) */}
            <div className="w-[28%] bg-[#94a3e6] flex items-center justify-center">
                Horário de trabalho
            </div>

            {/* 2. Intervalo (Verde) */}
            <div className="w-[17%] bg-[#10b981] flex items-center justify-center mx-1 rounded-sm">
                Intervalo
            </div>

            {/* 3. Trabalho (Roxo) */}
            <div className="w-[37%] bg-[#94a3e6] flex items-center justify-center mr-1 rounded-sm">
                Horário de trabalho
            </div>

            {/* 4. Hora Extra ou Vazio */}
            {hasExtra ? (
                <>
                    <div className="w-[10%] bg-[#f87171] flex items-center justify-center rounded-sm mr-1">
                        Hora extra
                    </div>
                     <div className="flex-1 bg-gray-200 dark:bg-gray-700"></div>
                </>
            ) : (
                <div className="flex-1 bg-gray-200 dark:bg-gray-700"></div>
            )}
        </div>

      </div>
    </div>
  );
}

export default function HistoricoPage() {
  return (
    <div className="max-w-5xl mx-auto pb-10">
      
      {/* Seção 1: Últimas Atualizações */}
      <h2 className="text-xl font-bold text-black dark:text-white mb-4">Últimas atualizações</h2>
      
      <HistoryCard 
        date="Hoje"
        start="9:00"
        end="17:00"
        duration="8h 0min"
        hasExtra={false}
        hasAvatar={true} // Mostra a fotinha
      />

      {/* Filtro Semanal */}
      <div className="flex items-center mb-6 mt-8">
        <Filter className="w-5 h-5 text-gray-500 mr-2" />
        <div className="relative">
            <span className="text-gray-500 text-sm border-b-2 border-gray-200 pb-1 px-1 font-medium">Semanal</span>
        </div>
      </div>

      {/* Seção 2: Histórico Passado */}
      <h2 className="text-xl font-bold text-black dark:text-white mb-4">Histórico</h2>

      <HistoryCard 
        date="Terça, 18 Nov"
        start="9:00"
        end="17:00"
        duration="8h 0min"
        hasExtra={true} // Tem barra vermelha
      />

      <HistoryCard 
        date="Segunda, 17 Nov"
        start="9:00"
        end="17:00"
        duration="8h 0min"
        hasExtra={true} // Tem barra vermelha
      />

    </div>
  );
}