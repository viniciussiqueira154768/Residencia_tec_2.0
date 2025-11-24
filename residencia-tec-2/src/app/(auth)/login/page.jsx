// src/app/(auth)/login/page.js
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import { Mail } from 'lucide-react';
import { AuthInput } from '../../components/AuthInput';
import { PasswordInput } from '../../components/PasswordInput';
import { AuthButton } from '../../components/AuthButton';

export default function LoginPage() {
  const router = useRouter(); 

  
  const handleLogin = (e) => {
    e.preventDefault(); 
    
    
    console.log("Fazendo login...");

    
    router.push('/ponto');
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-2 text-center text-gray-800 dark:text-white">Seja Bem-vindo!</h1>
      
      
      <form className="space-y-6 mt-8" onSubmit={handleLogin}>
        <AuthInput 
          icon={Mail}
          type="email"
          placeholder="E-mail"
          name="email"
          required 
        />
        <PasswordInput 
          placeholder="Senha"
          name="password"
          required
        />

        <div className="flex justify-between items-center text-sm">
          <Link href="/recuperar-senha" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
            Esqueceu a senha?
          </Link>
          <label className="flex items-center gap-2 cursor-pointer text-gray-600 dark:text-gray-300 select-none">
            <input type="checkbox" className="w-4 h-4 rounded accent-purple-600 border-gray-300" />
            Lembrar
          </label>
        </div>

        
        <AuthButton type="submit">Entrar</AuthButton>
      </form>
    </>
  );
}