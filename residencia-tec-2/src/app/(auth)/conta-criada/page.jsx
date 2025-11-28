'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { AuthButton } from '../../components/AuthButton';

export default function ContaCriadaPage() {
  return (
    <div className="text-center animate-fade-in">
      <div className="flex justify-center mb-6">
        <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full">
            <CheckCircle className="w-16 h-16 text-purple-600 dark:text-purple-400" />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-purple-900 dark:text-white mb-2">
        Conta criada com sucesso!
      </h1>
      
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xs mx-auto">
        Agora você já pode acessar o sistema WebPower e gerenciar sua jornada.
      </p>

      <Link href="/login" className="block w-full">
        <AuthButton>Ir para Login</AuthButton>
      </Link>
    </div>
  );
}