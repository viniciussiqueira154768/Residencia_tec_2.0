// src/app/(auth)/cadastro/page.js
'use client';

import { User, Mail } from 'lucide-react';


import { AuthInput } from '../../components/AuthInput';
import { PasswordInput } from '../../components/PasswordInput';
import { AuthButton } from '../../components/AuthButton';

export default function CadastroPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2 text-center text-gray-800 dark:text-white">
        Seja Bem-vindo!
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Novo aqui? Cadastre-se!
      </p>
      
      <form className="space-y-6">
        <AuthInput 
          icon={User}
          type="text"
          placeholder="Nome completo"
          name="name"
        />
        
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

        <AuthButton>Criar</AuthButton>
      </form>
    </>
  );
}