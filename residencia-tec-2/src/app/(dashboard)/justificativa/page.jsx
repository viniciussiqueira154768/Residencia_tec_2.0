'use client';

import { Download } from 'lucide-react'; // Ícone da seta para baixo
import { Clock } from '../../components/Clock';
import { CustomCalendar } from '../../components/CustomCalendar';

export default function JustificativaPage() {
  return (
    <div className="max-w-5xl mx-auto">
      
      {/* 1. Relógio no Topo (Reutilizado) */}
      <Clock />

      <h1 className="text-2xl font-medium text-gray-800 dark:text-white mb-6">
        Abono de faltas:
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* 2. Coluna Esquerda: Marque o dia */}
        <div className="flex-1 w-full">
          <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Marque o dia
          </h2>
          <CustomCalendar />
        </div>

        {/* 3. Coluna Direita: Justifique */}
        <div className="flex-1 w-full">
          <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Justifique
          </h2>
          
          {/* Card Branco da Justificativa */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700 h-[364px] flex flex-col justify-between">
            
            {/* Área de Texto */}
            <textarea 
              className="w-full h-32 resize-none bg-transparent border-none focus:ring-0 text-gray-600 dark:text-gray-300 placeholder-gray-400 text-sm p-0"
              placeholder="Digite aqui a sua justificativa"
            ></textarea>

            {/* Botão de Download/Upload de Arquivo */}
            <div className="mt-4">
              <button className="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-4 flex flex-col items-center justify-center text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
                <Download className="w-6 h-6 mb-1 group-hover:text-purple-600 transition-colors" />
                <span className="text-lg font-medium group-hover:text-purple-600 transition-colors">Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Botão Enviar (Centralizado abaixo) */}
      <div className="mt-10 flex justify-center">
        <button className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white font-bold text-lg py-3 px-24 rounded-full shadow-lg shadow-purple-200 dark:shadow-none transition-transform transform hover:-translate-y-1">
          Enviar
        </button>
      </div>

    </div>
  );
}