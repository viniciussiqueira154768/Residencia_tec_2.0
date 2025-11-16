// src/app/(auth)/layout.js
'use client';

import Link from 'next/link';
import Image from 'next/image'; // Importe o Image
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

// Componente de Navegação Dinâmica (Refinado)
function AuthNavigation() {
  const pathname = usePathname();
  const isAuthPage = (path) => pathname === path;

  // Lista de páginas que mostram "Voltar" em vez de "Login/Cadastrar"
  const backButtonPages = [
    '/recuperar-senha',
    '/conta-criada',
    '/sessao-encerrada'
  ];

  // Se a rota atual estiver na lista, mostre apenas o botão "Voltar"
  if (backButtonPages.includes(pathname)) {
    return (
      <nav className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
        <div className="bg-white dark:bg-gray-900 rounded-l-full shadow-lg flex justify-center py-4 pl-12 pr-8 min-h-[80px]">
          <Link 
            href="/login" 
            className="text-lg font-bold text-purple-700 dark:text-purple-200 hover:opacity-80 transition-opacity"
          >
            Voltar
          </Link>
        </div>
      </nav>
    );
  }

  // Senão, mostre "Login" e "Cadastrar"
  return (
    <nav className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
      {/* O container branco que se projeta */}
      <div className="bg-white dark:bg-gray-900 rounded-l-full shadow-lg flex flex-col justify-center py-6 pr-12 pl-16 min-h-[120px] space-y-2">
        <Link 
          href="/login"
          className={`text-lg transition-colors duration-200 ${
            isAuthPage('/login')
            ? 'font-bold text-purple-700 dark:text-purple-300' 
            : 'text-gray-500 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-300'
          }`}
        >
          Login
        </Link>
        
        <Link 
          href="/cadastro" 
          className={`text-lg transition-colors duration-200 ${
            isAuthPage('/cadastro')
            ? 'font-bold text-purple-700 dark:text-purple-300' 
            : 'text-gray-500 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-300'
          }`}
        >
          Cadastrar
        </Link>
      </div>
    </nav>
  );
}


export default function AuthLayout({ children }) {
  return (
    // <main> usa flex para criar os dois painéis
    <main className="flex min-h-screen">
      
      {/* Painel Esquerdo (Roxo/Lilás) */}
      <div 
        className="relative flex flex-1 flex-col justify-between p-8 bg-gradient-to-br from-purple-100 via-purple-200 to-indigo-200 dark:from-purple-600 dark:via-purple-700 dark:to-indigo-800 overflow-hidden" // Essencial para as curvas decorativas não vazarem
        style={{ flexBasis: '45%' }}
      >
        {/* Topo Esquerdo: Bandeira e ThemeSwitcher */}
        <div className="flex items-center space-x-4 z-10">
          <ThemeSwitcher />
          
          <Image
            src="/bandeira-brasil.png" 
            alt="Bandeira do Brasil"
            width={28}
            height={28}
            className="rounded-full shadow-md"
          />
        </div>
        
        {/* Navegação (Login/Cadastro ou Voltar) */}
        <AuthNavigation /> 

        {/* Curvas Decorativas (Canto Inferior Direito) */}
        <div className="absolute -bottom-16 -right-16 w-48 h-48 border-[1.5rem] border-purple-300/30 dark:border-white/5 rounded-full" />
        <div className="absolute -bottom-8 -right-8 w-32 h-32 border-8 border-purple-300/30 dark:border-white/5 rounded-full" />
        
        {/* Curvas Decorativas (Canto Superior Direito) */}
        <div className="absolute -top-16 -right-16 w-48 h-48 border-[1.5rem] border-purple-300/30 dark:border-white/5 rounded-full" />
        
      </div>

      {/* Painel Direito (Branco/Escuro) */}
      <div 
        className="flex flex-1 flex-col justify-center items-center p-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
        style={{ flexBasis: '55%' }}
      >
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="mb-8 text-center">
            <Image
              src="/webpower-logo.png" 
              alt="WebPower Logo"
              width={220} // Ajustei um pouco o tamanho
              height={110}
              priority
              className="mx-auto"
            />
          </div>
          
          {/* O conteúdo da página (ex: formulário de login) entra aqui */}
          {children}
        </div>
      </div>
    </main>
  );
}