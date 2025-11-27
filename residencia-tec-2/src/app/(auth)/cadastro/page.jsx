'use client';

import { User, Mail } from 'lucide-react';
import { AuthInput } from '../../components/AuthInput';
import { PasswordInput } from '../../components/PasswordInput';
import { AuthButton } from '../../components/AuthButton';

export default function CadastroPage() {
  return (
    <div className="flex flex-col items-center w-full">

      <div className="w-[420px] max-w-full text-center">

        <div className="mb-8">
        </div>

        <p className="text-xl font-poppins font-bold text-[#8C00C6] dark:text-white mb-8">
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

          <div className="pt-2">
            <AuthButton>Criar conta</AuthButton>
          </div>
        </form>
      </div>
    </div>
  );
}
