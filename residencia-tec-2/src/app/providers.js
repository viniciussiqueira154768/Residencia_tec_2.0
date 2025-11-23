// app/providers.js
'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }) {
  // attribute="class" é o padrão, vai adicionar 'dark' ao <html>
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
  </ThemeProvider>;
}