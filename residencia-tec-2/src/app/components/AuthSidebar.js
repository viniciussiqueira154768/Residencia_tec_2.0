'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';


function AuthNavigation() {
  const pathname = usePathname();
 

  const backButtonPages = [
    '/recuperar-senha',
    '/conta-criada',
    '/sessao-encerrada',
    '/recuperar-senha-validacao'
  ];
  
  
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
  const isCadastro = pathname === '/cadastro';

  return (
    <nav className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex flex-col items-end">
      
 
      <div 
        className={`
          absolute right-0 bg-white dark:bg-gray-900 rounded-l-full shadow-lg 
          h-[87px] w-[301.14px] -z-10
          transition-all duration-500 ease-in-out
          ${isCadastro ? 'translate-y-[87px]' : 'translate-y-0'} 
        `}
      />

      
      <Link 
        href="/login"
        className={`
          h-[87px] w-[301.14px] flex items-center justify-center text-lg transition-colors duration-500 z-20
          ${!isCadastro 
            ? 'font-bold text-purple-700 dark:text-purple-300' 
            : 'text-white/70 dark:text-gray-400 hover:text-white font-medium' 
          }
        `}
      >
        Login
      </Link>

   
      <Link 
        href="/cadastro" 
        className={`
          h-[87px] w-[301.14px] flex items-center justify-center text-lg transition-colors duration-500 z-20
          ${isCadastro 
            ? 'font-bold text-black dark:text-gray-100' 
            : 'text-white/70 dark:text-gray-400 hover:text-white font-medium' 
          }
        `}
      >
        Cadastrar
      </Link>
    </nav>
  );
}

// --- Componente Principal ---
export function AuthSidebar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const backgroundImage = mounted && resolvedTheme === 'dark' 
    ? 'url("/SidebarEscuro.jpeg")' 
    : 'url("/SidebarClaro.svg")';

  return (
    <div 
      className="relative flex flex-1 flex-col justify-between p-8 overflow-hidden transition-all duration-500 h-full w-full"
      style={{ 
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
      <div className="flex items-center space-x-4 z-10">
        <ThemeSwitcher />
        <Image
          src="/language.svg" 
          alt="Pt-BR"
          width={28}
          height={28}
          className="rounded-full shadow-md"
        />
      </div>
          
      <AuthNavigation /> 
    
      <div className="absolute -bottom-16 -right-16 w-48 h-48 border-[1.5rem] border-purple-300/30 dark:border-white/5 rounded-full" />
      <div className="absolute -bottom-8 -right-8 w-32 h-32 border-8 border-purple-300/30 dark:border-white/5 rounded-full" />
      <div className="absolute -top-16 -right-16 w-48 h-48 border-[1.5rem] border-purple-300/30 dark:border-white/5 rounded-full" />
      
    </div>
  );
}