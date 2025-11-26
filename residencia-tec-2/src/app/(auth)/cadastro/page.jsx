'use client';

import { User, Mail } from 'lucide-react';
import { AuthInput } from '../../components/AuthInput';
import { PasswordInput } from '../../components/PasswordInput';
import { AuthButton } from '../../components/AuthButton';

export default function CadastroPage() {
  return (
    <>
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-purple-900 dark:text-white mb-2">
          Seja Bem-vindo!
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Novo aqui? Cadastre-se!
        </p>
      </div>
      
      <form className="space-y-5">
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

        <div className="pt-2">
            <AuthButton>Criar conta</AuthButton>
        </div>
      </form>
    </>
  );
}