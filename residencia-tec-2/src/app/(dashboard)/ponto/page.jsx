'use client';

import Image from 'next/image';
import { useState } from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import { Clock } from '../../components/Clock';
import dynamic from 'next/dynamic';


const Map = dynamic(() => import('../../components/Map'), { 
  ssr: false, 
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse"></div>
});

export default function PontoPage() {
  
  const [endereco, setEndereco] = useState("Buscando endereço...");
  const [coords, setCoords] = useState(null);
  const [loadingAddress, setLoadingAddress] = useState(true);

  
  const handlePositionFound = async (lat, lng) => {
    setCoords({ lat, lng });
    
    try {
      
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
      const data = await response.json();
      
      
      if (data && data.address) {
        const rua = data.address.road || data.address.pedestrian || "Rua desconhecida";
        const bairro = data.address.suburb || data.address.neighbourhood || "";
        const cidade = data.address.city || data.address.town || "";
        const estado = data.address.state_district || "PE";
        
        setEndereco(`${rua} - ${bairro}, ${cidade} - ${estado}`);
      } else {
        setEndereco("Endereço não encontrado no mapa.");
      }
    } catch (error) {
      setEndereco("Erro ao carregar nome da rua.");
    } finally {
      setLoadingAddress(false);
    }
  };

  
  const handleRegistrarPonto = (tipo) => {
    if (!coords) {
      alert("Aguarde o mapa localizar você antes de bater o ponto.");
      return;
    }

    const agora = new Date();
    const horaFormatada = agora.toLocaleTimeString('pt-BR');
    const dataFormatada = agora.toLocaleDateString('pt-BR');

   
    const mensagem = `
      ✅ PONTO REGISTRADO COM SUCESSO!
      
      Tipo: ${tipo.toUpperCase()}
      Hora: ${horaFormatada}
      Data: ${dataFormatada}
      Local: ${endereco}
    `;
    
    alert(mensagem);
    console.log("Registro enviado:", { tipo, data: agora, coords, endereco });
  };

  return (
    <div className="max-w-4xl mx-auto pb-10">
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-300">
          Bem-vindo(a), John
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Como será sua jornada hoje?
        </p>
      </div>

      <Clock />

      
      <div className="mb-8 relative rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-gray-700 h-[400px]">
        
        
        <Map onPositionChange={handlePositionFound} />

        
        <div className="absolute top-4 right-4 rounded-full border-4 border-white shadow-md overflow-hidden z-[400]">
          <Image src="/avatar-john.png" alt="Avatar" width={50} height={50} />
        </div>

        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-3 px-6 rounded-full shadow-xl z-[400] w-max max-w-[90%] flex items-center gap-3 border border-purple-100 dark:border-gray-700">
            <div className={`w-2 h-2 rounded-full ${loadingAddress ? 'bg-yellow-400 animate-ping' : 'bg-green-500'}`}></div>
            <p className="text-purple-700 dark:text-purple-300 font-medium text-sm sm:text-base truncate flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="truncate max-w-[250px] sm:max-w-md">
                  {loadingAddress ? "Detectando localização..." : endereco}
                </span>
            </p>
        </div>
      </div>

      
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => handleRegistrarPonto('Entrada/Saída')}
          className="flex-1 bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white font-bold text-lg py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-6 h-6" />
          Bater ponto
        </button>
        
        <button 
          onClick={() => handleRegistrarPonto('Intervalo')}
          className="flex-1 bg-gradient-to-r from-fuchsia-400 to-purple-300 hover:from-fuchsia-500 hover:to-purple-400 text-white font-bold text-lg py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
        >
          
          Intervalo
        </button>
      </div>
    </div>
  );
}