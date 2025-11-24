
'use client';

import Link from 'next/link';
import Image from 'next/image'; 
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

function AuthNavigation() {
  const pathname = usePathname();
  const isAuthPage = (path) => pathname === path;

  
  const backButtonPages = [
    '/recuperar-senha',
    '/conta-criada',
    '/sessao-encerrada'
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

 
  return (
    <nav className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
      
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
    
    <main className="flex min-h-screen">
           
      <div 
        className="relative flex flex-1 flex-col justify-between p-8 overflow-hidden" 
        style={{ flexBasis: '45%',
        backgroundImage: 'url("/fundo.png")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'}}
      >
        
        <div className="flex items-center space-x-4 z-10">
          <ThemeSwitcher />
          
          <Image
<<<<<<< HEAD
            src="/language.svg" 
            alt="Pt-BR"
            width={28}
=======
            src="/bandeira-brasil.png" 
            alt="Bandeira do Brasil"
            width={40}
>>>>>>> ad3543132835b4ff50d74ae7c7a88d66a04ba794
            height={28}
            className="rounded-full shadow-md"
          />
        </div>
            
        <AuthNavigation /> 
      
        <div className="absolute -bottom-16 -right-16 w-48 h-48 border-[1.5rem] border-purple-300/30 dark:border-white/5 rounded-full" />
        <div className="absolute -bottom-8 -right-8 w-32 h-32 border-8 border-purple-300/30 dark:border-white/5 rounded-full" />
                
        <div className="absolute -top-16 -right-16 w-48 h-48 border-[1.5rem] border-purple-300/30 dark:border-white/5 rounded-full" />
        
      </div>
      
      <div 
        className="flex flex-1 flex-col justify-center items-center p-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
        style={{ flexBasis: '55%' }}
      >
        <div className="w-full max-w-sm">
        
          <div className="mb-8 text-center">
            <Image
              src="/logo.svg" 
              alt="WebPower Logo"
              width={165} 
              height={127}
              priority
              className="mx-auto"
            />
          </div>
          
          {children}
        </div>
      </div>
    </main>
  );
}