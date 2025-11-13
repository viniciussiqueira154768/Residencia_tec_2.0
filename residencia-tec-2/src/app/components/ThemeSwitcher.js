// app/components/ThemeSwitcher.js
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Garante que o componente só seja renderizado no cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Função para trocar o tema
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-white dark:text-white"
    >
      {/* O ícone de Sol (modo claro) é mostrado quando o tema é 'dark'.
        O ícone de Lua (modo escuro) é mostrado quando o tema é 'light'.
      */}
      {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  );
}