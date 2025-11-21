'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Clock } from '../../components/Clock';
import dynamic from 'next/dynamic'; // Importação Dinâmica

// Carrega o mapa apenas no cliente (navegador) para evitar erros
const Map = dynamic(() => import('../../components/Map'), { 
  ssr: false, // Desabilita renderização no servidor (Server Side Rendering)
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center text-gray-400">Carregando mapa...</div>
});

export default function PontoPage() {
  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Cabeçalho */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-300">
          Bem-vindo(a), John
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Como será sua jornada hoje?
        </p>
      </div>

      <Clock />

      {/* Seção do Mapa Funcional */}
      <div className="mb-8 relative rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-gray-700">
        
        {/* Container do Mapa */}
        <div className="relative h-[400px] w-full bg-gray-100">
           <Map /> 
        </div>

        {/* Avatar Flutuante (Canto superior direito) */}
        <div className="absolute top-4 right-4 rounded-full border-4 border-white shadow-md overflow-hidden z-[400]"> {/* z-index alto para ficar acima do mapa */}
          <Image
            src="/avatar-john.jpg"
            alt="Avatar John"
            width={50}
            height={50}
          />
        </div>

        {/* Endereço Flutuante (Parte inferior) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-3 px-6 rounded-full shadow-lg z-[400] w-max max-w-[90%]">
            <p className="text-purple-700 dark:text-purple-300 font-medium flex items-center gap-2 text-sm sm:text-base">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="truncate">Av. Caxangá, 3841 - Iputinga, Recife - PE</span>
            </p>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white font-bold text-lg py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-1">
          Bater ponto
        </button>
        
        <button className="flex-1 bg-gradient-to-r from-fuchsia-400 to-purple-300 hover:from-fuchsia-500 hover:to-purple-400 text-white font-bold text-lg py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-1">
          Intervalo
        </button>
      </div>
    </div>
  );
}