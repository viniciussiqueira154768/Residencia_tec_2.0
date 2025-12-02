'use client';

import Image from 'next/image';
import QRCode from 'react-qr-code';

export function DigitalBadge({ user }) {
  const qrData = JSON.stringify({
    id: user.id,
    name: user.name,
    role: user.role,
    validUntil: '2025-12-31'
  });

  return (
    <div className="relative overflow-hidden w-full max-w-sm mx-auto bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center z-10 transition-all duration-300 hover:scale-[1.02]">
      
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-400/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-fuchsia-400/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      
      <div className="mb-6 relative w-24 h-8">
        <Image
            src="/logo.svg" 
            alt="WebPower Logo"
            fill 
        />
      </div>

      
      <div className="relative w-32 h-32 mb-6 rounded-full p-1 bg-gradient-to-tr from-purple-400 to-fuchsia-300 shadow-lg">
        <div className="w-full h-full relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
            <Image
            src={user.photoUrl}
            alt={user.name}
            fill
            className="object-cover"
            />
        </div>
      </div>

      
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
        {user.name}
      </h2>
      <p className="text-purple-600 dark:text-purple-300 font-medium mb-8 uppercase tracking-wider text-sm">
        {user.role}
      </p>

      
      <div className="bg-white p-4 rounded-2xl shadow-inner">
        <QRCode 
            value={qrData}
            size={160} 
            fgColor="#4c1d95" 
            bgColor="#ffffff" 
            level="M" 
        />
      </div>
      
      <p className="text-gray-500 dark:text-gray-400 text-xs mt-4">
        ID: {user.id.toString().padStart(6, '0')} • Acesso Corporativo
      </p>
    </div>
  );
}