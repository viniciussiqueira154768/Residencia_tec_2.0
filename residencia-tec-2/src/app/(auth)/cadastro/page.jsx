'use client';

import { User, Mail } from 'lucide-react';


import { AuthInput } from '../../components/AuthInput';
import { PasswordInput } from '../../components/PasswordInput';
import { AuthButton } from '../../components/AuthButton';

export default function CadastroPage() {
  return (
    <>
      <h1 className="font-poppins font-normal text-4xl text-center ml-6 text-[#8C00C6]">
        Seja Bem-vindo!
      </h1>
      <p className="font-poppins text-center text-[28px] font-medium ml-6 text-[#8C00C6] mt-10">
        Novo aqui? Cadastre-se!
      </p>

      <form className="space-y-6 mt-20">
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