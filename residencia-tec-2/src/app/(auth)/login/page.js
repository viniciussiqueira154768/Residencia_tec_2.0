// app/(auth)/login/page.js
'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { AuthInput } from '../../components/AuthInput';
import { PasswordInput } from '../../components/PasswordInput';
import { AuthButton } from '../../components/AuthButton';

export default function LoginPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2 text-center">Seja Bem-vindo!</h1>
      
      <form className="space-y-6 mt-8">
        <AuthInput 
          icon={Mail}
          type="email"
          placeholder="E-mail"
          name="email"
        />
        <PasswordInput 
          placeholder="Senha"
          name="password"
        />

        <div className="flex justify-between items-center text-sm">
          <Link href="/recuperar-senha" className="text-purple-600 dark:text-purple-400 hover:underline">
            Esqueceu a senha?
          </Link>
          <label className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-300">
            <input type="checkbox" className="w-4 h-4 rounded accent-purple-600" />
            Lembrar
          </label>
        </div>

        <AuthButton>Entrar</AuthButton>
      </form>
    </>
  );
}