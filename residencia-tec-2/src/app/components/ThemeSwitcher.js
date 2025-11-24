'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full"
    >
      {theme === 'light' ? (
        <Image
          src="/Moon.svg"
          alt="Ícone lua"
          width={40}
          height={40}
        />
      ) : (
        <Image
          src="/Sun.svg"
          alt="Ícone sol"
          width={40}
          height={40}
        />
      )}
    </button>
  );
}
