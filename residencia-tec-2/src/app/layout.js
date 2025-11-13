// src/app/layout.js

import { Inter } from 'next/font/google';
import './globals.css'; // Importa o Tailwind
import { Providers } from './providers'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'WebPower Auth',
  description: 'Página de autenticação do projeto WebPower',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      {/* NÃO COLOQUE NENHUM CÓDIGO, COMENTÁRIO OU ESPAÇO
        ENTRE A TAG <HTML> ACIMA E A TAG <BODY> ABAIXO.
      */}
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}