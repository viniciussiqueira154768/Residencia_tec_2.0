// src/app/(auth)/layout.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from '../components/ThemeSwitcher'; // Importa o botão de tema

// Componente de Navegação Dinâmica
function AuthNavigation() {
  const pathname = usePathname();
  const isAuthPage = (path) => pathname === path;
  
  // Se estiver na página de recuperar senha, mostra só "Voltar"
  if (isAuthPage('/recuperar-senha')) {
    return (
      <nav className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-start z-10">
        <Link 
          href="/login" 
          className="bg-white dark:bg-gray-900 py-4 px-10 rounded-l-full shadow-lg"
        >
          <span className="text-lg font-bold text-gray-900 dark:text-white">Voltar</span>
        </Link>
      </nav>
    );
  }

  // Senão, mostra "Login" e "Cadastrar"
  return (
    <nav className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-start z-10">
      <Link 
        href="/login"
        className={`py-4 px-10 rounded-l-full shadow-lg text-lg ${
          isAuthPage('/login')
          ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-bold' 
          : 'text-purple-700 dark:text-purple-200 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        Login
      </Link>
      
      <Link 
        href="/cadastro" 
        className={`py-4 px-10 rounded-l-full shadow-lg text-lg ${
          isAuthPage('/cadastro')
          ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-bold' 
          : 'text-purple-700 dark:text-purple-200 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        Cadastrar
      </Link>
    </nav>
  );
}


export default function AuthLayout({ children }) {
  return (
    <main className="flex min-h-screen">
      
      {/* Painel Esquerdo */}
      <div 
        className="relative flex flex-1 flex-col justify-center items-center p-8 bg-gradient-to-br from-purple-100 via-purple-200 to-indigo-200 dark:from-purple-600 dark:via-purple-700 dark:to-indigo-800"
        style={{ flexBasis: '45%' }}
      >
        <div className="absolute top-8 left-8">
          <ThemeSwitcher /> {/* Botão de tema aqui */}
        </div>
        
        <AuthNavigation /> 

        <div className="absolute bottom-4 right-4 h-32 w-32 border-b border-r border-purple-300/50dark:border-white/10 rounded-br-full" /> </div>

      {/* Painel Direito */}
      <div 
        className="flex flex-1 flex-col justify-center items-center p-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
        style={{ flexBasis: '55%' }}
      >
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="mb-8 text-center">
            <span className="text-5xl font-bold text-gray-900 dark:text-white">W</span>
            <span className="text-5xl font-bold text-purple-600 dark:text-purple-400">P</span>
            <span className="ml-2 text-3xl font-semibold text-gray-800 dark:text-gray-200">WebPower</span>
          </div>
          
          {children}
        </div>
      </div>
    </main>
  );
}