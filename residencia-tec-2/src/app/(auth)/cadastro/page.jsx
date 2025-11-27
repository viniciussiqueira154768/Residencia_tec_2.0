'use client';

import Image from 'next/image';
import { User, Mail } from 'lucide-react';
import { AuthInput } from '../../components/AuthInput';
import { PasswordInput } from '../../components/PasswordInput';
import { AuthButton } from '../../components/AuthButton';

export default function CadastroPage() {
  return (

    <div className="flex flex-col items-center w-full">
      <Image
        src="/curvas3.svg"
        alt="efeito"
        width={407} height={427}
        className="absolute top-88 right-0 pointer-events-none"
      />

      <Image
        src="/curvas4.svg"
        alt="efeito"
        width={500}
        height={427}
        className="absolute bottom-129 left-[-98px]"
      />

      <div className="w-[420px] max-w-full text-center">

        <div className="mb-8">
        </div>

        <p className="text-xl font-poppins font-bold text-[#8C00C6] dark:text-[#ffffff] mb-8">
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
