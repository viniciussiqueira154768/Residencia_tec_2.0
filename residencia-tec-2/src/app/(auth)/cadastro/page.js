// app/(auth)/cadastro/page.js
'use client'; // Necessário porque importa um Client Component (PasswordInput)

import { User, Mail } from 'lucide-react';

// Importe os novos componentes
import { AuthInput } from '../../components/AuthInput';
import { PasswordInput } from '../../components/PasswordInput';
import { AuthButton } from '../../components/AuthButton';

export default function CadastroPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2 text-center">Seja Bem-vindo!</h1>
      <p className="text-center text-gray-400">Novo aqui? Cadastre-se!</p>
      
      <form className="space-y-6 mt-8">

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