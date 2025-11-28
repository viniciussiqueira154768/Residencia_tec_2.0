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
     
      <nav className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-full pl-8 flex flex-col items-end">
        
        
        <div 
          className="relative bg-[#ffffff] dark:bg-gray-900 shadow-lg flex justify-center items-center rounded-l-[30px] w-[220px] h-[70px]"
        >
            
           <div className="absolute -top-5 right-0 w-5 h-5 bg-transparent rounded-br-[20px] shadow-[5px_5px_0_0_#ffffff] dark:shadow-[5px_5px_0_0_#111827]" />
           <div className="absolute -bottom-5 right-0 w-5 h-5 bg-transparent rounded-tr-[20px] shadow-[5px_-5px_0_0_#ffffff] dark:shadow-[5px_-5px_0_0_#111827]" />

          <Link 
            href="/login" 
            className="text-lg font-serif font-medium text-[#8C00C6] dark:text-[#ffffff] hover:opacity-80 transition-opacity"
          >
            Voltar
          </Link>
        </div>
      </nav>
    );
  }

 
  const isCadastro = pathname === '/cadastro';

  return (
    <nav className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex flex-col items-end w-full pl-8">
      
      <div className="relative flex flex-col items-end">

       
        <div 
          className={`
            absolute right-0 bg-[#ffffff] dark:bg-gray-900 shadow-lg 
            h-[87px] w-[301.14px] -z-10
            transition-all duration-500 ease-in-out
            rounded-l-[30px]
            ${isCadastro ? 'translate-y-[87px]' : 'translate-y-0'} 
          `}
        >
            
            <div className="absolute -top-5 right-0 w-5 h-5 bg-transparent rounded-br-[20px] shadow-[5px_5px_0_0_#ffffff] dark:shadow-[5px_5px_0_0_#111827]" />
            <div className="absolute -bottom-5 right-0 w-5 h-5 bg-transparent rounded-tr-[20px] shadow-[5px_-5px_0_0_#ffffff] dark:shadow-[5px_-5px_0_0_#111827]" />
        </div>
        
        
        <Link 
          href="/login"
          className={`
            h-[87px] w-[301.14px] flex items-center justify-center text-lg transition-colors duration-500 z-20
            ${!isCadastro 
              ? 'font-serif font-medium text-[#8C00C6] dark:text-[#ffffff] text-[25px]' 
              : 'text-[#000000] dark:text-[#000000] text-[25px] font-serif font-medium' 
            }
          `}
        >
          Login
        </Link>

       
        <Link 
          href="/cadastro" 
          className={`
            h-[87px] w-[301.14px] flex items-center justify-center text-lg transition-colors duration-600 z-20
            ${isCadastro 
              ? 'font-serif font-medium text-[#8C00C6] dark:text-[#ffffff] text-[25px]' 
              : 'text-[#000000] dark:text-[#000000] font-serif font-medium text-[25px]' 
            }
          `}
        >
          Cadastrar
        </Link>

      </div>
    </nav>
  );
}

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
    
    </div>
  );
}