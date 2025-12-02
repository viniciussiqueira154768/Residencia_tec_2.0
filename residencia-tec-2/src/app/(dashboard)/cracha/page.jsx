'use client';

import { Clock } from '../../components/Clock';
import { DigitalBadge } from '../../components/DigitalBadge';

export default function CrachaPage() {
  const userData = {
    id: 12345,
    name: "John Alfredo",
    role: "Desenvolvedor Fullstack",
    photoUrl: "/avatar.svg" 
  };

  return (
    <div className="max-w-4xl mx-auto pb-10">
      
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-300">
          Crachá Digital
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Sua identificação virtual para acesso à empresa.
        </p>
      </div>

     
      <Clock />

     
      <div className="mt-12 flex flex-col items-center justify-center">
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6 text-sm">
            Aproxime este QR Code do leitor na portaria ou catraca.
        </p>
        
        
        <DigitalBadge user={userData} />
      </div>

    </div>
  );
}