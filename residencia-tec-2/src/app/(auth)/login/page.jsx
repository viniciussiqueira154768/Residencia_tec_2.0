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
      <div className="w-[420px] mx-auto">

        <h1 className="font-poppins font-medium text-[40px] text-center text-[#8C00C6]">
          Seja Bem-vindo!
        </h1>

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

          <div className="flex items-center justify-between w-full mt-2">

            <div className="flex items-center gap-1 text-[20px] font-medium text-[#5A5A5A]">
              Esqueceu a senha?
              <Link
                href="/recuperar-senha"
                className="font-bold text-[#8C00C6] hover:underline"
              >
                Clique aqui
              </Link>
            </div>

            <label className="flex items-center gap-2 text-[20px] font-medium text-[#5A5A5A]">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-purple-600 border-gray-300"
              />
              Lembrar
            </label>

          </div>

          <AuthButton type="submit">Entrar</AuthButton>

        </form>
      </div>
    </>
  );
}
