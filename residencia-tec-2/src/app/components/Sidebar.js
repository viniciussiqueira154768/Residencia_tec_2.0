'use client';

import Link from 'next/link';
import Image from 'next/image'; 
import { usePathname } from 'next/navigation';
import { 
  MapPin,       
  FileText,     
  BarChart2,    
  History,      
  Palmtree,     
  LogOut        
} from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Ponto', href: '/ponto', icon: MapPin },
    { name: 'Justificativa', href: '/justificativa', icon: FileText },
    { name: 'Desempenho', href: '/desempenho', icon: BarChart2 },
    { name: 'Histórico', href: '/historico', icon: History },
    { name: 'Férias', href: '/ferias', icon: Palmtree },
  ];

  return (
    // Ajustei o gradiente aqui para ficar mais parecido com o seu print
    <aside className="w-64 min-h-screen flex flex-col bg-gradient-to-b from-purple-600 to-indigo-800 text-white">
      
    
      <div className="p-8 flex flex-col items-center">
        <div className="relative w-40 h-16 mb-4"> {/* Container para controlar o tamanho */}
          <Image
            src="/webpower-logo.png" 
            alt="WebPower Logo"
            fill // Preenche o container
            className="object-contain" 
            priority
          />
        </div>
        <ThemeSwitcher /> 
      </div>
      {/* -------------------------------- */}

      {/* Navegação */}
      <nav className="flex-1 py-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-6 py-4 transition-all duration-200 relative group ${
                isActive 
                  ? 'text-purple-700 bg-white rounded-l-full ml-4 font-bold shadow-lg' 
                  : 'text-purple-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-purple-700' : 'text-purple-200'}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Botão Sair */}
      <div className="p-6">
        <Link 
          href="/login" 
          className="flex items-center px-4 py-3 text-purple-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span className="font-medium">Sair</span>
        </Link>
      </div>
    </aside>
  );
}