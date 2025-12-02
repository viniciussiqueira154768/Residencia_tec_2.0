'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { 
  MapPin,       
  FileText,     
  BarChart2,    
  History,      
  Palmtree,
  QrCode,     
  LogOut        
} from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Sidebar() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const backgroundImage = mounted && resolvedTheme === 'dark' 
    ? 'url("/SidebarEscuro.jpeg")' 
    : 'url("/SidebarClaro.svg")';

  const navItems = [
    { name: 'Ponto', href: '/ponto', icon: MapPin },
    { name: 'Crachá Digital', href: '/cracha', icon: QrCode },
    { name: 'Justificativa', href: '/justificativa', icon: FileText },
    { name: 'Desempenho', href: '/desempenho', icon: BarChart2 },
    { name: 'Histórico', href: '/historico', icon: History },
    { name: 'Férias', href: '/ferias', icon: Palmtree },
  ];

 
  const activeIndex = navItems.findIndex(item => item.href === pathname);
  const ITEM_HEIGHT = 64; 

  return (
    <aside 
      className="w-64 min-h-screen flex flex-col transition-all duration-500 text-purple-900 dark:text-white"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
      
      <div className="p-8 flex flex-col items-center">
        <div className="relative w-40 h-16 mb-4">
          <Image
            src="/logo.svg" 
            alt="WebPower Logo"
            fill 
            priority
          />
        </div>
        <ThemeSwitcher /> 
      </div>

      
      <nav className="flex-1 py-4 relative flex flex-col pl-4"> 
        
       
        {activeIndex !== -1 && (
            <div 
                className="absolute right-0 bg-gray-50 dark:bg-gray-900 transition-all duration-300 ease-in-out z-0"
                style={{
                    height: '56px',
                    width: 'calc(100% - 1rem)', 
                    borderTopLeftRadius: '30px',    
                    borderBottomLeftRadius: '30px', 
                    transform: `translateY(${activeIndex * ITEM_HEIGHT}px)`
                }}
            >
                    
                <div className="absolute -top-5 right-0 w-5 h-5 bg-transparent rounded-br-[20px] shadow-[5px_5px_0_0_#f9fafb] dark:shadow-[5px_5px_0_0_#111827] z-10" />
                
                
                <div className="absolute -bottom-5 right-0 w-5 h-5 bg-transparent rounded-tr-[20px] shadow-[5px_-5px_0_0_#f9fafb] dark:shadow-[5px_-5px_0_0_#111827] z-10" />
            </div>
        )}

       
        {navItems.map((item, index) => {
          const isActive = index === activeIndex;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                h-14 mb-2 flex items-center px-6 relative z-10 transition-colors duration-200
                ${isActive 
                    ? 'text-purple-800 dark:text-white font-bold ml-2' 
                    : 'text-purple-900/70 dark:text-purple-100 hover:text-white' 
                }
              `}
            >
              <Icon className={`w-5 h-5 mr-3 transition-colors ${isActive ? 'text-purple-700 dark:text-white' : 'currentColor'}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-6">
        <Link 
          href="/login" 
          className="flex items-center px-4 py-3 text-purple-900/70 dark:text-purple-200 hover:text-purple-900 dark:hover:text-white hover:bg-white/20 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span className="font-medium">Sair</span>
        </Link>
      </div>
    </aside>
  );
}